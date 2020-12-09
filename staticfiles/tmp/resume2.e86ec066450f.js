$(document).ready(function(){
    $(".objf").hide();
    $(".eduf").hide();
    $(".expf").hide();
    $(".sklf").hide();
    $(".actf").hide();
    $("#12").click(function(){
        $(".objf").show();
        $(".infog").hide();
    });

    // -------------------------1
  $("#fname").blur(function(){
      var txt = $("#fname").val();
      var i = txt.length;
      var res = txt.substr(0,1);
      res = res.toUpperCase();
      txt = txt.slice(1,i)
      txt = res+txt;
      $(".firstname").text(txt);
  });
  $("#lname").blur(function(){
      var txt = $("#lname").val();
      var i = txt.length;
      var res = txt.substr(0,1);
      res = res.toUpperCase();
      txt = txt.slice(1,i)
      txt = res+txt;
      $(".lastname").text(txt);
  });
  $("#add").blur(function(){
      $("#addr").text($("#add").val());
  });
  $("#no").blur(function(){
      $("#pno").text($("#no").val());
  });
  $("#mail").blur(function(){
      $("#email").text($("#mail").val());
  });
  $("#linked").blur(function(){
      $("#Linkedin").text($("#linked").val());
  });
  $("#Portfolio").blur(function(){
      $("#TB").text($("#Portfolio").val());
  });
  $("#11").click(function(){
      $(".firstname").empty();
      $(".lastname").empty();
      $("#addr").empty();
      $("#pno").empty();
      $("#email").empty();
      $("#Linkedin").empty();
      $("#TB").empty();
  });


  //2--------------------------------------------
  var obj = 0
  $("#obj_info").blur(function(){
      $("#infoobjr").append("<p id=\"objr"+String(obj) +"\" >" +$("#obj_info").val() + "</p>");
    });
  $("#22").click(function(){
      $(".objff").trigger("reset");
      obj =obj+1;
  });
  $("#23").click(function(){
        $(".eduf").show();
        $(".objf").hide();
        obj =obj+1;
    });
  $("#21").click(function(){
      $(".objff").trigger("reset");
      obj = obj-1;
      var x = "#objr" + String(obj);
      $(x).remove();
  });

  //3--------------------------------
  var deg = 0;
  $("#degree").blur(function(){
      $("#infoedul").append("<p id=\"deg"+String(deg)+ "\"style=\"color: purple;\">" + $("#degree").val() + "|<b id=\"bedu" + String(deg) + "\" style=\"color: black;\"></b></p>");
  });
  $("#sch").blur(function(){
      var res = "#bedu"+String(deg);
      $(res).text($("#sch").val());
  });
  $("#fdate").blur(function(){
    $("#infoedul").append("<p id = \"edt" + String(deg) + "\"> " + "Dates "+$("#fdate").val() +"</p>");
  });
  $("#ldate").blur(function(){
    var res = "#edt" +String(deg);
    var date = "Dates " + $("#fdate").val() + " - " + $("#ldate").val();
    $(res).text(date);
  });
  $("#edu_info").blur(function(){
      $("#infoedul").append("<p id=\"eg" +String(deg) + "\">" + $("#edu_info").val() +  "</p>");
  });
  $("#32").click(function(){
    $(".eduff").trigger("reset");
    deg = deg + 1;
});
$("#31").click(function(){
    $(".eduff").trigger("reset");
    deg = deg-1;
    var x1 = "#deg" + String(deg);
    var x2 = "#edt" + String(deg);
    var x3 = "#eg" + String(deg);
    $(x1).remove();
    $(x2).remove();
    $(x3).remove();
});
$("#33").click(function(){
        $(".expf").show();
        $(".eduf").hide();
        deg = deg + 1;
    });


    // ----------------------------4
  var job = 0;
  $("#job").blur(function(){
      $("#infoexpl").append("<p id=\"job"+String(job)+ "\"style=\"color: purple;\">" + $("#job").val() + "|<b id=\"bjob" + String(job) + "\" style=\"color: black;\"></b></p>");
  });
  $("#cmp").blur(function(){
      var res = "#bjob"+String(job);
      $(res).text($("#cmp").val());
  });
  $("#fedate").blur(function(){
    $("#infoexpl").append("<p id = \"exdt" + String(job) + "\"> " + "Dates "+$("#fedate").val() +"</p>");
  });
  $("#ledate").blur(function(){
    var res = "#exdt" +String(job);
    var date = "Dates " + $("#fedate").val() + " - " + $("#ledate").val();
    $(res).text(date);
  });
  $("#job_info").blur(function(){
      $("#infoexpl").append("<p id=\"egx" +String(job) + "\">" + $("#job_info").val() +  "</p>");
  });
  $("#42").click(function(){
    $(".expff").trigger("reset");
    job = job + 1;
});
$("#41").click(function(){
    $(".expff").trigger("reset");
    var x1 = "#job" + String(deg);
    var x2 = "#exdt" + String(deg);
    var x3 = "#egx" + String(deg);
    $(x1).remove();
    $(x2).remove();
    $(x3).remove();
    job = job-1;
});
$("#43").click(function(){
        $(".sklf").show();
        $(".expf").hide();
        job = job + 1;
    });




    // --------------5
var skl = 0;
var num ;

  $("#skl_info").blur(function(){
      if(skl % 2 == 0){
        $("#infosl").append("<li id = \"skl" + String(skl) +  " \">" +$("#skl_info").val() + "</li>");
        num = 0;
      }
      else if(skl % 2 != 0){
        $("#infoslr").append("<li id = \"skl" + String(skl) +  " \">" +$("#skl_info").val() + "</li>");  
        num = 1;  
      }
      if (num == 1){
        $("#infoslr").append("<li id = \"tmp\" style = \"list-style-type : none \">&nbsp &nbsp &nbsp &nbsp</li>");
      }
      else if(num == 1){
            $("#tmp").remove();
      }

  });
   $("#51").click(function(){
      $(".sklff").trigger("reset");
      skl = skl - 1;
      var x = "#skl" + String(act);
      $(x).remove();
   });
   $("#53").click(function(){
        $(".actf").show();
        $(".sklf").hide();
        skl = skl + 1;
    });
    $("#52").click(function(){
    $(".sklff").trigger("reset");
    skl = skl + 1;
});



// -------------------6
var act = 0;
  $("#act_info").blur(function(){
      $("#infoinsl").append("<p id = \"ins" + String(act) +  " \">" +$("#act_info").val() + "</p>");
  });
   $("#61").click(function(){
      $(".actff").trigger("reset");
      act = act - 1;
      var x = "#ins" + String(act);
      $(x).remove();
   });
   $("#63").click(function(){
       $(".lefthalf").hide();
        $(".righthalf").css({"width":"100%", "display":"inline", "height" :"auto" });
        act = act + 1;
    });
    $("#62").click(function(){
    $(".actff").trigger("reset");
    act = act + 1;
});

// more functioning--------------------
    $("#custom").hide();
    $("#Pr").hide();
    $("#63").click(function(){
        $("#custom").show();
        $("#Pr").show();
    });
    $(".colr").hide();
    $("#res").hide();

    $("#custom").click(function(){
        $(".colr").show();
        $(".righthalf").css({"width":"70%", "display":"inline", "height" :"auto" });
    });
    $("#col").blur(function(){
        var color1 = $("#col").val();
        $(".material-icons").css({"color": color1});
        $("res").show();
    });
    $("#col1").blur(function(){
        var color1 = $("#right_left").val();
        $(".right_left").css({"background-color": color1});
        $("res").show();
    });
    $("#col2").blur(function(){
        var color1 = $("#right_right").val();
        $(".right_right").css({"background-color": color1});
        $("res").show();
    });
    $("#res").click(function(){
        $(".right_right").css({"background-color": "white"});
        $(".material-icons").css({"color": "purple"});
        $(".right_left").css({"background-color":  "rgba(199, 187, 187, 0.253)"});
    });

});