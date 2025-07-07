// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-project-id.firebaseapp.com",
//   projectId: "your-project-id",
//   storageBucket: "your-project-id.appspot.com",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZUJDI_j2nRTvvpnST3NBS9dYuRz--Kiw",
  authDomain: "krupixichat.firebaseapp.com",
  projectId: "krupixichat",
  storageBucket: "krupixichat.firebasestorage.app",
  messagingSenderId: "28574938780",
  appId: "1:28574938780:web:91f41efc0a29be20f31f59",
  measurementId: "G-KKX8Q0MJJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);