import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAhrPgRPBLfGDO1r1x5mpOxn6l27PTwHfo",
    authDomain: "fir-chatapp-5f072.firebaseapp.com",
    projectId: "fir-chatapp-5f072",
    storageBucket: "fir-chatapp-5f072.appspot.com",
    messagingSenderId: "938486873612",
    appId: "1:938486873612:web:3fd65d0dffb744a232b829",
    measurementId: "G-4JTDM70L7L"
  };


firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);