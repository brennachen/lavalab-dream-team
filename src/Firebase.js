// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHmD_Q4SAq6mVuTUuGexpMKvLvneV_Qzc",
  authDomain: "nemo-backend.firebaseapp.com",
  projectId: "nemo-backend",
  storageBucket: "nemo-backend.appspot.com",
  messagingSenderId: "319456574443",
  appId: "1:319456574443:web:18275843f9327d6a82b7ae",
  measurementId: "G-MR55HPLZR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
    }).catch((error) => {
        console.log(error);
    });
};