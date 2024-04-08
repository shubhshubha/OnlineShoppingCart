 /*men jQuery*/
        $(document).ready(function () {
            var menwatch_obj = [{ id: 1, src: "./watch/wrist_watch/watch1.jpg", name: "SONATA", decs: " Analog Watch For Men NN7987YL02W Navy-blue", price: "6,900", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular" },
            { id: 2, src: "./watch/wrist_watch/watch12.jpg", name: "OMEGA", decs: " For Boys Men's And Boys Exclusive Men301 Brown", price: "2,500", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular"},
            { id: 3, src: "./watch/wrist_watch/watch20.png", name: "SAMSUNG", decs: "Fastrack Revoltt FS1|1.83 Display|BT Calling|Fastcharge|", price: "3,000", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" },
            { id: 4, src: "./watch/wrist_watch/watch17.jpeg", name: "RADO",decs: "HEPOCH Screen Guard for Rado D Star Chronograph Black Ceramic Mens Watch", price: "1,900", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular"},
            { id: 5, src: "./watch/wrist_watch/watch6.jpg", name: "ROLEX", decs: "XPLosive Tempered Glass Guard for Rolex Day Date 18238 18-K Mens Watch  ", price: "12,00",rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular"},
            { id: 6, src: "./watch/wrist_watch/watch7.jpg", name: "PIAOMA", decs: "Day And Date Functioning High Quality Combo Of King Printed Bracelet Analog ", price: "1,999", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular" },
            { id: 7, src: "./watch/wrist_watch/watch8.jpg", name: "ROLEX", decs: "XPLosive Tempered Glass Guard for Pre-Owned -Rolex Cellini 50505 -Gold Watch", price: "15,00", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular"},
            { id: 8, src: "./watch/wrist_watch/watch18.jpeg", name: "ONE-PLUS", decs: "Analog Watch - For Women CR-CK134-GRN-CH", price: "1,900", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid"},
            { id: 9, src: "./watch/wrist_watch/watch14.jpg", name: "INDIA-ONE", decs: "XPLosive Tempered Glass Guard for Rolex Day Date 18238 18-K Mens Watch  ", price: "4,200", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular"},
            { id: 10, src: "./watch/wrist_watch/watch19.jpeg", name: "BOAT", decs: "Analog Watch - For Women CR-CK134-GRN-CH", price: "1,200", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid"},
            { id: 11, src: "./watch/wrist_watch/watch16.jpg", name: "ROLEX", decs: "XPLosive Tempered Glass Guard for Rolex Day Date 18238 18-K Mens Watch  ", price: "2,200", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular"},
            { id: 12, src: "./watch/wrist_watch/watch22.png", name: "SAMSUNG", decs: "Analog Watch - For Women CR-CK134-GRN-CH", price: "1,200", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular"}
            ];

            for (var i = 0; i < menwatch_obj.length; i++) {
                $("#men_watch").append(
                    "<div class='col-sm-3 mt-3'>" +
                    "<div class='card' style='width: 22rem;'>" +
                    "<img style='box-shadow:3px 3px 3px 0px black' src="+menwatch_obj[i].src+" class='card-img-top img-fluid' alt='...'>" +
                    "<div class='card-body w-100'>" +
                    "<h5 class='card-title'>"+menwatch_obj[i].name+"</h5>" +
                    "<p class='card-text'>"+menwatch_obj[i].decs+"</p>" +
                    "<p class='card-text '><b> ₹ "+menwatch_obj[i].price+"</b></p>" +
                    "<p class='card-text' style='color:green'><i class='"+menwatch_obj[i].rating1+" fa-star'></i><i class='"+menwatch_obj[i].rating2+" fa-star'></i><i class='"+menwatch_obj[i].rating3+" fa-star'></i><i class='"+menwatch_obj[i].rating4+" fa-star'></i><i class='"+menwatch_obj[i].rating5+" fa-star'></i></p>" +
                    "<a href='#' class='btn btn-primary mx-3''>ADD TO CARD</a>" +
                    "<a href='#' class='btn btn-primary mx-4'>BUY NOW </a>" +
                    "</div>" +
                    "</div>" +
                    "</div>");

            }
        });

        /*wall jQuery */
        $(document).ready(function () {
            var wallclock_obj = [{ id: 1, src: "./watch/wall_clock/clock11.jpg", name: "SONATA", decs: " Analog Watch", price: "6,900", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular" },
            { id: 2, src: "./watch/wall_clock/clock2.jpg", name: "OMEGA", decs: " For Home", price: "2,500", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular"},
            { id: 3, src: "./watch/wall_clock/clock6.jpeg", name: "SAMSUNG", decs: "Fastrack watch", price: "3,000", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" },
            { id: 4, src: "./watch/wall_clock/clock4.jpg", name: "RADO",decs: "HEPOCH Screen", price: "1,900", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular"},
            { id: 5, src: "./watch/wall_clock/clock5.jpg", name: "ROLEX", decs: "XPLosive Tempered ", price: "12,00",rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular"},
            { id: 6, src: "./watch/wall_clock/clock6.jpeg", name: "PIAOMA", decs: "Day And Date", price: "1,999", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular" },
            { id: 7, src: "./watch/wall_clock/clock8.jpeg", name: "ROLEX", decs: "XPLosive", price: "15,00", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular"},
            { id: 8, src: "./watch/wall_clock/clock9.jpg", name: "ONE-PLUS", decs: "Analog Watch", price: "1,900", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid"},
            { id: 9, src: "./watch/wall_clock/clock12.jpg", name: "INDIA-ONE", decs: "XPLosive  ", price: "4,200", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular"},
            { id: 10, src: "./watch/wall_clock/clock10.jpg", name: "BOAT", decs: "Analog Watch ", price: "1,200", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid"},
            { id: 11, src: "./watch/wall_clock/clock16.jpg", name: "ROLEX", decs: "XPLosive ", price: "2,200", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular"},
            { id: 12, src: "./watch/wall_clock/clock1.jpg", name: "SAMSUNG", decs: "Analog Watch", price: "1,200", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular"}
            ];

            for (var i = 0; i < wallclock_obj.length; i++) {
                $("#wall_clock").append(
                    "<div class='col-sm-2 mt-3'>" +
                    "<div class='card w-100'>" +
                    "<img style='box-shadow:3px 3px 3px 0px black' src="+wallclock_obj[i].src+" class='card-img-top img-fluid' alt='...'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>"+wallclock_obj[i].name+"</h5>" +
                    "<p class='card-text'>"+wallclock_obj[i].decs+"</p>" +
                    "<p class='card-text'><b> ₹ "+wallclock_obj[i].price+"</b></p>" +
                    "<p class='card-text'><i class='"+wallclock_obj[i].rating1+" fa-star'></i><i class='"+wallclock_obj[i].rating2+" fa-star'></i><i class='"+wallclock_obj[i].rating3+" fa-star'></i><i class='"+wallclock_obj[i].rating4+" fa-star'></i><i class='"+wallclock_obj[i].rating5+" fa-star'></i></p>" +
                    "<a href='#' class='btn btn-primary'>Add to Cart</a>" +
                    "<a href='#' class='btn btn-primary ms-3'>Buy</a>" +
                    "</div>" +
                    "</div>" +
                    "</div>");

            }
        });

        /*jQuery women watch */
        
$(document).ready(function () {
    var womenwatch_obj = [{ id: 1, src: "./watch/women_watch/women1.jpg", name: "DANAL-CALVIN ", decs: "diamond korean series Analog Watch  For Women beautiful diamond shape",price: "5,990",dprice:"4,556",offer:"23% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" },
    { id: 2, src: "./watch/women_watch/women8.jpg", name: "ACER", decs: "diamond korean series Analog Watch  For Women beautiful diamond shape", price: "4,990",dprice:"2,999",offer:"41% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid"},
    { id: 3, src: "./watch/women_watch/women2.jpg", name: "SONATA", decs: " Analog Watch For Men NN7987YL02W Navy-blue", price: "8,990",dprice:"3147",offer:"23% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" },
    { id: 4, src: "./watch/women_watch/women3.jpg", name: "ROLEX",decs: " Analog Watch For Men NN7987YL02W Navy-blue", price: "6,950",dprice:"4,552",offer:"28% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular"},
    { id: 5, src: "./watch/women_watch/women4.jpg", name: "QUANTZ", decs: " Analog Watch For Men NN7987YL02W Navy-blue", price: "6,990",dprice:"4,990",offer:"24% off",rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-regular",rating4: "fa-regular",rating5: "fa-regular"},
    { id: 6, src: "./watch/women_watch/women5.jpg", name: "ROLEX", decs: "diamond korean series Analog Watch  For Women beautiful diamond shape", price: "5,990",dprice:"4,980",offer:"21% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular" },
    { id: 7, src: "./watch/women_watch/women11.jpg", name: "SONATA", decs: " Analog Watch For Men NN7987YL02W Navy-blue", price: "7,990",dprice:"4,900",offer:"34% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular"},
    { id: 8, src: "./watch/women_watch/women7.jpg", name: "BOAT ", decs: " Analog Watch For Men NN7987YL02W Navy-blue", price: "2,990", dprice:"790",offer:"38% off",rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid"},
    { id: 9, src: "./watch/women_watch/women9.jpg", name: "SAMSUNG", decs: " Analog Watch For Men NN7987YL02W Navy-blue", price: "2,990",dprice:"1,980",offer:"21% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular" },
    { id: 10, src: "./watch/women_watch/women10.jpg", name: "APPLE", decs: " Analog Watch For Men NN7987YL02W Navy-blue", price: "5,990",dprice:"4,980",offer:"21% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular" },
    { id: 11, src: "./watch/women_watch/women6.jpg", name: "ROLEX", decs: " Analog Watch For Men NN7987YL02W Navy-blue", price: "5,490",dprice:"3,980",offer:"21% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular" },
    { id: 12, src: "./watch/women_watch/women13.jpg", name: "SONATA", decs: " Analog Watch For Men NN7987YL02W Navy-blue", price: "5,990",dprice:"3,980",offer:"21% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular" },
    ];

    for (var i = 0; i < womenwatch_obj.length; i++) {
        $("#women_watch").append(
            "<div class='col-sm-3 mt-3 mb-3'>" +
            "<div class='card w-100' style='width: 22rem;'>" +
            "<img style='box-shadow:3px 3px 3px 0px black' src="+womenwatch_obj[i].src+" class='card-img-top img-fluid' alt='...'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title'>"+womenwatch_obj[i].name+"</h5>" +
            "<p class='card-text'>"+womenwatch_obj[i].decs+"</p>" +
            "<p class='card-text'><span>Special Price :</span><b> ₹ "+womenwatch_obj[i].price+"</b><br><span>Discount : <s>₹ "+womenwatch_obj[i].dprice+"</s></span> <span style='color:green;'>"+womenwatch_obj[i].offer+"</span></p>" +
            "<p class='card-text'><i class='"+womenwatch_obj[i].rating1+" fa-star'></i><i class='"+womenwatch_obj[i].rating2+" fa-star'></i><i class='"+womenwatch_obj[i].rating3+" fa-star'></i><i class='"+womenwatch_obj[i].rating4+" fa-star'></i><i class='"+womenwatch_obj[i].rating5+" fa-star'></i></p>" +
            "<a href='#' class='btn btn-primary mx-3'>ADD TO CART</a>" +
            "<a href='#' class='btn btn-primary mx-4'>BUY NOW</a>" +
            "</div>" +
            "</div>" +
            "</div>");
    }
});





