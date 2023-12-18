import React, { useState } from 'react';

const VPUpdate = () => {
  // Sample product data
  const initialProducts = [
    { id: 1, name: 'Product 1', price: 19.99, quantity: 5, image: 'sample_image1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 3, image: 'sample_image2.jpg' },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleUpdate = (id, field, value) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, [field]: value } : product
      )
    );
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setSelectedProduct(productToEdit);
  };

  const handleSave = () => {
    // Add logic to save the updated product details (e.g., send to server)
    console.log('Updated product details:', selectedProduct);
    setSelectedProduct(null);
  };

  return (
    <div>
      <h2>Update Product Details</h2>
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td className="actions">
                {selectedProduct === product ? (
                  <>
                    <button onClick={handleSave}>Save</button>{' '}
                    <button onClick={() => setSelectedProduct(null)}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(product.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProduct && (
        <div>
          <h3>Edit Product</h3>
          <form>
            <label>
              Price:
              <input
                type="number"
                step="0.01"
                value={selectedProduct.price}
                onChange={(e) => handleUpdate(selectedProduct.id, 'price', parseFloat(e.target.value))}
              />
            </label>
            <br />
            <label>
              Quantity:
              <input
                type="number"
                value={selectedProduct.quantity}
                onChange={(e) => handleUpdate(selectedProduct.id, 'quantity', parseInt(e.target.value, 10))}
              />
            </label>
            {/* Add more fields for other product details if needed */}
          </form>
        </div>
      )}
    </div>
  );
};

export default VPUpdate;
