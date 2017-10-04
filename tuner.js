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

});