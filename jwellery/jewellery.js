
//main
  $(document).ready(function () {
      var jewellery_obj = [{ id: 1, src: "jwl_images/women_jwellary_sets/1.jpg", name: "brado jewellery ", decs: "Brass Gold-plated White Jewel Set  (Pack of 1)", price: "350", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 120, off: "32% off" },
      { id: 2, src: "jwl_images/women_jwellary_sets/2.jpg", name: "DIKSHA COLLECTION ", decs: "Alloy Gold-plated Gold Jewel Set  (Pack of 1)", price: "1253", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1391, off: "10% off" },
      { id: 3, src: "jwl_images/women_jwellary_sets/3.jpg", name: "Sukkhi ", decs: "Alloy Gold-plated Gold Jewel Set  (Pack of 2)", price: "812", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 854, off: "5% off" },
      { id: 4, src: "jwl_images/women_jwellary_sets/4.jpg", name: "Rhymee", decs: "Alloy Rhodium White Jewel Set  (Pack of 1)", price: "1238", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1390, off: "11% off" },
      { id: 5, src: "jwl_images/women_jwellary_sets/5.jpg", name: "z.n. fashions", decs: "Trending and Attractive Pearl", price: "913", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular", rating4: "fa-regular", rating5: "fa-regular", cut: 960, off: "5% off" },
      { id: 6, src: "jwl_images/women_jwellary_sets/6.jpg", name: "brado jewellery", decs: "Brass Gold-plated Rose Gold Jewel Set  (Pack of 1)", price: "947", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular", cut: 1018, off: "7% off" },
      { id: 7, src: "jwl_images/women_jwellary_sets/7.jpg", name: "RJ", decs: "Brass Gold-plated White, Red Jewel Set  (Pack of 1)", price: "685", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 728, off: "6% off" },
      { id: 8, src: "jwl_images/women_jwellary_sets/8.jpg", name: "brado jewellery", decs: "Brass, Stone, Crystal,Stainless Steel", price: "247", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1999, off: "87% off" },
      { id: 9, src: "jwl_images/women_jwellary_sets/9.jpg", name: "Rhymee",decs:"Alloy Rhodium White Jewel Set  (Pack of 1)", price: "685", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 728, off: "6% off" },
      { id: 10, src:"jwl_images/women_jwellary_sets/10.jpg", name: "brado jewellery", decs: "Brass, Stone, Crystal,Stainless Steel", price: "247", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1999, off: "87% off" },
      { id: 11, src:"jwl_images/women_jwellary_sets/11.jpg", name: "keymax", decs:"Copper Gold-plated Gold Jewel Set  (Pack of 1)", price: "685", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 728, off: "6% off" },
      { id: 12, src:"jwl_images/women_jwellary_sets/8.jpg", name: "brado jewellery",decs:"Brass, Stone, Crystal,Stainless Steel", price: "247", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1999, off: "87% off" }

      ];
  
      for (var i = 0; i < jewellery_obj.length; i++) {
          $("#content_jewellery").append(
              "<div class='col-sm-2 d-flex justify-content-center'>" +
              "<div class='card mt-3'>" +
              "<div class='card-img'><img  src=" + jewellery_obj[i].src + " class='w-100' alt='...' height='160'>" +
              "<div class='card-body'>" +
              "<h5 class='card-title'>" + jewellery_obj[i].name + "</h5>" +
              "<span class='card-text'>" + jewellery_obj[i].decs + "</span>" +
              "<span class='card-text'><span style='color: green;'><br><b>Special price</b></span><h4> &#8377; " + jewellery_obj[i].price + "</h4>Discount:  <del>₹" + jewellery_obj[i].cut + "</del><span  style='color: green;'><b> " + jewellery_obj[i].off + "</b></span></span>" + "<span class='card-text' style='color: green;'><br><i class='" + jewellery_obj[i].rating1 + " fa-star'></i><i class='" + jewellery_obj[i].rating2 + " fa-star'></i><i class='" + jewellery_obj[i].rating3 + " fa-star'></i><i class='" + jewellery_obj[i].rating4 + " fa-star'></i><i class='" + jewellery_obj[i].rating5 + " fa-star'></i></span>" +
              "<div class='d-flex flex-wrap justify-content-center mt-2'>" +
              "<a href='#' class='btn btn-primary add-to-cart'>ADD TO CART</a>" +
              "<div style='display:none'>" +
                    "<input type='number' value="+jewellery_obj[i].price+" class='uniquePrice' />" +
                    "<input type='text' value="+jewellery_obj[i].src+" class='uniqueSrc' />" +
                    "<textarea class='uniqueName'>"+jewellery_obj[i].name+"</textarea>" +
                    "</div>" +
              "<a href='#' class='btn btn-primary mt-2'>BUY NOW</a>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>");

      }
  });


  //Women Earring

  $(document).ready(function () {
    var earring_obj = [{ id: 1, src: "jwl_images/Girls/1.jpg", name: "victoria's den", decs: "LORDS JEWELS Yellow Gold 22kt Jhumki Earring", price: "350", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 120, off: "32% off" },
    { id: 2, src: "jwl_images/Girls/16.jpg", name: "Giva", decs: "Unique Earrings & Studs", price: "1253", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1391, off: "10% off" },
    { id: 3, src: "jwl_images/Girls/15.jpeg", name: "alysa", decs: "Fashionable Earrings & Studs", price: "812", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 854, off: "5% off" },
    { id: 4, src: "jwl_images/Girls/17.jpg", name: "Prasub", decs: "Unique Earrings & Studs", price: "1238", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1390, off: "11% off" },
    { id: 5, src: "jwl_images/Girls/2.jpg", name: "Vembley", decs: "Trending and Attractive Pearl", price: "913", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular", rating4: "fa-regular", rating5: "fa-regular", cut: 960, off: "5% off" },
    { id: 6, src: "jwl_images/Girls/6.jpg", name: "Giva", decs: "Graceful Earrings & Studs", price: "947", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular", cut: 1018, off: "7% off" },
    { id: 7, src: "jwl_images/Girls/7.jpg", name: "MB creation", decs: "Styles Earrings & Studs", price: "685", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 728, off: "6% off" },
    { id: 8, src: "jwl_images/Girls/8.jpg", name: "alysa", decs: "EARRINGS Alloy Stud Earring", price: "247", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1999, off: "87% off" },
    { id: 9, src: "jwl_images/Girls/9.jpg", name: "Giva", decs: "Femme Jam 925 Sterling SIlver Earring", price: ",753", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 4810, off: "42% off" },
    { id: 10, src: "jwl_images/Girls/10.jpg", name: "VAANYA ", decs: "Kundan Jhumka Earring", price: "99", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 599, off: "83% off" },
    { id: 11, src: "jwl_images/Girls/11.jpg", name: "GIVA", decs: "Sterling Silver Byzantine Beauty Earrings.", price: "4499", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 9999, off: "55% off" },
    { id: 12, src: "jwl_images/Girls/12.jpg", name: "MYKI", decs: "Fascinating butterfly Bali Pearl Drop Earrings", price: "255", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1299, off: "80% off" }
    ];




    for (var i = 0; i < earring_obj.length; i++) {
        $("#content_erring").append(
            "<div class='col-sm-2 d-flex justify-content-center'>" +
            "<div class='card mt-3'>" +
            "<div class='card-img'><img  src=" + earring_obj[i].src + " class='w-100' alt='...' height='160'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + earring_obj[i].name + "</h5>" +
            "<span class='card-text'>" + earring_obj[i].decs + "</span>" +
            "<span class='card-text'><span style='color: green;'><br><b>Special price</b></span><h4> ₹ " + earring_obj[i].price + "</h4>Discount:  <del>₹" + earring_obj[i].cut + "</del><span  style='color: green;'><b> " + earring_obj[i].off + "</b></span></span>" + "<span class='card-text' style='color: green;'><br><i class='" + earring_obj[i].rating1 + " fa-star'></i><i class='" + earring_obj[i].rating2 + " fa-star'></i><i class='" + earring_obj[i].rating3 + " fa-star'></i><i class='" + earring_obj[i].rating4 + " fa-star'></i><i class='" + earring_obj[i].rating5 + " fa-star'></i></span>" +
            "<div class='d-flex flex-wrap justify-content-center mt-2'>" +
            "<a href='#' class='btn btn-primary add-to-cart'>ADD TO CART</a>" +
            "<div style='display:none'>" +
            "<input type='number' value="+earring_obj[i].price+" class='uniquePrice' />" +
            "<input type='text' value="+earring_obj[i].src+" class='uniqueSrc' />" +
            "<textarea class='uniqueName'>"+earring_obj[i].name+"</textarea>" +
            "</div>" +
            "<a href='#' class='btn btn-primary mt-2'>BUY NOW</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>");

    }
});

//necklace 

$(document).ready(function () {
    var necklace_obj = [{ id: 1, src: "jwl_images/women_necklace/1.jpg", name: "Zayaraa", decs: "Double Layered Blue butterfly necklace Fashion letter Angel pendant Necklace", price: "186", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1099, off: "83% off" },
    { id: 2, src: "jwl_images/women_necklace/2.jpg", name: "goldNera", decs: "Gold Plated Party Wear Real Gold Looking Meenakari Flower Shape", price: "1253", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1391, off: "10% off" },
    { id: 3, src: "jwl_images/women_necklace/3.jpg", name: "Unique Fashion House", decs: "OxidiZed Handmade Choker Necklace for Women and Girls Metal Choker", price: "576", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 1569, off: "63% off" },
    { id: 4, src: "jwl_images/women_necklace/4.jpg", name: "rsp unique", decs: "Afghani Choker Necklace Silver Red Green Color For Women And Girls Silver Plated Alloy Choker", price: "135", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut:999, off: "86% off" },
    { id: 5, src: "jwl_images/women_necklace/5.jpg", name: "Sandhya Creatives", decs: "Handmade Brass Hasli Choker Necklace For Girls and Women Copper Plated Brass Necklace", price: "367", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular", rating4: "fa-regular", rating5: "fa-regular", cut:5999, off: "93% off" },
    { id: 6, src: "jwl_images/women_necklace/6.jpg", name: "GLAMOURA", decs: "Choker necklace, necklace for women, Brass Hasli choker, necklace for girls Brass Choker", price: "399", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular", cut: 2899, off: "86% off" },
    { id: 7, src: "jwl_images/women_necklace/7.jpg", name: "Aarav Creations ", decs: "TRENDING WHITE CREAMISH PEARL LAYERED NECKLACE Plastic, Alloy Necklace", price: "185", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1965, off: "90% off" },
    { id: 8, src: "jwl_images/women_necklace/8.jpg", name: "ExclusiveLane", decs: "Tribal Men Trio Hand-Painted Bohemian Necklace For Women", price: "179", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut:2675, off: "62% off" },
    { id: 9, src: "jwl_images/women_necklace/9.jpg", name: "Sanwariya Jewels ", decs: "Western Green Mat Trendy Choker Crystal Necklace", price: "185", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1999, off: "91% off" },
    { id: 10, src: "jwl_images/women_necklace/10.jpg", name: "SOHI ", decs: "Pearl Gold-plated Plated Alloy Necklace", price: "592", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut:2398, off: "75% off" },
    { id: 11, src: "jwl_images/women_necklace/11.jpg", name: "brado jewellery ", decs: "Butterfly Shape pendant chain necklace for women and girls Gold-plated Plated Alloy Necklace", price: "97", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1999, off: "95% off" },
    { id: 12, src: "jwl_images/women_necklace/12.jpg", name: "brado jewellery ", decs: "brado Jewellery Gold Plated 30 Inch Long for Women Brass Mangalsutra", price: "199", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut:499, off: "60% off" }
    ];
    

    for (var i = 0; i < necklace_obj.length; i++) {
        $("#content_necklace").append(
            "<div class='col-sm-2 d-flex justify-content-center'>" +
            "<div class='card mt-3'>" +
            "<div class='card-img'><img  src=" + necklace_obj[i].src + " class='w-100' alt='...' height='160'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + necklace_obj[i].name + "</h5>" +
            "<span class='card-text'>" + necklace_obj[i].decs + "</span>" +
            "<span class='card-text'><span style='color: green;'><br><b>Special price</b></span><h4> ₹ " + necklace_obj[i].price + "</h4>Discount:  <del>₹" + necklace_obj[i].cut + "</del><span  style='color: green;'><b> " + necklace_obj[i].off + "</b></span></span>" + "<span class='card-text' style='color: green;'><br><i class='" + necklace_obj[i].rating1 + " fa-star'></i><i class='" + necklace_obj[i].rating2 + " fa-star'></i><i class='" + necklace_obj[i].rating3 + " fa-star'></i><i class='" + necklace_obj[i].rating4 + " fa-star'></i><i class='" + necklace_obj[i].rating5 + " fa-star'></i></span>" +
            "<div class='d-flex flex-wrap justify-content-center mt-2'>" +
            "<a href='#' class='btn btn-primary add-to-cart'>ADD TO CART</a>" +
            "<div style='display:none'>" +
            "<input type='number' value="+necklace_obj[i].price+" class='uniquePrice' />" +
            "<input type='text' value="+necklace_obj[i].src+" class='uniqueSrc' />" +
            "<textarea class='uniqueName'>"+necklace_obj[i].name+"</textarea>" +
            "</div>" +
            "<a href='#' class='btn btn-primary mt-2'>BUY NOW</a>" +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>");

    }
});

//girls

$(document).ready(function () {
    var girl_obj = [{ id: 1, src: "jwl_images/girls_ring/1.jpg", name: "ANORI ", decs: "Adjustable Couple Rings Combo Lovers American diamond ", price: "105", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 999, off: "89% off" },
    { id: 2, src: "jwl_images/girls_ring/2.jpg", name: "Devora", decs: "Valentine Gifts Couple Ring for Girls", price: "153", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 999, off: "84% off" },
    { id: 3, src: "jwl_images/girls_ring/3.jpg", name: "ringzinnie ", decs: "Stainless Steel, Brass, Stone, Metal, Copper Cubic Zirconia, Plated Ring Set", price: "90", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut: 999, off: "90% off" },
    { id: 4, src: "jwl_images/girls_ring/4.jpg", name: "YELLOW CHIMES ", decs: "Crystal Blue Stone Studded Floral Shaped Adjustabl Finger Ring for Women", price: "179", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular", rating5: "fa-regular", cut:799, off: "77% off" },
    { id: 5, src: "jwl_images/girls_ring/5.jpg", name: "giva", decs: "Sterling Silver Golden Oval White Ring for Girls and Womens ", price: "367", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular", rating4: "fa-regular", rating5: "fa-regular", cut:5999, off: "93% off" },
    { id: 6, src: "jwl_images/girls_ring/6.jpg", name: "Alvira ", decs: "Adjustable Couple Combo Lovers American diamond", price: "399", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular", cut: 2899, off: "86% off" },
    { id: 7, src: "jwl_images/girls_ring/7.jpg", name: "TODANI JEMS  ", decs: "Todani Jems 9.25 Ratti Natural Panna Emerald Ring With Lab Certificate Brass Ring", price: "441", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1999, off: "77% off" },
    { id: 8, src: "jwl_images/girls_ring/8.jpg", name: "ExclusiveLane", decs: "Tribal Men Trio Hand-Painted Bohemian Necklace For Women", price: "179", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut:2675, off: "62% off" },
    { id: 9, src: "jwl_images/girls_ring/9.jpg", name: "Sanwariya Jewels ", decs: "Western Green Mat Trendy Choker Crystal Necklace", price: "185", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1999, off: "91% off" },
    { id: 10, src: "jwl_images/girls_ring/10.jpg", name: "SOHI ", decs: "Pearl Gold-plated Plated Alloy Necklace", price: "592", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut:2398, off: "75% off" },
    { id: 11, src: "jwl_images/girls_ring/11.jpg", name: "brado jewellery ", decs: "Butterfly Shape pendant chain necklace for women and girls Gold-plated Plated Alloy Necklace", price: "97", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut: 1999, off: "95% off" },
    { id: 12, src: "jwl_images/girls_ring/12.jpg", name: "brado jewellery ", decs: "brado Jewellery Gold Plated 30 Inch Long for Women Brass Mangalsutra", price: "199", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-solid", cut:499, off: "60% off" }
    ];
    

    for (var i = 0; i < girl_obj.length; i++) {
        $("#content_girl").append(
            "<div class='col-sm-2 d-flex justify-content-center'>" +
            "<div class='card mt-3'>" +
            "<div class='card-img'><img  src=" + girl_obj[i].src + " class='w-100' alt='...' height='160'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + girl_obj[i].name + "</h5>" +
            "<span class='card-text'>" + girl_obj[i].decs + "</span>" +
            "<span class='card-text'><span style='color: green;'><br><b>Special price</b></span><h4> ₹ " + girl_obj[i].price + "</h4>Discount:  <del>₹" + girl_obj[i].cut + "</del><span  style='color: green;'><b> " + girl_obj[i].off + "</b></span></span>" + "<span class='card-text' style='color: green;'><br><i class='" + girl_obj[i].rating1 + " fa-star'></i><i class='" + girl_obj[i].rating2 + " fa-star'></i><i class='" + girl_obj[i].rating3 + " fa-star'></i><i class='" + girl_obj[i].rating4 + " fa-star'></i><i class='" + girl_obj[i].rating5 + " fa-star'></i></span>" +
            "<div class='d-flex flex-wrap justify-content-center mt-2'>" +
            "<a href='#' class='btn btn-primary add-to-cart'>ADD TO CART</a>" +
            "<div style='display:none'>" +
            "<input type='number' value="+girl_obj[i].price+" class='uniquePrice' />" +
            "<input type='text' value="+girl_obj[i].src+" class='uniqueSrc' />" +
            "<textarea class='uniqueName'>"+girl_obj[i].name+"</textarea>" +
            "</div>" +
            "<a href='#' class='btn btn-primary mt-2'>BUY NOW</a>" +
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