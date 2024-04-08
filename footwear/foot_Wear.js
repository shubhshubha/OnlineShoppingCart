 $(document).ready(function () {
            var arr_shoes = [
            { id: 1, src: "foot_Wear/shoes_Img/sh1.jpg", name: "Rupa-star", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 389,dprice:1499,offer:"74% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star-half-stroke",rating5:"fa-regular fa-star" },

            { id: 2, src: "foot_Wear/shoes_Img/sh2.jpg", name: "Walkfree", decs: "Slippers are a type of shoes falling under the broader category.", price: 789,dprice:1999,offer:"69% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star"},

            { id: 3, src: "foot_Wear/shoes_Img/sh3.jpg", name: "Allen Solly", decs: "Slippers are a type of shoes falling under the broader category.", price: 229,dprice:999 ,offer:"77% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star-half-stroke",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 4, src: "foot_Wear/shoes_Img/sh4.jpg", name: "Bata", decs: "Slippers are a type of shoes falling under the broader category.", price: 449,dprice:999 ,offer:"55% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star" },

            { id: 5, src: "foot_Wear/shoes_Img/sh5.jpg", name: "Vaniya Shoes", decs: "Slippers are a type of shoes falling under the broader category.", price: 2196,dprice:5495 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 6, src: "foot_Wear/shoes_Img/sh6.jpg", name: "Vishudh", decs: "Slippers are a type of shoes falling under the broader category.", price: 339,dprice:1299 ,offer:"81% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid ",rating4:"fa-regular ",rating5:"fa-regular fa-star" },

            { id: 7, src: "foot_Wear/shoes_Img/sh7.jpg", name: "SHOETOPIA", decs: "Slippers are a type of shoes falling under the broader category.", price: 789,dprice:1999 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 8, src: "foot_Wear/shoes_Img/sh8.jpg", name: "STYLEONTOES", decs: "Slippers are a type of shoes falling under the broader category.", price: 467,dprice:999 ,offer:"53% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },
            
            { id: 9, src: "foot_Wear/shoes_Img/sh9.jpg", name: "House of Pataudi", decs: "Slippers are a type of shoes falling under the broader category.", price: 449,dprice:999 ,offer:"55% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },
            
            { id: 10, src: "foot_Wear/shoes_Img/sh10.jpg", name: "Star Sanam Footwear", decs: "Slippers are a type of shoes falling under the broader category.", price: 1011,dprice:2299 ,offer:"56% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star" },
            
            { id: 11, src: "foot_Wear/shoes_Img/sh11.jpg", name: "bodofashion", decs: "Slippers are a type of shoes falling under the broader category.", price: 497,dprice:2299 ,offer:"83% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star-half-stroke" },
            
            { id: 12, src: "foot_Wear/shoes_Img/sh12.jpg", name: "ANOUK", decs: "Slippers are a type of shoes falling under the broader category.", price: 1596,dprice:3995 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star-half-stroke",rating5:"fa-regular fa-star" },

            /*sandal*/
             { id: 13, src: "foot_Wear/sandal_Img/sa1.jpg", name: "Rupa-star", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 389,dprice:1499,offer:"74% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star-half-stroke",rating5:"fa-regular fa-star" },

            { id: 14, src: "foot_Wear/sandal_Img/sa2.jpg", name: "Walkfree", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 789,dprice:1999,offer:"69% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star"},

            { id: 15, src: "foot_Wear/sandal_Img/sa3.jpg", name: "Allen Solly", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 229,dprice:999 ,offer:"77% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 16, src: "foot_Wear/sandal_Img/sa4.jpg", name: "Bata", decs: "Best of all sandal. soft in wear any time.what a product!. ", price: 449,dprice:999 ,offer:"55% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star" },

            { id: 17, src: "foot_Wear/sandal_Img/sa5.jpg", name: "Vaniya Shoes", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 2196,dprice:5495 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 18, src: "foot_Wear/sandal_Img/sa6.jpg", name: "Vishudh", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 339,dprice:1299 ,offer:"81% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid ",rating4:"fa-regular ",rating5:"fa-regular fa-star" },

            { id: 19, src: "foot_Wear/sandal_Img/sa7.jpg", name: "SHOETOPIA", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 789,dprice:1999 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 20, src: "foot_Wear/sandal_Img/sa8.jpg", name: "STYLEONTOES", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 467,dprice:999 ,offer:"53% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },
            
            { id: 21, src: "foot_Wear/sandal_Img/sa9.jpg", name: "House of Pataudi", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 449,dprice:999 ,offer:"55% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },
            
            { id: 22, src: "foot_Wear/sandal_Img/sa10.jpg", name: "Star Sanam Footwear", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 1011,dprice:2299 ,offer:"56% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star" },
            
            { id: 23, src: "foot_Wear/sandal_Img/sa11.jpg", name: "bodofashion", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 497,dprice:2299 ,offer:"83% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star-half-stroke" },
            
            { id: 24, src: "foot_Wear/sandal_Img/sa12.jpg", name: "ANOUK", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 1596,dprice:3995 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star-half-stroke",rating5:"fa-regular fa-star" },

            /*Sliper*/
            
            { id: 25, src: "foot_Wear/sliper_Img/sp1.jpg", name: "Rupa-star", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 389,dprice:1499,offer:"74% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star-half-stroke",rating5:"fa-regular fa-star" },

            { id: 26, src: "foot_Wear/sliper_Img/sp2.jpg", name: "Walkfree", decs: "Slippers are a type of shoes falling under the broader category.", price: 789,dprice:1999,offer:"69% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star"},

            { id: 27, src: "foot_Wear/sliper_Img/sp3.jpg", name: "Allen Solly", decs: "Slippers are a type of shoes falling under the broader category.", price: 229,dprice:999 ,offer:"77% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star-half-stroke",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 28, src: "foot_Wear/sliper_Img/sp4.jpg", name: "Bata", decs: "Slippers are a type of shoes falling under the broader category. ", price: 449,dprice:999 ,offer:"55% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star" },

            { id: 29, src: "foot_Wear/sliper_Img/sp5.jpg", name: "Vaniya Shoes", decs: "Slippers are a type of shoes falling under the broader category.", price: 2196,dprice:5495 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 30, src: "foot_Wear/sliper_Img/sp6.jpg", name: "Vishudh", decs: "Slippers are a type of shoes falling under the broader category.", price: 339,dprice:1299 ,offer:"81% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid ",rating4:"fa-regular ",rating5:"fa-regular fa-star" },

            { id: 31, src: "foot_Wear/sliper_Img/sp7.jpg", name: "SHOETOPIA", decs: "Slippers are a type of shoes falling under the broader category.", price: 789,dprice:1999 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 32, src: "foot_Wear/sliper_Img/sp8.jpg", name: "STYLEONTOES", decs: "Slippers are a type of shoes falling under the broader category.", price: 467,dprice:999 ,offer:"53% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star-half-stroke",rating5:"fa-regular fa-star" },
            
            { id: 33, src: "foot_Wear/sliper_Img/sp9.jpg", name: "House of Pataudi", decs: "Slippers are a type of shoes falling under the broader category.", price: 449,dprice:999 ,offer:"55% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },
            
            { id: 34, src: "foot_Wear/sliper_Img/sp10.jpg", name: "Star Sanam Footwear", decs: "Slippers are a type of shoes falling under the broader category.", price: 1011,dprice:2299 ,offer:"56% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star" },
            
            { id: 35, src: "foot_Wear/sliper_Img/sp11.jpg", name: "bodofashion", decs: "Slippers are a type of shoes falling under the broader category.", price: 497,dprice:2299 ,offer:"83% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star-half-stroke" },
            
            { id: 36, src: "foot_Wear/sliper_Img/sp12.jpg", name: "ANOUK", decs: "Slippers are a type of shoes falling under the broader category.", price: 1596,dprice:3995 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star-half-stroke",rating5:"fa-regular fa-star" }
                  
            ];

            for (var i = 0; i < arr_shoes.length; i++) {
                $("#all_product").append(
                    "<div class='col-sm-3 mb-4'>" +
                    "<div class='card' style='width: 20rem;'>" +
                    "<img src="+arr_shoes[i].src+" class='card-img-top' alt='...' height='250'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>"+arr_shoes[i].name+"</h5>" +
                    "<p class='card-text'>"+arr_shoes[i].decs+"</p>" +
                    "<span class='card-text'> <b>₹"+arr_shoes[i].price+"</b>"+' '+"</span>"+
                    "<span class='card-text'><del style='color:red'>"+arr_shoes[i].dprice+"</del>" +' '+
                    "<span style='color:green'>"+arr_shoes[i].offer+"</span></span>"+
                    
                    "<p class='card-text'style='color:gold'><i class='"+arr_shoes[i].rating1+" fa-star'></i><i class='"+arr_shoes[i].rating2+" fa-star'></i><i class='"+arr_shoes[i].rating3+" fa-star'></i><i class='"+arr_shoes[i].rating4+" fa-star'></i><i class='"+arr_shoes[i].rating5+" fa-star'></i></p>" +


                    "<a href='#' class='btn btn-primary add-to-cart'>Add Cart</a>" +
                    "<div style='display:none'>" +
                    "<input type='number' value="+arr_shoes[i].price+" class='uniquePrice' />" +
                    "<input type='text' value="+arr_shoes[i].src+" class='uniqueSrc' />" +
                    "<textarea class='uniqueName'>"+arr_shoes[i].name+"</textarea>" +
                    "</div>" +
                    "<a href='#' class='btn btn-primary mx-5'>Buy Now</a>" +
                    "</div>" +
                    "</div>" +
                    "</div>");

            }
        });

        /*Sandle jQuery */
        $(document).ready(function () {
            var arr_sandal = [
              { id: 1, src: "foot_Wear/sandal_Img/sa1.jpg", name: "Rupa-star", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 389, dprice: 1499, offer: "74% OFF", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular fa-star-half-stroke", rating5: "fa-regular fa-star" },
      
              { id: 2, src: "foot_Wear/sandal_Img/sa2.jpg", name: "Walkfree", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 789, dprice: 1999, offer: "69% OFF", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular fa-star", rating5: "fa-regular fa-star" },
      
              { id: 3, src: "foot_Wear/sandal_Img/sa3.jpg", name: "Allen Solly", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 229, dprice: 999, offer: "77% OFF", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular fa-star", rating4: "fa-regular fa-star", rating5: "fa-regular fa-star" },
      
              { id: 4, src: "foot_Wear/sandal_Img/sa4.jpg", name: "Bata", decs: "Best of all sandal. soft in wear any time.what a product!. ", price: 449, dprice: 999, offer: "55% OFF", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular fa-star" },
      
              { id: 5, src: "foot_Wear/sandal_Img/sa5.jpg", name: "Vaniya Shoes", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 2196, dprice: 5495, offer: "60% OFF", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular fa-star", rating4: "fa-regular fa-star", rating5: "fa-regular fa-star" },
      
              { id: 6, src: "foot_Wear/sandal_Img/sa6.jpg", name: "Vishudh", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 339, dprice: 1299, offer: "81% OFF", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid ", rating4: "fa-regular ", rating5: "fa-regular fa-star" },
      
              { id: 7, src: "foot_Wear/sandal_Img/sa7.jpg", name: "SHOETOPIA", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 789, dprice: 1999, offer: "60% OFF", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular fa-star", rating5: "fa-regular fa-star" },
      
              { id: 8, src: "foot_Wear/sandal_Img/sa8.jpg", name: "STYLEONTOES", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 467, dprice: 999, offer: "53% OFF", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular fa-star", rating5: "fa-regular fa-star" },
      
              { id: 9, src: "foot_Wear/sandal_Img/sa9.jpg", name: "House of Pataudi", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 449, dprice: 999, offer: "55% OFF", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-regular fa-star", rating4: "fa-regular fa-star", rating5: "fa-regular fa-star" },
      
              { id: 10, src: "foot_Wear/sandal_Img/sa10.jpg", name: "Star Sanam Footwear", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 1011, dprice: 2299, offer: "56% OFF", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular fa-star" },
      
              { id: 11, src: "foot_Wear/sandal_Img/sa11.jpg", name: "bodofashion", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 497, dprice: 2299, offer: "83% OFF", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-solid", rating5: "fa-regular fa-star-half-stroke" },
      
              { id: 12, src: "foot_Wear/sandal_Img/sa12.jpg", name: "ANOUK", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 1596, dprice: 3995, offer: "60% OFF", rating1: "fa-solid", rating2: "fa-solid", rating3: "fa-solid", rating4: "fa-regular fa-star-half-stroke", rating5: "fa-regular fa-star" }
            ];
      
            for (var i = 0; i < arr_sandal.length; i++) {
              $("#sandal").append(
                "<div class='col-sm-3 mb-4'>" +
                "<div class='card' style='width: 20rem;'>" +
                "<img src=" + arr_sandal[i].src + " class='card-img-top' alt='...' height='200'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + arr_sandal[i].name + "</h5>" +
                "<p class='card-text'>" + arr_sandal[i].decs + "</p>" +
                "<span class='card-text'> <b>₹" + arr_sandal[i].price + "</b>" + ' ' + "</span>" +
                "<span class='card-text'><del style='color:red'>" + arr_sandal[i].dprice + "</del>" + ' ' +
                "<span style='color:green'>" + arr_sandal[i].offer + "</span></span>" +
      
                "<p class='card-text'style='color:gold'><i class='" + arr_sandal[i].rating1 + " fa-star'></i><i class='" + arr_sandal[i].rating2 + " fa-star'></i><i class='" + arr_sandal[i].rating3 + " fa-star'></i><i class='" + arr_sandal[i].rating4 + " fa-star'></i><i class='" + arr_sandal[i].rating5 + " fa-star'></i></p>" +
      
      
                "<a href='#' class='btn btn-primary add-to-cart'>Add Cart</a>" +
                "<div style='display:none'>" +
            "<input type='number' value="+arr_sandal[i].price+" class='uniquePrice' />" +
            "<input type='text' value="+arr_sandal[i].src+" class='uniqueSrc' />" +
            "<textarea class='uniqueName'>"+arr_sandal[i].name+"</textarea>" +
            "</div>" +
                "<a href='#' class='btn btn-primary mx-5'>Buy Now</a>" +
                "</div>" +
                "</div>" +
                "</div>");
            }
          });
      
          /*shoes jQuery */
          $(document).ready(function () {
            var arr_shoes = [
            { id: 1, src: "foot_Wear/shoes_Img/sh1.jpg", name: "Rupa-star", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 389,dprice:1499,offer:"74% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star-half-stroke",rating5:"fa-regular fa-star" },

            { id: 2, src: "foot_Wear/shoes_Img/sh2.jpg", name: "Walkfree", decs: "Slippers are a type of shoes falling under the broader category.", price: 789,dprice:1999,offer:"69% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star"},

            { id: 3, src: "foot_Wear/shoes_Img/sh3.jpg", name: "Allen Solly", decs: "Slippers are a type of shoes falling under the broader category.", price: 229,dprice:999 ,offer:"77% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star-half-stroke",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 4, src: "foot_Wear/shoes_Img/sh4.jpg", name: "Bata", decs: "Slippers are a type of shoes falling under the broader category.", price: 449,dprice:999 ,offer:"55% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star" },

            { id: 5, src: "foot_Wear/shoes_Img/sh5.jpg", name: "Vaniya Shoes", decs: "Slippers are a type of shoes falling under the broader category.", price: 2196,dprice:5495 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 6, src: "foot_Wear/shoes_Img/sh6.jpg", name: "Vishudh", decs: "Slippers are a type of shoes falling under the broader category.", price: 339,dprice:1299 ,offer:"81% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid ",rating4:"fa-regular ",rating5:"fa-regular fa-star" },

            { id: 7, src: "foot_Wear/shoes_Img/sh7.jpg", name: "SHOETOPIA", decs: "Slippers are a type of shoes falling under the broader category.", price: 789,dprice:1999 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 8, src: "foot_Wear/shoes_Img/sh8.jpg", name: "STYLEONTOES", decs: "Slippers are a type of shoes falling under the broader category.", price: 467,dprice:999 ,offer:"53% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },
            
            { id: 9, src: "foot_Wear/shoes_Img/sh9.jpg", name: "House of Pataudi", decs: "Slippers are a type of shoes falling under the broader category.", price: 449,dprice:999 ,offer:"55% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },
            
            { id: 10, src: "foot_Wear/shoes_Img/sh10.jpg", name: "Star Sanam Footwear", decs: "Slippers are a type of shoes falling under the broader category.", price: 1011,dprice:2299 ,offer:"56% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star" },
            
            { id: 11, src: "foot_Wear/shoes_Img/sh11.jpg", name: "bodofashion", decs: "Slippers are a type of shoes falling under the broader category.", price: 497,dprice:2299 ,offer:"83% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star-half-stroke" },
            
            { id: 12, src: "foot_Wear/shoes_Img/sh12.jpg", name: "ANOUK", decs: "Slippers are a type of shoes falling under the broader category.", price: 1596,dprice:3995 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star-half-stroke",rating5:"fa-regular fa-star" }
            ];

            for (var i = 0; i < arr_shoes.length; i++) {
                $("#shoes").append(
                    "<div class='col-sm-3 mb-4'>" +
                    "<div class='card' style='width: 20rem;'>" +
                    "<img src="+arr_shoes[i].src+" class='card-img-top' alt='...' height='250'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>"+arr_shoes[i].name+"</h5>" +
                    "<p class='card-text'>"+arr_shoes[i].decs+"</p>" +
                    "<span class='card-text'> <b>₹"+arr_shoes[i].price+"</b>"+' '+"</span>"+
                    "<span class='card-text'><del style='color:red'>"+arr_shoes[i].dprice+"</del>" +' '+
                    "<span style='color:green'>"+arr_shoes[i].offer+"</span></span>"+
                    
                    "<p class='card-text'style='color:gold'><i class='"+arr_shoes[i].rating1+" fa-star'></i><i class='"+arr_shoes[i].rating2+" fa-star'></i><i class='"+arr_shoes[i].rating3+" fa-star'></i><i class='"+arr_shoes[i].rating4+" fa-star'></i><i class='"+arr_shoes[i].rating5+" fa-star'></i></p>" +


                    "<a href='#' class='btn btn-primary add-to-cart'>Add Cart</a>" +
                    "<div style='display:none'>" +
            "<input type='number' value="+arr_shoes[i].price+" class='uniquePrice' />" +
            "<input type='text' value="+arr_shoes[i].src+" class='uniqueSrc' />" +
            "<textarea class='uniqueName'>"+arr_shoes[i].name+"</textarea>" +
            "</div>" +
                    "<a href='#' class='btn btn-primary mx-5'>Buy Now</a>" +
                    "</div>" +
                    "</div>" +
                    "</div>");

            }
        });
       
        /*sliper jQuery */
        $(document).ready(function () {
            var arr_sliper = [
            { id: 1, src: "foot_Wear/sliper_Img/sp1.jpg", name: "Rupa-star", decs: "Best of all sandal. soft in wear any time.what a product!.", price: 389,dprice:1499,offer:"74% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star-half-stroke",rating5:"fa-regular fa-star" },

            { id: 2, src: "foot_Wear/sliper_Img/sp2.jpg", name: "Walkfree", decs: "Slippers are a type of shoes falling under the broader category.", price: 789,dprice:1999,offer:"69% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star"},

            { id: 3, src: "foot_Wear/sliper_Img/sp3.jpg", name: "Allen Solly", decs: "Slippers are a type of shoes falling under the broader category.", price: 229,dprice:999 ,offer:"77% OFF",rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star-half-stroke",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 4, src: "foot_Wear/sliper_Img/sp4.jpg", name: "Bata", decs: "Slippers are a type of shoes falling under the broader category. ", price: 449,dprice:999 ,offer:"55% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star" },

            { id: 5, src: "foot_Wear/sliper_Img/sp5.jpg", name: "Vaniya Shoes", decs: "Slippers are a type of shoes falling under the broader category.", price: 2196,dprice:5495 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 6, src: "foot_Wear/sliper_Img/sp6.jpg", name: "Vishudh", decs: "Slippers are a type of shoes falling under the broader category.", price: 339,dprice:1299 ,offer:"81% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid ",rating4:"fa-regular ",rating5:"fa-regular fa-star" },

            { id: 7, src: "foot_Wear/sliper_Img/sp7.jpg", name: "SHOETOPIA", decs: "Slippers are a type of shoes falling under the broader category.", price: 789,dprice:1999 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },

            { id: 8, src: "foot_Wear/sliper_Img/sp8.jpg", name: "STYLEONTOES", decs: "Slippers are a type of shoes falling under the broader category.", price: 467,dprice:999 ,offer:"53% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star-half-stroke",rating5:"fa-regular fa-star" },
            
            { id: 9, src: "foot_Wear/sliper_Img/sp9.jpg", name: "House of Pataudi", decs: "Slippers are a type of shoes falling under the broader category.", price: 449,dprice:999 ,offer:"55% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-regular fa-star",rating4:"fa-regular fa-star",rating5:"fa-regular fa-star" },
            
            { id: 10, src: "foot_Wear/sliper_Img/sp10.jpg", name: "Star Sanam Footwear", decs: "Slippers are a type of shoes falling under the broader category.", price: 1011,dprice:2299 ,offer:"56% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star" },
            
            { id: 11, src: "foot_Wear/sliper_Img/sp11.jpg", name: "bodofashion", decs: "Slippers are a type of shoes falling under the broader category.", price: 497,dprice:2299 ,offer:"83% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-solid",rating5:"fa-regular fa-star-half-stroke" },
            
            { id: 12, src: "foot_Wear/sliper_Img/sp12.jpg", name: "ANOUK", decs: "Slippers are a type of shoes falling under the broader category.", price: 1596,dprice:3995 ,offer:"60% OFF", rating1:"fa-solid",rating2:"fa-solid",rating3:"fa-solid",rating4:"fa-regular fa-star-half-stroke",rating5:"fa-regular fa-star" }
            ];

            for (var i = 0; i < arr_sliper.length; i++) {
                $("#sliper").append(
                    "<div class='col-sm-3 mb-4'>" +
                    "<div class='card' style='width: 20rem;'>" +
                    "<img src="+arr_sliper[i].src+" class='card-img-top' alt='...' height='250'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>"+arr_sliper[i].name+"</h5>" +
                    "<p class='card-text'>"+arr_sliper[i].decs+"</p>" +
                    "<span class='card-text'> <b>₹"+arr_sliper[i].price+"</b>"+' '+"</span>"+
                    "<span class='card-text'><del style='color:red'>"+arr_sliper[i].dprice+"</del>" +' '+
                    "<span style='color:green'>"+arr_sliper[i].offer+"</span></span>"+
                    
                    "<p class='card-text' style='color:gold'><i class='"+arr_sliper[i].rating1+" fa-star'></i><i class='"+arr_sliper[i].rating2+" fa-star'></i><i class='"+arr_sliper[i].rating3+" fa-star'></i><i class='"+arr_sliper[i].rating4+" fa-star'></i><i class='"+arr_sliper[i].rating5+" fa-star'></i></p>" +


                    "<a href='#' class='btn btn-primary add-to-cart'>Add Cart</a>" +
                    "<div style='display:none'>" +
            "<input type='number' value="+arr_sliper[i].price+" class='uniquePrice' />" +
            "<input type='text' value="+arr_sliper[i].src+" class='uniqueSrc' />" +
            "<textarea class='uniqueName'>"+arr_sliper[i].name+"</textarea>" +
            "</div>" +
                    "<a href='#' class='btn btn-primary mx-5'>Buy Now</a>" +
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