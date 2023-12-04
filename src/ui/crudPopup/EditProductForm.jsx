import "./crudPopup.scss";

export default function EditProductForm({ onClose }) {
  return (
    <div className="popup">
      <form action="">
        <h4>Edit Product</h4>
        <input type="text" placeholder="Product title" />
        <input type="text" placeholder="Product price" />
        <input type="text" placeholder="Product image url" />
        <input type="text" placeholder="Product category" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Product description"
        ></textarea>
        <div className="pop__btns">
          <button onClick={onClose}>Close</button>
          <button className="add__btn">Edit Product</button>
        </div>
      </form>
    </div>
  );
}
