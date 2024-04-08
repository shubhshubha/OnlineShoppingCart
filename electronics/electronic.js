
        $(document).ready(function () {
            var laptop_obj = [{ id: 1, src: "Electronic_img/laptop/laptop1.png", name: "HP Victus Core i5 12th Gen 12450H ", decs: "(8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050/50 TGP) 15-fa1132TX Gaming Laptop  (15.6 inch, Performance Blue, 2.37 Kg, With MS Office)", price: "58990",dprice:"77,556",offer:"23% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(881)" },
            { id: 2, src: "Electronic_img/laptop/laptop2.png", name: "Acer One14 Backlit Core i5 11th Gen 1155G7", decs: "(16 GB/512 GB SSD/Windows 11 Home) Z8-415 Thin and Light Laptop  (14 Inch, Silver, 1.49 Kg)", price: "34990",dprice:"59999",offer:"41% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid",rpeople:"(501)"},
            { id: 3, src: "Electronic_img/laptop/laptop8.jpeg", name: "HP 2023 Athlon Dual Core 3050U 11th Gen 1355G8", decs: "(8 GB/512 GB SSD/Windows 11 Home) 15s-ey1509AU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.69 Kg, With MS Office)", price: "26990",dprice:"35147",offer:"23% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" ,rpeople:"(41)"},
            { id: 4, src: "Electronic_img/laptop/laptop5.jpeg", name: "HP Ryzen 5 Hexa Core 5500U 12th Gen",decs: "(8 GB/512 GB SSD/Windows 11 Home) 15s- eq2144au Thin and Light Laptop  (15.6 inch, Natural Silver, 1.69 kg, With MS Office)", price: "38950",dprice:"54,552",offer:"28% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(88)"},
            { id: 5, src: "Electronic_img/laptop/laptop4.jpeg", name: "APPLE 2022 MacBook AIR M2", decs: "(8 GB/256 GB SSD/Mac OS Monterey) MLXY3HN/A Graphics/NVIDIA GeForce GTX 1650/144 Hz (13.6 Inch, Silver, 1.24 Kg)(15.6 inch, Cloud Grey, 1.58 Kg, With MS Office)", price: "86990",dprice:"1,14,990",offer:"24% off",rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-regular",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(880)"},
            { id: 6, src: "Electronic_img/laptop/laptop9.jpeg", name: "HP Victus Core i5 11th Gen 11400H", decs: "(16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) 16-d0311TX Gaming Laptop  (16.1 Inch, Mica Silver, 2.48 Kg, With MS Office)", price: "59990",dprice:"75,980",offer:"21% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular",rpeople:"(2,481)" },
            { id: 7, src: "Electronic_img/laptop/laptop7.jpeg", name: "ASUS 15 Core i3 11th Gen 1115G4", decs: "(8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X515EA-EJ328WS Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg, With MS Office)", price: "32990",dprice:"49900",offer:"34% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(10)"},
            { id: 8, src: "Electronic_img/laptop/laptop3.jpeg", name: "Lenovo IdeaPad 1 Athlon Dual Core 7120U ", decs: "(8 GB/512 GB SSD/Windows 11 Home) 15AMN7 Thin and Light Laptop  (15.6 inch, Cloud Grey, 1.58 Kg, With MS Office)", price: "26990", dprice:"43,790",offer:"38% off",rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid",rpeople:"(88)"},
            { id: 9, src: "Electronic_img/laptop/laptop11.jpeg", name: "ASUS 15 Core i3 11th Gen 1115G4", decs: "(8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X515EA-EJ328WS Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg, With MS Office)", price: "32990",dprice:"49900",offer:"34% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(1,001)"},
            { id: 10, src: "Electronic_img/laptop/laptop1.png", name: "APPLE 2022 MacBook AIR M2", decs: "(8 GB/256 GB SSD/Mac OS Monterey) MLXY3HN/A Graphics/NVIDIA GeForce GTX 1650/144 Hz (13.6 Inch, Silver, 1.24 Kg)(15.6 inch, Cloud Grey, 1.58 Kg, With MS Office)", price: "58990",dprice:"77,556",offer:"23% off",rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid",rpeople:"(501)"},
            { id: 11, src: "Electronic_img/laptop/laptop10.jpeg", name: "HP Victus Core i5 11th Gen 11400H", decs: "(16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) 16-d0311TX Gaming Laptop  (16.1 Inch, Mica Silver, 2.48 Kg, With MS Office)",price: "26990",dprice:"35147",offer:"23% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular" ,rpeople:"(31)"},
            { id: 12, src: "Electronic_img/laptop/laptop2.png", name: "ASUS 15 Core i3 11th Gen 1115G4", decs: "(8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X515EA-EJ328WS Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg, With MS Office)", price: "32990",dprice:"49900",offer:"34% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(100)"},
            { id: 13, src: "Electronic_img/laptop/laptop13.jpeg", name: "HP Victus Core i5 12th Gen 12450H ", decs: "(8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050/50 TGP) 15-fa1132TX Gaming Laptop  (15.6 inch, Performance Blue, 2.37 Kg, With MS Office)", price: "58990",dprice:"77,556",offer:"23% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(881)" },
            { id: 14, src: "Electronic_img/laptop/laptop14.jpeg", name: "Acer One14 Backlit Core i5 11th Gen 1155G7", decs: "(16 GB/512 GB SSD/Windows 11 Home) Z8-415 Thin and Light Laptop  (14 Inch, Silver, 1.49 Kg)", price: "34990",dprice:"59,999",offer:"41% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid",rpeople:"(501)"},
            { id: 15, src: "Electronic_img/laptop/laptop15.jpeg", name: "HP 2023 Athlon Dual Core 3050U 11th Gen 1355G8", decs: "(8 GB/512 GB SSD/Windows 11 Home) 15s-ey1509AU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.69 Kg, With MS Office)", price: "26990",dprice:"35147",offer:"23% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" ,rpeople:"(41)"},
            { id: 16, src: "Electronic_img/laptop/laptop16.jpeg", name: "HP Ryzen 5 Hexa Core 5500U 12th Gen",decs: "(8 GB/512 GB SSD/Windows 11 Home) 15s- eq2144au Thin and Light Laptop  (15.6 inch, Natural Silver, 1.69 kg, With MS Office)", price: "38950",dprice:"54,552",offer:"28% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(88)"}
            ];

            for (var i = 0; i < laptop_obj.length; i++) {
                $("#laptop").append(
                    "<div class='col-sm-3 mt-3 mb-3'>" +
                    "<div class='card'>" +
                    "<img src="+laptop_obj[i].src+" class='card-img-top img-fluid' alt='...'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>"+laptop_obj[i].name+"</h5>" +
                    "<p class='card-text'>"+laptop_obj[i].decs+"</p>" +
                    "<p class='card-text'><span>Special Price :</span><b> ₹ "+laptop_obj[i].price+"</b><br><span>Discount : <s>₹ "+laptop_obj[i].dprice+"</s></span> <span style='color:green;'>"+laptop_obj[i].offer+"</span></p>" +
                    "<p class='card-text' style='color:green;'><i class='"+laptop_obj[i].rating1+" fa-star'></i><i class='"+laptop_obj[i].rating2+" fa-star'></i><i class='"+laptop_obj[i].rating3+" fa-star'></i><i class='"+laptop_obj[i].rating4+" fa-star'></i><i class='"+laptop_obj[i].rating5+" fa-star'></i><span style='color:black'>"+laptop_obj[i].rpeople+"</span></p>" +
                    "<a href='#' class='btn btn-primary mx-3 add-to-cart' >ADD TO CART</a>" +
                    "<div style='display:none'>" +
                    "<input type='number' value="+laptop_obj[i].price+" class='uniquePrice' />" +
                    "<input type='text' value="+laptop_obj[i].src+" class='uniqueSrc' />" +
                    "<textarea class='uniqueName'>"+laptop_obj[i].name+"</textarea>" +
                    "</div>" +
                    "<a href='#' class='btn btn-primary mx-4'>BUY NOW</a>" +
                    "</div>" +
                    "</div>" +
                    "</div>");
            }
        });

        /* camera jquery code start*/
        
        $(document).ready(function () {
            var camera_obj = [{ id: 1, src: "Electronic_img/camera/camera8.jpeg", name: "Canon R100 Mirrorless Camera", decs: "RF-S 18-45mm f/4.5-6.3 IS STM 13x Digital Zoom, (Black)", price: "46949",dprice:"64,995",offer:"27% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" ,rpeople:"(103)"},
            { id: 2, src: "Electronic_img/camera/camera7.jpeg", name: "SONY CyberShot DSC", decs: "-W800/BC IN5  (20.1 MP, 5 Optical Zoom, 13x Digital Zoom, Black)", price: "6990",dprice:"9,999",offer:"38% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid",rpeople:"(345)"},
            { id: 3, src: "Electronic_img/camera/camera3.png", name: "NIKON COOLPIX P1000", decs: " (16 MP, 125x Optical Zoom, 4x Digital Zoom, Black)", price: "73990",dprice:"77,495",offer:"4% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" ,rpeople:"(673)"},
            { id: 4, src: "Electronic_img/camera/camera4.jpeg", name: "SONY ZV-1F Vlog Camera",decs: "((20.1 MP, Blank Optical Zoom, 4x Digital Zoom, Black)", price: "46990",dprice:"50,690",offer:"7% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(55)"},
            { id: 5, src: "Electronic_img/camera/camera5.jpeg", name: "SONY Alpha Mirrorless Camera", decs: "Body with 1650 mm Zoom Lens Vlog Camera WF-C700 Sony Headphone  (Black)", price: "61,419",dprice:"69,990",offer:"12% off",rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-regular",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(5,670)"},
            { id: 6, src: "Electronic_img/camera/camera9.jpeg", name: "CALLIE 4K 4KACTION CAMERA", decs: "FULL HD Sports and Action Camera  (Black, 16 MP)", price: "1629",dprice:"2,599",offer:"37% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular" ,rpeople:"(1,100)"},
            { id: 7, src: "Electronic_img/camera/camera2.png", name: "SONY Alpha", decs: "NP-FZ100 Battery Mirrorless Camera Body Only  (Black)", price: "296989",dprice:"3,34,900",offer:"11% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(10)"},
            { id: 8, src: "Electronic_img/camera/camera1.png", name: "Panasonic Lumix DC-FZ10002GW ", decs: " (20.1 MP, 16x Optical Zoom, 16x Digital Zoom, Black)",  price: "73990",dprice:"77,495",offer:"4% off",rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid",rpeople:"(178)"},
            { id: 9, src: "Electronic_img/camera/camera6.jpeg", name: "Canon R100 Mirrorless Camera", decs: "RF-S 18-45mm f/4.5-6.3 IS STM 13x Digital Zoom, (Black)", price: "296989",dprice:"3,34,900",offer:"11% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular",rpeople:"(700)" },
            { id: 10, src: "Electronic_img/camera/camera10.jpeg", name: "SONY CyberShot DSC", decs: "-W800/BC IN5  (20.1 MP, 5 Optical Zoom, 13x Digital Zoom, Black)", price: "6990",dprice:"9,999",offer:"38% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid",rpeople:"(154)"},
            { id: 11, src: "Electronic_img/camera/camera11.jpeg", name: "NIKON COOLPIX P1000", decs: " (16 MP, 125x Optical Zoom, 4x Digital Zoom, Black)", price: "73990",dprice:"77,495",offer:"4% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(19)" },
            { id: 12, src: "Electronic_img/camera/camera12.jpeg", name: "SONY ZV-1F Vlog Camera",decs: "((20.1 MP, Blank Optical Zoom, 4x Digital Zoom, Black)",price: "46949",dprice:"64,995",offer:"27% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(100)"},
            { id: 13, src: "Electronic_img/camera/camera13.jpeg", name: "Canon R100 Mirrorless Camera", decs: "RF-S 18-45mm f/4.5-6.3 IS STM 13x Digital Zoom, (Black)", price: "46949",dprice:"64,995",offer:"27% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" ,rpeople:"(103)"},
            { id: 14, src: "Electronic_img/camera/camera14.jpeg", name: "SONY CyberShot DSC", decs: "-W800/BC IN5  (20.1 MP, 5 Optical Zoom, 13x Digital Zoom, Black)", price: "6990",dprice:"9,999",offer:"38% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid",rpeople:"(345)"},
            { id: 15, src: "Electronic_img/camera/camera15.jpeg", name: "NIKON COOLPIX P1000", decs: " (16 MP, 125x Optical Zoom, 4x Digital Zoom, Black)", price: "1629",dprice:"2,599",offer:"37% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" ,rpeople:"(673)"},
            { id: 16, src: "Electronic_img/camera/camera16.jpeg", name: "SONY ZV-1F Vlog Camera",decs: "((20.1 MP, Blank Optical Zoom, 4x Digital Zoom, Black)", price: "46990",dprice:"50,690",offer:"7% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(55)"}
            ];
            
            for (var i = 0; i < camera_obj.length; i++) {
                $("#content1").append(
                    "<div class='col-sm-3 mt-3 mb-2'>" +
                    "<div class='card'>" +
                    "<img src="+camera_obj[i].src+" class='card-img-top img-fluid' alt='...'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>"+camera_obj[i].name+"</h5>" +
                    "<p class='card-text'>"+camera_obj[i].decs+"</p>" +
                    "<p class='card-text'><span>Special Price :</span><b> ₹ "+camera_obj[i].price+"</b><br><span>Discount : <s>₹ "+camera_obj[i].dprice+"</s></span> <span style='color:green;'>"+camera_obj[i].offer+"</span></p>" +
                    "<p class='card-text' style='color:green;'><i class='"+camera_obj[i].rating1+" fa-star'></i><i class='"+camera_obj[i].rating2+" fa-star'></i><i class='"+camera_obj[i].rating3+" fa-star'></i><i class='"+camera_obj[i].rating4+" fa-star'></i><i class='"+camera_obj[i].rating5+" fa-star'></i><span style='color:black'>"+camera_obj[i].rpeople+"</span></p>" +
                    "<a href='#' class='btn btn-primary mx-3 add-to-cart'>ADD TO CART</a>" +
                    "<div style='display:none'>" +
                    "<input type='number' value="+camera_obj[i].price+" class='uniquePrice' />" +
                    "<input type='text' value="+camera_obj[i].src+" class='uniqueSrc' />" +
                    "<textarea class='uniqueName'>"+camera_obj[i].name+"</textarea>" +
                    "</div>" +
                    "<a href='#' class='btn btn-primary mx-4'>BUY NOW</a>" +
                    "</div>" +
                    "</div>" +
                    "</div>");
            }
        });

    /*jQuery Mobile start*/
    
    $(document).ready(function () {
        var mobile_obj = [{ id: 1, src: "Electronic_img/mobile/mobile3.png", name: "Samsung", decs: "Samsung Galaxy A34 5G (Awesome Violet, 8GB, 128GB Storage) | 48 MP No Shake ", price: "14760",dprice:"18,000",offer:"18% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(106)" },
        { id: 2, src: "Electronic_img/mobile/mobile2.jpeg", name: "Redmi Note 12", decs: "Redmi Note 12 4G (Glacier Blue, 4GB RAM, 256GB Storage)", price: "14500",dprice:"16,300",offer:"17% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid",rpeople:"(49)"},
        { id: 3, src: "Electronic_img/mobile/mobile18.jpeg", name: "Redmi Note 12 pro", decs: "Redmi Note 12 Pro 5G (Glacier Blue, 8GB RAM, 256GB Storage)", price: "13300",dprice:"19,000",offer:"30% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" ,rpeople:"(16)"},
        { id: 4, src: "Electronic_img/mobile/mobile4.png", name: "Sumsung Galaxy",decs: "Samsung Galaxy A24 4G (Awesome Violet, 4GB, 64GB Storage) ", price: "11300",dprice:"14,000",offer:"15% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(457)"},
        { id: 5, src: "Electronic_img/mobile/mobile5.png", name: "Motorola", decs: "razr 40 (Sage Green, 8GB RAM, 256GB Storage)  External AMOLED Display 64MP ", price: "12000",dprice:"14,500",offer:"18% off",rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-regular",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(100)"},
        { id: 6, src: "Electronic_img/mobile/mobile6.jpeg", name: "Infinix", decs: "Infinix Smart 7 (Azure Blue, 128 GB) (4 GB RAM)", price: "13000",dprice:"15,500",offer:"18% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-regular" ,rpeople:"(56)"},
        { id: 7, src: "Electronic_img/mobile/mobile7.jpeg", name: "OPPO A77", decs: "OPPO 10 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)", price: "14000",dprice:"17,900",offer:"28% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(2,100)"},
        { id: 8, src: "Electronic_img/mobile/mobile8.jpeg", name: "OnePlus", decs: "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)", price: "11000", dprice:"14,700",offer:"18% off",rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid",rpeople:"(198)"},
        { id: 9, src: "Electronic_img/mobile/mobile9.jpeg", name: "Samsung", decs: "Samsung Galaxy A34 5G (Awesome Violet, 8GB, 128GB Storage) | 48 MP No Shake ", price: "14760",dprice:"18,000",offer:"18% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" ,rpeople:"(450)"},
        { id: 10, src: "Electronic_img/mobile/mobile10.jpeg", name: "Redmi Note 12", decs: "Redmi Note 12 4G (Glacier Blue, 4GB RAM, 256GB Storage)", price: "14500",dprice:"16,300",offer:"17% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid",rpeople:"(320)"},
        { id: 11, src: "Electronic_img/mobile/mobile11.jpeg", name: "Redmi Note 12 pro", decs: "Redmi Note 12 Pro 5G (Glacier Blue, 8GB RAM, 256GB Storage)", price: "13300",dprice:"19,000",offer:"30% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" ,rpeople:"(100)"},
        { id: 12, src: "Electronic_img/mobile/mobile12.jpeg", name: "Sumsung Galaxy",decs: "Samsung Galaxy A24 4G 64GB Storage(Awesome Violet, 4GB, 64GB Storage ", price: "11300",dprice:"14,000",offer:"15% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(245)"},
        { id: 13, src: "Electronic_img/mobile/mobile13.jpeg", name: "Samsung Galaxy F34 5G", decs: "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB 16.51 cm (6.5 inch) HD Display 5MP Front Camera 5000 mAh Lithium-Ion Battery", price: "16499",dprice:"24,490",offer:"32% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(106)" },
        { id: 14, src: "Electronic_img/mobile/mobile14.jpeg", name: "APPLE iPhone 14", decs: "128 GB ROM 15.49 cm (6.1 inch) Super Retina XDR Display 12MP + 12MP | 12MP Front Camera A15 Bionic Chip", price: "56999",dprice:"69,900",offer:"18% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-solid",rating5: "fa-solid",rpeople:"(49)"},
        { id: 15, src: "Electronic_img/mobile/mobile15.jpeg", name: "APPLE iPhone 14 Plus", decs: "128 GB ROM 17.02 cm (6.7 inch) Super Retina XDR Display 12MP + 12MP | 12MP Front Camera A15 Bionic Chip", price: "63999",dprice:"79,900",offer:"19% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular" ,rpeople:"(16)"},
        { id: 16, src: "Electronic_img/mobile/mobile16.jpeg", name: "Sumsung Galaxy",decs: "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB 16.51 cm (6.5 inch) HD Display 5MP Front Camera 5000 mAh Lithium-Ion Battery", price: "6499",dprice:"11,490",offer:"43% off", rating1: "fa-solid",rating2: "fa-solid",rating3: "fa-solid",rating4: "fa-regular",rating5: "fa-regular",rpeople:"(457)"}
        ];

        for (var i = 0; i < mobile_obj.length; i++) {
            $("#mobile").append(
                "<div class='col-sm-3 mt-3 mb-2'>" +
                "<div class='card'>" +
                "<img src="+mobile_obj[i].src+" class='card-img-top img-fluid' alt='...'>" +
                "<div class='card-body'>" +
                "<h5 class='card-title'>"+mobile_obj[i].name+"</h5>" +
                "<p class='card-text'>"+mobile_obj[i].decs+"</p>" +
                "<p class='card-text'>Special Price :<b> ₹ "+mobile_obj[i].price+"</b><br><span>Discount :<s>₹ "+mobile_obj[i].dprice+"</s></span> <span style='color:green;'>"+mobile_obj[i].offer+"</span></p>" +
                "<p class='card-text' style='color:green;'><i class='"+mobile_obj[i].rating1+" fa-star'></i><i class='"+mobile_obj[i].rating2+" fa-star'></i><i class='"+mobile_obj[i].rating3+" fa-star'></i><i class='"+mobile_obj[i].rating4+" fa-star'></i><i class='"+mobile_obj[i].rating5+" fa-star'></i><span style='color:black'>"+mobile_obj[i].rpeople+"</span></p>" +
                "<a href='#' class='btn btn-primary mx-3 add-to-cart'>ADD TO CART</a>" +
                "<div style='display:none'>" +
                    "<input type='number' value="+mobile_obj[i].price+" class='uniquePrice' />" +
                    "<input type='text' value="+mobile_obj[i].src+" class='uniqueSrc' />" +
                    "<textarea class='uniqueName'>"+mobile_obj[i].name+"</textarea>" +
                "</div>" +
                "<a href='#' class='btn btn-primary mx-4'>BUY NOW</a>" +
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
