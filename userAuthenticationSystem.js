//check of user exists in DB
//check if passwd entered matches the stored one
//user credentials managed using local scope
//checking user role (if admin or normal user) done by block scope

function loginUser(userName, password){
    //check if the two exist in the following arrays
    //User Roles
    let admin= "admin";
    let viewer= "user";
    let editor= "editor";

    //User Passwords
    let adminPassWord= "1234";
    let editorPassWord= "5467";
    let viewerPassWord= "password";

    if(userName=== admin && password=== adminPassWord){
        return "Admin access granted";
    }else if(userName=== editor && password=== editorPassWord){
        return "Editor access granted";
    }else if(userName=== viewer && password=== viewerPassWord){
        return "User access granted";
    }
    //else
    return "Access Denied...Wrong Credentials!!";
}

console.log(loginUser("admin", "1234")); // Expected Result: "Admin access granted"
console.log(loginUser("user", "password")); // Expected Result: "User access granted"