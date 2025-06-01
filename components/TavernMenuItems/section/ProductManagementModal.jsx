import React, { useState, useEffect } from 'react';

function ProductManagementModal({ isOpen, onClose, product, onProductAdded }) { // Added onProductAdded prop
  const [name, setName] = useState(product?.name || '');
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState(product?.price || '');
  const [description, setDescription] = useState(product?.description || '');

  useEffect(() => {
    if (product) {
      setName(product.name || '');
      setPrice(product.price || '');
      setDescription(product.description || '');
      setFile(null);
    } else {
      setName('');
      setPrice('');
      setDescription('');
      setFile(null);
    }
  }, [product]);

  if (!isOpen) return null;

  async function handleSaveProduct() {
    console.warn("Attempting to save product:", { name, file: file?.name, price, description });

    if (!name || !price || !description) {
      alert("Please fill in all fields (Name, Price, Description).");
      return;
    }

    if (isNaN(parseFloat(price))) {
        alert("Price must be a valid number.");
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', parseFloat(price));
    formData.append('description', description);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await fetch("http://localhost:8000/api/addproduct", {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert("Data has been saved successfully!");
        const newProductData = { // Create new product object for display
          name: name,
          id: `$${parseFloat(price).toFixed(2)}`, // Assuming ID is price for display
          highlighted: false, // Default to not highlighted
          image: file ? URL.createObjectURL(file) : '/images/default.png', // Create temp URL or use default
          route: null // Default route
        };
        onProductAdded(newProductData); // Call the callback with the new product data
        setName('');
        setFile(null);
        setPrice('');
        setDescription('');
        onClose();
      } else {
        let errorMessage = `Failed to save data. Status: ${response.status}.`;
        try {
          const errorData = await response.json();
          errorMessage += ` Message: ${errorData.message || JSON.stringify(errorData)}`;
        } catch (jsonError) {
          errorMessage += ` ${response.statusText || 'No specific error message from server.'}`;
        }
        alert(errorMessage);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while saving data. Please check console for network errors or CORS issues.");
    }
  }

  const handleCancel = () => {
    setName(product?.name || '');
    setPrice(product?.price || '');
    setDescription(product?.description || '');
    setFile(null);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-body">
          <div className="product-info-section">
            <input
              type="text"
              placeholder="Name"
              className="modal-input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="file"
              className="modal-input-field modal-file-input"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Price"
              className="modal-input-field"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <textarea
              placeholder="Description"
              className="modal-input-field modal-description-field"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <div className="modal-actions">
              <button className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
              <button className="apply-btn" onClick={handleSaveProduct}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .modal-content {
          background-color: #8B5A2B;
          border-radius: 12px;
          width: 400px;
          max-width: 90vw;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          padding-top: 50px;
        }

        .modal-header {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            background-color: #A36B36;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            padding: 15px 0;
            text-align: center;
            color: white;
            font-size: 18px;
            font-weight: bold;
        }
        
        .modal-close {
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          font-size: 24px;
          color: white;
          cursor: pointer;
          z-index: 1001;
        }
        
        .modal-close:hover {
          opacity: 0.7;
        }
        
        .modal-body {
          padding: 30px;
          text-align: center;
        }
        
        .product-info-section {
          color: white;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .modal-input-field {
          width: calc(100% - 40px);
          padding: 12px 20px;
          border-radius: 8px;
          border: none;
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 16px;
          text-align: left;
        }

        .modal-input-field::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .modal-input-field:focus {
          outline: none;
          background-color: rgba(255, 255, 255, 0.3);
        }

        .modal-file-input {
          padding: 12px 20px;
        }

        .modal-description-field {
          min-height: 100px;
          resize: vertical;
          padding-top: 12px;
        }
        
        .modal-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 30px;
        }
        
        .cancel-btn, .apply-btn {
          padding: 10px 30px;
          border-radius: 25px;
          border: none;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          text-transform: lowercase;
          min-width: 80px;
        }
        
        .cancel-btn {
          background-color: transparent;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        
        .cancel-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .apply-btn {
          background-color: white;
          color: #8B5A2B;
        }
        
        .apply-btn:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
}

export default ProductManagementModal;