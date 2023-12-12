import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { auth, fireDB } from "../firebase/firebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";



//user signup
export const userSignUp = async (name, password, usereEmail) => {
  //check the values are empty
  if (name === "" || password === "" || usereEmail === "")
    return toast.error("Fields are required");

  //firebase setup for signup
  try {
    const users = await createUserWithEmailAndPassword(
      auth,
      usereEmail,
      password
    );
    const {
      user: { email, uid },
    } = users;

    const user = {
      name,
      uid,
      email,
      time: Timestamp.now(),
    };
    const useRef = collection(fireDB, "users"); //create a reference
    await addDoc(useRef, user);
    toast.success("Signup Successfull");
  } catch (err) {
    if (err.code === "auth/weak-password")
      toast.error("Password should be at least 6 characters long");
    if (err.code === "auth/invalid-email") toast.error("Invalid Email");
  }
};

export const signin = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user", JSON.stringify(result));
    toast.success("Sign In Successfully");
    window.location.href = "/home";
  } catch (err) {
    toast.error("Sign in failed");
  }
};

export const logout = () => {
  localStorage.clear("user");
  window.location.href = "/home";
};
