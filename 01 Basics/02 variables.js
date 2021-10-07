// Get User Info
const userID = 'madhav_jha';
const userPassword = 'Mad23&45';
const userName = 'Madhav Kumar Rajeev Jha';
const userAadhar = '2788 3380 9282';
const userPhone = '9673290693';
const userEmail = 'madhav99jha@gmail.com';
var userAge = 20;

// Check User Login
var isUserLoggedIn = true;

// Set User Token
const userToken = undefined;

// Print User Info [Style - 1] [Console Log Multi-Parameter]
console.log('User ID :', userID);
console.log('User Password :', userPassword);
console.log('User Name :', userName);
console.log('User Aadhar :', userAadhar);
console.log('User Phone :', userPhone);
console.log('User Email :', userEmail);
console.log('User Age :', userAge);

// Print User Info [Style - 2] [Concatnation]
console.log('User ID : ' + userID);
console.log('User Password : ' + userPassword);
console.log('User Name : ' + userName);
console.log('User Aadhar : ' + userAadhar);
console.log('User Phone : ' + userPhone);
console.log('User Email : ' + userEmail);
console.log('User Age : ' + userAge);

// Print User Info [Style - 3] [Interpolation] [Preffered]
console.log(`
    User ID         :   ${userID}
    User Password   :   ${userPassword}
    User Name       :   ${userName}
    User Aadhar     :   ${userAadhar}
    User Phone      :   ${userPhone}
    User Email      :   ${userEmail}
    User Age        :   ${userAge}
    User Token      :   ${userToken}
    Is Logged In    :   ${isUserLoggedIn}
`);
