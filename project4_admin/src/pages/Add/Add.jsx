import React from "react";

import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input type="text" name="name" placeholder="Product" />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea type="description" rows="6" placeholder="Description" />
        </div>
        <div className="add-category flex-col">
          <p>Product category</p>
          <select name="category">
            <option value="Blended">Blended</option>
            <option value="Single-origin">Single origin</option>
          </select>
        </div>
        <div className="add-price flex-col">
          <p>Price</p>
          <input type="nNumber" name="price" placeholder="Price" />
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;