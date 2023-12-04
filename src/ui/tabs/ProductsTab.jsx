import { MdProductionQuantityLimits, MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./tabs.scss";
import { useState } from "react";
import AddProductForm from "../crudPopup/AddProductForm";
import EditProductForm from "../crudPopup/EditProductForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, fetchData } from "../../firebase/firebaseServices";
import toast from "react-hot-toast";

export default function ProductsTab() {
  const queryClient = useQueryClient()

  const [addProduct, setAddProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  const { mutate: deleteItem, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteProduct(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"]
      })
      toast.success("Item Deleted");
    },
    onError: () => {
      toast.error("Deletion Failed");
    },
  });

  return (
    <div className="tab__container">
      <h3>Product Details</h3>
      <div className="add">
        <button onClick={() => setAddProduct(true)}>
          <MdProductionQuantityLimits />
          Add Product
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                <img src={product.image} alt="" />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{}</td>
              <td>
                <div className="btns">
                  <button onClick={() => setEditProduct(true)} disabled={isDeleting}>
                    <FaEdit />
                  </button>
                  <button onClick={() => deleteItem(product.id)}>
                    <MdDeleteOutline />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {addProduct && <AddProductForm onClose={() => setAddProduct(false)} />}
      {editProduct && <EditProductForm onClose={() => setEditProduct(false)} />}
    </div>
  );
}
