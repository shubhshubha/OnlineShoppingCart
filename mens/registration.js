
$(document).ready(function () {
    $("#dname").focus();
     //managing click event of file controle
     $("#attach").click(function(){
    $("#ufile").trigger("click");    
});
//writing the name of selected file 
$("#ufile").change(function(){
    var fname=$(this).val();
    fname=fname.substr(fname.lastIndexOf('\\')+1);
    $("#spfname").remove();
    if(fname.length>0)
    {
    $(this).after("<br><span id='spfname' style='color:blue; margin-bottom:8px'>Selected Picture:"+fname+"</span>");
    }
});
//keyup event of password
var arr=["Very Poor","Poor","Average","Good","Strong","Very Strong"];
$("#tpass").keyup(function(){
    var pass=$(this).val();
    if(pass.length>0)
    {
    var point=evauatePoints(pass);
    $("#indicator").html("Password Strenth: <b>"+arr[point-1]+"</b>");
    }
    else
    $("#indicator").empty();
});
$("#txtdate").datepicker({
    //  changeMonth:true,changeYear:true,yearRange:'1947:2050',dateFormat:'dd-mm-yy'
     changeMonth:true,changeYear:true,yearRange:'1947:2050',dateFormat:'MM dd,yy'

    });
    //validation starts
    $("#btn").click(function () {
        var status = true;
        var name, mob, email,date ,upic,gender, pass, cpass, address;
        name = $("#dname").val().trim();
        mob = $("#mob").val().trim();
        date=$("#txtdate").val();
        gender=$("#ddlgender").val().trim();
        email = $("#em").val().trim();
        upic=$("#ufile")[0].files[0];
        pass = $("#tpass").val().trim();
        cpass = $("#cpass").val().trim();
        address=$("#taddress").val().trim();
        $(".err").remove();

        //validating name
        if (name.length == 0) {
            $("#dname").after("<span class='err'>Please enter your name.</span>");
            status = false;
        }
        else if (name.length < 3) {
            $("#dname").after("<span class='err'>Please enter valid name.</span>");
            status = false;
        }
        //validate Age
    if(gender.length==0)
    {
        $("#ddlgender").after("<span class='err'>Please select a Gender.</span>");
        status=false;
    }
        //validate mobile number
        var regex = /^(0|91)?[6-9][0-9]{9}$/;
        if (mob.length == 0) {
            $("#mob").after("<span class='err'>Please enter mobile number.</span>");
            status = false;
        }
        else if (regex.test(mob) == false) {
            $("#mob").after("<span class='err'> Invalid mobile number</span>");
            status = false;
        }

        //validate email
        if (email.length == 0) {
            $("#em").after("<span class='err'>Please enter email Id</span>");
            status = false;
        }

        //validaet password
        if (pass.length == 0) {
            $("#tpass").after("<span class='err'>Please enter password</span>");
            status = false;
        }
        else if (pass.length < 6) {
            $("#tpass").after("<span class='err'>Minimum 6 characters are required in password</span>");
            status = false;
        }

        //validate confirm password
        if (cpass.length == 0) {
            $("#cpass").after("<span class='err'>Please re-enter your password.</span>");
            status = false;
        }
        else if (pass != cpass) {
            $("#cpass").after("<span class='err'>Password and confirm password must be same.</span>");
            status = false;
        }
        //valide address
    if(address.length==0)
    {
        $("#taddress").after("<span class='err'>Please enter your address.</span>");
        status=false;
    }
    else
    {
    var count=1;
for(x=0;x<address.length;x++)
{
    ch=address.charAt(x);
    if(ch==' ' || ch==',')
    {
        count++;
    }
}
    if(count<3)
    {
        $("#taddress").after("<span class='err'>Please enter complet parmenent address.</span>");
        status=false;
    }
}
//validte file
if(upic==undefined)
{
    $("#ufile").after("<span class='err'>Please select a picture.</span>");
        status=false;
}
else if((upic.size/1024)>150)
{
    $("#ufile").after("<span class='err'>File is too large.</span>");
        status=false;
}
else
{
    var ext=upic.name.substr(upic.name.lastIndexOf('.')).toUpperCase();
    if(!(ext!='.JPG' ||ext!='.JPEG' ||ext!='.PNG'))
    {
        $("#ufile").after("<span class='err'>Invalid image type .Please try again.</span>");
        status=false;
    }
}
if(date.length==0)
{
    $("#txtdate").after("<span class='err'>Please select your DOB.</span>");
        status=false;   
}
        return status;
    });
});

//function to evaluate points of password
function evauatePoints(mystr) {
    var points = 0, ascii = 0, lflag = 0, uflag = 0, dflag = 0, sflag = 0, x;
    for (x = 0; x < mystr.length; x++) {
        ascii = mystr.charCodeAt(x);
        if (ascii >= 65 && ascii <= 90) {
            if (uflag == 0) {
                uflag = 1;
                points++;
            }
        }
        else if (ascii >= 97 && ascii <= 122) {
            if (lflag == 0) {
                lflag = 1;
                points++;
            }
        }
        else if (ascii >= 48 && ascii <= 57) {
            if (dflag == 0) {
                dflag = 1;
                points++;
            }
        }
        else if (sflag == 0) {
            sflag = 1;
            points++;
        }
    }
    if (mystr.length >= 8)
        points = points + 2;
    return points;
}
