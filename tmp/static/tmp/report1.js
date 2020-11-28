$(document).ready(function(){
    $(".skg").hide();
    $(".sfg").hide();
    $(".lng").hide();
    $(".defi").hide();
    $(".expi").hide();

    $("#b1").click(function(){
        $(".skg").show();
        $(".infog").hide();
    });
    $("#b22").click(function(){
        $(".sfg").show();
        $(".skg").hide();
    });
    $("#b32").click(function(){
        $(".lng").show();
        $(".sfg").hide();
    });
    $("#b4").click(function(){
        $(".defi").show();
        $(".lng").hide();
    });
    $("#b5").click(function(){
        $(".expi").show();
        $(".defi").hide();
    });
    $("#b6").click(function(){
        $(".lefthalf").hide();
        $(".righthalf").css({"width":"100%", "display":"block"});
        $("ul").css("margin-left","10%")
    });
    $("#pname").blur(function(){
        $(".prname").text($("#pname").val());
    });
    $("#cname").blur(function(){
        $(".coname").text($("#cname").val());
    });
    $("#bname").blur(function(){
        $(".brname").text($("#bname").val());
    });
    $("#tname").blur(function(){
        $(".toname").text($("#tname").val());
    });
    $("#fname").blur(function(){
        $(".fullname").text($("#fname").val());
    });
    $("#fname2").blur(function(){
        $(".fullname2").text($("#fname2").val());
    });
    $("#fname3").blur(function(){
        $(".fullname3").text($("#fname3").val());
    });
    $("#fname4").blur(function(){
        $(".fullname4").text($("#fname4").val());
    });
    $("#b22").click(function(){
        var skl = $("#skl").val();
        var arr = skl.split(";");
        var i ;
        for (i = 0; i < arr.length; i++) {
            $("#sinfo").append("<li>" + arr[i] + "</li>");
        }
    });
    $("#b51").click(function(){
        $(".defig").trigger("reset");
    });
   
});