export const configVar = { BASE_URL:"http://192.168.1.20:801/api/" }; //"http://192.168.1.176:91/api/" };//

export const apiConstant = {
  AUTH_LOGIN: "Account/Login/",
  GET_OTP: "Account/GetOtp/",
  FORGET_PASSWORD: "Account/ForgetPassword/",
  CHANGE_PASSWORD: "Account/ChangePassword/",
  // AUTH_LOGOUT: "/api​/Chat​/Logout​/",
  // CHECK_SESSION: "/User/CheckSession/"
};

export const employeeConst = {
  SAVE_EMPLOYEE: "Employee/SaveEmployee",
  GET_EMPLOYEE_LIST: "Employee/GetEmployeeList",
  GET_EMPLOYEE_BYID: "Employee/GetEmployeeById/",
  DELET_EMPLOYEE: "Employee/DeleteEmployeeById/",
  SAVE_APPRAISER: "Employee/SaveAppraiser",
  GET_APPRAISER: "Employee/GetAppraiserListByEmpId/",
  SAVE_WEIGHTAGE: "Employee/SaveWeightage",
  GET_WEIGHTAGE: "Employee/GetWeightageByEmpId/",
  GET_EMPAPP_BYID:"Employee/GetEmpByAppId/",
  GET_KRABY_EMPID:"Employee/GetKraByEmpId/",
  SAVE_APPRAISAL:"Employee/SaveAppraisal"
};

export const masterConst = {
  SAVE_MASTER_TYPE: "Master/SaveMasterType",
  GET_MASTER_TYPE_LIST: "Master/GetMasterTypeList",
  GET_MASTER_TYPE_BY_ID: "Master/GetMasterTypeById/",
  DELETE_MASTER_TYPE_BY_ID: "Master/DeleteMasterTypeById/",
  SAVE_MASTER: "Master/SaveMaster",
  GET_MASTER_LIST: "Master/GetMasterList/",
  GET_MASTER_BY_ID: "Master/GetMasterById/",
  DELETE_MASTER_BY_ID: "Master/DeleteMasterById/",
  SAVE_KRA: "Master/SaveKRA",
  GET_KRA_LIST: "Master/GetKRAList",
  GET_KRA_BY_ID: "Master/GetKRAById/",
  DELETE_KRA_BY_ID: "Master/DeleteKRAById/",
  SAVE_KPI: "Master/SaveKPI",
  UPLOAD_DOC: "Master/UploadDoc",
};

export const organizationConst = {
  SAVE_ORGANIZATION: "Organization/SaveOrganization",
  GET_ORGANIZATION_LIST: "Organization/GetOrgList",
  GET_ORGANIZATION_BY_ID: "Organization/GetOrgById/",
  DELETE_ORGANIZATION_BY_ID: "Organization/DeleteOrgById/",
  GET_USERLISt_BYORGID: "Organization/GetUserListByOrgId/",
  SAVE_SETTINGS: "Organization/SaveSettings",
  GET_SETTINGS: "Organization/GetSettingsById/",
  GET_YEAR: "Organization/GetYearDropDownList/",
  SAVE_PERIOD: "Organization/SavePeriod",
  GET_PERIOD: "Organization/GetPeriodListByOrgId/",
  GET_PERIOD_BYID: "Organization/GetPeriodById/",
  GET_YEAR_REVIEW:'Organization/GetYearandReviewList/'
};
