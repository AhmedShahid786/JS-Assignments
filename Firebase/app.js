// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuciiCWxqoX_hywelDtxCfZGq7yLzdktk",
  authDomain: "my-project-c5480.firebaseapp.com",
  projectId: "my-project-c5480",
  storageBucket: "my-project-c5480.appspot.com",
  messagingSenderId: "814297864078",
  appId: "1:814297864078:web:63b450f8c7a8bbfd8736df",
  measurementId: "G-T6FNJC7RFC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// console.log("App=>", app);

// Initialize Firebase Authentication
const auth = getAuth(app);
// console.log("auth=>", auth);

// Accessing Html Elements
var signup_email = document.getElementById("signup_email");
var signup_password = document.getElementById("signup_password");
var signup_btn = document.getElementById("signup_btn");
signup_btn.addEventListener("click", createUserAccount);

var signin_email = document.getElementById("signin_email");
var signin_password = document.getElementById("signin_password");
var signin_btn = document.getElementById("signin_btn");
var signin_ui_btn = document.getElementById("signin_ui_btn");
signin_ui_btn.addEventListener("click", signin_ui);
var display = document.getElementById("display");

// Listener Function
onAuthStateChanged(auth, (user) => {
  if (user) {
    // console.log("User logged in");
    const uid = user.uid;
    // ...
  } else {
    // console.log("User logged out");
  }
});

// Function to create new user account
function createUserAccount() {
  // console.log("email=>", signup_email.value);
  // console.log("password=>", signup_password.value);

  const auth = getAuth();
  createUserWithEmailAndPassword(
    auth,
    signup_email.value,
    signup_password.value
  )
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("User=>", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function signin() {
  console.log("user signed in");
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
function signin_ui() {
  signup_btn.removeEventListener("click", createUserAccount);
  display.innerHTML = `<div
        class="h-1/5 flex justify-center items-center w-full text-emerald-500 text-4xl font"
      >
        <p>Sign-In</p>
      </div>

      <div
        class="h-4/5 w-full flex justify-around border-2 border-r items-center flex-col"
      >
        
      <div class="h-2/6 w-full flex justify-center items-centerl">
        <input
          type="email"
          name="Signin_email"
          id="signin_email"
          placeholder="Enter Email"
          class="h-2/3 w-2/3 bg-transparent border-2 border-sky-700 rounded-full m-auto pl-2 text-emerald-500"
        />
      </div>

      <div class="h-2/6 w-full flex justify-center items-center">        
        <input
          type="password"
          name="Signin_password"
          id="signin_password"
          placeholder="Enter Password"
          class="h-2/3 w-2/3 bg-transparent border-2 border-sky-700 rounded-full m-auto pl-2 text-emerald-500"
        /></div>

      <div class="h-1/5 ">  
        <button
          id="signup_btn"
          onclick = "signin()"
          class="text-emerald-500 border-2 border-sky-700 rounded-full py-2 px-3 mb-4 text-xl"
        >
          SignIn
        </button>
      </div>`;
}

