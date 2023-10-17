import React, { useContext, useEffect, useState } from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
import { collection, getDocs, query, where } from 'firebase/firestore';
function View() {
  // const [productDetails, setProductDetails] = useState(null)
  const [sellerDetails, setSellerDetails] = useState(null)
  const { postDetails } = useContext(PostContext)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const { userID } = postDetails
    getSellerData()
    async function getSellerData() {
      //get Seller details from firebase on page load
      const q = query(collection(firebase.db, "users"), where("id", "==", userID));
      const querySnapshot = await getDocs(q);
      const seller = querySnapshot.docs.map((user) => {
        return {
          id: user.id,   //seller ID
          ...user.data()  // selller information
        }
      })
      // console.log(seller[0])     //test
      console.log(postDetails)
      setSellerDetails(seller[0])
    }
  }, [firebase.db, postDetails])



  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails ? postDetails.imageURL : ''}
          alt="product"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails ? postDetails.price : ''}</p>
          <span>{postDetails ? postDetails.productName : ''}</span>
          <p>{postDetails ? postDetails.category : ''}</p>
          <p>{postDetails ? postDetails.productDetails : ''}</p>
          <span>{postDetails ? postDetails.createdAt : ''}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{sellerDetails ? sellerDetails.name : ""}</p>
          <p>{sellerDetails ? sellerDetails.phone : ''}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
