// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCi6bT-GeOdGFYcXesvTH9p2etXY9esGLk",
	authDomain: "doorway-effect-1.firebaseapp.com",
	projectId: "doorway-effect-1",
	storageBucket: "doorway-effect-1.appspot.com",
	messagingSenderId: "817998086455",
	appId: "1:817998086455:web:1074ad3e097e61120d1ab2",
	measurementId: "G-X5LZ925KER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
