$(document).ready(function(){

	var playGuitar = function(guitarData){
		var guitString = $(guitarData.guitarString)[0];
		guitString.play()
	}

	$("#lowE").on("click", {guitarString: "#audioLowE"}, function(event){
		playGuitar(event.data);
	});

	$("#A").on("click", {guitarString: "#audioA"}, function(event){
		playGuitar(event.data);
	});

	$("#D").on("click", {guitarString: "#audioD"}, function(event){
		playGuitar(event.data);
	});

	$("#G").on("click", {guitarString: "#audioG"}, function(event){
		playGuitar(event.data);
	});

	$("#B").on("click", {guitarString: "#audioB"}, function(event){
		playGuitar(event.data);
	});
	$("#highE").on("click", {guitarString: "#audioHighE"}, function(event){
		playGuitar(event.data);
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

	var newTurtle = function(){
		$(".mask").css({
			"background": turtleMask[maskNum % turtleMask.length]
		});
		$("#turtleInfo").html(turtleDescription[maskNum]);
		maskNum++;
	}

	var zazaTurtle = function(){
		$(".mask").css("background", "url('images/za.jpg')");
		$("#turtleInfo").html("PIZZA TIME!");
	}

	$(".changeTurtle").click(newTurtle);

	$(".pizzaTurtle").click(zazaTurtle);
});