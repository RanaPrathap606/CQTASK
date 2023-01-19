/**
 * **************Revision History*******************
 * 1. [Task 1]: Given Investigation Record Status is updated to Complete then
 *              Complaint Investigation Summary and Result of Investigation are updated.
 * Flow : CQ_TASK_Investigation_After_Update_RT_Flow
 *        CQ_TASK_Complaint_OnInvestigationComplete_SubFlow
 * --------------------------------------------------
 * 
**/
@isTest public with sharing class CQ_TASK_Test_Complaint_UpdateFlowTest {
    // * Description: This method is used to create initial data for the test methods
    @TestSetup static void testSetup() {
        //Get Standard User Profiel to create Standard User.
        list<Profile> standardUserProfile = [Select Id from Profile where Name='Standard User' Limit 1];
        
        //Arrange : Craete Standard User.
        User standardUser = new User(FirstName='Test',LastName='Standard User',Alias='tsu',
                                    Email='test@tsu.com',Username='test@tsu.com',
                                    ProfileId=standardUserProfile[0].Id,Title = 'titletsu',
                                    TimeZoneSidKey = 'America/Los_Angeles',EmailEncodingKey = 'UTF-8',
                                    LanguageLocaleKey = 'en_US',LocaleSidKey = 'en_US');
        insert standardUser;

        //Arrange : List of Permission Set Names.
        list<String> permissionSetNamesLst = new list<String>{'CQ_Standard_User','CQ_Common_Permissions','CQUI_Permissions'};
        
        //Arrange : get PermissionSets to insert.
        List<PermissionSet> permissionSetList = [SELECT Id FROM PermissionSet WHERE Name IN :permissionSetNamesLst];
        
        //Arrange : List for PermissionSetAssigments to insert.
        list<PermissionSetAssignment> perAssList = new list<PermissionSetAssignment>();

        //Arrange : Create PermissionSetAssigments to insert.
        for (PermissionSet permissionRec : permissionSetList){
            PermissionSetAssignment psa = new PermissionSetAssignment (PermissionSetId = permissionRec.Id, AssigneeId = standardUser.Id);
            perAssList.add(psa);
        }

        //Arrange : Insert PermissionSet Assignments.
        insert perAssList;

        //Arrange : get the PSG by name.
        PermissionSetGroup psg = [select Id, Status from PermissionSetGroup where DeveloperName='CQ_Base_User_PSG'];
        
        //Arrange : force calculation of the PSG if it is not already Updated
        if (psg.Status != 'Updated') {
            Test.calculatePermissionSetGroup(psg.Id);
        }
        
        //Arrange : assign PSG to standard user (this fails if PSG is Outdated)
        insert new PermissionSetAssignment(PermissionSetGroupId = psg.Id, AssigneeId = standardUser.Id);

        System.runAs(standardUser) {        
            //Arrange : Create Account Record for Complaint. 
            Account accountRecord = new Account(Name='Test Account');
            insert accountRecord;

            //Arrange : Create Contact Record for Complaint.
            Contact contactRecord = new Contact(LastName='Test',FirstName='Contact',AccountId=accountRecord.Id);
            insert contactRecord;

            //Arrange : Create Investigation Record with Complaint Investigation RecordType for Complaint.
            compliancequest__SQX_Investigation__c inestigationRecord = new compliancequest__SQX_Investigation__c();
            inestigationRecord.recordTypeID = Schema.SObjectType.compliancequest__SQX_Investigation__c.getRecordTypeInfosByDeveloperName().get('Complaint_Investigation').getRecordTypeId();
            inestigationRecord.compliancequest__Investigation_Summary__c = 'Test Summary';
            inestigationRecord.compliancequest__Conclusion__c = 'Confirmed';
            insert inestigationRecord;

            //Arrange : Create Compaint Record.
            compliancequest__SQX_Complaint__c complaintRecord = new compliancequest__SQX_Complaint__c();
            complaintRecord.compliancequest__Complaint_Title__c = 'Test Complaint';
            complaintRecord.compliancequest__SQX_Account__c = accountRecord.Id;
            complaintRecord.compliancequest__SQX_External_Contact__c = contactRecord.Id;
            complaintRecord.compliancequest__Country_of_Origin__c = 'IN';        
            insert complaintRecord;        

            //Arrange : Create Linked Investigation record to Link Complaint and Investigation Records.
            compliancequest__SQX_Linked_Investigation__c linkedInvestigationRecord = new compliancequest__SQX_Linked_Investigation__c();
            linkedInvestigationRecord.compliancequest__SQX_Complaint__c = complaintRecord.Id;
            linkedInvestigationRecord.compliancequest__SQX_Investigation__c = inestigationRecord.Id;
            insert linkedInvestigationRecord;
        }
    }

    /**
     * GIVEN: A Investigation Record
     * WHEN : Status = Completed
     * THEN : Update Investigation Summary and Result of Investigtion fields on Complaint 
     *          from Investigation Summary and Conclusion fields.
     * 
     * Flow : CQ_TASK_Investigation_After_Update_RT_Flow
     *        CQ_TASK_Complaint_OnInvestigationComplete_SubFlow
     * @Story: [Task 1]
     */
    @isTest public static void givenInvestigationRecord_whenStatusComplete_thenUpdateComplaint() {
        //Arrange : Get the User Record.
        list<User> stdUser = [Select Id from User where Username='test@tsu.com' LIMIT 1];

        System.runAs(stdUser[0]) {
            //Arrange : Get the Investigation Record.
            List<compliancequest__SQX_Investigation__c> investigationList = [SELECT Id, compliancequest__Investigation_Summary__c,
                                                                        compliancequest__Conclusion__c, compliancequest__Status__c
                                                                        FROM compliancequest__SQX_Investigation__c LIMIT 1];
            Test.startTest();
            //Act: Update Investigation Record Status to Completed.
            investigationList[0].compliancequest__Status__c = 'Completed';
            update investigationList;

            //Then: get the Linked Complaint and check if Investigation Summary and Result of Investigation updated.
            List<compliancequest__SQX_Complaint__c> updatedComplaints = [SELECT Id, CQ_TASK_Investigation_Summary__c,
                                                                        CQ_TASK_Results_of_Investigation__c 
                                                                        FROM compliancequest__SQX_Complaint__c];
            //Assert: Complaint Investigation Summary is updated from Investigation Summary of Investigation record.
            System.assertEquals(investigationList[0].compliancequest__Investigation_Summary__c, updatedComplaints[0].CQ_TASK_Investigation_Summary__c, 'Complaint Investigation Summary is not updated.');
            //Assert: Complaint Result of Investigation is updated from Conclusion of Investigation record.
            System.assertEquals(investigationList[0].compliancequest__Conclusion__c, updatedComplaints[0].CQ_TASK_Results_of_Investigation__c, 'Complaint Result of Investigation is not updated.');
            
            Test.stopTest();
        }
    }
}