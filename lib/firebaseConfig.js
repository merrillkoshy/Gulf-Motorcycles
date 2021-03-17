import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";
import "firebase/functions";

// Optionally import the services that you want to use

//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIRE_BASE_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIRE_BASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIRE_BASE_DB_URL,
  projectId: process.env.NEXT_PUBLIC_FIRE_BASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIRE_BASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIRE_BASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIRE_BASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIRE_BASE_MEASURMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}
firebase.database();
firebase.storage();

export default firebase;
