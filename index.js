function formValidation() {
    let x = document.forms["formValidate"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
