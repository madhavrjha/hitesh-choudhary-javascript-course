// Get User login Details
var logInViaGoogle = false;
var logInViaFacebook = false;
var logInViaEmail = true;


// Access or Deny the User in a particular Area
if (logInViaEmail || logInViaFacebook || logInViaGoogle) {
    console.log("User has Allowed to This Area");
}
else {
    console.log("User has not Allowed in This Area");
}
