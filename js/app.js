$(document).ready(function(){

	var reoccur = "<h2 class = 'satisfied'>Not Satisfied?</h2>"+"<input type='button' id='restart' value = 'Try again'><br>"+
	"<h4 class = 'logo'>Geek<span id = 'dot'>.</span>Inc</h4>";

	var person;
	var picture;
	
	$(".logo").click(function(){
		$("#Q1").hide();
		$("#Q2").hide();
		$("#Q3").hide();
		$("#Q4").hide();
		$("#Q5").hide();
		$("#end").hide();
		$("#start").show("slow");
        
		$("body").css("background-color","white");
		$("body").css("color","black");
		
    });
	
    $("#begin").click(function(){
		$("#start").hide();
		$("#Q1").show("slow");
        /* $("#Q1").slideDown("slow"); */
		$("body").css("background-color","#00c6ff");
		$("body").css("color","white");
		$("#next1").css("color", "#00c6ff");
		$("#next1").css("background-color", "white");
		$("#next1").css("font-weight", "600");
		$("#prev1").css("color", "#00c6ff");
		$("#prev1").css("background-color", "white");
		$("#prev1").css("font-weight", "600");
		//$('#Q1').radioOn();
    });
   $("#prev1").click(function(){
		$("#Q1").hide();
		$("#start").show("slow");
		$("body").css("background-color","white");
		$("body").css("color","black");
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
		$("#prev2").css("color", "white");
		$("#prev2").css("background-color", "#00c6ff");
		$("#prev2").css("font-weight", "600");
    });
	
	$("#prev2").click(function(){
		$("#Q2").hide();
		$("#Q1").show("slow");
        $("#Q1").fadeIn("slow");
		$("body").css("background-color","#00c6ff");
		$("body").css("color","white");
		$("#next1").css("color", "#00c6ff");
		$("#next1").css("background-color", "white");
		$("#next1").css("font-weight", "600");
		$("#prev1").css("color", "#00c6ff");
		$("#prev1").css("background-color", "white");
		$("#prev1").css("font-weight", "600");
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
		$("#prev3").css("color", "#00c6ff");
		$("#prev3").css("background-color", "white");
		$("#prev3").css("font-weight", "600");
    });
	
	$("#prev3").click(function(){
		$("#Q3").hide();
		$("#Q2").show("slow");
        $("#Q2").fadeIn("slow");
		$("body").css("background-color","white");
		$("body").css("color","#00c6ff");
		$("#next2").css("color", "white");
		$("#next2").css("background-color", "#00c6ff");
		$("#next2").css("font-weight", "700");
		$("#prev2").css("color", "white");
		$("#prev2").css("background-color", "#00c6ff");
		$("#prev2").css("font-weight", "600");
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
		$("#prev4").css("color", "white");
		$("#prev4").css("background-color", "#00c6ff");
		$("#prev4").css("font-weight", "600");
    });
	
	$("#prev4").click(function(){
		$("#Q4").hide();
		$("#Q3").show("slow");
        $("#Q3").fadeIn("slow");
		$("body").css("background-color","#00c6ff");
		$("body").css("color","white");
		$("#next3").css("color", "#00c6ff");
		$("#next3").css("background-color", "white");
		$("#next3").css("font-weight", "600"); 
		$("#prev3").css("color", "#00c6ff");
		$("#prev3").css("background-color", "white");
		$("#prev3").css("font-weight", "600");
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
		$("#prev5").css("color", "#00c6ff");
		$("#prev5").css("background-color", "white");
		$("#prev5").css("font-weight", "600");
	});

	$("#prev5").click(function(){
		$("#Q5").hide();
		$("#Q4").show("slow");
        $("#Q4").fadeIn("slow");
		$("body").css("background-color","white");
		$("body").css("color","#00c6ff");
		$("#next4").css("color", "white");
		$("#next4").css("background-color", "#00c6ff");
		$("#next4").css("font-weight", "700");
		$("#prev4").css("color", "white");
		$("#prev4").css("background-color", "#00c6ff");
		$("#prev4").css("font-weight", "600");
    });
	
	$("#finish").click(function(){
		$("#Q5").hide();
		$("#end").show("slow");
        $("#end").fadeIn("slow");
        $("#twittershare").show("slow");
        $("#twittershare").fadeIn("slow");
		$("body").css("background-color","white");
		$("body").css("color","black");
		$("#restart").css("color", "white");
		$("#restart").css("background-color", "#00c6ff");
		$("#restart").css("font-weight", "600");  
		var selectedOption1 = $("input:radio[name='Q1']:checked").val();
		var selectedOption2 = $("input:radio[name='Q2']:checked").val();
		var selectedOption3 = $("input:radio[name='Q3']:checked").val();
		var selectedOption4 = $("input:radio[name='Q4']:checked").val();
		var selectedOption5 = $("input:radio[name='Q5']:checked").val();
		var geekCharacter = $("#end").html();



		if (selectedOption1 == "1" && selectedOption3 == "2" && selectedOption4 == "3"){
			$("#end").html("<h2 class='begintext'>Congrats! You are <strong>"+characters[0].name+"</strong></h2>"+
				"<img src ="+characters[0].image+">"+"<br>"+"<p marginTop= '5px'>"+characters[0].Trait+"</p>" + reoccur);
			$("#end").radioOn();
			$("#end").logoOn();
			geekCharacter = $("#end").html();
			person = characters[0].name;
			picture = characters[0].image;
		
		}
		else if (selectedOption1 == "1" && selectedOption3 == "2" && selectedOption4 == "2"){
			$("#end").html("<h2 class='begintext'>Congrats! You are <strong>"+characters[1].name+"</strong></h2>"+
				"<img src ="+characters[1].image+">"+"<br>"+"<p marginTop= '5px'>"+characters[1].Trait+"</p>" + reoccur);
			$("#end").radioOn();
			$("#end").logoOn();
			geekCharacter = $("#end").html();
			person = characters[1].name;
			picture = characters[1].image;
		
		}  
		else if (selectedOption1 == "1" && selectedOption2 == "1" && selectedOption3 == "2" && selectedOption4 == "1"){
			$("#end").html("<h2 class='begintext'>Congrats! You are "+"<strong>"+characters[2].name+"</strong></h2>"+
				"<img src ="+characters[2].image+">"+"<br>"+"<p marginTop= '5px'>"+characters[2].Trait+"</p>" + reoccur);
			$("#end").radioOn();
			$("#end").logoOn();
			geekCharacter = $("#end").html();
			person = characters[2].name;
			picture = characters[2].image;
		
		}
		else if (selectedOption1 == "1" && selectedOption2 == "2" && selectedOption3 == "2" && selectedOption4 == "1" && selectedOption5 == "1"){
			$("#end").html("<h2 class='begintext'>Congrats! You are "+"<strong>"+characters[3].name+"</strong></h2>"+
				"<img src ="+characters[3].image+">"+"<br>"+"<p marginTop= '5px'>"+characters[3].Trait+"</p>" + reoccur);
			$("#end").radioOn();
			$("#end").logoOn();
			geekCharacter = $("#end").html();
			person = characters[3].name;
			picture = characters[3].image;
		
		}else if (selectedOption1 == "1" && selectedOption3 == "1" && selectedOption4 == "1"){
			$("#end").html("<h2 class='begintext'>Congrats! You are "+"<strong>"+characters[4].name+"</strong></h2>"+
				"<img src ="+characters[4].image+">"+"<br>"+"<p marginTop= '5px'>"+characters[4].Trait+"</p>" + reoccur);
			$("#end").radioOn(); 
			$("#end").logoOn();
			geekCharacter = $("#end").html();
			person = characters[4].name;
			picture = characters[4].image;

		} 
		else if (selectedOption1 == "1" && selectedOption3 == "1" && selectedOption4 != "1"){
			$("#end").html("<h2 class='begintext'>Congrats! You are "+"<strong>"+characters[5].name+"</strong></h2>"+
				"<img src ="+characters[5].image+">"+"<br>"+"<p marginTop= '5px'>"+characters[5].Trait+"</p>" + reoccur);
			$("#end").radioOn(); 
			$("#end").logoOn();
			geekCharacter = $("#end").html();
			person = characters[5].name;
			picture = characters[5].image;

		}
		else if (selectedOption1 == "2" && selectedOption3 == "2" && selectedOption4 == "3"){
			$("#end").html("<h2 class='begintext'>Congrats! You are "+"<strong>"+characters[6].name+"</strong></h2>"+
				"<img src ="+characters[6].image+">"+"<br>"+"<p marginTop= '5px'>"+characters[6].Trait+"</p>" + reoccur);
			$("#end").radioOn();
			$("#end").logoOn();
			geekCharacter = $("#end").html();
			person = characters[6].name;
			picture = characters[6].image;

		
		}
		else if (selectedOption1 == "2" && selectedOption3 == "2" && selectedOption4 == "2"){
			$("#end").html("<h2 class='begintext'>Congrats! You are "+"<strong>"+characters[7].name+"</strong></h2>"+
				"<img src ="+characters[7].image+">"+"<br>"+"<p marginTop= '5px'>"+characters[7].Trait+"</p>" + reoccur);
			$("#end").radioOn();
			$("#end").logoOn();
			geekCharacter = $("#end").html();
			person = characters[7].name;
			picture = characters[7].image;
		
		}  
		else if (selectedOption1 == "2" && selectedOption2 == "1" && selectedOption3 == "2" && selectedOption4 == "1"){
			$("#end").html("<h2 class='begintext'>Congrats! You are "+"<strong>"+characters[8].name+"</strong></h2>"+
				"<img src ="+characters[8].image+">"+"<br>"+"<p marginTop= '5px'>"+characters[8].Trait+"</p>" + reoccur);
			$("#end").radioOn();
			$("#end").logoOn();
			geekCharacter = $("#end").html();
			person = characters[8].name;
			picture = characters[7].image;
		
		}
		else if (selectedOption1 == "2" && selectedOption2 == "2" && selectedOption3 == "2" && selectedOption4 == "1" && selectedOption5 == "1"){
			$("#end").html("<h2 class='begintext'>Congrats! You are "+"<strong>"+characters[9].name+"</strong></h2>"+
				"<img src ="+characters[9].image+">"+"<br>"+"<p marginTop= '5px'>"+characters[9].Trait+"</p>" + reoccur);
			$("#end").radioOn();
			$("#end").logoOn();
			geekCharacter = $("#end").html();
			person = characters[9].name;
			picture = characters[9].image;
		
		} 
		else if (selectedOption1 == "2" && selectedOption3 == "1" && selectedOption4 != "1"){
			$("#end").html("<h2 class='begintext'>Congrats! You are "+"<strong>"+characters[10].name+"</strong></h2>"+
				"<img src ="+characters[10].image+">"+"<br>"+"<p marginTop= '5px'>"+characters[10].Trait+"</p>" + reoccur);
			$("#end").radioOn(); 
			$("#end").logoOn();
			geekCharacter = $("#end").html();
			person = characters[10].name;
			picture = characters[10].image;
		}
		else if (selectedOption1 == "2" && selectedOption3 == "1" && selectedOption4 == "1"){
			$("#end").html("<h2 class='begintext'>Congrats! You are "+"<strong>"+characters[11].name+"</strong></h2>"+
				"<img src ="+characters[11].image+">"+"<br>"+"<p marginTop= '5px'>"+characters[11].Trait+"</p>" + reoccur);
			$("#end").radioOn(); 
			$("#end").logoOn();
			geekCharacter = $("#end").html();
			person = characters[11].name;
			picture = characters[11].image;
		}
		else{
			$("#end").html("<h2 class='begintext'>Congrats! You're an unknown Geek, a true rare breed. Give us a minute to research you</h2>");
			$("#end").radioOn(); 
			$("#end").logoOn();
			geekCharacter = $("#end").html();
		}

		$('head').append("<meta name='twitter:image' content="+picture+">");
		var link = document.createElement('a');
		link.setAttribute('href', 'https://twitter.com/share');
		link.setAttribute('class', 'twitter-share-button');
		link.setAttribute('style', 'margin-top:5px;');
		link.setAttribute("data-text" , "I am " + person + " on the 'How much of a Geek are you' quiz. Check your geek status now on " );
		link.setAttribute("data-url","https://efefregene.github.io/geek-quiz");
		link.setAttribute("data-hashtags" ,"GeekQuiz");
		link.setAttribute("data-size" ,"large");
		link.setAttribute("data-related", "twitterapi,twitter");
		$("#twittershare").html(link);
		twttr.widgets.load();


    });
	
	$.fn.logoOn = function(){
		$(".logo").click(function(){
			$("#Q1").hide();
			$("#Q2").hide();
			$("#Q3").hide();
			$("#Q4").hide();
			$("#Q5").hide();
			$("#end").hide();
			$("#twittershare").hide();
			$("#start").show("slow");
	        
			$("body").css("background-color","white");
			$("body").css("color","black");
			
	    });
	};
    
	$.fn.radioOn = function(){
	    $("#restart").click(function(){
			$("#end").hide();
			$("#twittershare").hide();
			$("#Q1").show("slow");
	        $("#Q1").fadeIn("slow");
			$("body").css("background-color","#00c6ff");
			$("body").css("color","white");
			$("#next1").css("color", "#00c6ff");
			$("#next1").css("background-color", "white");
			$("#next1").css("font-weight", "600");
	    });
	};
/*f (!document.feedback.field[0].checked &&
!document.feedback.field[1].checked &&
!document.feedback.field[2].checked) {
	// no radio button is selected
	return false;
}*/

});