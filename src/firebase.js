// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF9ptIzznkgCV_gXuEKp4BH1yYNJn7Oh0",
  authDomain: "alcohol-react.firebaseapp.com",
  projectId: "alcohol-react",
  storageBucket: "alcohol-react.appspot.com",
  messagingSenderId: "737086086724",
  appId: "1:737086086724:web:5429a59b9c3b2a2fafe611",
  measurementId: "G-XBTP17L0PJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
