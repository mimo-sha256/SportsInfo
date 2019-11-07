var playerImages = ["http://www.eyebridge.in/blog/wp-content/uploads/2017/03/virat-on-pitch.jpg", "http://www.eyebridge.in/blog/wp-content/uploads/2017/03/virat-on-pitch.jpg", "http://www.eyebridge.in/blog/wp-content/uploads/2017/03/virat-on-pitch.jpg", "http://cricwizz.com/wp-content/uploads/2016/06/Ravindra-Jadeja_Large.jpg", "http://cricwizz.com/wp-content/uploads/2016/06/Ravindra-Jadeja_Large.jpg", "http://cricwizz.com/wp-content/uploads/2016/06/Ravindra-Jadeja_Large.jpg", "http://im.rediff.com/cricket/2019/may/17bumrah.jpg", "http://im.rediff.com/cricket/2019/may/17bumrah.jpg", "http://im.rediff.com/cricket/2019/may/17bumrah.jpg"];

var player1 = document.getElementById("item1");
var player2 = document.getElementById("item2");
var player3 = document.getElementById("item3");

var prev = document.getElementById("prev");
var next = document.getElementById("next");

currentPlayer = 3;

prev.addEventListener("click", function () {
    if (currentPlayer == 0) currentPlayer = 6;
    else currentPlayer -= 3;
    player1.setAttribute("src", playerImages[currentPlayer]);
    player2.setAttribute("src", playerImages[currentPlayer + 1]);
    player3.setAttribute("src", playerImages[currentPlayer + 2]);
});

next.addEventListener("click", function () {
    currentPlayer += 3;
    if (currentPlayer == 9) currentPlayer = 0;
    player1.setAttribute("src", playerImages[currentPlayer]);
    player2.setAttribute("src", playerImages[currentPlayer + 1]);
    player3.setAttribute("src", playerImages[currentPlayer + 2]);
});


var teamImages = ["http://www.eyebridge.in/blog/wp-content/uploads/2017/03/virat-on-pitch.jpg", "http://www.eyebridge.in/blog/wp-content/uploads/2017/03/virat-on-pitch.jpg", "http://www.eyebridge.in/blog/wp-content/uploads/2017/03/virat-on-pitch.jpg", "http://cricwizz.com/wp-content/uploads/2016/06/Ravindra-Jadeja_Large.jpg", "http://cricwizz.com/wp-content/uploads/2016/06/Ravindra-Jadeja_Large.jpg", "http://cricwizz.com/wp-content/uploads/2016/06/Ravindra-Jadeja_Large.jpg", "http://im.rediff.com/cricket/2019/may/17bumrah.jpg", "http://im.rediff.com/cricket/2019/may/17bumrah.jpg", "http://im.rediff.com/cricket/2019/may/17bumrah.jpg"];

var team1 = document.getElementById("itemteam1");
var team2 = document.getElementById("itemteam2");
var team3 = document.getElementById("itemteam3");

var prev1 = document.getElementById("prev1");
var next1 = document.getElementById("next1");

currentTeam = 3;

prev1.addEventListener("click", function () {
    if (currentTeam == 0) currentTeam = 6;
    else currentTeam -= 3;
    team1.setAttribute("src", teamImages[currentTeam]);
    team2.setAttribute("src", teamImages[currentTeam + 1]);
    team3.setAttribute("src", teamImages[currentTeam + 2]);
});

next1.addEventListener("click", function () {
    currentTeam += 3;
    if (currentTeam == 9) currentTeam = 0;
    team1.setAttribute("src", teamImages[currentTeam]);
    team2.setAttribute("src", teamImages[currentTeam + 1]);
    team3.setAttribute("src", teamImages[currentTeam + 2]);
});