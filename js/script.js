
// if (window.location.hash == "#ar"){
//     console.log("the website is arabic");


// }
// alert(window.location.hash);


//Lecture 13


// let alert = document.getElementById("alert");



function wishlist(){
    

   let cart_count = document.getElementById("wishlist-count");

   let lastCartCount = cart_count.innerText; //String 
   lastCartCount = parseInt(lastCartCount);

   cart_count.innerText = lastCartCount + 1;


   
//    alert.style = "display:block";

//     setInterval(function(){
//         alert.style = "display:none";
//     },3000);
//    alert(cart_count.innerText);


Swal.fire({
    title: 'Wishlist status!',
    text: 'the product has been added!',
    icon: 'success',
    confirmButtonText: 'Cool'
  });

    return false;
}


$(document).ready(function(){

    $(".slick-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed:300,
        autoplay:false,
        autoplaySpeed:5000
      });

     
});