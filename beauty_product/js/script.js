
$(document).ready(function(){
    var arr_obj=[{id:-1,src:"./img/blog1.webp",name:"Blog-1",decs:"jnvj jgnbjg jmnkh nkmhnk jnvj jtnbj jtbj jtnbjnjn ntgtjkfmbkgbgknhknkhmjgnbjgnjhnkhmnkhmknmhknmhkmgjynmhknmhknmhkmnkmt h uhujijikmk jnkmkm kmlm lmlml",price:45,rating:0},
     {id:-1,src:"./img/blog2.webp",name:"Blog-2",decs:"abcd jgnbjg jmnkh nkmhnk arr_objnvj jtnbj jtbj",price:50,rating:0},
     {id:-1,src:"./img/blog3.webp",name:"Blog-3",decs:"efgh jgnbjg jmnkh nkmhnk arr_objnvj jtnbj jtbj",price:55,rating:0},
     {id:-1,src:"./img/department.jpg",name:"Department",decs:"hijkl jgnbjg jmnkh nkmhnk arr_objnvj jtnbj jtbj ",price:65,rating:0},
     {id:-1,src:"./img/group.jpg",name:"Group Pic",decs:"mnopq jgnbjg jmnkh nkmhnk arr_objnvj jtnbj jtbj",price:75,rating:0},
     {id:-1,src:"./img/header.jpg",name:"Header kmn",decs:"rstuv jgnbjg jmnkh nkmhnk arr_objnvj jtnbj jtbj",price:85,rating:0}];
   
    for(var i=0;i<arr_obj.length;i++){
           $("#content").append("<div class='col-sm-6 d-flex justify-content-center align-items-center'>"+
        "<div class='row ms-2 me-2 mt-4'>"+
            "<div class='col-sm-4 d-flex justify-content-center align-items-center ' >"+
                "<img src="+arr_obj[i].src+" alt='' class='img-thumbnail' >"+
            "</div>"+
            "<div class='col-sm-8 d-flex justify-content-center flex-column mt-2 px-3 '>"+
                "<span >"+arr_obj[i].name+"</span>"+
                "<p class='text-break text-start text-warp text-black-50'> "+arr_obj[i].decs+"</p>"+
                "<span >******************$"+arr_obj[i].price+"</span>"+
                "<span><img src='./img/blank_star.png' value='1' height='20' /><img src='./img/blank_star.png' height='20' /></span>"+
            "</div>"+
       
       " </div>"+  
   "</div>");
          
    }
});
