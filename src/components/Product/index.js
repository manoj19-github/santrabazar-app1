import React from 'react'
import {AiFillStar} from "react-icons/ai"
import{BiRupee} from "react-icons/bi"
function Product(props) {
  return (
    <div className="card product-card">
      <a href="product.html">
        <img className="md-img" src={props.product.image} alt="product"/>

      </a>
      <div className="card-body">
        <a href="product.html">
          <h2>{props.product.name}</h2>
        </a>
        <div className="rating" >
          <span>
            <AiFillStar color="gold"/>
          </span>
          <span>
            <AiFillStar color="gold"/>
          </span>
          <span>
            <AiFillStar color="gold"/>
          </span>
          <span>
            <AiFillStar color="gold"/>
          </span><span>
            <AiFillStar color="gold"/>
          </span>
        </div>
        <div className="price">
          <BiRupee/>
        {props.product.price}
        </div>
      </div>
    </div>
  )
}

export default Product
