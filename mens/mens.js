// mens js

$(document).ready(function () {
    var mens_obj = [
        { id: 1, src: "mens_images/Formal/3.jpg", name: "Raymond", decs: "Men Slim Fit Self Design Formal Shirt", price: "698", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 2299, off: "69% off" },{ id: 2, src: "mens_images/Mans_Paint/paint1.jpg", name: "LEVI'S", decs: "511 Men Slim Mid Rise Blue Jeans", price: "850", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1700, off: "50% off" },
    
    { id: 3, src: "mens_images/Mans_Shirt/shirt9.jpg", name: "JASANIDPS", decs: "Men Striped Polo Neck Cotton Blend Maroon T-Shirt", price: "495", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular", rating4: "fa-regular", rating5: "fa-regular", cut: 1299, off: "61% off" },
    { id: 4, src: "mens_images/Mans_Paint/paint4.jpg", name: "PAUSE Sport  ", decs: "Men Printed Yellow Track Pants", price: "345", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1199, off: "71% off" },
    { id: 5, src: "mens_images/Mans_Shirt/shirt7.jpg", name: "GESPO", decs: "Men Regular Fit Solid Casual Shirt", price: "319", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1499, off: "78% off" },
            { id: 6, src: "mens_images/Formal/2.jpg", name: "Raymond", decs: "Men Slim Fit Grey Polyester Trousers", price: "999", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 2499, off: "60% off" },
            { id: 7, src: "mens_images/Mans_Shirt/shirt5.jpg", name: "DIMMY", decs: "Men Solid Cotton Blend A-line Kurta", price: "399", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular", rating4: "fa-regular", rating5: "fa-regular", cut: 1599, off: "75% off" },
            { id: 8, src: "mens_images/Mans_Paint/paint2.jpg", name: "FLYING MACHINE", decs: "Solid Men Beige Basic Shorts", price: "1,157", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1999, off: "18% off" },
           
            { id: 9, src: "mens_images/Mans_Shirt/shirt6.jpg", name: "FabryKa", decs: "Self Design Round Neck Cotton Blend  T-Shirt", price: "438", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular", cut: 1499, off: "54% off" },
            { id: 10, src: "mens_images/Formal/1.jpg", name: "Sesado", decs: "Men Slim Fit White Cotton Blend Trousers", price: "335", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1299, off: "74% off" },
           
            { id: 11, src: "mens_images/Mans_Shirt/shirt8.jpg", name: "GEUM ", decs: "Regular Fit Solid Spread Collar Casual Shirt", price: "279", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 999, off: "72% off" },
            { id: 12, src: "mens_images/Mans_Paint/paint3.jpg", name: "Damensch", decs: "Solid Men Beige Casual Shorts", price: "1,229", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1499, off: "18% off" },
            
    ];

    for (var i = 0; i < mens_obj.length; i++) {
        $("#content").append(
            "<div class='col-sm-2 d-flex justify-content-center '>" +
            "<div class='card mt-3 mb-3 nb'>" +
            "<div class='card-img '><img  src=" + mens_obj[i].src + " class='w-100 ' alt='...' height='200'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + mens_obj[i].name + "</h5>" +
            "<span class='card-text'>" + mens_obj[i].decs + "</span>" +
            "<span class='card-text'><span style='color: green;'><br><b>Special price</b></span><h4> ₹ " + mens_obj[i].price + "</h4>Discount:  <del>₹" + mens_obj[i].cut + "</del><span  style='color: green;'><b> " + mens_obj[i].off + "</b></span></span>" + "<span class='card-text' style='color: green;'><br><i class='" + mens_obj[i].rating1 + " fa-star'></i><i class='" + mens_obj[i].rating2 + " fa-star'></i><i class='" + mens_obj[i].rating3 + " fa-star'></i><i class='" + mens_obj[i].rating4 + " fa-star'></i><i class='" + mens_obj[i].rating5 + " fa-star'></i></span>" +
            "<div class='d-flex flex-wrap justify-content-center mt-2'>" +
            "<a href='#'  class='btn btn-primary add-to-cart'>ADD TO CART</a>" +
            "<div style='display:none'>" +
            "<input type='number' value="+mens_obj[i].price+" class='uniquePrice' />" +
            "<input type='text' value="+mens_obj[i].src+" class='uniqueSrc' />" +
            "<textarea class='uniqueName'>"+mens_obj[i].name+"</textarea>" +
            "</div>" +
            "<a href='#'  class='btn btn-primary mt-2'>BUY NOW</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>");

    }
});

//paint js

$(document).ready(function () {
    var paint_obj = [{ id: 1, src: "mens_images/Mans_Paint/paint1.jpg", name: "LEVI'S", decs: "511 Men Slim Mid Rise Blue Jeans", price: "850", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1700, off: "50% off" },
    { id: 2, src: "mens_images/Mans_Paint/paint2.jpg", name: "FLYING MACHINE", decs: "Solid Men Beige Basic Shorts", price: "1,157", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1999, off: "18% off" },
    { id: 3, src: "mens_images/Mans_Paint/paint3.jpg", name: "Damensch", decs: "Solid Men Beige Casual Shorts", price: "1,229", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1499, off: "18% off" },
    { id: 4, src: "mens_images/Mans_Paint/paint4.jpg", name: "PAUSE Sport  ", decs: "Men Printed Yellow Track Pants", price: "345", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1199, off: "71% off" },
    { id: 5, src: "mens_images/Mans_Paint/paint5.jpg", name: "Josh", decs: "Men Cargos", price: "431", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular", rating4: "fa-regular", rating5: "fa-regular", cut: 999, off: "56% off" },
    { id: 6, src: "mens_images/Mans_Paint/paint6.jpg", name: "Damensch", decs: "Solid Men Green Casual Shorts", price: "1,049", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular", cut: 1499, off: "30% off" },
    { id: 7, src: "mens_images/Mans_Paint/paint7.jpg", name: "Veirdo", decs: "Solid Men Beige Casual Shorts", price: "239", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1199, off: "80% off" },
    { id: 8, src: "mens_images/Mans_Paint/paint8.jpg", name: "QARSH ", decs: "Men Slim Mid Rise Black Jeans", price: "341", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1799, off: "81% off" },
    { id: 9, src: "mens_images/Mans_Paint/paint9.jpg", name: "addiz", decs: "Men Solid Dark Green Track Pants", price: "339", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular", rating4: "fa-regular", rating5: "fa-regular", cut: 999, off: "66% off" },
    { id: 10, src: "mens_images/Mans_Paint/paint10.jpg", name: "Malakar", decs: "Pack of 2 Men Striped Black, Grey Track Pants", price: "381", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular", cut: 2399, off: "84% off" },
    { id: 11, src: "mens_images/Mans_Paint/paint11.jpg", name: "KC Sports ", decs: "Men Solid Red Track Pants", price: "313", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 550, off: "43% off" },
    { id: 12, src: "mens_images/Mans_Paint/paint12.jpg", name: "PAUSE Sport  ", decs: "Men Solid Green Track Pants", price: "336", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1399, off: "73% off" }
    ];

    for (var i = 0; i < paint_obj.length; i++) {
        $("#content_paint").append(
            "<div class='col-sm-2 d-flex justify-content-center '>" +
            "<div class='card mt-3 mb-3 nb'>" +
            "<div class='card-img '><img  src=" + paint_obj[i].src + " class='w-100 ' alt='...' height='200'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + paint_obj[i].name + "</h5>" +
            "<span class='card-text'>" + paint_obj[i].decs + "</span>" +
            "<span class='card-text'><span style='color: green;'><br><b>Special price</b></span><h4> ₹ " + paint_obj[i].price + "</h4>Discount:  <del>₹" + paint_obj[i].cut + "</del><span  style='color: green;'><b> " + paint_obj[i].off + "</b></span></span>" + "<span class='card-text' style='color: green;'><br><i class='" + paint_obj[i].rating1 + " fa-star'></i><i class='" + paint_obj[i].rating2 + " fa-star'></i><i class='" + paint_obj[i].rating3 + " fa-star'></i><i class='" + paint_obj[i].rating4 + " fa-star'></i><i class='" + paint_obj[i].rating5 + " fa-star'></i></span>" +
            "<div class='d-flex flex-wrap justify-content-center mt-2'>" +
            "<a href='#'  class='btn btn-primary add-to-cart'>ADD TO CART</a>" +
            "<div style='display:none'>" +
            "<input type='number' value="+paint_obj[i].price+" class='uniquePrice' />" +
            "<input type='text' value="+paint_obj[i].src+" class='uniqueSrc' />" +
            "<textarea class='uniqueName'>"+paint_obj[i].name+"</textarea>" +
            "</div>" +
            "<a href='#'  class='btn btn-primary mt-2'>BUY NOW</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>");

    }
});

// formal js


$(document).ready(function () {
    var formal_obj = [{ id: 1, src: "mens_images/Formal/1.jpg", name: "Sesado", decs: "Men Slim Fit White Cotton Blend Trousers", price: "335", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1299, off: "74% off" },
    { id: 2, src: "mens_images/Formal/2.jpg", name: "Raymond", decs: "Men Slim Fit Grey Polyester Trousers", price: "999", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 2499, off: "60% off" },
    { id: 3, src: "mens_images/Formal/3.jpg", name: "Raymond", decs: "Men Slim Fit Self Design Formal Shirt", price: "698", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 2299, off: "69% off" },
    { id: 4, src: "mens_images/Formal/4.jpg", name: "STONEBERG ", decs: "Men Slim Fit Solid Spread Collar Formal Shirt", price: "359", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1599, off: "77% off" },
    { id: 5, src: "mens_images/Formal/5.jpg", name: "MILDIN", decs: "Men Slim Fit Solid Spread Collar Formal Shirt", price: "431", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular", rating4: "fa-regular", rating5: "fa-regular", cut: 999, off: "56% off" },
    { id: 6, src: "mens_images/Formal/6.jpg", name: "PETER ENGLAND ", decs: "Men Regular Fit Solid Spread Collar Formal Shirt", price: "539", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular", cut: 1599, off: "52% off" },
    { id: 7, src: "mens_images/Formal/7.jpg", name: "PARK AVENUE ", decs: "Men Slim Fit Solid Formal Shirt", price: "767", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1199, off: "80% off" },
    { id: 8, src: "mens_images/Formal/8.jpg", name: "SLC ", decs: "Men Regular Fit Black Cotton Blend Trousers", price: "429", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1299, off: "66% off" },
    { id: 9, src: "mens_images/Formal/9.jpg", name: "Wolinex ", decs: "Men Regular Fit Solid Spread Collar Formal Shirt", price: "747", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1599, off: "53% off" },
{ id: 10, src: "mens_images/Formal/10.jpg", name: "GETCHI ", decs: "Men Regular Fit Solid Spread Collar Formal Shirt", price: "384", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 999, off: "61% off" },
{ id: 11, src: "mens_images/Formal/11.jpg", name: "Wolinex ", decs: "Men Regular Fit Solid Spread Collar Formal Shirt", price: "747", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1599, off: "53% off" },
{ id: 12, src: "mens_images/Formal/12.jpg", name: "GETCHI ", decs: "Men Regular Fit Solid Spread Collar Formal Shirt", price: "397", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 999, off: "60% off" }
    ];

    for (var i = 0; i < formal_obj.length; i++) {
        $("#content_formal").append(
            "<div class='col-sm-2 d-flex justify-content-center '>" +
            "<div class='card mt-3 mb-3 nb'>" +
            "<div class='card-img '><img  src=" + formal_obj[i].src + " class='w-100 ' alt='...' height='180'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + formal_obj[i].name + "</h5>" +
            "<span class='card-text'>" + formal_obj[i].decs + "</span>" +
            "<span class='card-text'><span style='color: green;'><br><b>Special price</b></span><h4> ₹ " + formal_obj[i].price + "</h4>Discount:  <del>₹" + formal_obj[i].cut + "</del><span  style='color: green;'><b> " + formal_obj[i].off + "</b></span></span>" + "<span class='card-text' style='color: green;'><br><i class='" + formal_obj[i].rating1 + " fa-star'></i><i class='" + formal_obj[i].rating2 + " fa-star'></i><i class='" + formal_obj[i].rating3 + " fa-star'></i><i class='" + formal_obj[i].rating4 + " fa-star'></i><i class='" + formal_obj[i].rating5 + " fa-star'></i></span>" +
            "<div class='d-flex flex-wrap justify-content-center mt-2'>" +
            "<a href='#'  class='btn btn-primary add-to-cart'>ADD TO CART</a>" +
            "<div style='display:none'>" +
            "<input type='number' value="+formal_obj[i].price+" class='uniquePrice' />" +
            "<input type='text' value="+formal_obj[i].src+" class='uniqueSrc' />" +
            "<textarea class='uniqueName'>"+formal_obj[i].name+"</textarea>" +
            "</div>" +
            "<a href='#'  class='btn btn-primary mt-2'>BUY NOW</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>");

    }
});


// shirt js


$(document).ready(function () {
    var shirt_obj = [{ id: 1, src: "mens_images/Mans_Shirt/shirt1.jpg", name: "VeBNoR", decs: "Men Regular  Solid Spread Collar Casual Shirt", price: "329", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 999, off: "67% off" },
    { id: 2, src: "mens_images/Mans_Shirt/shirt2.jpg", name: "MILDIN", decs: "Men Slim  Solid Mandarin Collar Formal Shirt", price: "1,157", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1999, off: "18% off" },
    { id: 3, src: "mens_images/Mans_Shirt/shirt3.jpg", name: "SPOQUE", decs: "Men Regular Fit Self Design Party Shirt", price: "1,229", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1499, off: "18% off" },
    { id: 4, src: "mens_images/Mans_Shirt/shirt4.jpg", name: "AUSK ", decs: "Mandarin Collar Cotton  Light Blue T-Shirt", price: "259", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1499, off: "82% off" },
    { id: 5, src: "mens_images/Mans_Shirt/shirt5.jpg", name: "DIMMY", decs: "Men Solid Cotton Blend A-line Kurta", price: "399", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular", rating4: "fa-regular", rating5: "fa-regular", cut: 1599, off: "75% off" },
    { id: 6, src: "mens_images/Mans_Shirt/shirt6.jpg", name: "FabryKa", decs: "Self Design Round Neck Cotton Blend  T-Shirt", price: "438", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular", cut: 1499, off: "54% off" },
    { id: 7, src: "mens_images/Mans_Shirt/shirt7.jpg", name: "GESPO", decs: "Men Regular Fit Solid Casual Shirt", price: "319", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1499, off: "78% off" },
    { id: 8, src: "mens_images/Mans_Shirt/shirt8.jpg", name: "GEUM ", decs: "Regular Fit Solid Spread Collar Casual Shirt", price: "279", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 999, off: "72% off" },
    { id: 9, src: "mens_images/Mans_Shirt/shirt9.jpg", name: "JASANIDPS", decs: "Men Striped Polo Neck Cotton Blend Maroon T-Shirt", price: "495", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular", rating4: "fa-regular", rating5: "fa-regular", cut: 1299, off: "61% off" },
    { id: 10, src: "mens_images/Mans_Shirt/shirt10.jpg", name: "Classy Vouge ", decs: "Men Regular Fit Striped Spread Collar Casual Shirt", price: "351", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular", cut: 999, off: "64% off" },
    { id: 11, src: "mens_images/Mans_Shirt/shirt11.jpg", name: "AIDAN PAUL ", decs: "Men Regular Fit Checkered Cut Away Collar Casual Shirt", price: "499", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1599, off: "68% off" },
    { id: 12, src: "mens_images/Mans_Shirt/shirt12.jpg", name: "ZIMBAR ", decs: "Men Regular Fit Floral Print Spread Collar Casual Shirt", price: "405", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1287, off: "68% off" }
    ];

    for (var i = 0; i < shirt_obj.length; i++) {
        $("#content_shirt").append(
            "<div class='col-sm-2 d-flex justify-content-center '>" +
            "<div class='card mt-3 mb-3 nb'>" +
            "<div class='card-img bg'><img  src=" + shirt_obj[i].src + " class='w-100 ' alt='...' height='200'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + shirt_obj[i].name + "</h5>" +
            "<span class='card-text'>" + shirt_obj[i].decs + "</span>" +
            "<span class='card-text'><span style='color: green;'><br><b>Special price</b></span><h4> ₹ " + shirt_obj[i].price + "</h4>Discount:  <del>₹" + shirt_obj[i].cut + "</del><span  style='color: green;'><b> " + shirt_obj[i].off + "</b></span></span>" + "<span class='card-text' style='color: green;'><br><i class='" + shirt_obj[i].rating1 + " fa-star'></i><i class='" + shirt_obj[i].rating2 + " fa-star'></i><i class='" + shirt_obj[i].rating3 + " fa-star'></i><i class='" + shirt_obj[i].rating4 + " fa-star'></i><i class='" + shirt_obj[i].rating5 + " fa-star'></i></span>" +
            "<div class='d-flex flex-wrap justify-content-center mt-2'>" +
            "<a href='#'  class='btn btn-primary add-to-cart'>ADD TO CART</a>" +
            "<div style='display:none'>" +
            "<input type='number' value="+shirt_obj[i].price+" class='uniquePrice' />" +
            "<input type='text' value="+shirt_obj[i].src+" class='uniqueSrc' />" +
            "<textarea class='uniqueName'>"+shirt_obj[i].name+"</textarea>" +
            "</div>" +
            "<a href='#'  class='btn btn-primary mt-2'>BUY NOW</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>");

    }
});

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
            "<span class='remove fw-bold text-danger' style='cursor:pointer'>Remove</span>" +
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
      $("#btndrag").click();
});
//scroll event
window.addEventListener("scroll", function () {
    $(".top-header").css("background-color", "rgba(0,0,0,0.7)");
});



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
