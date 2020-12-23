
function signUpInformation() {

    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;

   let user= {
        name : userName,
        email: userEmail,
        password: userPassword,
    }

    // localStorage.setItem("name", JSON.stringify(users));
    

const Http = new XMLHttpRequest();
const url='http://localhost:3000/index';
Http.open("POST", url);

Http.setRequestHeader("Content-Type", "application/json");
Http.send(JSON.stringify(user));

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)

    alert(Http.responseText);
    return false;
}
}
// let names = JSON.parse(localStorage.getItem("name"))
// let emails = JSON.parse(localStorage.getItem("email"))
// let passwords = JSON.parse(localStorage.getItem("password"))

// function login() {
//     const userEmail= document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;
//     let isFound = false

//     for (i = 0; i < emails.length; i++) {

//         if ( userEmail === emails[i]) {

//             isFound = i;
//             break;
//         }
//     }

//     if (isFound === false) {
//         alert("user not found")
//     } else if (passwords[isFound] === password) {
//         alert("login success");
//         window.location.href="./dashboard.html"
//     } else{
//         alert("Error Password or Username")


//     }

//     return false;
