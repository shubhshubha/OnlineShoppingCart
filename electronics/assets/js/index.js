var men_shoes = [{ src: "./assets/images/index/mens_shoes/ms7.png", name: "Nike Shoes", price: 899 },
{ src: "./assets/images/index/mens_shoes/ms2.png", name: "Nike Shoes", price: 1299 },
{ src: "./assets/images/index/mens_shoes/ms8.png", name: "Nike Shoes", price: 999 },
{ src: "./assets/images/index/mens_shoes/ms4.png", name: "Nike Shoes", price: 499 },
{ src: "./assets/images/index/mens_shoes/ms5.png", name: "Nike Shoes", price: 499 },
{ src: "./assets/images/index/mens_shoes/ms6.png", name: "Nike Shoes", price: 699 },
{ src: "./assets/images/index/mens_shoes/ms1.png", name: "Nike Shoes", price: 490 },
{ src: "./assets/images/index/mens_shoes/ms3.png", name: "Nike Shoes", price: 599 },
{ src: "./assets/images/index/mens_shoes/ms9.png", name: "Nike Shoes", price: 499 },
{ src: "./assets/images/index/mens_shoes/ms10.png", name: "Nike Shoes", price: 654 },
{ src: "./assets/images/index/mens_shoes/ms11.png", name: "Nike Shoes", price: 499 },
{ src: "./assets/images/index/mens_shoes/ms12.png", name: "Nike Shoes", price: 399 },];

for (var i = 0; i < men_shoes.length; i++) {
    $("#men_shoes_cards").append("<div class='col-sm-2'>" +
        "<div class='card pb-3 anim mt-2 ms-2 me-2' data-aos='fade-up' data-aos-duration='2000'>" +
        "<div class='add_cart_strip'>" +
        "<i class='fa-solid fa-eye text-white fs-2 ms-1'></i>" +
        "<img src='./logo/cart3.png' style='position:relative' class='img-fluid add-to-cart' />" +
        "<i class='fa-solid fa-heart fs-2 text-white me-1'></i>" +
        "</div>" +
        "<div style='display:none'>" +
        "<input type='number' value=" + men_shoes[i].price + " />" +
        "<input type='text' value=" + men_shoes[i].src + " />" +
        "<textarea>" + men_shoes[i].name + "</textarea>" +
        "</div>" +
        "<div class='card-img'>" +
        "<img src=" + men_shoes[i].src + " alt='' height='150' style='z-index: 10;' class='ms-auto me-auto mt-3 w-100'>" +
        "</div>" +
        "<div class='vision-body d-flex flex-column justify-content-center'>" +
        "<p class='p text-center text-white fw-bold ' style='z-index: 10;letter-spacing: normal;'>" + men_shoes[i].name + " : 	&#8377;<span>" + men_shoes[i].price + "</span></p>" +

        "<div class='input-group justify-content-evenly'>" +
        "<input type='button' value='6' class='btn btn-light'>" +
        "<input type='button' value='7' class='btn btn-light'>" +
        "<input type='button' value='8' class='btn btn-light'>" +
        "<input type='button' value='9' class='btn btn-light'>" +
        "</div>" +
        "<div class='btn-group justify-content-evenly mt-3'>" +
        "<input type='button'>" +
        "<input type='button'>" +
        "<input type='button'>" +
        "<input type='button'>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>");
}


//cart management
var cart = [];
var cartData = localStorage.getItem('cart');
var cartDataAsObject = JSON.parse(cartData);
if(cartDataAsObject==null)
{
    cartAsString = JSON.stringify(cart);
    localStorage.setItem('cart', cartAsString)
}

$(document).on("click", ".add-to-cart", function () {
    var rupee = $(this).parent().next('div').children('input:first').val();
    var src = $(this).parent().next('div').children('input:odd').val();
    var pname = $(this).parent().next('div').children('textarea:first').val();

    var cartData = localStorage.getItem('cart');
    var cartDataAsObject = JSON.parse(cartData);
    
   
        cartAsString = JSON.stringify(cart);
        localStorage.setItem('cart', cartAsString)
  
        index = cartDataAsObject.length;
        for (var i = 0; i < index; i++) {
            // console.log(cartDataAsObject[i])
            cart[i] = cartDataAsObject[i];
        }
        cart[index] = { "src": src, "name": pname, "price": rupee, "qty": "1" }
        cartAsString = JSON.stringify(cart);
        localStorage.setItem('cart', cartAsString)
    
   

});

$(document).on("click", "#btndrag", function () {
    var cartData = localStorage.getItem('cart')
    var cartDataAsObject = JSON.parse(cartData);
    var index = cartDataAsObject.length;
    var obj = $("#cart-modal").children().find('.modal-body');
    obj.html("");
    var shopStatus=0;
    for (var i = 0; i < index; i++) {
        shopStatus=1;
        obj.append("<div class='col-sm-12'>" +
            "<div class='row ms-2 me-2 mt-4'>" +
            "<div class='col-sm-4 d-flex justify-content-center align-items-center ' >" +
            "<img src="+cartDataAsObject[i].src+" alt='' class='img-thumbnail' >" +
            "</div>" +
            "<div class='col-sm-8 d-flex justify-content-center flex-column mt-2 px-3 '>" +
            "<div class='d-flex justify-content-between flex-row'>"+
            "<span class='fw-bold'>"+cartDataAsObject[i].name+"</span>" +
            "<span class='remove fw-bold text-danger' style='cursor:pointer'> x-Remove</span>" +
            "</div>"+
            "<p class='text-break text-start text-warp text-black-50'></p>" +
            "<span >****************** &#8377; <span class='specificPrice'>"+cartDataAsObject[i].price+"</span></span>" +
            "<div class='d-flex flex-row flex-wrap justify-content-between mt-2'>"+
            "<select class='w-25 ms-1 quantity'>" +
            "<option>0</option>" +
            "<option>1</option>" +
            "<option>2</option>" +
            "<option>3</option>" +
            " <option>4</option>" +
            "<option>5</option>" +
            "</select> " +
            "Total: <span style='position:relative;left:8%;bottom:-3px;'>&#8377;</span><input type='number' class='totalSpecific w-25 text-center' value='0' style='border:none' readonly>"+
            "</div>"+
            "</div>" +
            "</div>" +
            "<hr/>"+
            "</div>");
    }

    if(shopStatus==0){
        obj.html("<h3 class='text-center'>Your cart is empty right now!<h3>"+
                  "<div class='d-flex justify-content-center'><a href='index.html' class='btn btn-dark px-5'>Shop now</a></div>");
                  obj.next().css('display','none');     
    }
    else{
        obj.next().css('display','block');
    }

});

//removing item
$(document).on("click",".remove",function(){
      var cartData = localStorage.getItem('cart')
      var cartDataAsArrayOfObject = JSON.parse(cartData);
      cartDataAsArrayOfObject.shift()
      var cartData=JSON.stringify(cartDataAsArrayOfObject);
      localStorage.setItem('cart',cartData);
      $("#btndrag").trigger("click");
});
//scroll event
window.addEventListener("scroll", function () {
    $(".top-header").css("background-color", "rgba(0,0,0,0.7)");
});

//drag event
//draggable
$("#btndrag").draggable();

//Managing Specific Total prize
$(document).on("change",".quantity",function(){
    var total=0;
     var qty=parseInt($(this).val());//getting number of quanity
     var spPrice=parseInt($(this).parent().prev().find('.specificPrice').text());//getting specific price
     var price=qty*spPrice; //Total specific price
     $(this).next().next().val(price); //Assigning Total specific price
     var len=$(".totalSpecific").length;//counting the number of specificPrice
     for(var i=0;i<len;i++)//Calculating total price
     {
           total+=parseInt($(".totalSpecific")[i].value)
     }
    
    $('.total').val(total);
});
