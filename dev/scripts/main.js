const app = {};
app.url = 'https://opentdb.com/api.php?'
app.users = [];

app.nameMaker = function(){
    $("input[type='text']").change(function(){
        let playerName = $('.player__name').val();
        // console.log(playerName);
        let playerNameSubmit = function(){
                $("input[type='text']").val("");
                if (app.users.indexOf(playerName) === -1) {
                    app.users.push(playerName);
                    if(app.users.length <= 6){
                      
                        $('.player__name-display').append(
                            `<div>
                                <p class="player__name-single">Player ${app.users.indexOf(playerName) + 1} is ${playerName}</p>
                            </div>`
                        )
                        let playerOne = app.users[0];
                        let playerTwo = app.users[1];
                        let playerThree = app.users[2];
                        let playerFour = app.users[3];
                        let playerFive = app.users[4];
                        let playerSix = app.users[5];
                        console.log('the players list is ', playerOne, playerTwo, playerThree, playerFour, playerFive, playerSix);

                        }else{
                        alert('You have reached the maximum number of players')
                    }
                } else if (app.users.indexOf(playerName) > -1) {
                    alert(playerName + ' already exists')
                }
            }
            $('.player__name-new').on('click', playerNameSubmit());
            $('body').keyup(function(event){
                if(event.keyCode == 13){ 
                    $('.player__name-new').click();
                } 
            })
        }); 
    } 

app.startGame = function(){
    $('.play__button').on('click', function(){
        alert(app.users[0]);
        $('.player__selections-name').append(
            `<h2>app.users[0]</h2>`
        )
    })
}

app.getData = function(){
    let players = [];
   
   
    $('form').submit(function(e){
        e.preventDefault();
        players.push('placeholder');
        console.log(players);
        console.log('submitting')

        $.ajax({
            url: app.url,
            method: 'GET',
            data: {
                amount: 1,
                type: "multiple",
                category: $('#category').val(),
                difficulty: $('#difficulty').val()
            }
        }).then(function(res){
            let resultsArray = [];

            let question= res.results[0].question;
            let answerOne= res.results[0].correct_answer;
            let answerTwo = res.results[0].incorrect_answers[0];
            let answerThree = res.results[0].incorrect_answers[1];
            let answerFour = res.results[0].incorrect_answers[2];

            console.log("data", res, question, answerOne, answerTwo, answerThree, answerFour);

            let questionContainer= $('<div>').addClass('question').append(question);
            let answerOneContainer= $('<div>').addClass('answer answer__false-One').append(answerOne);
            let answerTwoContainer= $('<div>').addClass('answer answer__false-Two').append(answerTwo);
            let answerThreeContainer= $('<div>').addClass('answer answer__false-Three').append(answerThree);
            resultsArray.push(answerOne, answerTwo, answerThree, answerFour);
            console.log("MY ARRAY", resultsArray);

            let randomArray= resultsArray.sort(function(){ return ( Math.round( Math.random() ) - 0.5 ) });
            console.log('random', randomArray);   

            let answerFourContainer = $('<div>').addClass('answer answer__false-Four').append(answerFour);
            let answersContainer= $('<div>').addClass('answersContainer flex').append(randomArray);
            $('#questions').append(questionContainer, answersContainer);
        });
    })
} 

// <div class='question_a'>
//     <h4>${res.results.0}<h4>
// </div>
// <div class='question_a'>
//     <h4>${res.results.incorrect_answers.0}<h4>
// </div>
// <div class='question_a'>
//     <h4>${res.results.incorrect_answers.1}<h4>
// </div>
// <div class='question_a'>
//     <h4><h4>${res.results.incorrect_answers.2}<h4><h4>
// </div>


app.init = function(){
    app.getData();
    app.nameMaker(); 
    app.startGame();
}

$(document).ready(function(){
    app.init();
});

// https://opentdb.com/api.php?amount=1&category=11&difficulty=medium&type=multiple


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



// Figure out how to get the dynamic value from the dropdown to code it into the URL


// on submit, grab the player names and create a heading on the game page to display it
// on click of next player button, 



