let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick= () =>
{
	searchForm.classList.toggle('active');


	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick= () =>
{
	shoppingCart.classList.toggle('active');
	searchForm.classList.remove('active');
	
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick= () =>
{
	loginForm.classList.toggle('active');
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	
	navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick= () =>
{
	navbar.classList.toggle('active');
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	
}


window.onscroll = () =>
{
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
      loop:true,
      spaceBetween: 20,
     
     autoplay:
     {
     	delay:7500,
     	diabaleOnInteraction: false,
     },
      breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
         
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

var swiper = new Swiper(".review-slider", {
      loop:true,
      spaceBetween: 20,
     
     autoplay:
     {
     	delay:7500,
     	diabaleOnInteraction: false,
     },
      breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
         
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });


//start when the document is ready
if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded',start);
}else{
	start();
}
//=============start===============
function start()
{

}
//================update&rerender=================
function update(){
addEvents();
}

//=============add events==============
function addEvents(){
//remove itens from cart
	let cartRemove_btns = document.querySelectorAll('.fa fa-trash');
	console.log(cartRemove_btns);
	cartRemove_btns.forEach((btn) => {
		btn.addEventListener("click",handle_removeCartItem);

	});
}

//============handle remove functions=========
function handle_removeCartItem(){
	this.parentElement.remove()
}