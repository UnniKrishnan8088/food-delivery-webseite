import { useState } from "react";
import "./crudPopup.scss";
import { Timestamp } from "firebase/firestore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addNewProduct } from "../../firebase/firebaseServices";

export default function AddProductForm({ onClose }) {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const newProduct = {
    category,
    date: Timestamp.now(),
    description,
    image,
    price,
    title,
  };

  // add data to the db
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !category || !description || !image || !price)
      toast.error("Fields are required");

    addProduct(newProduct);
    //clear the inputs
    setTitle("");
    setPrice("");
    setImage("");
    setCategory("");
    setDescription("");
  }

  const { mutate: addProduct, isLoading } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(
        {
          queryKey: ["products"],
        },
        toast.success("Item added"),
        onClose()
      );
    },
  });

  return (
    <div className="popup" onSubmit={handleSubmit}>
      <form action="">
        <h4>Add Product</h4>
        <input
          type="text"
          placeholder="Product title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product image url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Product description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="pop__btns">
          <button onClick={onClose}>Close</button>
          <button type="submit" className="add__btn" disabled={isLoading}>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
