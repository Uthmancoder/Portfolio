window.addEventListener("scroll", function () {
    if (window.scrollY >= (0.1 * window.innerHeight)) {
        document.getElementById("nav").style.backgroundColor = "rgb(45, 45, 45)";
    } else if (window.scrollY <= 100) {
        document.getElementById("nav").style.backgroundColor = "transparent";
        document.getElementById("black").style.color = "white";
        document.getElementById("products-link").style.color = "white";
        document.getElementById("prices-link").style.color = "white";
        document.getElementById("supports-link").style.color = "white";
        document.getElementById("resources-link").style.color = "white";
    }
});
const passwordInput = document.getElementById("logpassword");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");

function PasswordVisibility(ev) {
    ev.preventDefault()
    passwordInput.type = "text";
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
}
function textVisibility(ev) {
    ev.preventDefault()
    passwordInput.type = "password";
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
}
const signpass = document.getElementById("password");
const openBtn2 = document.querySelector(".open");
const closeBtn2 = document.querySelector(".close");

function PasswordVisibility(ev) {
    ev.preventDefault()
    passwordInput.type = "text";
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
}
function textVisibility(ev) {
    ev.preventDefault()
    passwordInput.type = "password";
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
}
  
function signup() {
    document.getElementById("modal").style.display = "block"
}
function cancelmodal() {
    document.getElementById("modal").style.display = "none"
}
function loguser() {
    document.getElementById("modal2").style.display = "block"
}
function cancelmodal2() {
    document.getElementById("modal2").style.display = "none"
}

window.addEventListener("scroll", function () {
    if (window.scrollY > (12.0 * window.innerHeight)) {
        document.getElementById("nav2").style.display = "block";
    } else if (window.scrollY < 600) {
        document.getElementById("nav2").style.display = "none";
    } else if (window.scrollY > 500) {
        document.getElementById("nav2").style.display = "block";
    }
});

const firebaseConfig = {
    apiKey: "AIzaSyAxGLPD1egTzA5lxtXyQ1NAj_dJlCYHNDk",
    authDomain: "my-first-project-672b2.firebaseapp.com",
    projectId: "my-first-project-672b2",
    storageBucket: "my-first-project-672b2.appspot.com",
    messagingSenderId: "839261620607",
    appId: "1:839261620607:web:8b8757d2ee67d81f06324a",
    measurementId: "G-XVNTZ32JSN"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();

let email = document.getElementById("email");
let password = document.getElementById("password")



function signuser(ev) {
    ev.preventDefault()
    if (email.value == "" || password.value == "") {
        alert("input your details as listed below")
        return
    }else if(!email.value.includes ("@gmail.com")){
           alert("input a valid email address")
           return;
    }
    else{
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("uer signed up succesasful")
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("an error occured")
            console.log(error);
            // ..
        });
        document.getElementById("modal").style.display = "none"
        setTimeout(() => {
            document.getElementById("modal2").style.display = "block" 
        }, 2000); 
    }
}
let usernamearray = []
let username = document.getElementById("username")
function login(ev) {
    ev.preventDefault();
    firebase.auth().signInWithEmailAndPassword(logemail.value, logpassword.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            usernamearray.push(username.value)
            console.log(usernamearray);
            localStorage.setItem("username", JSON.stringify(user))
            alert("User logged in successfully.");
            window.location.href = "posting.html"
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("User not found");
            console.log(error);
            // ..
        });
}
