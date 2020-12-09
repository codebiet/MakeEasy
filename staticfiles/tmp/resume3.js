$(document).ready(function(){
    $(".cval").hide();
    $(".cval1").hide();
    $(".cval2").hide();
    $(".cval3").hide();
    $(".fval").hide();
    $(".fval1").hide();
    $(".fval2").hide();
$(".a_ex").click(function(){
    $(".exp").append(" <p class=\"cmp_detail\"><span contenteditable=\"true\" class=\"cmp\"><b>Company</b></span>, <span contenteditable=\"true\" class=\"loc\">Location</span> -- <span contenteditable=\"true\"class=\"job_title\"><i> Job Title</i></span></p><p class=\"datecmp\"><span class=\"sdate_cmp\" contenteditable=\"true\">MONTH 20XX</span> -- <span class=\"ldate\" contenteditable=\"true\"> MONTH 20XX</span></p><p class=\"job_detail\" contenteditable=\"true\">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Modi tempore maiores alias laboriosam eligendi, officia unde aliquam nihil? Accusantium dolorreprehenderit qui mollitia dignissimos! Veniam tempora laudantium repellat consequatur.</p><br>");
});
$(".a_eds").click(function(){
    $(".edu").append(" <p class=\"cmp_detail\"><span contenteditable=\"true\" class=\"cmp\"><b>School name</b></span>, <span contenteditable=\"true\" class=\"loc\">Location</span> -- <span contenteditable=\"true\"class=\"Degree\"><i> Job Title</i></span></p><p class=\"datecmp\"><span class=\"sdate_cmp\" contenteditable=\"true\">MONTH 20XX</span> -- <span class=\"ldate\" contenteditable=\"true\"> MONTH 20XX</span></p><p class=\"job_detail\" contenteditable=\"true\">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Modi tempore maiores alias laboriosam eligendi, officia unde aliquam nihil? Accusantium dolorreprehenderit qui mollitia dignissimos! Veniam tempora laudantium repellat consequatur.</p><br>");
});
$(".a_s").click(function(){
    $(".skills").append("<p contenteditable=\"true\">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat arc</p>");
});

$(".c_b").click(function(){
    $(".cval3").show();
});
$(".c_h").click(function(){
    $(".cval").show();
});
$(".c_n").click(function(){
    $(".cval1").show();
});
$(".c_d").click(function(){
    $(".cval2").show();
});
$("#val1").click(function(){
    $(".cval").hide();
});
$("#val2").click(function(){
    $(".cval1").hide();
});
$("#val3").click(function(){
    $(".cval2").hide();
});
$("#val4").click(function(){
    $(".cval3").hide();
});
$(".f_h").click(function(){
    $(".fval").show();
});
$(".f_n").click(function(){
    $(".fval1").show();
});
$(".f_d").click(function(){
    $(".fval2").show();
});
$("#val5").click(function(){
    $(".fval").hide();
});
$("#val6").click(function(){
    $(".fval1").hide();
});
$("#val7").click(function(){
    $(".fval2").hide();
});
$("#cval3").click(function(){
    var red = $("#redh3").val();
    var green = $("#greenh3").val();
    var blue = $("#blueh3").val();
    var op = $("#oph3").val();
    op = op / 1000;
    var rgba = "rgba("+ String(red)+","+ String(green)+","+String(blue)+","+ String(op)+")";
    $("body").css({"background-color" : rgba});
});
$("#cval2").click(function(){
    var red = $("#redh2").val();
    var green = $("#greenh2").val();
    var blue = $("#blueh2").val();
    var op = $("#oph2").val();
    op = op / 1000;
    var rgba = "rgba("+ String(red)+","+ String(green)+","+String(blue)+","+ String(op)+")";
    $("*").css({"color" : rgba});
});
$("#cval1").click(function(){
    var red = $("#redh1").val();
    var green = $("#greenh1").val();
    var blue = $("#blueh1").val();
    var op = $("#oph1").val();
    op = op / 1000;
    var rgba = "rgba("+ String(red)+","+ String(green)+","+String(blue)+","+ String(op)+")";
    $("#Fullname").css({"color" : rgba});
});
$("#cval").click(function(){
    var red = $("#redh").val();
    var green = $("#greenh").val();
    var blue = $("#blueh").val();
    var op = $("#oph").val();
    op = op / 1000;
    var rgba = "rgba("+ String(red)+","+ String(green)+","+String(blue)+","+ String(op)+")";
    $(".heading").css({"color" : rgba});
});
$("#Heading").blur(function(){
    var font = $("#Heading").val();
    font = String(font) + "px";
    $(".heading").css({"font-size":font});
});
$("#nm").blur(function(){
    var font = $("#nm").val();
    font = String(font) + "px";
    $(".Fullname").css({"font-size":font});
});
$("#detail").blur(function(){
    var font = $("#detail").val();
    font = String(font) + "px";
    $(".job_detail").css({"font-size":font});
    $(".skills").css({"font-size":font});
    $(".obj").css({"font-size":font});
});
$(".done").click(function(){
    $(".topmost").hide();
});
});