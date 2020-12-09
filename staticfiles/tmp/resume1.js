$(document).ready(function(){
    $(".skg").hide();
    $(".sfg").hide();
    $(".lng").hide();
    $(".defi").hide();
    $(".expi").hide();
    $(".edu").hide();
    $(".cer").hide();
    $(".ins").hide();
    $(".b10").hide();

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
    $("#b62").click(function(){
        $(".edu").show();
        $(".expi").hide();
    });
    $("#b72").click(function(){
        $(".cer").show();
        $(".edu").hide();
    });
    $("#b82").click(function(){
        $(".ins").show();
        $(".cer").hide();
    });
    $("#b9").click(function(){
        $(".lefthalf").hide();
        $(".righthalf").css({"width":"100%", "display":"block"});
        $("ul").css("margin-left","10%");
        $(".b10").show();
    });

    /*functioning html*/
    $("#fname").blur(function(){
        $(".fullname").text($("#fname").val());
    });
    $("#lname").blur(function(){
        $(".fullname").text($("#fname").val() + " " + $("#lname").val());
    });
    $("#add").blur(function(){
        $("#addr").text($("#add").val());
    });
    $("#pin").blur(function(){
        $("#addr").html($("#add").val()+ "<br>"+$("#pin").val());
    });
    $("#no").blur(function(){
        $("#pno").text($("#no").val());
    });
    $("#mail").blur(function(){
        $("#email").text($("#mail").val());
    });

    $("#b22").click(function(){
        var skl = $("#skl").val();
        var arr = skl.split(";");
        var i ;
        for (i = 0; i < arr.length; i++) {
            $("#sinfo").append("<li>" + arr[i] + "</li>");
        }
    });
    $("#b21").click(function(){
        $(".SKILLS").trigger("reset");
    });
    $("#b32").click(function(){
        var skl = $("#skt").val();
        var arr = skl.split(";");
        var i ;
        for (i = 0; i < arr.length; i++) {
            $("#sfinfo").append("<li>" + arr[i] + "</li>");
        }
    });
    $("#b31").click(function(){
        $("#sfinfo").remove();
        $(".sft").trigger("reset");
    });
    $("#b4").click(function(){
        var skl = $("#langs").val();
        var arr = skl.split(";");
        var i ;
        for (i = 0; i < arr.length; i++) {
            $("#linfo").append("<li>" + arr[i] + "</li>");
        }
    });
    $("#b5").click(function(){
            $("#infotxt").text($("#defig").val());
    });
    $("#job").blur(function(){
        $("#infoexpr").append("<b>" + $("#job").val() +"</b>");
    });
    $("#sdate").blur(function(){
        $("#infoexpl").append( $("#sdate").val() + " -");
    });
    $("#expig").focus(function(){
        ldate = $("#ldate").val();
        if(ldate.length == 0){
            ldate = "present";
        }
        $("#infoexpl").append("<br>" + ldate);
    });
    $("#expig").blur(function(){
        var skl = $("#expig").val();
        var arr = skl.split(";");
        var i ;
        for (i = 0; i < arr.length; i++) {
            $("#infoexpr").append( "<br>" +arr[i]);
            $("#infoexpl").append("<br>");
        }
        $("#infoexpl").append("<br>");
        $("#infoexpr").append("<br><br>");
    });
   $("#b61").click(function(){
        $(".expig").trigger("reset");
   });
   //next functioning for education
    $("#edu").blur(function(){
        $("#infoedur").append("<b>" + $("#edu").val() +"</b>");
    });
    $("#sdatee").blur(function(){
        $("#infoedul").append( $("#sdatee").val() + " -");
    });
    $("#edug").focus(function(){
        ldate = $("#ldatee").val();
        if(ldate.length == 0){
            ldate = "present";
        }
        $("#infoedul").append("<br>" + ldate);
    });
    $("#edug").blur(function(){
        var skl = $("#expig").val();
        var arr = skl.split(";");
        var i ;
        for (i = 0; i < arr.length; i++) {
            $("#infoedur").append( "<br>" +arr[i]);
            $("#infoedul").append("<br>");
        }
        $("#infoedul").append("<br>");
        $("#infoedur").append("<br><br>");
    });
   $("#b71").click(function(){
        $(".edug").trigger("reset");
   });
   // next for certificates
    $("#sdatec").blur(function(){
        $("#infocerl").append( $("#sdatec").val() + " -");
        });
    $("#cer").blur(function(){
        $("#infocerr").append($("#cer").val() + "<br>");
    })
    $("#b81").click(function(){
        $(".cerg").trigger("reset");
    });
    // next for interest
        $("#ins").blur(function(){
        var skl = $("#ins").val();
        var arr = skl.split(";");
        var i ;
        for (i = 0; i < arr.length; i++) {
            $("#infoinsr").append(arr[i] + "<br>");
        }
    });
});