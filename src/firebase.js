
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGgdSHaSuCTafvcbr_EHejrKjjIgXhNMI",
    authDomain: "softtechhub-3d5eb.firebaseapp.com",
    projectId: "softtechhub-3d5eb",
    storageBucket: "softtechhub-3d5eb.appspot.com",
    messagingSenderId: "209442998990",
    appId: "1:209442998990:web:db0d8d7ed129d8aea85e9f",
    measurementId: "G-870J9LV396"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);