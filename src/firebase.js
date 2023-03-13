// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTUmdE8RFYOYJquZDnJBLGQZ3BBJG6hsA",
  authDomain: "realtor-clone-react-9e816.firebaseapp.com",
  projectId: "realtor-clone-react-9e816",
  storageBucket: "realtor-clone-react-9e816.appspot.com",
  messagingSenderId: "294649106934",
  appId: "1:294649106934:web:921a06ba7ce0d4a08e37d7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()