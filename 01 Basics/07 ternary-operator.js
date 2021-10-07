// find out user is Authenticated or Not
var authenticated = true;

// Show [Sing Out] or [Sign Up] -> [If-Else]
if (authenticated) {
    console.log("Sing Out");
}
else {
    console.log("Sign Up");
}

// Show [Sign Out] or [Sign Up] -> [Ternery Operator]
authenticated ? console.log("Sign Out") : console.log("Sign In");