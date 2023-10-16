import React, { Fragment, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';

const Create = () => {
  const [productName, setProductName] = useState('')
  const [category, setCategory] = useState('')
  const [productDetails, setProductDetails] = useState('')
  const [image, setImage] = useState(null)
  const [price, setPrice] = useState('')


  return (
    <Fragment>
      <Header />
      <div className="row mx-5 p-4">
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-4 p-4 box">
          <div className="p-3">
            <form>
              <div className="col-12 mb-3">
                <label htmlFor="product_name" className="form-label">Product Name</label>
                <input type="text" className="form-control" name="product_name" placeholder="Enter the product name"
                  required value={productName} onChange={(e) => setProductName(e.target.value)} />
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="Category" className="form-label">Category</label>
                <input type="text" className="form-control" name="Category" placeholder="Enter the category"
                  required value={category} onChange={(e) => setCategory(e.target.value)} />
              </div>

              <div className="col-12">
                <label htmlFor="description" className="form-label">Product Description</label>
                <textarea className="form-control" name="description" id="floatingTextarea2" style={{ height: 20 }}
                  required value={productDetails} onChange={(e) => setProductDetails(e.target.value)}></textarea>
                <label for="floatingTextarea2"></label>
              </div>

              <div className="col-12 mb-4">
                <label htmlFor="product_image" className="form-label">Product Images</label>
                <input type="file" className="form-control" name="product_image" accept="image/*" multiple id="imageInput"
                  value={image} onChange={(e) => setImage(e.target.value)} />

              </div>

              <div className="col-md-4 mb-4">
                <label htmlFor="sellingPrice" className="form-label">Selling Price</label>
                <input type="number" step="0.01" className="form-control" id="sellingPrice" name="sellingPrice"
                  readonly value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <br />
              <div className="text-center">
                <button className="btn btn-primary px-4 py-2">Sell Product</button>
              </div>

            </form>

          </div>
        </div>

      </div>

    </Fragment>
  );
};

export default Create;
