import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAhrPgRPBLfGDO1r1x5mpOxn6l27PTwHfo",
    authDomain: "fir-chatapp-5f072.firebaseapp.com",
    projectId: "fir-chatapp-5f072",
    storageBucket: "fir-chatapp-5f072.appspot.com",
    messagingSenderId: "938486873612",
    appId: "1:938486873612:web:3fd65d0dffb744a232b829",
    measurementId: "G-4JTDM70L7L"
  };


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
