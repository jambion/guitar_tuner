$(document).ready(function(){

	console.log("Hello World!");

  var lowEAudio = $("#lowEmp3");
	$("#lowE").on("click", function(){
		console.log("Clicked on low E");
		var sound = $("#audioLowE")[0];
		sound.play();
	});

	$("#A").on("click", function(){
		console.log("Clicked on A");
		var sound = $("#audioA")[0];
		sound.play();
	});

	$("#D").on("click", function(){
		console.log("Clicked on D");
		var sound = $("#audioD")[0];
		sound.play();
	});

	$("#G").on("click", function(){
		console.log("Clicked on G");
		var sound = $("#audioG")[0];
		sound.play();
	});

	$("#B").on("click", function(){
		console.log("Clicked on B");
		var sound = $("#audioB")[0];
		sound.play();
	});

	$("#highE").on("click", function(){
		console.log("Clicked on high E");
		var sound = $("#audioHighE")[0];
		sound.play();
	});

	$("#strings > div").mouseenter(function(){
		$(this).fadeTo(100, 0.7);
		
	});	

	$("#strings > div").mouseleave(function(){
		$(this).fadeTo(100, 1);
		
	});

	const turtleMask = ["orange", "purple", "blue", "red"];
	const turtleDescription = [
	"Mikey is the jokester. Slice of pizza in hand and shouts of 'COWABUNGA!', Mikey is a turtle that's always ready for a good time. He had tons of energy, and is playful and fun. He's the life of the party.",
	"Donny is the thinker. Every team needs a brain, and for the Turtles, that's Donny. He is meticulous and thinks problems through before making decisions. Though he can hold his own in a fight, he is more inclined to towards gadgets, mechanical devices, and mathematics.",
	"Leo is the heart of the team. Loyal, brave, and responsible, Leonardo is the leader of the team, but not by choice. His mentor Splinter chose him to be the leader of the group because he knew that Leonardo could be trusted to always act in the best interests of the entire team.",
	"Raphael is fearless. Though not the leader of the group, Raphael is definitely the group's alpha. On a good day, you might think of him as brave, fearless, and resourceful. On a bad day, he's bossy, impulsive, and hot headed."]

	let maskNum = 0;

	$(".changeTurtle").click(function(){
		$(".mask").css({
			"background": turtleMask[maskNum % turtleMask.length]
		});
		$("#turtleInfo").html(turtleDescription[maskNum]);
		maskNum++;
	});

	$(".pizzaTurtle").click(function(){
		$(".mask").css("background", "url('images/za.jpg')");
		$("#turtleInfo").html("PIZZA TIME!");
	})
});