$(document).ready(function(){
    $("#begin").click(function(){
		$("#start").hide();
		$("#Q1").show("slow");
        /* $("#Q1").slideDown("slow"); */
		$("body").css("background-color","#00c6ff");
		$("body").css("color","white");
		$("#next1").css("color", "#00c6ff");
		$("#next1").css("background-color", "white");
		$("#next1").css("font-weight", "600");



    });
	
	$("#next1").click(function(){
		$("#Q1").hide();
		$("#Q2").show("slow");
        $("#Q2").fadeIn("slow");
		$("body").css("background-color","white");
		$("body").css("color","#00c6ff");
		$("#next2").css("color", "white");
		$("#next2").css("background-color", "#00c6ff");
		$("#next2").css("font-weight", "600");
    });
	
	$("#next2").click(function(){
		$("#Q2").hide();
		$("#Q3").show("slow");
        $("#Q3").fadeIn("slow");
		$("body").css("background-color","#00c6ff");
		$("body").css("color","white");
		$("#next3").css("color", "#00c6ff");
		$("#next3").css("background-color", "white");
		$("#next3").css("font-weight", "600");
    });
	
	$("#next3").click(function(){
		$("#Q3").hide();
		$("#Q4").show("slow");
        $("#Q4").fadeIn("slow");
		$("body").css("background-color","white");
		$("body").css("color","#00c6ff");
		$("#next4").css("color", "white");
		$("#next4").css("background-color", "#00c6ff");
		$("#next4").css("font-weight", "700");
    });
	
	$("#next4").click(function(){
		$("#Q4").hide();
		$("#Q5").show("slow");
        $("#Q5").fadeIn("slow");
		$("body").css("background-color","#00c6ff");
		$("body").css("color","white");
		$("#finish").css("color", "#00c6ff");
		$("#finish").css("background-color", "white");
		$("#finish").css("font-weight", "600");   
	});
	
	$("#finish").click(function(){
		$("#Q5").hide();
		$("#end").show("slow");
        $("#end").fadeIn("slow");
		$("body").css("background-color","white");
		$("body").css("color","black");
		$("#restart").css("color", "white");
		$("#restart").css("background-color", "#00c6ff");
		$("#restart").css("font-weight", "600");   


    });

    $("#restart").click(function(){
		$("#end").hide();
		$("#Q1").show("slow");
        $("#Q1").fadeIn("slow");
		$("body").css("background-color","#00c6ff");
		$("body").css("color","white");
		$("#next1").css("color", "#00c6ff");
		$("#next1").css("background-color", "white");
		$("#next1").css("font-weight", "600");
    });
});