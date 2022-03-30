// const getFromLocalStorage = ()=>{
//    return JSON.parse(localStorage.getItem('shopping-cart'));
// }

// const addToLocalStorage = (id)=>{
//    const exists = getFromLocalStorage();
//    let shoppingCart = {};
//    if(!exists){
//       shoppingCart[id] = 1;
//    }else{
//       shoppingCart = exists;
//       if(shoppingCart[id]){
//         let newCount =  shoppingCart[id] + 1;
//         shoppingCart[id] = newCount;
//       }else{
//          shoppingCart[id] = 1;
//       }
//    }
//    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
// }

const getFromLocalStorage = ()=>{
   return JSON.parse(localStorage.getItem('shopping-cart'));
}
const addToLocalStorage = (id)=>{
   let exist = getFromLocalStorage();
   let shoppingCart = {};
   if(!exist){
      shoppingCart[id] = 1;
   }else{
      shoppingCart = exist;
      if(shoppingCart[id]){
         let newCount = shoppingCart[id] + 1;
         shoppingCart[id] = newCount;
      }else{
         shoppingCart[id] = 1;
      }
   }
   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}


export{addToLocalStorage};