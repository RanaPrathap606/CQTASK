// basic import
import { track, api} from 'lwc';
import cqRecordForm from 'c/cqRecordForm';
// basic import
import { track, api} from 'lwc';
import cqRecordForm from 'c/cqRecordForm';





// field and schema import

// Object_<Object api name without __c if present>
import OBJECT_COMPLIANCEQUEST__SQX_COMPLAINT__C from '@salesforce/schema/compliancequest__SQX_Complaint__c';

import FIELD_COMPLIANCEQUEST__SQX_COMPLAINT__C__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.Name';


// Field_<field api name without __c if present>

import FIELD_COMPLIANCEQUEST__COMPLAINT_TITLE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Complaint_Title__c';

import FIELD_COMPLIANCEQUEST__DESCRIPTION_AS_REPORTED__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Description_As_Reported__c';

import FIELD_COMPLIANCEQUEST__DESCRIPTION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Description__c';

import FIELD_COMPLIANCEQUEST__SQX_COMPLAINT_CODE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Complaint_Code__c';

import FIELD_COMPLIANCEQUEST__REPORTED_DATE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Reported_Date__c';

import FIELD_COMPLIANCEQUEST__OUTCOME__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Outcome__c';

import FIELD_COMPLIANCEQUEST__OCCURRENCE_DATE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Occurrence_Date__c';

import FIELD_COMPLIANCEQUEST__REQUESTED_ACTION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Requested_Action__c';

import FIELD_COMPLIANCEQUEST__AWARE_DATE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Aware_Date__c';

import FIELD_COMPLIANCEQUEST__RESPONSE_REQUIRED__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Response_Required__c';

import FIELD_COMPLIANCEQUEST__WHEN_OCCURED__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__When_Occured__c';

import FIELD_COMPLIANCEQUEST__PATIENT_INVOLVED__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Patient_Involved__c';

import FIELD_COMPLIANCEQUEST__PATIENT_GENDER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Patient_Gender__c';

import FIELD_COMPLIANCEQUEST__PATIENT_OUTCOMES__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Patient_Outcomes__c';

import FIELD_COMPLIANCEQUEST__PATIENT_AGE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Patient_Age__c';

import FIELD_COMPLIANCEQUEST__PATIENT_WEIGHT__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Patient_Weight__c';

import FIELD_COMPLIANCEQUEST__UNIT_OF_WEIGHT__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Unit_Of_Weight__c';

import FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Account__c';

import FIELD_COMPLIANCEQUEST__REPORT_SOURCE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Report_Source__c';

import FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_External_Contact__c';

import FIELD_COMPLIANCEQUEST__SQX_SOURCE_CASE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Source_Case__c';

import FIELD_CQ_TASK_CONTACT_PHONE_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Contact_Phone_Number__c';

import FIELD_CQ_TASK_CONTACT_E_MAIL__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Contact_E_Mail__c';

import FIELD_COMPLIANCEQUEST__COUNTRY_OF_ORIGIN__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Country_of_Origin__c';

import FIELD_CQ_TASK_SHIPPING_ADDRESS__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Shipping_Address__c';

import FIELD_COMPLIANCEQUEST__METHOD_OF_CONTACT__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Method_of_Contact__c';

import FIELD_COMPLIANCEQUEST__SEND_INVESTIGATION_RESULT_TO_CUSTOMER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Send_Investigation_Result_to_Customer__c';

import FIELD_COMPLIANCEQUEST__ORG_DIVISION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Org_Division__c';

import FIELD_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Org_Business_Unit__c';

import FIELD_COMPLIANCEQUEST__ORG_REGION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Org_Region__c';

import FIELD_COMPLIANCEQUEST__ORG_SITE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Org_Site__c';

import FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Department__c';

import FIELD_COMPLIANCEQUEST__SQX_LOT_INFO__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Lot_Info__c';

import FIELD_COMPLIANCEQUEST__SQX_PART_FAMILY__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Part_Family__c';

import FIELD_COMPLIANCEQUEST__BRAND_NAME__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Brand_Name__c';

import FIELD_COMPLIANCEQUEST__SQX_PART__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Part__c';

import FIELD_COMPLIANCEQUEST__MODEL_NAME__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Model_Name__c';

import FIELD_COMPLIANCEQUEST__COMPLAINT_QUANTITY__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Complaint_Quantity__c';

import FIELD_COMPLIANCEQUEST__CATALOG_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Catalog_Number__c';

import FIELD_COMPLIANCEQUEST__LOT_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Lot_Number__c';

import FIELD_COMPLIANCEQUEST__SOFTWARE_VERSION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Software_Version__c';

import FIELD_COMPLIANCEQUEST__UNIQUE_IDENTIFIER_UDI__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Unique_Identifier_UDI__c';

import FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_DIVISION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Org_Manufacturing_Division__c';

import FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_BUSINESS_UNIT__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Org_Manufacturing_Business_Unit__c';

import FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_REGION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Org_Manufacturing_Region__c';

import FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_SITE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Org_Manufacturing_Site__c';

import FIELD_COMPLIANCEQUEST__MANUFACTURING_DATE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Manufacturing_Date__c';

import FIELD_COMPLIANCEQUEST__EXPIRATION_DATE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Expiration_Date__c';

import FIELD_COMPLIANCEQUEST__EXPECTED_RETURN_QUANTITY__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Expected_Return_Quantity__c';

import FIELD_COMPLIANCEQUEST__PRODUCT_RECEIVED__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Product_Received__c';

import FIELD_COMPLIANCEQUEST__RETURN_RECEIVED_DATE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Return_Received_Date__c';

import FIELD_COMPLIANCEQUEST__ACTUAL_RETURN_QUANTITY__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Actual_Return_Quantity__c';

import FIELD_COMPLIANCEQUEST__NO_PRODUCT_RETURN_RATIONALE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__No_product_return_rationale__c';

import FIELD_COMPLIANCEQUEST__RMA_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__RMA_Number__c';

import FIELD_COMPLIANCEQUEST__RETURN_TRACKING_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Return_Tracking_Number__c';

import FIELD_COMPLIANCEQUEST__HOLD_FOR_DECONTAMINATION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Hold_For_Decontamination__c';

import FIELD_COMPLIANCEQUEST__SEND_RETURN_HAZARD_KIT__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Send_Return_Hazard_Kit__c';

import FIELD_COMPLIANCEQUEST__SQX_REGULATORY_OWNER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Regulatory_Owner__c';

import FIELD_COMPLIANCEQUEST__REPORTABLE_EVENT_TYPE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Reportable_Event_Type__c';

import FIELD_COMPLIANCEQUEST__ADDITIONAL_INFO__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Additional_Info__c';

import FIELD_CQ_TASK_INVESTIGATION_SUMMARY__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Investigation_Summary__c';

import FIELD_COMPLIANCEQUEST__SQX_CONCLUSION_CODE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Conclusion_Code__c';

import FIELD_CQ_TASK_INVESTIGATIONRECORDJUSTIFICATION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_InvestigationRecordJustification__c';

import FIELD_COMPLIANCEQUEST__SQX_SECONDARY_CONCLUSION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Secondary_Conclusion__c';

import FIELD_CQ_TASK_RESULTS_OF_INVESTIGATION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Results_of_Investigation__c';

import FIELD_COMPLIANCEQUEST__SQX_CAPA__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_CAPA__c';

import FIELD_CQ_TASK_INVESTIGATION_EXTENSION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Investigation_Extension__c';

import FIELD_CQ_TASK_EXTERNAL_CAPA_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_External_CAPA_Number__c';

import FIELD_COMPLIANCEQUEST__CONFIRM_COMPLAINT__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Confirm_Complaint__c';

import FIELD_COMPLIANCEQUEST__CHANGE_CONTROL_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Change_Control_Number__c';

import FIELD_COMPLIANCEQUEST__CAPA_ESCALATION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__CAPA_Escalation__c';

import FIELD_CQ_TASK_EXTERNAL_ECO_ECR_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_External_ECO_ECR_Number__c';

import FIELD_COMPLIANCEQUEST__CHANGE_CONTROL__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Change_Control__c';

import FIELD_COMPLIANCEQUEST__CLOSURE_REVIEW_BY__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Closure_Review_By__c';

import FIELD_COMPLIANCEQUEST__REQUIRE_CLOSURE_REVIEW__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Require_Closure_Review__c';

import FIELD_CQ_TASK_SQX_SUPPLIER_ESCALATION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_SQX_Supplier_Escalation__c';

import FIELD_CQ_TASK_SCAR__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_SCAR__c';

import FIELD_CQ_TASK_ADVISORY_NOTICE_RECALL__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Advisory_Notice_Recall__c';

import FIELD_CQ_TASK_EXTERNAL_SCAR_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_External_SCAR_Number__c';

import FIELD_CQ_TASK_ADVISORY_NOTICE_RECALL_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Advisory_Notice_Recall_Number__c';

import FIELD_CQ_TASK_NCMR__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_NCMR__c';

import FIELD_CQ_TASK_LEGACY_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Legacy_Number__c';

import FIELD_CQ_TASK_EXTERNAL_NCMR_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_External_NCMR_Number__c';

import FIELD_CQ_TASK_LEGACY_DOCUMENTATION__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Legacy_Documentation__c';

import FIELD_CQ_TASK_SQX_NCMR_NUMBER__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_SQX_NCMR_Number__c';

import FIELD_CQ_TASK_MANAGER_APPROVAL__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Manager_Approval__c';

import FIELD_CQ_TASK_DECISION_MADE_BY__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Decision_Made_By__c';

import FIELD_CQ_TASK_ASSIGNED_POST_MARKET_ANALYST__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Assigned_Post_Market_Analyst__c';

import FIELD_CQ_TASK_DATE__C from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_Date__c';





// additional Field_<field api name without __c if present>



// Lookup fields Field_<field api name without __c if present>_<name field>


    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_COMPLAINT_CODE__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Complaint_Code__r.Name';
    


    


    


    


    


    


    


    


    


    


    


    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Account__r.Name';
    


    


    
import FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_External_Contact__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__SQX_SOURCE_CASE__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Source_Case__r.CaseNumber';
    


    


    


    


    


    


    


    


    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Department__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__SQX_LOT_INFO__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Lot_Info__r.Name';
    


    
import FIELD_COMPLIANCEQUEST__SQX_PART_FAMILY__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Part_Family__r.Name';
    


    


    
import FIELD_COMPLIANCEQUEST__SQX_PART__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Part__r.Name';
    


    


    


    


    


    


    


    


    


    


    


    


    


    


    


    


    


    


    


    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_REGULATORY_OWNER__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Regulatory_Owner__r.Name';
    


    


    


    


    
import FIELD_COMPLIANCEQUEST__SQX_CONCLUSION_CODE__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Conclusion_Code__r.Name';
    


    


    
import FIELD_COMPLIANCEQUEST__SQX_SECONDARY_CONCLUSION__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_Secondary_Conclusion__r.Name';
    


    


    
import FIELD_COMPLIANCEQUEST__SQX_CAPA__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__SQX_CAPA__r.Name';
    


    


    


    


    


    


    


    


    
import FIELD_COMPLIANCEQUEST__CLOSURE_REVIEW_BY__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.compliancequest__Closure_Review_By__r.Name';
    


    


    
import FIELD_CQ_TASK_SQX_SUPPLIER_ESCALATION__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_SQX_Supplier_Escalation__r.Name';
    


    


    


    


    


    


    


    


    


    
import FIELD_CQ_TASK_SQX_NCMR_NUMBER__NAME from '@salesforce/schema/compliancequest__SQX_Complaint__c.CQ_TASK_SQX_NCMR_Number__r.Name';
    


    


    


    


    



// import section custom label
    
        
import CQTASK_INFORMATION from '@salesforce/label/c.CQTASK_INFORMATION';
        
    
        
import CQTASK_ADDITIONAL_INFORMATION from '@salesforce/label/c.CQTASK_ADDITIONAL_INFORMATION';
        
    
        
import CQTASK_PATIENT_INFORMATION from '@salesforce/label/c.CQTASK_PATIENT_INFORMATION';
        
    
        
import CQTASK_CUSTOMER from '@salesforce/label/c.CQTASK_CUSTOMER';
        
    
        
import CQTASK_REPORTING_SITE from '@salesforce/label/c.CQTASK_REPORTING_SITE';
        
    
        
import CQTASK_PRODUCT from '@salesforce/label/c.CQTASK_PRODUCT';
        
    
        
import CQTASK_MANUFACTURING_INFORMATION from '@salesforce/label/c.CQTASK_MANUFACTURING_INFORMATION';
        
    
        
import CQTASK_RETURNEVALUATION from '@salesforce/label/c.CQTASK_RETURNEVALUATION';
        
    
        
import CQTASK_REGULATORY from '@salesforce/label/c.CQTASK_REGULATORY';
        
    
        
import CQTASK_CLOSURE from '@salesforce/label/c.CQTASK_CLOSURE';
        
    
        
import CQTASK_SYSTEM_INFORMATION from '@salesforce/label/c.CQTASK_SYSTEM_INFORMATION';
        
    
        
import CQTASK_CUSTOM_LINKS from '@salesforce/label/c.CQTASK_CUSTOM_LINKS';
        
    


    


// generated to match the indext with the exact value field


// import as array to help in code generation below

const fields = [
 

    FIELD_COMPLIANCEQUEST__SQX_COMPLAINT__C__NAME,

    
    FIELD_COMPLIANCEQUEST__COMPLAINT_TITLE__C,
    
    FIELD_COMPLIANCEQUEST__DESCRIPTION_AS_REPORTED__C,
    
    FIELD_COMPLIANCEQUEST__DESCRIPTION__C,
    
    FIELD_COMPLIANCEQUEST__SQX_COMPLAINT_CODE__C,
    
    FIELD_COMPLIANCEQUEST__REPORTED_DATE__C,
    
    FIELD_COMPLIANCEQUEST__OUTCOME__C,
    
    FIELD_COMPLIANCEQUEST__OCCURRENCE_DATE__C,
    
    FIELD_COMPLIANCEQUEST__REQUESTED_ACTION__C,
    
    FIELD_COMPLIANCEQUEST__AWARE_DATE__C,
    
    FIELD_COMPLIANCEQUEST__RESPONSE_REQUIRED__C,
    
    FIELD_COMPLIANCEQUEST__WHEN_OCCURED__C,
    
    FIELD_COMPLIANCEQUEST__PATIENT_INVOLVED__C,
    
    FIELD_COMPLIANCEQUEST__PATIENT_GENDER__C,
    
    FIELD_COMPLIANCEQUEST__PATIENT_OUTCOMES__C,
    
    FIELD_COMPLIANCEQUEST__PATIENT_AGE__C,
    
    FIELD_COMPLIANCEQUEST__PATIENT_WEIGHT__C,
    
    FIELD_COMPLIANCEQUEST__UNIT_OF_WEIGHT__C,
    
    FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C,
    
    FIELD_COMPLIANCEQUEST__REPORT_SOURCE__C,
    
    FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C,
    
    FIELD_COMPLIANCEQUEST__SQX_SOURCE_CASE__C,
    
    FIELD_CQ_TASK_CONTACT_PHONE_NUMBER__C,
    
    FIELD_CQ_TASK_CONTACT_E_MAIL__C,
    
    FIELD_COMPLIANCEQUEST__COUNTRY_OF_ORIGIN__C,
    
    FIELD_CQ_TASK_SHIPPING_ADDRESS__C,
    
    FIELD_COMPLIANCEQUEST__METHOD_OF_CONTACT__C,
    
    FIELD_COMPLIANCEQUEST__SEND_INVESTIGATION_RESULT_TO_CUSTOMER__C,
    
    FIELD_COMPLIANCEQUEST__ORG_DIVISION__C,
    
    FIELD_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C,
    
    FIELD_COMPLIANCEQUEST__ORG_REGION__C,
    
    FIELD_COMPLIANCEQUEST__ORG_SITE__C,
    
    FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C,
    
    FIELD_COMPLIANCEQUEST__SQX_LOT_INFO__C,
    
    FIELD_COMPLIANCEQUEST__SQX_PART_FAMILY__C,
    
    FIELD_COMPLIANCEQUEST__BRAND_NAME__C,
    
    FIELD_COMPLIANCEQUEST__SQX_PART__C,
    
    FIELD_COMPLIANCEQUEST__MODEL_NAME__C,
    
    FIELD_COMPLIANCEQUEST__COMPLAINT_QUANTITY__C,
    
    FIELD_COMPLIANCEQUEST__CATALOG_NUMBER__C,
    
    FIELD_COMPLIANCEQUEST__LOT_NUMBER__C,
    
    FIELD_COMPLIANCEQUEST__SOFTWARE_VERSION__C,
    
    FIELD_COMPLIANCEQUEST__UNIQUE_IDENTIFIER_UDI__C,
    
    FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_DIVISION__C,
    
    FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_BUSINESS_UNIT__C,
    
    FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_REGION__C,
    
    FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_SITE__C,
    
    FIELD_COMPLIANCEQUEST__MANUFACTURING_DATE__C,
    
    FIELD_COMPLIANCEQUEST__EXPIRATION_DATE__C,
    
    FIELD_COMPLIANCEQUEST__EXPECTED_RETURN_QUANTITY__C,
    
    FIELD_COMPLIANCEQUEST__PRODUCT_RECEIVED__C,
    
    FIELD_COMPLIANCEQUEST__RETURN_RECEIVED_DATE__C,
    
    FIELD_COMPLIANCEQUEST__ACTUAL_RETURN_QUANTITY__C,
    
    FIELD_COMPLIANCEQUEST__NO_PRODUCT_RETURN_RATIONALE__C,
    
    FIELD_COMPLIANCEQUEST__RMA_NUMBER__C,
    
    FIELD_COMPLIANCEQUEST__RETURN_TRACKING_NUMBER__C,
    
    FIELD_COMPLIANCEQUEST__HOLD_FOR_DECONTAMINATION__C,
    
    FIELD_COMPLIANCEQUEST__SEND_RETURN_HAZARD_KIT__C,
    
    FIELD_COMPLIANCEQUEST__SQX_REGULATORY_OWNER__C,
    
    FIELD_COMPLIANCEQUEST__REPORTABLE_EVENT_TYPE__C,
    
    FIELD_COMPLIANCEQUEST__ADDITIONAL_INFO__C,
    
    FIELD_CQ_TASK_INVESTIGATION_SUMMARY__C,
    
    FIELD_COMPLIANCEQUEST__SQX_CONCLUSION_CODE__C,
    
    FIELD_CQ_TASK_INVESTIGATIONRECORDJUSTIFICATION__C,
    
    FIELD_COMPLIANCEQUEST__SQX_SECONDARY_CONCLUSION__C,
    
    FIELD_CQ_TASK_RESULTS_OF_INVESTIGATION__C,
    
    FIELD_COMPLIANCEQUEST__SQX_CAPA__C,
    
    FIELD_CQ_TASK_INVESTIGATION_EXTENSION__C,
    
    FIELD_CQ_TASK_EXTERNAL_CAPA_NUMBER__C,
    
    FIELD_COMPLIANCEQUEST__CONFIRM_COMPLAINT__C,
    
    FIELD_COMPLIANCEQUEST__CHANGE_CONTROL_NUMBER__C,
    
    FIELD_COMPLIANCEQUEST__CAPA_ESCALATION__C,
    
    FIELD_CQ_TASK_EXTERNAL_ECO_ECR_NUMBER__C,
    
    FIELD_COMPLIANCEQUEST__CHANGE_CONTROL__C,
    
    FIELD_COMPLIANCEQUEST__CLOSURE_REVIEW_BY__C,
    
    FIELD_COMPLIANCEQUEST__REQUIRE_CLOSURE_REVIEW__C,
    
    FIELD_CQ_TASK_SQX_SUPPLIER_ESCALATION__C,
    
    FIELD_CQ_TASK_SCAR__C,
    
    FIELD_CQ_TASK_ADVISORY_NOTICE_RECALL__C,
    
    FIELD_CQ_TASK_EXTERNAL_SCAR_NUMBER__C,
    
    FIELD_CQ_TASK_ADVISORY_NOTICE_RECALL_NUMBER__C,
    
    FIELD_CQ_TASK_NCMR__C,
    
    FIELD_CQ_TASK_LEGACY_NUMBER__C,
    
    FIELD_CQ_TASK_EXTERNAL_NCMR_NUMBER__C,
    
    FIELD_CQ_TASK_LEGACY_DOCUMENTATION__C,
    
    FIELD_CQ_TASK_SQX_NCMR_NUMBER__C,
    
    FIELD_CQ_TASK_MANAGER_APPROVAL__C,
    
    FIELD_CQ_TASK_DECISION_MADE_BY__C,
    
    FIELD_CQ_TASK_ASSIGNED_POST_MARKET_ANALYST__C,
    
    FIELD_CQ_TASK_DATE__C,
    
    
    
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_COMPLAINT_CODE__NAME,
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__NAME,
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_SOURCE_CASE__NAME,
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_LOT_INFO__NAME,
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_PART_FAMILY__NAME,
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_PART__NAME,
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_REGULATORY_OWNER__NAME,
        
    
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_CONCLUSION_CODE__NAME,
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_SECONDARY_CONCLUSION__NAME,
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__SQX_CAPA__NAME,
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    FIELD_COMPLIANCEQUEST__CLOSURE_REVIEW_BY__NAME,
        
    
        
    
        
    FIELD_CQ_TASK_SQX_SUPPLIER_ESCALATION__NAME,
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    
        
    FIELD_CQ_TASK_SQX_NCMR_NUMBER__NAME,
        
    
        
    
        
    
        
    
        
    
];

const lookupDisplayFields = {
    
    
        

        

        

        
    "compliancequest__SQX_Complaint_Code__c": FIELD_COMPLIANCEQUEST__SQX_COMPLAINT_CODE__NAME,
    

        

        

        

        

        

        

        

        

        

        

        

        

        

        
    "compliancequest__SQX_Account__c": FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__NAME,
    

        

        
    "compliancequest__SQX_External_Contact__c": FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__NAME,
    

        
    "compliancequest__SQX_Source_Case__c": FIELD_COMPLIANCEQUEST__SQX_SOURCE_CASE__NAME,
    

        

        

        

        

        

        

        

        

        

        

        
    "compliancequest__SQX_Department__c": FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__NAME,
    

        
    "compliancequest__SQX_Lot_Info__c": FIELD_COMPLIANCEQUEST__SQX_LOT_INFO__NAME,
    

        
    "compliancequest__SQX_Part_Family__c": FIELD_COMPLIANCEQUEST__SQX_PART_FAMILY__NAME,
    

        

        
    "compliancequest__SQX_Part__c": FIELD_COMPLIANCEQUEST__SQX_PART__NAME,
    

        

        

        

        

        

        

        

        

        

        

        

        

        

        

        

        

        

        

        

        

        

        
    "compliancequest__SQX_Regulatory_Owner__c": FIELD_COMPLIANCEQUEST__SQX_REGULATORY_OWNER__NAME,
    

        

        

        

        
    "compliancequest__SQX_Conclusion_Code__c": FIELD_COMPLIANCEQUEST__SQX_CONCLUSION_CODE__NAME,
    

        

        
    "compliancequest__SQX_Secondary_Conclusion__c": FIELD_COMPLIANCEQUEST__SQX_SECONDARY_CONCLUSION__NAME,
    

        

        
    "compliancequest__SQX_CAPA__c": FIELD_COMPLIANCEQUEST__SQX_CAPA__NAME,
    

        

        

        

        

        

        

        

        
    "compliancequest__Closure_Review_By__c": FIELD_COMPLIANCEQUEST__CLOSURE_REVIEW_BY__NAME,
    

        

        
    "CQ_TASK_SQX_Supplier_Escalation__c": FIELD_CQ_TASK_SQX_SUPPLIER_ESCALATION__NAME,
    

        

        

        

        

        

        

        

        

        
    "CQ_TASK_SQX_NCMR_Number__c": FIELD_CQ_TASK_SQX_NCMR_NUMBER__NAME,
    

        

        

        

        

};

const LOOKUP_FILTERS = {"compliancequest__SQX_Complaint_Code__c":{"filters":[{"field":"compliancequest__Type__c","operator":"eq","value":"Complaint Code"},{"field":"compliancequest__Active__c","operator":"eq","value":"True"}],"logic":"and"},"compliancequest__SQX_Conclusion_Code__c":{"filters":[{"field":"compliancequest__Type__c","operator":"eq","value":"Complaint Conclusion"},{"field":"compliancequest__Active__c","operator":"eq","value":"True"}],"logic":"and"},"compliancequest__SQX_Finding__c":{"filters":[{"field":"RecordTypeId","usv_function":"reference","operator":"eq","isDynamic":false,"usv_param":"Name","value":"Complaint Finding"}],"logic":"and"},"compliancequest__SQX_Part__c":{"filters":[{"field":"compliancequest__Active__c","operator":"eq","value":"True"}],"logic":"and"},"compliancequest__SQX_Secondary_Conclusion__c":{"filters":[{"field":"compliancequest__Type__c","operator":"eq","value":"Complaint Conclusion"},{"field":"compliancequest__Active__c","operator":"eq","value":"True"}],"logic":"and"}};
const DYNAMIC_SOURCES = {};
const FORM_RULES = {};
const FORMULA_FIELDS = {};

export default class cquiTaskComplaintEdit  extends cqRecordForm {
    
    @track
    sectionHider = {};
    fieldsToTrack = [];
    saveImmediate = false;

    constructor() {
        super();
        this.init(OBJECT_COMPLIANCEQUEST__SQX_COMPLAINT__C,fields,lookupDisplayFields);
        
        
        this.sectionHider = {"expando_unique_id_1":true,"expando_unique_id_2":true,"expando_unique_id_3":true,"expando_unique_id_4":true,"expando_unique_id_5":true,"expando_unique_id_6":true,"expando_unique_id_7":true,"expando_unique_id_8":true,"expando_unique_id_9":true,"expando_unique_id_10":true,"expando_unique_id_11":true,"expando_unique_id_12":true}

        // Extend rules
        this.lookupFilters = LOOKUP_FILTERS;
        this.dynamicSources = DYNAMIC_SOURCES;
        this.inputFormRules = FORM_RULES;
        this.systemFormRules = FORMULA_FIELDS;
        this.picklistValueSource = {
            
        };
        this.uiType = {};
        this.parentRecordApi="";
        
    }


    @api
    get recordId() {
        return this._recordId;
    }
    set recordId(value) {
        this._recordId = value;
        this.parentId = value;
    }

    // getters for field value, display value and field metadata
    
    get v_COMPLIANCEQUEST__COMPLAINT_TITLE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__COMPLAINT_TITLE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__COMPLAINT_TITLE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__COMPLAINT_TITLE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__COMPLAINT_TITLE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__COMPLAINT_TITLE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__COMPLAINT_TITLE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__DESCRIPTION_AS_REPORTED__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__DESCRIPTION_AS_REPORTED__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__DESCRIPTION_AS_REPORTED__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__DESCRIPTION_AS_REPORTED__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__DESCRIPTION_AS_REPORTED__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__DESCRIPTION_AS_REPORTED__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__DESCRIPTION_AS_REPORTED__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__DESCRIPTION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__DESCRIPTION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__DESCRIPTION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__DESCRIPTION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__DESCRIPTION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__DESCRIPTION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__DESCRIPTION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_COMPLAINT_CODE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_COMPLAINT_CODE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_COMPLAINT_CODE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_COMPLAINT_CODE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_COMPLAINT_CODE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_COMPLAINT_CODE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_COMPLAINT_CODE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__REPORTED_DATE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__REPORTED_DATE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__REPORTED_DATE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__REPORTED_DATE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__REPORTED_DATE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__REPORTED_DATE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__REPORTED_DATE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__OUTCOME__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__OUTCOME__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__OUTCOME__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__OUTCOME__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__OUTCOME__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__OUTCOME__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__OUTCOME__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__OCCURRENCE_DATE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__OCCURRENCE_DATE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__OCCURRENCE_DATE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__OCCURRENCE_DATE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__OCCURRENCE_DATE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__OCCURRENCE_DATE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__OCCURRENCE_DATE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__REQUESTED_ACTION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__REQUESTED_ACTION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__REQUESTED_ACTION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__REQUESTED_ACTION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__REQUESTED_ACTION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__REQUESTED_ACTION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__REQUESTED_ACTION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__AWARE_DATE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__AWARE_DATE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__AWARE_DATE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__AWARE_DATE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__AWARE_DATE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__AWARE_DATE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__AWARE_DATE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__RESPONSE_REQUIRED__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__RESPONSE_REQUIRED__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__RESPONSE_REQUIRED__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__RESPONSE_REQUIRED__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__RESPONSE_REQUIRED__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__RESPONSE_REQUIRED__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__RESPONSE_REQUIRED__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__WHEN_OCCURED__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__WHEN_OCCURED__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__WHEN_OCCURED__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__WHEN_OCCURED__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__WHEN_OCCURED__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__WHEN_OCCURED__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__WHEN_OCCURED__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__PATIENT_INVOLVED__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__PATIENT_INVOLVED__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__PATIENT_INVOLVED__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__PATIENT_INVOLVED__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__PATIENT_INVOLVED__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__PATIENT_INVOLVED__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__PATIENT_INVOLVED__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__PATIENT_GENDER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__PATIENT_GENDER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__PATIENT_GENDER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__PATIENT_GENDER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__PATIENT_GENDER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__PATIENT_GENDER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__PATIENT_GENDER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__PATIENT_OUTCOMES__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__PATIENT_OUTCOMES__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__PATIENT_OUTCOMES__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__PATIENT_OUTCOMES__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__PATIENT_OUTCOMES__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__PATIENT_OUTCOMES__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__PATIENT_OUTCOMES__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__PATIENT_AGE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__PATIENT_AGE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__PATIENT_AGE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__PATIENT_AGE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__PATIENT_AGE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__PATIENT_AGE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__PATIENT_AGE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__PATIENT_WEIGHT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__PATIENT_WEIGHT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__PATIENT_WEIGHT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__PATIENT_WEIGHT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__PATIENT_WEIGHT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__PATIENT_WEIGHT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__PATIENT_WEIGHT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__UNIT_OF_WEIGHT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__UNIT_OF_WEIGHT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__UNIT_OF_WEIGHT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__UNIT_OF_WEIGHT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__UNIT_OF_WEIGHT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__UNIT_OF_WEIGHT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__UNIT_OF_WEIGHT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_ACCOUNT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_ACCOUNT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_ACCOUNT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_ACCOUNT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__REPORT_SOURCE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__REPORT_SOURCE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__REPORT_SOURCE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__REPORT_SOURCE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__REPORT_SOURCE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__REPORT_SOURCE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__REPORT_SOURCE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_EXTERNAL_CONTACT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_SOURCE_CASE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_SOURCE_CASE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_SOURCE_CASE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_SOURCE_CASE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_SOURCE_CASE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_SOURCE_CASE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_SOURCE_CASE__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_CONTACT_PHONE_NUMBER__C() {
        return this.getValueFor(FIELD_CQ_TASK_CONTACT_PHONE_NUMBER__C.fieldApiName);
    }
    get f_CQ_TASK_CONTACT_PHONE_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_CONTACT_PHONE_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_CONTACT_PHONE_NUMBER__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_CONTACT_PHONE_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_CONTACT_PHONE_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_CONTACT_E_MAIL__C() {
        return this.getValueFor(FIELD_CQ_TASK_CONTACT_E_MAIL__C.fieldApiName);
    }
    get f_CQ_TASK_CONTACT_E_MAIL__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_CONTACT_E_MAIL__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_CONTACT_E_MAIL__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_CONTACT_E_MAIL__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_CONTACT_E_MAIL__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__COUNTRY_OF_ORIGIN__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__COUNTRY_OF_ORIGIN__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__COUNTRY_OF_ORIGIN__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__COUNTRY_OF_ORIGIN__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__COUNTRY_OF_ORIGIN__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__COUNTRY_OF_ORIGIN__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__COUNTRY_OF_ORIGIN__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_SHIPPING_ADDRESS__C() {
        return this.getValueFor(FIELD_CQ_TASK_SHIPPING_ADDRESS__C.fieldApiName);
    }
    get f_CQ_TASK_SHIPPING_ADDRESS__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_SHIPPING_ADDRESS__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_SHIPPING_ADDRESS__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_SHIPPING_ADDRESS__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_SHIPPING_ADDRESS__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__METHOD_OF_CONTACT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__METHOD_OF_CONTACT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__METHOD_OF_CONTACT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__METHOD_OF_CONTACT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__METHOD_OF_CONTACT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__METHOD_OF_CONTACT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__METHOD_OF_CONTACT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SEND_INVESTIGATION_RESULT_TO_CUSTOMER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SEND_INVESTIGATION_RESULT_TO_CUSTOMER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SEND_INVESTIGATION_RESULT_TO_CUSTOMER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SEND_INVESTIGATION_RESULT_TO_CUSTOMER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SEND_INVESTIGATION_RESULT_TO_CUSTOMER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SEND_INVESTIGATION_RESULT_TO_CUSTOMER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SEND_INVESTIGATION_RESULT_TO_CUSTOMER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ORG_DIVISION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ORG_DIVISION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ORG_DIVISION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ORG_DIVISION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ORG_DIVISION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_DIVISION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_DIVISION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_BUSINESS_UNIT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ORG_REGION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ORG_REGION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ORG_REGION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ORG_REGION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ORG_REGION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_REGION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_REGION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ORG_SITE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ORG_SITE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ORG_SITE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ORG_SITE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ORG_SITE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_SITE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_SITE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_DEPARTMENT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_DEPARTMENT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_DEPARTMENT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_DEPARTMENT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_LOT_INFO__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_LOT_INFO__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_LOT_INFO__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_LOT_INFO__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_LOT_INFO__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_LOT_INFO__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_LOT_INFO__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_PART_FAMILY__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_PART_FAMILY__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_PART_FAMILY__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_PART_FAMILY__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_PART_FAMILY__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_PART_FAMILY__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_PART_FAMILY__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__BRAND_NAME__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__BRAND_NAME__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__BRAND_NAME__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__BRAND_NAME__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__BRAND_NAME__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__BRAND_NAME__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__BRAND_NAME__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_PART__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_PART__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_PART__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_PART__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_PART__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_PART__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_PART__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__MODEL_NAME__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__MODEL_NAME__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__MODEL_NAME__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__MODEL_NAME__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__MODEL_NAME__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__MODEL_NAME__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__MODEL_NAME__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__COMPLAINT_QUANTITY__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__COMPLAINT_QUANTITY__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__COMPLAINT_QUANTITY__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__COMPLAINT_QUANTITY__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__COMPLAINT_QUANTITY__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__COMPLAINT_QUANTITY__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__COMPLAINT_QUANTITY__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__CATALOG_NUMBER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__CATALOG_NUMBER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__CATALOG_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__CATALOG_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__CATALOG_NUMBER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__CATALOG_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__CATALOG_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__LOT_NUMBER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__LOT_NUMBER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__LOT_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__LOT_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__LOT_NUMBER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__LOT_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__LOT_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SOFTWARE_VERSION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SOFTWARE_VERSION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SOFTWARE_VERSION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SOFTWARE_VERSION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SOFTWARE_VERSION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SOFTWARE_VERSION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SOFTWARE_VERSION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__UNIQUE_IDENTIFIER_UDI__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__UNIQUE_IDENTIFIER_UDI__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__UNIQUE_IDENTIFIER_UDI__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__UNIQUE_IDENTIFIER_UDI__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__UNIQUE_IDENTIFIER_UDI__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__UNIQUE_IDENTIFIER_UDI__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__UNIQUE_IDENTIFIER_UDI__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ORG_MANUFACTURING_DIVISION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_DIVISION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ORG_MANUFACTURING_DIVISION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_DIVISION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ORG_MANUFACTURING_DIVISION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_DIVISION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_DIVISION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ORG_MANUFACTURING_BUSINESS_UNIT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_BUSINESS_UNIT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ORG_MANUFACTURING_BUSINESS_UNIT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_BUSINESS_UNIT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ORG_MANUFACTURING_BUSINESS_UNIT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_BUSINESS_UNIT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_BUSINESS_UNIT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ORG_MANUFACTURING_REGION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_REGION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ORG_MANUFACTURING_REGION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_REGION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ORG_MANUFACTURING_REGION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_REGION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_REGION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ORG_MANUFACTURING_SITE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_SITE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ORG_MANUFACTURING_SITE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_SITE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ORG_MANUFACTURING_SITE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_SITE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ORG_MANUFACTURING_SITE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__MANUFACTURING_DATE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__MANUFACTURING_DATE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__MANUFACTURING_DATE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__MANUFACTURING_DATE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__MANUFACTURING_DATE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__MANUFACTURING_DATE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__MANUFACTURING_DATE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__EXPIRATION_DATE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__EXPIRATION_DATE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__EXPIRATION_DATE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__EXPIRATION_DATE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__EXPIRATION_DATE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__EXPIRATION_DATE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__EXPIRATION_DATE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__EXPECTED_RETURN_QUANTITY__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__EXPECTED_RETURN_QUANTITY__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__EXPECTED_RETURN_QUANTITY__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__EXPECTED_RETURN_QUANTITY__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__EXPECTED_RETURN_QUANTITY__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__EXPECTED_RETURN_QUANTITY__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__EXPECTED_RETURN_QUANTITY__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__PRODUCT_RECEIVED__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__PRODUCT_RECEIVED__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__PRODUCT_RECEIVED__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__PRODUCT_RECEIVED__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__PRODUCT_RECEIVED__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__PRODUCT_RECEIVED__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__PRODUCT_RECEIVED__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__RETURN_RECEIVED_DATE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__RETURN_RECEIVED_DATE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__RETURN_RECEIVED_DATE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__RETURN_RECEIVED_DATE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__RETURN_RECEIVED_DATE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__RETURN_RECEIVED_DATE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__RETURN_RECEIVED_DATE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ACTUAL_RETURN_QUANTITY__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ACTUAL_RETURN_QUANTITY__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ACTUAL_RETURN_QUANTITY__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ACTUAL_RETURN_QUANTITY__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ACTUAL_RETURN_QUANTITY__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ACTUAL_RETURN_QUANTITY__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ACTUAL_RETURN_QUANTITY__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__NO_PRODUCT_RETURN_RATIONALE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__NO_PRODUCT_RETURN_RATIONALE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__NO_PRODUCT_RETURN_RATIONALE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__NO_PRODUCT_RETURN_RATIONALE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__NO_PRODUCT_RETURN_RATIONALE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__NO_PRODUCT_RETURN_RATIONALE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__NO_PRODUCT_RETURN_RATIONALE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__RMA_NUMBER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__RMA_NUMBER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__RMA_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__RMA_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__RMA_NUMBER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__RMA_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__RMA_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__RETURN_TRACKING_NUMBER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__RETURN_TRACKING_NUMBER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__RETURN_TRACKING_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__RETURN_TRACKING_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__RETURN_TRACKING_NUMBER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__RETURN_TRACKING_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__RETURN_TRACKING_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__HOLD_FOR_DECONTAMINATION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__HOLD_FOR_DECONTAMINATION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__HOLD_FOR_DECONTAMINATION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__HOLD_FOR_DECONTAMINATION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__HOLD_FOR_DECONTAMINATION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__HOLD_FOR_DECONTAMINATION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__HOLD_FOR_DECONTAMINATION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SEND_RETURN_HAZARD_KIT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SEND_RETURN_HAZARD_KIT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SEND_RETURN_HAZARD_KIT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SEND_RETURN_HAZARD_KIT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SEND_RETURN_HAZARD_KIT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SEND_RETURN_HAZARD_KIT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SEND_RETURN_HAZARD_KIT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_REGULATORY_OWNER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_REGULATORY_OWNER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_REGULATORY_OWNER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_REGULATORY_OWNER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_REGULATORY_OWNER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_REGULATORY_OWNER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_REGULATORY_OWNER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__REPORTABLE_EVENT_TYPE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__REPORTABLE_EVENT_TYPE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__REPORTABLE_EVENT_TYPE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__REPORTABLE_EVENT_TYPE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__REPORTABLE_EVENT_TYPE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__REPORTABLE_EVENT_TYPE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__REPORTABLE_EVENT_TYPE__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__ADDITIONAL_INFO__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__ADDITIONAL_INFO__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__ADDITIONAL_INFO__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__ADDITIONAL_INFO__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__ADDITIONAL_INFO__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__ADDITIONAL_INFO__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__ADDITIONAL_INFO__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_INVESTIGATION_SUMMARY__C() {
        return this.getValueFor(FIELD_CQ_TASK_INVESTIGATION_SUMMARY__C.fieldApiName);
    }
    get f_CQ_TASK_INVESTIGATION_SUMMARY__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_INVESTIGATION_SUMMARY__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_INVESTIGATION_SUMMARY__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_INVESTIGATION_SUMMARY__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_INVESTIGATION_SUMMARY__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_CONCLUSION_CODE__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_CONCLUSION_CODE__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_CONCLUSION_CODE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_CONCLUSION_CODE__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_CONCLUSION_CODE__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_CONCLUSION_CODE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_CONCLUSION_CODE__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_INVESTIGATIONRECORDJUSTIFICATION__C() {
        return this.getValueFor(FIELD_CQ_TASK_INVESTIGATIONRECORDJUSTIFICATION__C.fieldApiName);
    }
    get f_CQ_TASK_INVESTIGATIONRECORDJUSTIFICATION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_INVESTIGATIONRECORDJUSTIFICATION__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_INVESTIGATIONRECORDJUSTIFICATION__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_INVESTIGATIONRECORDJUSTIFICATION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_INVESTIGATIONRECORDJUSTIFICATION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_SECONDARY_CONCLUSION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_SECONDARY_CONCLUSION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_SECONDARY_CONCLUSION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_SECONDARY_CONCLUSION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_SECONDARY_CONCLUSION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_SECONDARY_CONCLUSION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_SECONDARY_CONCLUSION__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_RESULTS_OF_INVESTIGATION__C() {
        return this.getValueFor(FIELD_CQ_TASK_RESULTS_OF_INVESTIGATION__C.fieldApiName);
    }
    get f_CQ_TASK_RESULTS_OF_INVESTIGATION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_RESULTS_OF_INVESTIGATION__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_RESULTS_OF_INVESTIGATION__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_RESULTS_OF_INVESTIGATION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_RESULTS_OF_INVESTIGATION__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__SQX_CAPA__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__SQX_CAPA__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__SQX_CAPA__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__SQX_CAPA__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__SQX_CAPA__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_CAPA__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__SQX_CAPA__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_INVESTIGATION_EXTENSION__C() {
        return this.getValueFor(FIELD_CQ_TASK_INVESTIGATION_EXTENSION__C.fieldApiName);
    }
    get f_CQ_TASK_INVESTIGATION_EXTENSION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_INVESTIGATION_EXTENSION__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_INVESTIGATION_EXTENSION__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_INVESTIGATION_EXTENSION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_INVESTIGATION_EXTENSION__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_EXTERNAL_CAPA_NUMBER__C() {
        return this.getValueFor(FIELD_CQ_TASK_EXTERNAL_CAPA_NUMBER__C.fieldApiName);
    }
    get f_CQ_TASK_EXTERNAL_CAPA_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_EXTERNAL_CAPA_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_EXTERNAL_CAPA_NUMBER__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_EXTERNAL_CAPA_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_EXTERNAL_CAPA_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__CONFIRM_COMPLAINT__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__CONFIRM_COMPLAINT__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__CONFIRM_COMPLAINT__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__CONFIRM_COMPLAINT__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__CONFIRM_COMPLAINT__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__CONFIRM_COMPLAINT__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__CONFIRM_COMPLAINT__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__CHANGE_CONTROL_NUMBER__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__CHANGE_CONTROL_NUMBER__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__CHANGE_CONTROL_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__CHANGE_CONTROL_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__CHANGE_CONTROL_NUMBER__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__CHANGE_CONTROL_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__CHANGE_CONTROL_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__CAPA_ESCALATION__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__CAPA_ESCALATION__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__CAPA_ESCALATION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__CAPA_ESCALATION__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__CAPA_ESCALATION__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__CAPA_ESCALATION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__CAPA_ESCALATION__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_EXTERNAL_ECO_ECR_NUMBER__C() {
        return this.getValueFor(FIELD_CQ_TASK_EXTERNAL_ECO_ECR_NUMBER__C.fieldApiName);
    }
    get f_CQ_TASK_EXTERNAL_ECO_ECR_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_EXTERNAL_ECO_ECR_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_EXTERNAL_ECO_ECR_NUMBER__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_EXTERNAL_ECO_ECR_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_EXTERNAL_ECO_ECR_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__CHANGE_CONTROL__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__CHANGE_CONTROL__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__CHANGE_CONTROL__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__CHANGE_CONTROL__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__CHANGE_CONTROL__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__CHANGE_CONTROL__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__CHANGE_CONTROL__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__CLOSURE_REVIEW_BY__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__CLOSURE_REVIEW_BY__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__CLOSURE_REVIEW_BY__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__CLOSURE_REVIEW_BY__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__CLOSURE_REVIEW_BY__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__CLOSURE_REVIEW_BY__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__CLOSURE_REVIEW_BY__C.fieldApiName].fieldApiName);
    }

    
    get v_COMPLIANCEQUEST__REQUIRE_CLOSURE_REVIEW__C() {
        return this.getValueFor(FIELD_COMPLIANCEQUEST__REQUIRE_CLOSURE_REVIEW__C.fieldApiName);
    }
    get f_COMPLIANCEQUEST__REQUIRE_CLOSURE_REVIEW__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_COMPLIANCEQUEST__REQUIRE_CLOSURE_REVIEW__C.fieldApiName] : {};
        return val;
    }

    get d_COMPLIANCEQUEST__REQUIRE_CLOSURE_REVIEW__C() {
        return lookupDisplayFields[FIELD_COMPLIANCEQUEST__REQUIRE_CLOSURE_REVIEW__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_COMPLIANCEQUEST__REQUIRE_CLOSURE_REVIEW__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_SQX_SUPPLIER_ESCALATION__C() {
        return this.getValueFor(FIELD_CQ_TASK_SQX_SUPPLIER_ESCALATION__C.fieldApiName);
    }
    get f_CQ_TASK_SQX_SUPPLIER_ESCALATION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_SQX_SUPPLIER_ESCALATION__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_SQX_SUPPLIER_ESCALATION__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_SQX_SUPPLIER_ESCALATION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_SQX_SUPPLIER_ESCALATION__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_SCAR__C() {
        return this.getValueFor(FIELD_CQ_TASK_SCAR__C.fieldApiName);
    }
    get f_CQ_TASK_SCAR__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_SCAR__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_SCAR__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_SCAR__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_SCAR__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_ADVISORY_NOTICE_RECALL__C() {
        return this.getValueFor(FIELD_CQ_TASK_ADVISORY_NOTICE_RECALL__C.fieldApiName);
    }
    get f_CQ_TASK_ADVISORY_NOTICE_RECALL__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_ADVISORY_NOTICE_RECALL__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_ADVISORY_NOTICE_RECALL__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_ADVISORY_NOTICE_RECALL__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_ADVISORY_NOTICE_RECALL__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_EXTERNAL_SCAR_NUMBER__C() {
        return this.getValueFor(FIELD_CQ_TASK_EXTERNAL_SCAR_NUMBER__C.fieldApiName);
    }
    get f_CQ_TASK_EXTERNAL_SCAR_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_EXTERNAL_SCAR_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_EXTERNAL_SCAR_NUMBER__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_EXTERNAL_SCAR_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_EXTERNAL_SCAR_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_ADVISORY_NOTICE_RECALL_NUMBER__C() {
        return this.getValueFor(FIELD_CQ_TASK_ADVISORY_NOTICE_RECALL_NUMBER__C.fieldApiName);
    }
    get f_CQ_TASK_ADVISORY_NOTICE_RECALL_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_ADVISORY_NOTICE_RECALL_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_ADVISORY_NOTICE_RECALL_NUMBER__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_ADVISORY_NOTICE_RECALL_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_ADVISORY_NOTICE_RECALL_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_NCMR__C() {
        return this.getValueFor(FIELD_CQ_TASK_NCMR__C.fieldApiName);
    }
    get f_CQ_TASK_NCMR__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_NCMR__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_NCMR__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_NCMR__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_NCMR__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_LEGACY_NUMBER__C() {
        return this.getValueFor(FIELD_CQ_TASK_LEGACY_NUMBER__C.fieldApiName);
    }
    get f_CQ_TASK_LEGACY_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_LEGACY_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_LEGACY_NUMBER__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_LEGACY_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_LEGACY_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_EXTERNAL_NCMR_NUMBER__C() {
        return this.getValueFor(FIELD_CQ_TASK_EXTERNAL_NCMR_NUMBER__C.fieldApiName);
    }
    get f_CQ_TASK_EXTERNAL_NCMR_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_EXTERNAL_NCMR_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_EXTERNAL_NCMR_NUMBER__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_EXTERNAL_NCMR_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_EXTERNAL_NCMR_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_LEGACY_DOCUMENTATION__C() {
        return this.getValueFor(FIELD_CQ_TASK_LEGACY_DOCUMENTATION__C.fieldApiName);
    }
    get f_CQ_TASK_LEGACY_DOCUMENTATION__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_LEGACY_DOCUMENTATION__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_LEGACY_DOCUMENTATION__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_LEGACY_DOCUMENTATION__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_LEGACY_DOCUMENTATION__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_SQX_NCMR_NUMBER__C() {
        return this.getValueFor(FIELD_CQ_TASK_SQX_NCMR_NUMBER__C.fieldApiName);
    }
    get f_CQ_TASK_SQX_NCMR_NUMBER__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_SQX_NCMR_NUMBER__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_SQX_NCMR_NUMBER__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_SQX_NCMR_NUMBER__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_SQX_NCMR_NUMBER__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_MANAGER_APPROVAL__C() {
        return this.getValueFor(FIELD_CQ_TASK_MANAGER_APPROVAL__C.fieldApiName);
    }
    get f_CQ_TASK_MANAGER_APPROVAL__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_MANAGER_APPROVAL__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_MANAGER_APPROVAL__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_MANAGER_APPROVAL__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_MANAGER_APPROVAL__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_DECISION_MADE_BY__C() {
        return this.getValueFor(FIELD_CQ_TASK_DECISION_MADE_BY__C.fieldApiName);
    }
    get f_CQ_TASK_DECISION_MADE_BY__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_DECISION_MADE_BY__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_DECISION_MADE_BY__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_DECISION_MADE_BY__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_DECISION_MADE_BY__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_ASSIGNED_POST_MARKET_ANALYST__C() {
        return this.getValueFor(FIELD_CQ_TASK_ASSIGNED_POST_MARKET_ANALYST__C.fieldApiName);
    }
    get f_CQ_TASK_ASSIGNED_POST_MARKET_ANALYST__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_ASSIGNED_POST_MARKET_ANALYST__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_ASSIGNED_POST_MARKET_ANALYST__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_ASSIGNED_POST_MARKET_ANALYST__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_ASSIGNED_POST_MARKET_ANALYST__C.fieldApiName].fieldApiName);
    }

    
    get v_CQ_TASK_DATE__C() {
        return this.getValueFor(FIELD_CQ_TASK_DATE__C.fieldApiName);
    }
    get f_CQ_TASK_DATE__C() {
        let val=this.fieldsInfo ? this.fieldsInfo[FIELD_CQ_TASK_DATE__C.fieldApiName] : {};
        return val;
    }

    get d_CQ_TASK_DATE__C() {
        return lookupDisplayFields[FIELD_CQ_TASK_DATE__C.fieldApiName] && this.getValueFor(lookupDisplayFields[FIELD_CQ_TASK_DATE__C.fieldApiName].fieldApiName);
    }

    


    
        
    get CQTASK_INFORMATION() {
        return CQTASK_INFORMATION;
    }
        
    
        
    get CQTASK_ADDITIONAL_INFORMATION() {
        return CQTASK_ADDITIONAL_INFORMATION;
    }
        
    
        
    get CQTASK_PATIENT_INFORMATION() {
        return CQTASK_PATIENT_INFORMATION;
    }
        
    
        
    get CQTASK_CUSTOMER() {
        return CQTASK_CUSTOMER;
    }
        
    
        
    get CQTASK_REPORTING_SITE() {
        return CQTASK_REPORTING_SITE;
    }
        
    
        
    get CQTASK_PRODUCT() {
        return CQTASK_PRODUCT;
    }
        
    
        
    get CQTASK_MANUFACTURING_INFORMATION() {
        return CQTASK_MANUFACTURING_INFORMATION;
    }
        
    
        
    get CQTASK_RETURNEVALUATION() {
        return CQTASK_RETURNEVALUATION;
    }
        
    
        
    get CQTASK_REGULATORY() {
        return CQTASK_REGULATORY;
    }
        
    
        
    get CQTASK_CLOSURE() {
        return CQTASK_CLOSURE;
    }
        
    
        
    get CQTASK_SYSTEM_INFORMATION() {
        return CQTASK_SYSTEM_INFORMATION;
    }
        
    
        
    get CQTASK_CUSTOM_LINKS() {
        return CQTASK_CUSTOM_LINKS;
    }
        
    
}