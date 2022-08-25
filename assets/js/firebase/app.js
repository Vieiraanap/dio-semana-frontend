// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS5Dq7HpT38Vi7tndaZJOwzo5AvW_BQrA",
  authDomain: "dio-semana-frontend.firebaseapp.com",
  projectId: "dio-semana-frontend",
  storageBucket: "dio-semana-frontend.appspot.com",
  messagingSenderId: "806755493252",
  appId: "1:806755493252:web:cefeda84579a956be9a9d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;