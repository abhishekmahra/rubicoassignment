let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let DOB = document.getElementById("dob");
let state = document.getElementById("state");
let address = document.getElementById("address");
let bloodgroup = document.getElementById("bloodgroup");




function myFunction(){
    const data={
    firstName : firstName.value,
    lastName : lastName.value,
    state : state.value,
    address : address.value,
    bloodgroup : bloodgroup.value,
    dob : DOB.value
}
    console.log(data)
}