import React, { useState } from "react";

import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  const [image, setImage] = useState(false);

  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input type="text" name="name" placeholder="Product" />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea type="description" rows="6" placeholder="Description" />
        </div>
        <div className="add-product-price">
          <div className="add-category-price flex-col">
            <p>Product category</p>
            <select name="category">
              <option value="Blended">Blended</option>
              <option value="Single-origin">Single origin</option>
            </select>
          </div>
          <div className="add-category-price  flex-col">
            <p>Price</p>
            <input type="Number" name="price" placeholder="Price" />
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
