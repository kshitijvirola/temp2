// const FormValidation = { passwordValid: "Please enter Password" };
const FormValidation = {
  passwordInvalid:
    "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character",
};
const pwdMatch =
  /^(?=.*[aA-zZ])(?=.*\d)(?=.*[@$*#?&^_()[\]])[aA-zZ\d@$*#?&^_()[\]]{8,}$/;
const ButtonConst = {
  cancel: "Cancel",
  save: "Save",
  snext: "Save & Next",
  edit: "Edit",
  submit: "Submit",
  delete: "Delete",
  download: "Download",
  Upload: "Upload",
  next: "Next",
  prev: "Previous",
  add: "Add",
  clr:"Clear",
};
const PageConst = {};
const RemoveConst = {
  yes: "Yes",
  danger: "danger",
  no: "No ",
  header: "Delete ",
  que: " ?",
  deleteMessage: "Are you sure you want to remove ",
  logMessage: "Are you sure you want to logout?",
  dropText: "Drop image here or click to browse file here",
};
export { FormValidation, ButtonConst, RemoveConst, PageConst, pwdMatch };
