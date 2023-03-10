// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf0AKMQhlgfFe_xrRz6pM5UYj9YGYtM78",
  authDomain: "thought-forum-98eaf.firebaseapp.com",
  projectId: "thought-forum-98eaf",
  storageBucket: "thought-forum-98eaf.appspot.com",
  messagingSenderId: "572040641131",
  appId: "1:572040641131:web:dc5cae4cb13a81897d0f2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Other auth providers include github, twitter, apple.
//These must be enabled in your firebase console.
export const googleAuthProvider = new GoogleAuthProvider();
