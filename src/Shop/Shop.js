import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToLocalStorage } from "../Utils/Utils";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    let exist = cart.find(product => product.id === selectedProduct.id)
    if(!exist){
      selectedProduct.quantity = 1;
      newCart =[...cart, selectedProduct];
    }else{
      selectedProduct.quantity += 1;
      let rest = cart.filter(product => product.id !== selectedProduct.id);
      newCart = [...rest, exist];
    }
    setCart(newCart)
    addToLocalStorage(selectedProduct.id);
  };

  const handleClearCart = () => {
    setCart([])
  };

  return (
    <>
      <div className='shop'>
        <div className='products-container'>
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
        <div className='cart-container'>
          <Cart
            cart={cart}
            products={products}
            handleClearCart={handleClearCart}
          />
        </div>
      </div>
    </>
  );
};

export default Shop;
