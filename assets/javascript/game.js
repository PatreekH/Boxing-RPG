//RPG Game by Patrick Hernandez

//boxing theme

var game = {

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

}
	$(document).ready(function() {
			var health1 = game.char1[1];
			var health2 = game.char2[1];
			var health3 = game.char3[1];
			var health4 = game.char4[1];

			var att1 = game.char1[2];
			var att2 = game.char2[2];
			var att3 = game.char3[2];
			var att4 = game.char4[2];

			var ctatt1 = game.char1[3];
			var ctatt2 = game.char2[3];
			var ctatt3 = game.char3[3];
			var ctatt4 = game.char4[3];

			var char1 = $("#char1");
			var char2 = $("#char2");
			var char3 = $("#char3");
			var char4 = $("#char4");

			var def1 = ("<div class=\"defeat\">" + "<img src=\"assets/images/PH1.JPG\">" + "</div>");
			var def2 = ("<div class=\"defeat\">" + "<img src=\"assets/images/PH2.JPG\">" + "</div>");
			var def3 = ("<div class=\"defeat\">" + "<img src=\"assets/images/PH3.JPG\">" + "</div>");
			var def4 = ("<div class=\"defeat\">" + "<img src=\"assets/images/PH4.JPG\">" + "</div>");

			var def1alert = ("Muhammed Ali has been Knocked Out!" + "<br>" + "Choose another boxer to fight!");
			var def2alert = ("Mike Tyson has been Knocked Out!" + "<br>" + "Choose another boxer to fight!");
			var def3alert = ("Manny Pacquiao has been Knocked Out!" + "<br>" + "Choose another boxer to fight!");
			var def4alert = ("Clubber Lang has been Knocked Out!" + "<br>" + "Choose another boxer to fight!");


			var enemy1 = $("#enemy1");
			var enemy2 = $("#enemy2");
			var enemy3 = $("#enemy3");

			var vschar1 = false;
			var vschar2 = false;
			var vschar3 = false;
			var vschar4 = false;

			var userpickchar1 = false;
			var userpickchar2 = false;
			var userpickchar3 = false;
			var userpickchar4 = false;

			var char1defeat = false;
			var char2defeat = false;
			var char3defeat = false;
			var char4defeat = false;

			var counter = 8;

			var userhp = 0;
			var useratt = 0;

			var enemyhp = 0;
			var enemyct = 0;

//Create loop to win the game, create loop to lose the game - restart button for both


		$("#stats").hide();
		$("#defstats").hide();
		$("#alerts").html("Pick a boxer!");

	//Gameplay if the user chooses Character 1
		$("#char1").on("click", function(){
			$("#userpickplace").append(char1);
			$("#enemy1spot").append("<div>" + "<img src=\"assets/images/PH2.JPG\">" + "</div>");
			$("#enemy2spot").append("<div>" + "<img src=\"assets/images/PH3.JPG\">" + "</div>");
			$("#enemy3spot").append("<div>" + "<img src=\"assets/images/PH4.JPG\">" + "</div>");
			$("#selection").empty();
			$("#alerts").html("Choose an opponent!");
			userpickchar1 = true;
			userhp = health1;
			useratt = att1;
			$("#stats").show();
			$("#currenthp").html(userhp);
			$("#currentatt").html(useratt);
			$("#ct").html(ctatt1);

		// Enemy spot 1 info (char1 vs char2)
			$("#enemy1spot").on("click", function(){
				$("#attackB").append("<button id=\"b1\">" + "Box!" + "</button>");
				$("#defplace").html(def2);
				$("#enemy1spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vschar2 = true;
				enemyhp = health2;
				enemyct = ctatt2;
				$("#defstats").show();
				$("#defhp").html(enemyhp);
				$("#defatt").html(att2);
				$("#defct").html(enemyct);
				//set enemy stats to enemy stat vars then call them and reset after death

			// If user chooses to fight enemy spot 1 with char1
				if (userpickchar1 == true && vschar2 == true) {
					vschar3 = false;
					vschar4 = false;
					$("#b1").on("click", function(){
						userhp = userhp - enemyct;
						useratt = useratt + counter;
						enemyhp = enemyhp - useratt;
						$("#currenthp").html(userhp);
						$("#currentatt").html(useratt);
						$("#defhp").html(enemyhp);
					
					//If either character dies
						if (userhp <= 0) {
							$("#defeatbox").html(def1);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
						}
						else if (vschar2 == true && enemyhp <= 0) {
							$("#defeatbox").append(def2);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(def2alert);
							enemyhp = 0;
							enemyct = 0;
							char2defeat = true;
						}

						if (char2defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char3defeat == true){
							$("#alerts").html("You win!");
						}
					});
				}
			});

		// Enemy spot 2 info (char 1 vs char3)
			$("#enemy2spot").on("click", function(){
				$("#attackB").append("<button id=\"b2\">" + "Box!" + "</button>");
				$("#defplace").html(def3);
				$("#enemy2spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vschar3 = true;
				enemyhp = health3;
				enemyct = ctatt3;
				$("#defstats").show();
				$("#defhp").html(enemyhp);
				$("#defatt").html(att3);
				$("#defct").html(enemyct);

			// If user chooses to fight enemy spot 2 with char1
				if (userpickchar1 == true && vschar3 == true) {
					vschar2 = false;
					vschar4 = false;
					$("#b2").on("click", function(){
						userhp = userhp - enemyct;
						useratt = useratt + counter;
						enemyhp = enemyhp - useratt;
						$("#currenthp").html(userhp);
						$("#currentatt").html(useratt);
						$("#defhp").html(enemyhp);
					
					//If either character dies
						if (userhp <= 0) {
							$("#defeatbox").html(def1);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
						}
						else if (vschar3 == true && enemyhp <= 0) {
							$("#defeatbox").append(def3);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(def3alert);
							enemyhp = 0;
							enemyct = 0;
							char3defeat = true;
						}

						if (char2defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char3defeat == true){
							$("#alerts").html("You win!");
						}
					});
				}
			});

		// Enemy spot 3 info (char4)
			$("#enemy3spot").on("click", function(){
				$("#attackB").append("<button id=\"b3\">" + "Box!" + "</button>");
				$("#defplace").html(def4);
				$("#enemy3spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vschar4 = true;
				enemyhp = health4;
				enemyct = ctatt4;
				$("#defstats").show();
				$("#defhp").html(enemyhp);
				$("#defatt").html(att4);
				$("#defct").html(enemyct);


			// If user chooses to fight enemy spot 3 with char1
				if (userpickchar1 == true && vschar4 == true) {
					vschar2 = false;
					vschar3 = false;
					$("#b3").on("click", function(){
						userhp = userhp - enemyct;
						useratt = useratt + counter;
						enemyhp = enemyhp - useratt;
						$("#currenthp").html(userhp);
						$("#currentatt").html(useratt);
						$("#defhp").html(enemyhp);
					
					//If either character dies
						if (userhp <= 0) {
							$("#defeatbox").html(def1);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
						}
						else if (vschar4 == true && enemyhp <= 0) {
							$("#defeatbox").append(def4);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(def4alert);
							enemyhp = 0;
							enemyct = 0;
							char4defeat = true;
						}

						if (char2defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char3defeat == true){
							$("#alerts").html("You win!");
						}

					});
				}
			});
		});

	//Gameplay if user chooses Character 2
		$("#char2").on("click", function(){
			$("#userpickplace").append(char2);
			$("#enemy1spot").append("<div>" + "<img src=\"assets/images/PH1.JPG\">" + "</div>");
			$("#enemy2spot").append("<div>" + "<img src=\"assets/images/PH3.JPG\">" + "</div>");
			$("#enemy3spot").append("<div>" + "<img src=\"assets/images/PH4.JPG\">" + "</div>");
			$("#selection").empty();
			$("#alerts").html("Choose an opponent!");
			userpickchar2 = true;
			userhp = health2;
			useratt = att2;
			$("#stats").show();
			$("#currenthp").html(userhp);
			$("#currentatt").html(useratt);
			$("#ct").html(ctatt2);
			//disable user pic

		// Enemy spot 1 info (char2 vs char1)
			$("#enemy1spot").on("click", function(){
				$("#attackB").append("<button id=\"b1\">" + "Attack" + "</button>");
				$("#defplace").html(def1);
				$("#enemy1spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vschar1 = true;
				enemyhp = health1;
				enemyct = ctatt1;
				$("#defstats").show();
				$("#defhp").html(enemyhp);
				$("#defatt").html(att1);
				$("#defct").html(enemyct);
				//disable other enemies while

			// If user chooses to fight enemy spot 1 with char1
				if (userpickchar2 == true && vschar1 == true) {
					vschar3 = false;
					vschar4 = false;
					$("#b1").on("click", function(){
						userhp = userhp - enemyct;
						useratt = useratt + counter;
						enemyhp = enemyhp - useratt;
						$("#currenthp").html(userhp);
						$("#currentatt").html(useratt);
						$("#defhp").html(enemyhp);
					
					//If either character dies
						if (userhp <= 0) {
							$("#defeatbox").html(def2);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
							//disable attack button
						}
						else if (vschar1 == true && enemyhp <= 0) {
							$("#defeatbox").append(def1);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(def1alert);
							enemyhp = 0;
							enemyct = 0;
							char1defeat = true;
						}

						if (char2defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char3defeat == true){
							$("#alerts").html("You win!");
						}
					});
				}
			});

		// Enemy spot 2 info (char2 vs char3)
			$("#enemy2spot").on("click", function(){
				$("#attackB").append("<button id=\"b2\">" + "Box!" + "</button>");
				$("#defplace").html(def3);
				$("#enemy2spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vschar3 = true;
				enemyhp = health3;
				enemyct = ctatt3;
				$("#defstats").show();
				$("#defhp").html(enemyhp);
				$("#defatt").html(att3);
				$("#defct").html(enemyct);

			// If user chooses to fight enemy spot 2 with char1
				if (userpickchar2 == true && vschar3 == true) {
					vschar2 = false;
					vschar4 = false;
					$("#b2").on("click", function(){
						userhp = userhp - enemyct;
						useratt = useratt + counter;
						enemyhp = enemyhp - useratt;
						$("#currenthp").html(userhp);
						$("#currentatt").html(useratt);
						$("#defhp").html(enemyhp);
					
					//If either character dies
						if (userhp <= 0) {
							$("#defeatbox").html(def2);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
						}
						else if (vschar3 == true && enemyhp <= 0) {
							$("#defeatbox").append(def3);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(def3alert);
							enemyhp = 0;
							enemyct = 0;
							char3defeat = true;
						}

						if (char2defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char3defeat == true){
							$("#alerts").html("You win!");
						}
					});
				}
			});

		// Enemy spot 3 info (char2 vs char4)
			$("#enemy3spot").on("click", function(){
				$("#attackB").append("<button id=\"b3\">" + "Box!" + "</button>");
				$("#defplace").html(def4);
				$("#enemy3spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vschar4 = true;
				enemyhp = health4;
				enemyct = ctatt4;
				$("#defstats").show();
				$("#defhp").html(enemyhp);
				$("#defatt").html(att4);
				$("#defct").html(enemyct);


			// If user chooses to fight enemy spot 3 with char1
				if (userpickchar2 == true && vschar4 == true) {
					vschar2 = false;
					vschar3 = false;
					$("#b3").on("click", function(){
						userhp = userhp - enemyct;
						useratt = useratt + counter;
						enemyhp = enemyhp - useratt;
						$("#currenthp").html(userhp);
						$("#currentatt").html(useratt);
						$("#defhp").html(enemyhp);
					
					//If either character dies
						if (userhp <= 0) {
							$("#defeatbox").html(def1);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
						}
						else if (vschar4 == true && enemyhp <= 0) {
							$("#defeatbox").append(def4);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(def4alert);
							enemyhp = 0;
							enemyct = 0;
							char4defeat = true;
						}

						if (char2defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char3defeat == true){
							$("#alerts").html("You win!");
						}

					});
				}
			});
		});

	//Gameplay if user chooses character 3
		$("#char3").on("click", function(){
			$("#userpickplace").append(char3);
			$("#enemy1spot").append("<div>" + "<img src=\"assets/images/PH1.JPG\">" + "</div>");
			$("#enemy2spot").append("<div>" + "<img src=\"assets/images/PH2.JPG\">" + "</div>");
			$("#enemy3spot").append("<div>" + "<img src=\"assets/images/PH4.JPG\">" + "</div>");
			$("#selection").empty();
			$("#alerts").html("Choose an opponent!");
			userpickchar3 = true;
			userhp = health3;
			useratt = att3;
			$("#stats").show();
			$("#currenthp").html(userhp);
			$("#currentatt").html(useratt);
			$("#ct").html(ctatt3);
			//disable user pic

		// Enemy spot 1 info (char3 vs char1)
			$("#enemy1spot").on("click", function(){
				$("#attackB").append("<button id=\"b1\">" + "Box!" + "</button>");
				$("#defplace").html(def1);
				$("#enemy1spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vschar1 = true;
				enemyhp = health1;
				enemyct = ctatt1;
				$("#defstats").show();
				$("#defhp").html(enemyhp);
				$("#defatt").html(att1);
				$("#defct").html(enemyct);
				//disable other enemies while

			// If user chooses to fight enemy spot 1 with char1
				if (userpickchar3 == true && vschar1 == true) {
					vschar2 = false;
					vschar4 = false;
					$("#b1").on("click", function(){
						userhp = userhp - enemyct;
						useratt = useratt + counter;
						enemyhp = enemyhp - useratt;
						$("#currenthp").html(userhp);
						$("#currentatt").html(useratt);
						$("#defhp").html(enemyhp);
					
					//If either character dies
						if (userhp <= 0) {
							$("#defeatbox").html(def3);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
							//disable attack button
						}
						else if (vschar1 == true && enemyhp <= 0) {
							$("#defeatbox").append(def1);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(def1alert);
							enemyhp = 0;
							enemyct = 0;
							char1defeat = true;
						}

						if (char1defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char2defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char3defeat == true){
							$("#alerts").html("You win!");
						}
					});
				}
			});

		// Enemy spot 2 info (char3 vs char2)
			$("#enemy2spot").on("click", function(){
				$("#attackB").append("<button id=\"b2\">" + "Box!" + "</button>");
				$("#defplace").html(def2);
				$("#enemy2spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vschar2 = true;
				enemyhp = health2;
				enemyct = ctatt2;
				$("#defstats").show();
				$("#defhp").html(enemyhp);
				$("#defatt").html(att2);
				$("#defct").html(enemyct);

			// If user chooses to fight enemy spot 2 with char1
				if (userpickchar3 == true && vschar2 == true) {
					vschar1 = false;
					vschar4 = false;
					$("#b2").on("click", function(){
						userhp = userhp - enemyct;
						useratt = useratt + counter;
						enemyhp = enemyhp - useratt;
						$("#currenthp").html(userhp);
						$("#currentatt").html(useratt);
						$("#defhp").html(enemyhp);
					
					//If either character dies
						if (userhp <= 0) {
							$("#defeatbox").html(def3);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
						}
						else if (vschar2 == true && enemyhp <= 0) {
							$("#defeatbox").append(def2);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(def2alert);
							enemyhp = 0;
							enemyct = 0;
							char2defeat = true;
						}

						if (char2defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char3defeat == true){
							$("#alerts").html("You win!");
						}
					});
				}
			});

		// Enemy spot 3 info (char3 vs char4)
			$("#enemy3spot").on("click", function(){
				$("#attackB").append("<button id=\"b3\">" + "Box!" + "</button>");
				$("#defplace").html(def4);
				$("#enemy3spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vschar4 = true;
				enemyhp = health4;
				enemyct = ctatt4;
				$("#defstats").show();
				$("#defhp").html(enemyhp);
				$("#defatt").html(att4);
				$("#defct").html(enemyct);


			// If user chooses to fight enemy spot 3 with char4
				if (userpickchar3 == true && vschar4 == true) {
					vschar2 = false;
					vschar3 = false;
					$("#b3").on("click", function(){
						userhp = userhp - enemyct;
						useratt = useratt + counter;
						enemyhp = enemyhp - useratt;
						$("#currenthp").html(userhp);
						$("#currentatt").html(useratt);
						$("#defhp").html(enemyhp);
					
					//If either character dies
						if (userhp <= 0) {
							$("#defeatbox").html(def3);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
						}
						else if (vschar4 == true && enemyhp <= 0) {
							$("#defeatbox").append(def4);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(def4alert);
							enemyhp = 0;
							enemyct = 0;
							char4defeat = true;
						}

						if (char2defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char3defeat == true){
							$("#alerts").html("You win!");
						}

					});
				}
			});

		});
	//Gameplay if user chooses character 4
		$("#char4").on("click", function(){
			$("#userpickplace").append(char4);
			$("#enemy1spot").append("<div>" + "<img src=\"assets/images/PH1.JPG\">" + "</div>");
			$("#enemy2spot").append("<div>" + "<img src=\"assets/images/PH2.JPG\">" + "</div>");
			$("#enemy3spot").append("<div>" + "<img src=\"assets/images/PH3.JPG\">" + "</div>");
			$("#selection").empty();
			userpickchar4 = true;
			userhp = health4;
			useratt = att4;
			$("#stats").show();
			$("#currenthp").html(userhp);
			$("#currentatt").html(useratt);
			$("#ct").html(ctatt4);
			//disable user pic

		// Enemy spot 1 info (char4 vs char1)
			$("#enemy1spot").on("click", function(){
				$("#attackB").append("<button id=\"b1\">" + "Box!" + "</button>");
				$("#defplace").html(def1);
				$("#enemy1spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vschar1 = true;
				enemyhp = health1;
				enemyct = ctatt1;
				$("#defstats").show();
				$("#defhp").html(enemyhp);
				$("#defatt").html(att1);
				$("#defct").html(enemyct);
				//disable other enemies while

			// If user chooses to fight enemy spot 1 with char1
				if (userpickchar4 == true && vschar1 == true) {
					vschar2 = false;
					vschar3 = false;
					$("#b1").on("click", function(){
						userhp = userhp - enemyct;
						useratt = useratt + counter;
						enemyhp = enemyhp - useratt;
						$("#currenthp").html(userhp);
						$("#currentatt").html(useratt);
						$("#defhp").html(enemyhp);
					
					//If either character dies
						if (userhp <= 0) {
							$("#defeatbox").html(def4);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
							//disable attack button
						}
						else if (vschar1 == true && enemyhp <= 0) {
							$("#defeatbox").append(def1);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(def1alert);
							enemyhp = 0;
							enemyct = 0;
							char1defeat = true;
						}

						if (char2defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char3defeat == true){
							$("#alerts").html("You win!");
						}
					});
				}
			});

		// Enemy spot 2 info (char4 vs char2)
			$("#enemy2spot").on("click", function(){
				$("#attackB").append("<button id=\"b2\">" + "Box!" + "</button>");
				$("#defplace").html(def2);
				$("#enemy2spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vschar2 = true;
				enemyhp = health2;
				enemyct = ctatt2;
				$("#defstats").show();
				$("#defhp").html(enemyhp);
				$("#defatt").html(att2);
				$("#defct").html(enemyct);

			// If user chooses to fight enemy spot 2 with char1
				if (userpickchar4 == true && vschar2 == true) {
					vschar1 = false;
					vschar3 = false;
					$("#b2").on("click", function(){
						userhp = userhp - enemyct;
						useratt = useratt + counter;
						enemyhp = enemyhp - useratt;
						$("#currenthp").html(userhp);
						$("#currentatt").html(useratt);
						$("#defhp").html(enemyhp);
					
					//If either character dies
						if (userhp <= 0) {
							$("#defeatbox").html(def4);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
						}
						else if (vschar2 == true && enemyhp <= 0) {
							$("#defeatbox").append(def2);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(def2alert);
							enemyhp = 0;
							enemyct = 0;
							char2defeat = true;
						}

						if (char2defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char3defeat == true){
							$("#alerts").html("You win!");
						}
					});
				}
			});

		// Enemy spot 3 info (char4 vs char3)
			$("#enemy3spot").on("click", function(){
				$("#attackB").append("<button id=\"b3\">" + "Box!" + "</button>");
				$("#defplace").html(def3);
				$("#enemy3spot").empty();
				$("#alerts").html("Box your opponent and defeat them!");
				vschar3 = true;
				enemyhp = health3;
				enemyct = ctatt3;
				$("#defstats").show();
				$("#defhp").html(enemyhp);
				$("#defatt").html(att3);
				$("#defct").html(enemyct);


			// If user chooses to fight enemy spot 3 with char1
				if (userpickchar4 == true && vschar3 == true) {
					vschar1 = false;
					vschar2 = false;
					$("#b3").on("click", function(){
						userhp = userhp - enemyct;
						useratt = useratt + counter;
						enemyhp = enemyhp - useratt;
						$("#currenthp").html(userhp);
						$("#currentatt").html(useratt);
						$("#defhp").html(enemyhp);
					
					//If either character dies
						if (userhp <= 0) {
							$("#defeatbox").html(def4);
							$("#userpickplace").empty();
							$("#stats").empty();
							$("#alerts").html("YOU have been Knocked Out!");
						}
						else if (vschar3 == true && enemyhp <= 0) {
							$("#defeatbox").append(def3);
							$("#defplace").empty();
							$("#attackB").empty();
							$("#defstats").hide();
							$("#alerts").html(def3alert);
							enemyhp = 0;
							enemyct = 0;
							char3defeat = true;
						}

						if (char2defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char3defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char4defeat == true){
							$("#alerts").html("You win!");
						}
						else if(char1defeat == true && char2defeat == true && char3defeat == true){
							$("#alerts").html("You win!");
						}

					});
				}
			});

		});
});