// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx5-8VRGTn6VH6Uwuw6zkLOQZR8Y0X8u8",
  authDomain: "social-media-4d058.firebaseapp.com",
  projectId: "social-media-4d058",
  storageBucket: "social-media-4d058.appspot.com",
  messagingSenderId: "741262905172",
  appId: "1:741262905172:web:7ea84521589b03914d82c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
