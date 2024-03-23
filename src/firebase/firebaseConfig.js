import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKgxmwbPAr9-fTa-ZEBcEdarf8Aic6gFs",
  authDomain: "food-app-f5c52.firebaseapp.com",
  projectId: "food-app-f5c52",
  storageBucket: "food-app-f5c52.appspot.com",
  messagingSenderId: "359198827360",
  appId: "1:359198827360:web:da13481d5d78de0183b405"
};

//initialize firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
