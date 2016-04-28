//RPG Game by Patrick Hernandez

var stats = {
	char1: [
	name = "1",
	//120
	health = 200,
	att = 8,
	ctatt = 10 ],
	char2: [
	name = "2",
	health = 100,
	att = 8,
	ctatt = 5 ],
	char3: [
	name = "3",
	health = 150,
	att = 8,
	ctatt = 20 ],
	char4: [
	name = "4",
	health = 180,
	att = 8,
	ctatt = 25 ]

};

$(document).ready(function() {

	var health1 = stats.char1[1];
	var health2 = stats.char2[1];
	var health3 = stats.char3[1];
	var health4 = stats.char4[1];

	var att1 = stats.char1[2];
	var att2 = stats.char2[2];
	var att3 = stats.char3[2];
	var att4 = stats.char4[2];

	var ctatt1 = stats.char1[3];
	var ctatt2 = stats.char2[3];
	var ctatt3 = stats.char3[3];
	var ctatt4 = stats.char4[3];

	var char1 = $("#char1");
	var char2 = $("#char2");
	var char3 = $("#char3");
	var char4 = $("#char4");


	var koAlertchar1 = ("Muhammed Ali has been Knocked Out!" + "<br>" + "Choose another boxer to fight!");
	var koAlertchar2 = ("Mike Tyson has been Knocked Out!" + "<br>" + "Choose another boxer to fight!");
	var koAlertchar3 = ("Manny Pacquiao has been Knocked Out!" + "<br>" + "Choose another boxer to fight!");
	var koAlertchar4 = ("Clubber Lang has been Knocked Out!" + "<br>" + "Choose another boxer to fight!");


//edit defender css so that enemies and defeated divs are based on their div and not this image, make this reset image afterwards
	var char1pic = ("<div class=\"defender\">" + "<img src=\"assets/images/PH1.JPG\">" + "</div>");
	var char2pic = ("<div class=\"defender\">" + "<img src=\"assets/images/PH2.JPG\">" + "</div>");
	var char3pic = ("<div class=\"defender\">" + "<img src=\"assets/images/PH3.JPG\">" + "</div>");
	var char4pic = ("<div class=\"defender\">" + "<img src=\"assets/images/PH4.JPG\">" + "</div>");

	var vsenemy1 = false;
	var vsenemy2 = false;
	var vsenemy3 = false;

	var userpickchar = false;

	var enemy1defeat;
	var enemy2defeat;
	var enemy3defeat;

	var counter = 8;

	var boxB = ("<button id=\"box\">" + "Box!" + "</button>");

	var resetB = ("<button id=\"reset\">" + "Reset" + "</button>");

	$("#stats").hide();
	$("#defstats").hide();
	$("#alerts").html("Pick a boxer!");

	$("#char1").on("click", function(){
		var char1game = new game(char1, char2pic, char3pic, char4pic, health1, att1, ctatt1, health2, att2, ctatt2, health3, att3, ctatt3, health4, att4, ctatt4, koAlertchar2, koAlertchar3, koAlertchar4); 
	});

	$("#char2").on("click", function(){
		var char2game = new game(char2, char1pic, char3pic, char4pic, health2, att2, ctatt2, health1, att1, ctatt1, health3, att3, ctatt3, health4, att4, ctatt4, koAlertchar1, koAlertchar3, koAlertchar4); 
	});

	$("#char3").on("click", function(){
		var char3game = new game(char3, char1pic, char2pic, char4pic, health3, att3, ctatt3, health1, att1, ctatt1, health2, att2, ctatt2, health4, att4, ctatt4, koAlertchar1, koAlertchar2, koAlertchar4); 
	});

	$("#char4").on("click", function(){
		var char4game = new game(char4, char1pic, char2pic, char3pic, health4, att4, ctatt4, health1, att1, ctatt1, health2, att2, ctatt2, health3, att3, ctatt3, koAlertchar1, koAlertchar2, koAlertchar3); 
	}); 

	var game = function(userpick, enemy1, enemy2, enemy3, userhealth, userattack, userct, enemy1hp, enemy1att, enemy1ct, enemy2hp, enemy2att, enemy2ct, enemy3hp, enemy3att, enemy3ct, koAlert1, koAlert2, koAlert3){
		this.userpick = userpick;
		this.enemy1 = enemy1;
		this.enemy2 = enemy2;
		this.enemy3 = enemy3;

		this.userhealth = userhealth;
		this.userattack = userattack;
		this.userct = userct;

		this.enemy1hp = enemy1hp;
		this.enemy1att = enemy1att;
		this.enemy1ct = enemy1ct;

		this.enemy2hp = enemy2hp;
		this.enemy2att = enemy2ct;
		this.enemy2ct = enemy2att;

		this.enemy3hp = enemy3hp;
		this.enemy3att = enemy3att;
		this.enemy3ct = enemy3ct;

		this.koAlert1 = koAlert1;
		this.koAlert2 = koAlert2;
		this.koAlert3 = koAlert3;


			$("#userpickplace").append(userpick);
			$("#enemy1spot").append(enemy1);
			$("#enemy2spot").append(enemy2);
			$("#enemy3spot").append(enemy3);
			$("#selection").empty();
			$("#alerts").html("Choose an opponent!");

			userpickchar = true;

			$("#stats").show();
			$("#currenthp").html(userhealth);
			$("#currentatt").html(userattack);
			$("#ct").html(userct);

			$("#enemy1spot").on("click", function(){
				$("#attackB").append(boxB);
				$("#defplace").html(enemy1);
				$("#enemy1spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vsenemy1 = true;
				$("#defstats").show();
				$("#defhp").html(enemy1hp);
				$("#defatt").html(enemy1att);
				$("#defct").html(enemy1ct);

				// If user chooses to fight enemy spot 1
				if (userpickchar === true && vsenemy1 === true) {
					vsenemy2 = false;
					vsenemy3 = false;
					$("#box").on("click", function(){
						userhealth = userhealth - enemy1ct;
						userattack = userattack + counter;
						enemy1hp = enemy1hp - userattack;
						$("#currenthp").html(userhealth);
						$("#currentatt").html(userattack);
						$("#defhp").html(enemy1hp);

						//If either character dies
						if (userhealth <= 0) {
							$("#defeatbox").html(userpick);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
						}
						else if (vsenemy1 === true && enemy1hp <= 0) {
							$("#defeatbox").append(enemy1);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(koAlert1);
							enemy1defeat = true;
						}
						if (enemy1defeat === true && enemy2defeat === true && enemy3defeat === true){
							$("#alerts").html("You win!");
							$("#resetbutton").append(resetB);
						}
						$("#reset").on("click", function(){
							$("#selection").html(char1);
							$("#selection").html(char2);
							$("#selection").html(char3);
							$("#selection").html(char4);
							$("#defeatbox").empty();
							$("#reset").empty();

						});

					});
				}
			});
	
			$("#enemy2spot").on("click", function(){
				$("#attackB").append(boxB);
				$("#defplace").html(enemy2);
				$("#enemy2spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vsenemy2 = true;

				$("#defstats").show();
				$("#defhp").html(enemy2hp);
				$("#defatt").html(enemy2att);
				$("#defct").html(enemy2ct);

			// If user chooses to fight enemy spot 2 with char1
				if (userpickchar === true && vsenemy2 === true) {
					vsenemy1 = false;
					vsenemy3 = false;
					$("#box").on("click", function(){
						userhealth = userhealth - enemy2ct;
						userattack = userattack + counter;
						enemy2hp = enemy2hp - userattack;
						$("#currenthp").html(userhealth);
						$("#currentatt").html(userattack);
						$("#defhp").html(enemy2hp);
					
					//If either character dies
						if (userhealth <= 0) {
							$("#defeatbox").html(userpick);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
						}
						else if (vsenemy2 === true && enemy2hp <= 0) {
							$("#defeatbox").append(enemy2);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(koAlert2);
							enemy2defeat = true;
						}
						if (enemy1defeat === true && enemy2defeat === true && enemy3defeat === true){
							$("#alerts").html("You win!");
						}
					});
				}
			});
			
			$("#enemy3spot").on("click", function(){
				$("#attackB").append(boxB);
				$("#defplace").html(enemy3);
				$("#enemy3spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vsenemy3 = true;

				$("#defstats").show();
				$("#defhp").html(enemy3hp);
				$("#defatt").html(enemy3att);
				$("#defct").html(enemy3ct);


			// If user chooses to fight enemy spot 3 with char1
				if (userpickchar === true && vsenemy3 === true) {
					vsenemy1 = false;
					vsenemy2 = false;
					$("#box").on("click", function(){
						userhealth = userhealth - enemy3ct;
						userattack = userattack + counter;
						enemy3hp = enemy3hp - userattack;
						$("#currenthp").html(userhealth);
						$("#currentatt").html(userattack);
						$("#defhp").html(enemy3hp);
					
					//If either character dies
						if (userhealth <= 0) {
							$("#defeatbox").html(userpick);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
						}
						else if (vsenemy3 === true && enemy3hp <= 0) {
							$("#defeatbox").append(enemy3);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(koAlert3);
							enemy3defeat = true;
						}

						if (enemy1defeat === true && enemy2defeat === true && enemy3defeat === true){
							$("#alerts").html("You win!");
						}
					});

				}
			});

	};
});


	