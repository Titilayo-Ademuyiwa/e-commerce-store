const myCart = [];
const cartItems = document.querySelector(".my-cart-item");
const cartTotal = document.querySelector(".cart-total");
const CloseOnClick = () =>{
   document.querySelector(".container").classList.toggle("active");
};
const OpenOnClick = () =>{
   document.querySelector(".container").classList.toggle("active");
};

document.querySelectorAll(".add-to-cart").forEach(button =>{
   let isClicked = false;
   button.addEventListener('click',() => {
      if(!isClicked){
      const design = {
         id : button.dataset.id,
         name : button.dataset.name,
         image : button.dataset.image,
         price : parseFloat(button.dataset.price)
      };
      myCart.push(design);
      UpdateMyCart();
      RemoveFromCart(index);
      isClicked = true;
   }else{alert("already added to cart!")};
   });
});
function UpdateMyCart(){
  cartItems.innerHTML = '';
  let total = 0;
  myCart.forEach((item,index) =>{
   const li = document.createElement("li");
   li.className = "my-cart-item"
   li.innerHTML = ` <img src="${item.image}"class="my-cart-image"/>
            <h5 class="my-cart-name">${item.name}</h5>
            <h5 class="my-cart-price">&#8358;${item.price}</h5>
              <button class="delete" onclick = "RemoveFromCart(${index})">remove</button>`;
            cartItems.appendChild(li);
            total += item.price;
  });
   cartTotal.textContent = total;
};

function RemoveFromCart(index){
   myCart.splice(index,1);
   UpdateMyCart();
};

const ToBuy = () => {
   if(myCart.length === 0){
      alert("Your cart is empty");
   }else{alert("This is a dummy e-commerce store. Orders will not be delivered, neither will payments be accepted. Thanks!")};
};