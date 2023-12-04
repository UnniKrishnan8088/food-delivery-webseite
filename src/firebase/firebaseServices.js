import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { fireDB } from "./firebaseConfig";
import toast from "react-hot-toast";

//read from db
export async function fetchData() {
  const querySnapshot = await getDocs(collection(fireDB, "products"));
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return products;
}

//add data to the db
export async function addNewProduct(newProduct) {
  try {
    await addDoc(collection(fireDB, "products"), newProduct);
  } catch (err) {
    toast.error(err.message);
  }
}

//delete data from the db
export async function deleteProduct(id) {
  await deleteDoc(doc(fireDB, "products", id));
}

//get single data
export const getDetails = async (id) => {
  const info = await getDoc(doc(fireDB, "products", id));
  return info;
};


