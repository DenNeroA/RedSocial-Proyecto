// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbAusBIzWB8WYTWysrEJyFBEOvWm_7SsM",
  authDomain: "redsocial-31877.firebaseapp.com",
  projectId: "redsocial-31877",
  storageBucket: "redsocial-31877.appspot.com",
  messagingSenderId: "945851080733",
  appId: "1:945851080733:web:b58e5e0a7edec7252fa6f4",
  measurementId: "G-7581EQV7G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;