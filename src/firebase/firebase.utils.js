import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuPFtUMHyUW-q18e__Qd3cRCl5Y1FekTM",
    authDomain: "crwn-db-in.firebaseapp.com",
    databaseURL: "https://crwn-db-in.firebaseio.com",
    projectId: "crwn-db-in",
    storageBucket: "",
    messagingSenderId: "66926450589",
    appId: "1:66926450589:web:83626f0e6c9f0bb366c174"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=> auth.signInWithPopup(provider);

export default firebase;