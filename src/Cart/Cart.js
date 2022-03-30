import React, { useEffect, useState } from "react";
import "./Cart.css";
import { IoTrashBin } from "react-icons/io5";

const Cart = ({ cart, products, handleClearCart }) => {
   const [offer, setOffer] = useState(false);
   const [freeProduct, setFreeProducts] = useState({});

   const handleOffer = () => {
      if (cart) {
         const randomNum = Math.floor(Math.random() * products.length) + 1;
         const item = products[randomNum];
         setFreeProducts(item);
      }
   };

   useEffect(() => {
      if (cart.length > 0) {
         setOffer(true);
      } else {
         setOffer(false);
      }
   }, [cart]);

   return (
      <div className="cart">
         <div className="cart-header">
            <h1>Order Summery</h1>
            <button
               onClick={handleClearCart}
               className="remove-button"
               title="Clear Cart"
            >
               <IoTrashBin color="white" size={20} />
            </button>
         </div>
         {cart.map((product, index) => (
            <div key={index} className="cart-item">
               <img src={product.pairImage} alt="" />
               <div>
                  <p>
                     {product.name} {product.color}
                  </p>
                  <p>${product.price}</p>
                  <p>{product.quantity}</p>
               </div>
            </div>
         ))}
         <p>Buy one get one free</p>
         <button
            onClick={handleOffer}
            className={offer ? "offer-button" : "offer-button-disabled"}
            disabled={!offer}
         >
            get one for me
         </button>

         {Object.keys(freeProduct).length > 0 && (
            <div className="cart-item">
               <img src={freeProduct.pairImage} alt={freeProduct.name} />
               <div>
                  <p>
                     {freeProduct.name} {freeProduct.color}
                  </p>
                  <p>${freeProduct.price}</p>
               </div>
            </div>
         )}
      </div>
   );
};
export default Cart;
