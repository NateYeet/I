import Karma from "https://KarmaCode.cf/karmajs/1.3/karma.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyBgXA1LcBsy-MbW_T9sYHCqIaeRbC_U7ro",
  authDomain: "karmacode-452d6.firebaseapp.com",
  projectId: "karmacode-452d6",
  storageBucket: "karmacode-452d6.appspot.com",
  messagingSenderId: "647655139991",
  appId: "1:647655139991:web:a212724f5f2f52118f57d2",
  measurementId: "G-YW2FVYPD8G"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function getFiles()