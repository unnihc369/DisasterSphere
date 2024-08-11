import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCjpq3K2sy9GEuy8aLC61BVE_wgsJyGGwM",
    authDomain: "parking-1f115.firebaseapp.com",
    projectId: "parking-1f115",
    storageBucket: "parking-1f115.appspot.com",
    messagingSenderId: "953037141316",
    appId: "1:953037141316:web:e31094ee8aca6b7135d311",
    measurementId: "G-JKGRJ10SBX"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
