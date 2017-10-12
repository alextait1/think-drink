'use strict';

var app = {};
app.url = 'https://opentdb.com/api.php?amount=10&type=multiple';
app.users = [];

/* 
Rules Page:
1. Have user enter number of players
2. Dynamically generate name input fields for that many players
3. Have user enter the names and push these into an array of names 
4. Have the user select the difficulty level
5. Have the user select how many rounds they want to play, number of q's (array.length) = number of players * number of rounds
6. Have a play game button that links to the player 0 page

Player Page:

1. Dynamically display the name of the player matching that index #
2. Have them select a category
3. Randomly generate a question
4. Display the options in 4 cards
5. Have user select answer
6. On click check if user answer === true 
7. If true, display some kind of true message dynamically display options to assign drink to another player, push a point into selected player's drinksscore array
8. If false, display some kind of false message and store results in active player's drinkscore array
9. Move to next player screen, repeat
10. Play through as a many times as selected by users initially

Results Page:
1. Display player names and how many drinks each player consumed in drink icons
2. Button to start again


*/

// Rules Page:
// 1. Have user enter number of players

// on change add class of selected


// 2. Dynamically generate name input fields for that many players
// 3. Have user enter the names and push these into an array of names 
// 4. Have the user select the difficulty level
// 5. Have the user select how many rounds they want to play, number of q's (array.length) = number of players * number of rounds
// 6. Have a play game button that links to the player 0 page

// app.nameMaker = function(){
// 	$('.player__name').change(){
// 		let playerName= $('.player__name').val();
// 		console.log(playerName);
// 	}
// }

app.nameMaker = function () {
	$("input[type='text']").change(function () {
		var playerName = $('.player__name').val();

		var playerNameSubmit = function playerNameSubmit() {
			app.users.push(playerName);
			console.log(app.users);
			$("input[type='text']").val("");
		};

		var stopNames = function stopNames() {

			$('.rules').append('<ol>\n\t\t\t\t\t\t<li>Answer Question</li>\n\t\t\t\t\t\t<li>Drink</li>\n\t\t\t\t\t\t<li>Assign Drink</li>\n\t\t\t\t\t\t<li>Next Player</li>\t\n\t\t\t\t\t</ol>');
		};

		$('.player__name-new').on('click' || 'keyup', playerNameSubmit());

		$('.player__name-display').append('<div>\n\t\t\t\t\t\t<p>Player ' + (app.users.indexOf(playerName) + 1) + ' is ' + playerName + '</p>\n\t\t\t\t\t</div>');
		$('.player__name-none').on('click' !== 'keyup', stopNames());
	});
};

app.init = function () {
	app.getData();
	app.nameMaker();
	// put stuff
};

app.getData = function () {
	$.ajax({
		url: app.url,
		method: 'GET'
	}).then(function (res) {
		console.log(res);
	});
};

$(document).ready(function () {
	app.init();
});