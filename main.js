$(document).ready(function() {


	// var points = {
	// 	rat: 10,
	// 	roach: 5
	// }

	// var type = "rat";

	// points[type]; // returns 10

	// var type = "roach";

	// points[type]; // return 5

// Initial Scores are Zero
	$("#score-display").text(0);

	$("#rat-display").text(0);
	$("#roach-display").text(0);
	$("#scream-display").text(0);
	$("#gma-display").text(0);


	// SHIRMUNG
	// $(".gamepiece").click(function() {
	//   var points = parseInt($(this).attr("data-points"));
	//   var displayId = "#" + $(this).attr("data-type") + "-display";
	//   $("#score-display").html(function(i, val) { return +val+points });
 //      $(displayId).html(function(i, val) { return +val+points });
	//   $(this).css("display", "none");
	// });

	// while loop with time (couter every time it runs add 1)
	// 	setTimeout()

// Scores Change on Click and Images Disappear
	$( "#duck1a" ).click(function() {
	  	$("#score-display").html(function(i, val) { return +val+10 });
	  	$("#rat-display").html(function(i, val) { return +val+10 });
	  $("#duck1a").css("display", "none");
	});

	$( "#duck1b" ).click(function() {
	  $("#score-display").html(function(i, val) { return +val+5 });
	  $("#roach-display").html(function(i, val) { return +val+5 });
	  $("#duck1b").css("display", "none");
	});

	$( "#duck1c" ).click(function() {
	  $("#score-display").html(function(i, val) { return +val+10 });
	  $("#rat-display").html(function(i, val) { return +val+10 });
	  $("#duck1c").css("display", "none");
	});

	$( "#duck2a" ).click(function() {
	  	$("#score-display").html(function(i, val) { return +val-5 });
	  	$("#scream-display").html(function(i, val) { return +val-5 });
	  $("#duck2a").css("display", "none");
	});

	$( "#duck2b" ).click(function() {
	  $("#score-display").html(function(i, val) { return +val+5 });
	  $("#roach-display").html(function(i, val) { return +val+5 });
	  $("#duck2b").css("display", "none");
	});

	$( "#duck2c" ).click(function() {
	  $("#score-display").html(function(i, val) { return +val-10 });
	  $("#gma-display").html(function(i, val) { return +val-10 });
	  $("#duck2c").css("display", "none");
	});

	$( "#duck3a" ).click(function() {
	  $("#score-display").html(function(i, val) { return +val+5 });
	  $("#roach-display").html(function(i, val) { return +val+5 });
	  $("#duck3a").css("display", "none");
	});

	$( "#duck3b" ).click(function() {
	  $("#score-display").html(function(i, val) { return +val-5 });
	  $("#scream-display").html(function(i, val) { return +val-5 });
	  $("#duck3b").css("display", "none");
	});

	$( "#duck3c" ).click(function() {
	  $("#score-display").html(function(i, val) { return +val+10 });
	  $("#rat-display").html(function(i, val) { return +val+10 });
	  $("#duck3c").css("display", "none");
	});

	$( "#duck4a" ).click(function() {
	  $("#score-display").html(function(i, val) { return +val+10 });
	  $("#rat-display").html(function(i, val) { return +val+10 });
	  $("#duck4a").css("display", "none");
	});

	$( "#duck4b" ).click(function() {
	  $("#score-display").html(function(i, val) { return +val+5 });
	  $("#roach-display").html(function(i, val) { return +val+5 });
	  $("#duck4b").css("display", "none");
	});

	$( "#duck4c" ).click(function() {
	  $("#score-display").html(function(i, val) { return +val-10 });
	  $("#gma-display").html(function(i, val) { return +val-10 });
	  $("#duck4c").css("display", "none");
	});


// Gamepieces Move Across the Screen on Click
// 6 seconds, 1900px


// Math.floor((Math.random() * 5)) + 1


// DUCK 1a
	$( "#clickme" ).click(function() {
  		$( "#duck1a" ).animate({
   		 	left: "+=500",
  		}, 2000, function() {
  		});

  		$( "#duck1a" ).animate({
   		 	left: "+=700",
  		}, 1000, function() {
  		});

  		$( "#duck1a" ).animate({
   		 	left: "+=200",
  		}, 2000, function() {
  		});

  		$( "#duck1a" ).animate({
   		 	left: "+=500",
  		}, 1000, function() {
  			$("#duck1a").css("display", "none");
  		});

	// GO BACK HOME
  		$( "#duck1a" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck1a").css("display", "inline-block");
 		});

 		$( "#duck1a" ).animate({
   		 	left: "+=500",
  		}, 2000, function() {
  		});

  		$( "#duck1a" ).animate({
   		 	left: "+=700",
  		}, 1000, function() {
  		});

  		$( "#duck1a" ).animate({
   		 	left: "+=200",
  		}, 2000, function() {
  		});

  		$( "#duck1a" ).animate({
   		 	left: "+=500",
  		}, 1000, function() {
  			$("#duck1a").css("display", "none");
  		});

	// GO BACK HOME
  		$( "#duck1a" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck1a").css("display", "inline-block");
 		});
	});


// DUCK 1b
	$( "#clickme" ).click(function() {
  		$( "#duck1b" ).animate({
   		 	left: "+=120",
  		}, 3000, function() {
  		});

  		$( "#duck1b" ).animate({
   		 	left: "+=800",
  		}, 1000, function() {
  		});

  		$( "#duck1b" ).animate({
   		 	left: "+=200",
  		}, 1000, function() {
  		});

  		$( "#duck1b" ).animate({
   		 	left: "+=780",
  		}, 1000, function() {
  			$("#duck1b").css("display", "none");
  		});

	// GO BACK HOME
  		$( "#duck1b" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck1b").css("display", "inline-block");
 		});

 		$( "#duck1b" ).animate({
   		 	left: "+=120",
  		}, 3000, function() {
  		});

  		$( "#duck1b" ).animate({
   		 	left: "+=800",
  		}, 1000, function() {
  		});

  		$( "#duck1b" ).animate({
   		 	left: "+=200",
  		}, 1000, function() {
  		});

  		$( "#duck1b" ).animate({
   		 	left: "+=780",
  		}, 1000, function() {
  			$("#duck1b").css("display", "none");
  		});

	// GO BACK HOME
  		$( "#duck1b" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck1b").css("display", "inline-block");
 		});
	});


// DUCK 1c
	$( "#clickme" ).click(function() {
  		$( "#duck1c" ).animate({
   		 	left: "+=200",
  		}, 3000, function() {
  		});

  		$( "#duck1c" ).animate({
   		 	left: "+=500",
  		}, 1000, function() {
  		});

  		$( "#duck1c" ).animate({
   		 	left: "+=900",
  		}, 1000, function() {
  		});

  		$( "#duck1c" ).animate({
   		 	left: "+=300",
  		}, 1000, function() {
  			$("#duck1c").css("display", "none");
  		});

	// GO BACK HOME
  		$( "#duck1c" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck1c").css("display", "inline-block");
 		});

 		$( "#duck1c" ).animate({
   		 	left: "+=200",
  		}, 3000, function() {
  		});

  		$( "#duck1c" ).animate({
   		 	left: "+=500",
  		}, 1000, function() {
  		});

  		$( "#duck1c" ).animate({
   		 	left: "+=900",
  		}, 1000, function() {
  		});

  		$( "#duck1c" ).animate({
   		 	left: "+=300",
  		}, 1000, function() {
  			$("#duck1c").css("display", "none");
  		});

	// GO BACK HOME
  		$( "#duck1c" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck1c").css("display", "inline-block");
 		});
	});


// DUCK 2a
	$( "#clickme" ).click(function() {
  		$( "#duck2a" ).animate({
   		 	left: "+=50",
  		}, 1000, function() {
  		});

  		$( "#duck2a" ).animate({
   		 	left: "+=900",
  		}, 2000, function() {
  		});

  		$( "#duck2a" ).animate({
   		 	left: "+=300",
  		}, 1000, function() {
  		});

  		$( "#duck2a" ).animate({
   		 	left: "+=650",
  		}, 2000, function() {
  			$("#duck2a").css("display", "none");
  		});

	// GO BACK HOME
  		$( "#duck2a" ).animate({
   			left: "-=1900",
  			}, 1, function() {
  		  $("#duck2a").css("display", "inline-block");
 		});

 		$( "#duck2a" ).animate({
   		 	left: "+=50",
  		}, 1000, function() {
  		});

  		$( "#duck2a" ).animate({
   		 	left: "+=900",
  		}, 2000, function() {
  		});

  		$( "#duck2a" ).animate({
   		 	left: "+=300",
  		}, 1000, function() {
  		});

  		$( "#duck2a" ).animate({
   		 	left: "+=650",
  		}, 2000, function() {
  			$("#duck2a").css("display", "none");
  		});

	// GO BACK HOME
  		$( "#duck2a" ).animate({
   			left: "-=1900",
  			}, 1, function() {
  		  $("#duck2a").css("display", "inline-block");
 		});
	});


// DUCK 2b
	$( "#clickme" ).click(function() {
  		$( "#duck2b" ).animate({
   		 	left: "+=400",
  		}, 1000, function() {
  		});

  		$( "#duck2b" ).animate({
   		 	left: "+=800",
  		}, 2000, function() {
  		});

  		$( "#duck2b" ).animate({
   		 	left: "+=100",
  		}, 2000, function() {
  		});

  		$( "#duck2b" ).animate({
   		 	left: "+=600",
  		}, 1000, function() {
  			$("#duck2b").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck2b" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck2b").css("display", "inline-block");
 		});

 		$( "#duck2b" ).animate({
   		 	left: "+=400",
  		}, 1000, function() {
  		});

  		$( "#duck2b" ).animate({
   		 	left: "+=800",
  		}, 2000, function() {
  		});

  		$( "#duck2b" ).animate({
   		 	left: "+=100",
  		}, 2000, function() {
  		});

  		$( "#duck2b" ).animate({
   		 	left: "+=600",
  		}, 1000, function() {
  			$("#duck2b").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck2b" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck2b").css("display", "inline-block");
 		});
	});


// DUCK 2c
	$( "#clickme" ).click(function() {
  		$( "#duck2c" ).animate({
   		 	left: "+=300",
  		}, 2000, function() {
  		});

  		$( "#duck2c" ).animate({
   		 	left: "+=500",
  		}, 1000, function() {
  		});

  		$( "#duck2c" ).animate({
   		 	left: "+=800",
  		}, 2000, function() {
  		});

  		$( "#duck2c" ).animate({
   		 	left: "+=300",
  		}, 1000, function() {
  			$("#duck2c").css("display", "none");
  		});

	// GO BACK HOME
  		$( "#duck2c" ).animate({
   			left: "-=1900",
  			}, 1, function() {
  		  $("#duck2c").css("display", "inline-block");
 		});

 		$( "#duck2c" ).animate({
   		 	left: "+=300",
  		}, 2000, function() {
  		});

  		$( "#duck2c" ).animate({
   		 	left: "+=500",
  		}, 1000, function() {
  		});

  		$( "#duck2c" ).animate({
   		 	left: "+=800",
  		}, 2000, function() {
  		});

  		$( "#duck2c" ).animate({
   		 	left: "+=300",
  		}, 1000, function() {
  			$("#duck2c").css("display", "none");
  		});

	// GO BACK HOME
  		$( "#duck2c" ).animate({
   			left: "-=1900",
  			}, 1, function() {
  		  $("#duck2c").css("display", "inline-block");
 		});
	});


// DUCK 3a
	$( "#clickme" ).click(function() {
  		$( "#duck3a" ).animate({
   		 	left: "+=500",
  		}, 3000, function() {
  		});

  		$( "#duck3a" ).animate({
   		 	left: "+=700",
  		}, 1500, function() {
  		});

  		$( "#duck3a" ).animate({
   		 	left: "+=500",
  		}, 500, function() {
  		});

  		$( "#duck3a" ).animate({
   		 	left: "+=200",
  		}, 1000, function() {
  			$("#duck3a").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck3a" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck3a").css("display", "inline-block");
 		});

 		$( "#duck3a" ).animate({
   		 	left: "+=500",
  		}, 3000, function() {
  		});

  		$( "#duck3a" ).animate({
   		 	left: "+=700",
  		}, 1500, function() {
  		});

  		$( "#duck3a" ).animate({
   		 	left: "+=500",
  		}, 500, function() {
  		});

  		$( "#duck3a" ).animate({
   		 	left: "+=200",
  		}, 1000, function() {
  			$("#duck3a").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck3a" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck3a").css("display", "inline-block");
 		});
	});


// DUCK 3b
	$( "#clickme" ).click(function() {
  		$( "#duck3b" ).animate({
   		 	left: "+=100",
  		}, 1500, function() {
  		});

  		$( "#duck3b" ).animate({
   		 	left: "+=500",
  		}, 2000, function() {
  		});

  		$( "#duck3b" ).animate({
   		 	left: "+=600",
  		}, 1000, function() {
  		});

  		$( "#duck3b" ).animate({
   		 	left: "+=700",
  		}, 1500, function() {
  			$("#duck3b").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck3b" ).animate({
   			left: "-=1900",
  			}, 1, function() {
  	      $("#duck3b").css("display", "inline-block");
 		});

 		$( "#duck3b" ).animate({
   		 	left: "+=100",
  		}, 1500, function() {
  		});

  		$( "#duck3b" ).animate({
   		 	left: "+=500",
  		}, 2000, function() {
  		});

  		$( "#duck3b" ).animate({
   		 	left: "+=600",
  		}, 1000, function() {
  		});

  		$( "#duck3b" ).animate({
   		 	left: "+=700",
  		}, 1500, function() {
  			$("#duck3b").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck3b" ).animate({
   			left: "-=1900",
  			}, 1, function() {
  	      $("#duck3b").css("display", "inline-block");
 		});
	});


// DUCK 3c
	$( "#clickme" ).click(function() {
  		$( "#duck3c" ).animate({
   		 	left: "+=700",
  		}, 1000, function() {
  		});

  		$( "#duck3c" ).animate({
   		 	left: "+=500",
  		}, 2000, function() {
  		});

  		$( "#duck3c" ).animate({
  			left: "+=400",
  		}, 2000, function() {
  		});

  		$( "#duck3c" ).animate({
   		 	left: "+=300",
  		}, 1000, function() {
  			$("#duck3c").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck3c" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck3c").css("display", "inline-block");
 		});

 		$( "#duck3c" ).animate({
   		 	left: "+=700",
  		}, 1000, function() {
  		});

  		$( "#duck3c" ).animate({
   		 	left: "+=500",
  		}, 2000, function() {
  		});

  		$( "#duck3c" ).animate({
  			left: "+=400",
  		}, 2000, function() {
  		});

  		$( "#duck3c" ).animate({
   		 	left: "+=300",
  		}, 1000, function() {
  			$("#duck3c").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck3c" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck3c").css("display", "inline-block");
 		});
	});


// DUCK 4a
	$( "#clickme" ).click(function() {
  		$( "#duck4a" ).animate({
   		 	left: "+=200",
  		}, 500, function() {
  		});

  		$( "#duck4a" ).animate({
   		 	left: "+=800",
  		}, 2000, function() {
  		});

  		$( "#duck4a" ).animate({
   		 	left: "+=200",
  		}, 2000, function() {
  		});

  		$( "#duck4a" ).animate({
   		 	left: "+=700",
  		}, 1500, function() {
  			$("#duck4a").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck4a" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck4a").css("display", "inline-block");
 		});

 			$( "#duck4a" ).animate({
   		 	left: "+=200",
  		}, 500, function() {
  		});

  		$( "#duck4a" ).animate({
   		 	left: "+=800",
  		}, 2000, function() {
  		});

  		$( "#duck4a" ).animate({
   		 	left: "+=200",
  		}, 2000, function() {
  		});

  		$( "#duck4a" ).animate({
   		 	left: "+=700",
  		}, 1500, function() {
  			$("#duck4a").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck4a" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck4a").css("display", "inline-block");
 		});

	});


// DUCK 4b
	$( "#clickme" ).click(function() {
  		$( "#duck4b" ).animate({
   		 	left: "+=700",
  		}, 500, function() {
  		});

  		$( "#duck4b" ).animate({
   		 	left: "+=500",
  		}, 1500, function() {
  		});

  		$( "#duck4b" ).animate({
   		 	left: "+=400",
  		}, 2000, function() {
  		});

  		$( "#duck4b" ).animate({
   		 	left: "+=300",
  		}, 2000, function() {
  			$("#duck4b").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck4b" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck4b").css("display", "inline-block");
 		});

 		$( "#duck4b" ).animate({
   		 	left: "+=700",
  		}, 500, function() {
  		});

  		$( "#duck4b" ).animate({
   		 	left: "+=500",
  		}, 1500, function() {
  		});

  		$( "#duck4b" ).animate({
   		 	left: "+=400",
  		}, 2000, function() {
  		});

  		$( "#duck4b" ).animate({
   		 	left: "+=300",
  		}, 2000, function() {
  			$("#duck4b").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck4b" ).animate({
   			left: "-=1900",
  			}, 1, function() {
          $("#duck4b").css("display", "inline-block");
 		});

	});


// DUCK 4c
// move right then disappear, go back home fast, reappear, begin again
	$( "#clickme" ).click(function() {
  		$( "#duck4c" ).animate({
   		 	left: "+=200",
  		}, 500, function() {
  		});

  		$( "#duck4c" ).animate({
   		 	left: "+=800",
  		}, 2000, function() {
  		});

  		$( "#duck4c" ).animate({
   		 	left: "+=100",
  		}, 2000, function() {
  		});

  		$( "#duck4c" ).animate({
   		 	left: "+=800",
  		}, 1500, function() {
  			$("#duck4c").css("display", "none");
  			// SHIRMUNG: $("#duck4c").css("left", "?");
  		});

  	// GO BACK HOME
  		$( "#duck4c" ).animate({
   			left: "-=1900",
  			}, 1, function() {
  		  $("#duck4c").css("display", "inline-block");
 		});

 		$( "#duck4c" ).animate({
   		 left: "+=200",
  		}, 500, function() {
  		});

  		$( "#duck4c" ).animate({
   		 	left: "+=800",
  		}, 2000, function() {
  		});

  		$( "#duck4c" ).animate({
   		 	left: "+=100",
  		}, 2000, function() {
  		});

  		$( "#duck4c" ).animate({
   		 	left: "+=800",
  		}, 1500, function() {
  			$("#duck4c").css("display", "none");
  		});

  	// GO BACK HOME
  		$( "#duck4c" ).animate({
   			left: "-=1900",
  			}, 1, function() {
  		  $("#duck4c").css("display", "inline-block");
  		  $("#buttonchange").html("CONTINUE");
  		  $(".go-again").css("background-color", "coral");
 		});

	});


});