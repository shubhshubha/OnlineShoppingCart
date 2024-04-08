var shubham1 = new Swiper(".mySwiper1", {
    effect: "creative",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

var shubham2 = new Swiper(".mySwiper2", {
    effect: "creative",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -800],
          rotate: [180, 0, 0],
        },
        next: {
          shadow: true,
          translate: [0, 0, -800],
          rotate: [-180, 0, 0],
        },
      },
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
});
var shubham3 = new Swiper(".mySwiper3", {
    effect: "creative",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-125%", 0, -800],
          rotate: [0, 0, -90],
        },
        next: {
          shadow: true,
          translate: ["125%", 0, -800],
          rotate: [0, 0, 90],
        },
      },
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

var ladies_bag = [{ src: "./assets/images/index/ladies_bags/lb1.png", name: "Nike Shoes", price: 899 },
{ src: "./assets/images/index/ladies_bags/lb2.png", name: "Nike Shoes", price: 1299 },
{ src: "./assets/images/index/ladies_bags/lb3.png", name: "Nike Shoes", price: 999 },
{ src: "./assets/images/index/ladies_bags/lb4.png", name: "Nike Shoes", price: 499 },
{ src: "./assets/images/index/ladies_bags/lb5.png", name: "Nike Shoes", price: 499 },
{ src: "./assets/images/index/ladies_bags/lb6.png", name: "Nike Shoes", price: 699 },
{ src: "./assets/images/index/ladies_bags/lb7.png", name: "Nike Shoes", price: 490 },
{ src: "./assets/images/index/ladies_bags/lb8.png", name: "Nike Shoes", price: 599 },
{ src: "./assets/images/index/ladies_bags/lb9.png", name: "Nike Shoes", price: 499 },
{ src: "./assets/images/index/ladies_bags/lb10.png", name: "Nike Shoes", price: 654 }
];



for(var i=0;i<ladies_bag.length;i++){
    $('.mySwiper1').children('.swiper-wrapper').append("<div class='swiper-slide' data-aos='fade-up' data-aos-duration='2000' >"+
    "<img src="+ladies_bag[i].src+" class='img-fluid h-100' >"+
    "<div class='add_cart_strip'>"+
        "<i class='fa-solid fa-eye text-white fs-2 ms-1'></i>"+
        "<img src='./logo/cart3.png' style='position:relative' class='img-fluid add-to-cart-swiper' data-aos='fade-up' data-aos-duration='2000' />"+
        "<div style='display:none'>" +
        "<input type='number' value="+ladies_bag[i].price+" class='uniquePrice' />" +
        "<input type='text' value="+ladies_bag[i].src+" class='uniqueSrc' />" +
        "<textarea class='uniqueName'>"+ladies_bag[i].name+"</textarea>" +
        "</div>" +
        "<i class='fa-solid fa-heart fs-2 text-white me-1'></i>"+
    "</div>"+
    "<h1 style='position: absolute;right:4%;bottom:3%'>&#8377; "+ladies_bag[i].price+"</h2>"+
"</div>");
}

var hand_bag = [{ src: "./assets/images/index/hand_bags/hb1.png", name: "Bag", price: 899 },
{ src: "./assets/images/index/hand_bags/hb2.png", name: "Bag", price: 1299 },
{ src: "./assets/images/index/hand_bags/hb3.png", name: "Bag", price: 999 },
{ src: "./assets/images/index/hand_bags/hb4.png", name: "Bag", price: 499 },
{ src: "./assets/images/index/hand_bags/hb5.png", name: "Bag", price: 499 },
{ src: "./assets/images/index/hand_bags/hb6.png", name: "Bag", price: 699 },
{ src: "./assets/images/index/hand_bags/hb7.png", name: "Bag", price: 490 },
{ src: "./assets/images/index/hand_bags/hb8.png", name: "Bag", price: 599 },
{ src: "./assets/images/index/hand_bags/hb9.png", name: "Bag", price: 499 },
{ src: "./assets/images/index/hand_bags/hb10.png", name: "Bag", price: 654 },
{ src: "./assets/images/index/hand_bags/hb11.png", name: "Bag", price: 490 },
{ src: "./assets/images/index/hand_bags/hb12.png", name: "Bag", price: 599 },
{ src: "./assets/images/index/hand_bags/hb13.png", name: "Bag", price: 499 },
{ src: "./assets/images/index/hand_bags/hb14.png", name: "Bag", price: 654 }
];

for(var i=0;i<hand_bag.length;i++){
    $('.mySwiper2').children('.swiper-wrapper').append("<div class='swiper-slide' data-aos='fade-up' data-aos-duration='2000'>"+
    "<img src="+hand_bag[i].src+" class='img-fluid h-100' >"+
    "<div class='add_cart_strip'>"+
        "<i class='fa-solid fa-eye text-white fs-2 ms-1'></i>"+
        "<img src='./logo/cart3.png' style='position:relative;z-index:10;' class='img-fluid add-to-cart-swiper' />"+
        "<div style='display:none'>" +
                    "<input type='number' value="+hand_bag[i].price+" class='uniquePrice' />" +
                    "<input type='text' value="+hand_bag[i].src+" class='uniqueSrc' />" +
                    "<textarea class='uniqueName'>"+hand_bag[i].name+"</textarea>" +
                    "</div>" +
        "<i class='fa-solid fa-heart fs-2 text-white me-1'></i>"+
    "</div>"+
    "<h1 style='position: absolute;right:4%;bottom:3%'>&#8377; "+hand_bag[i].price+"</h2>"+
"</div>");
}

var mens_bag = [{ src: "./assets/images/index/mens_bags/mb1.png", name: "Bag", price: 899 },
{ src: "./assets/images/index/mens_bags/mb2.png", name: "Bag", price: 1299 },
{ src: "./assets/images/index/mens_bags/mb3.png", name: "Bag", price: 999 },
{ src: "./assets/images/index/mens_bags/mb4.png", name: "Bag", price: 499 },
{ src: "./assets/images/index/mens_bags/mb5.png", name: "Bag", price: 499 }
];

for(var i=0;i<mens_bag.length;i++){
    $('.mySwiper3').children('.swiper-wrapper').append("<div class='swiper-slide' data-aos='fade-up' data-aos-duration='2000'>"+
    "<img src="+mens_bag[i].src+" class='img-fluid h-100' >"+
    "<div class='add_cart_strip'>"+
        "<i class='fa-solid fa-eye text-white fs-2 ms-1'></i>"+
        "<img src='./logo/cart3.png' style='position:relative;z-index:10;' class='img-fluid add-to-cart-swiper' />"+
        "<div style='display:none'>" +
        "<input type='number' value="+mens_bag[i].price+" class='uniquePrice' />" +
        "<input type='text' value="+mens_bag[i].src+" class='uniqueSrc' />" +
        "<textarea class='uniqueName'>"+mens_bag[i].name+"</textarea>" +
        "</div>" +
        "<i class='fa-solid fa-heart fs-2 text-white me-1'></i>"+
    "</div>"+
    "<h1 style='position: absolute;right:4%;bottom:3%'>&#8377; "+mens_bag[i].price+"</h2>"+
"</div>");
}


 //cart management
//  var cart = [];
//  var cartData = localStorage.getItem('cart');
//  var cartDataAsObject = JSON.parse(cartData);
//  if(cartDataAsObject==null)
//  {
//      cartAsString = JSON.stringify(cart);
//      localStorage.setItem('cart', cartAsString)
//  }
 
 $(document).on("click", ".add-to-cart-swiper", function () {
     var rupee = $(this).next().find('.uniquePrice').val();
     var src =  $(this).next().find('.uniqueSrc').val();
     var pname = $(this).next().find('.uniqueName').val();
     var cartData = localStorage.getItem('cart')
     var cartDataAsObject = JSON.parse(cartData);
     if(cartDataAsObject==null)
     {
         cartAsString = JSON.stringify(cart);
         localStorage.setItem('cart', cartAsString)
         var cartData = localStorage.getItem('cart')
         var cartDataAsObject = JSON.parse(cartData);
         var index = cartDataAsObject.length;
         for (var i = 0; i < index; i++) {
             // console.log(cartDataAsObject[i])
             cart[i] = cartDataAsObject[i];
         }
         cart[index] = { "src": src, "name": pname, "price": rupee, "qty": "1" }
         cartAsString = JSON.stringify(cart);
         localStorage.setItem('cart', cartAsString)
     }
     else{
             var index = cartDataAsObject.length;
             for (var i = 0; i < index; i++) {
                 // console.log(cartDataAsObject[i])
                 cart[i] = cartDataAsObject[i];
             }
             cart[index] = { "src": src, "name": pname, "price": rupee, "qty": "1" }
             cartAsString = JSON.stringify(cart);
             localStorage.setItem('cart', cartAsString)
         }
     
 
 });
 
 