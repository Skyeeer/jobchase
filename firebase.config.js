import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyASAq2ZSjJAciNorjjOaTmY15F7jNm4aoM",
    authDomain: "jobchase1-88211.firebaseapp.com",
    projectId: "jobchase1-88211",
    storageBucket: "jobchase1-88211.appspot.com",
    messagingSenderId: "31708502402",
    appId: "1:31708502402:web:23bc2a77d6a1d8688b979b",
    measurementId: "G-C04938W9W9"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };