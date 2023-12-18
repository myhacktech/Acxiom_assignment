import { Button } from "@mui/material";
import React from "react";

const Vitem = () => {
  return (
    <div>
      <div>
        <h2>Welcome Vendor</h2>
        <Button>Product Status</Button>
        <Button>Request Item</Button>
        <Button>View Product</Button>
        <Button>Log Out</Button>
      </div>
      <div>
        <form id="addItemForm">
          <label for="productName">Product Name:</label>
          <input type="text" id="productName" name="productName" required />

          <label for="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            min="0"
            step="0.01"
            required
          />

          <label for="image">Image URL:</label>
          <input type="url" id="image" name="image" required />

          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="sample_image1.jpg" alt="Product 1" />
              </td>
              <td>Product 1</td>
              <td>$19.99</td>
              <td class="actions">
                <button>Update</button> <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src="sample_image2.jpg" alt="Product 2" />
              </td>
              <td>Product 2</td>
              <td>$29.99</td>
              <td class="actions">
                <button>Update</button> <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vitem;
