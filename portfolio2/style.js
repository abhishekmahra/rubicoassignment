let fullName  = document.getElementById("fullname");

let emailId = document.getElementById("email");
let mobileNumber = document.getElementById("number");
let Subject = document.getElementById("Subject");
let Message = document.getElementById("textarea");

let submitForm = document.getElementById("button");

button.addEventListener("click", function () {
    let data = {
        "fullName": fullName.value,
        "emailId": emailId.value,
        "subject": Subject.value,
        "Message": Message.value,
        
        
    }
    console.log(data);
})  
