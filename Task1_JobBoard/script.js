function loginUser(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email=="admin@gmail.com" && password=="12345"){

        alert("Login Successful!");
        alert("Application Submitted Successfully!");

        window.location.href="candidate.html";

    }else{

        alert("Invalid Email or Password");

    }

}

// POST JOB
function postJob(event){

event.preventDefault();

let title=document.getElementById("jobTitle").value;
let company=document.getElementById("company").value;
let location=document.getElementById("jobLocation").value;

alert(
"Job Posted Successfully!\n\n"+
title+"\n"+
company+"\n"+
location
);

}


// APPLY JOB
function goToLogin() {
    window.location.href = "login.html";
}

// UPLOAD RESUME
function uploadResume(){

let file=document.getElementById("resume").files[0];

if(file){

alert(file.name+" Uploaded Successfully");

}

}