import React, { useContext, useEffect, useState } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../store/Context';
import { collection, getDocs } from "firebase/firestore";


function Posts() {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getPosts()
    async function getPosts() {
      //get posts data from firebase on page load
      const querySnapshot = await getDocs(collection(firebase.db, "products"));
      const allPosts = querySnapshot.docs.map((doc) => {
        return { //returning array of products
          id: doc.id, // id of product document
          ...doc.data(),  // all the fields inside product document
        }
      })
      setProducts(allPosts)

    }
  }, [firebase.db])
  console.log(products)

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading mb-3">
          <span>Quick Menu</span>
          <span className='me-3'>View more</span>
        </div>
        <div className="cards">
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        </div>
      </div>


      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
