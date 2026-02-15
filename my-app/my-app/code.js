//Variables to obtain the data from the NFL Teams dataset  
//The NFL Logo image was retrieved from https://en.wikipedia.org/wiki/National_Football_League
//The data for the amount of Super Bowl Wins each team has
//was retrieved from https://www.espn.com/nfl/superbowl/history/winners
var nflTeams = getColumn("NFL Teams", "Team");
var stadiumCapacity = getColumn("NFL Teams", "Capacity");
var stadiumName = getColumn("NFL Teams", "Stadium");
var headCoach = getColumn("NFL Teams", "Head coach");
var superbowlWins = getColumn("NFL Teams", "Super Bowl Wins");
var teamLogo = getColumn("NFL Teams", "Image");
var currentSelectedTeam = "Select Team";

//This function takes a team name as input and returns the stadium name and capacity for that team.
function findStadNameCapac(teamName) {
  var currentStadiumName = "";
  var currentStadiumCapacity = 0;
  var returnStadium = "";
  var index = 0;
//The code below will iterate sequentially over the Teams list and select the stadium name and 
//capacity for the input parameter teamName for this function
  for (var i = 0; i < nflTeams.length; i++) {
    if (teamName == nflTeams[i]) 
    {
      index = i;
      currentStadiumName = stadiumName[i];
      currentStadiumCapacity = stadiumCapacity[i];
    }
  }
  //Update the team logo, stadium name and capacity as output based on the team selected as input by user
  setProperty("stadiumteamLogo", "image", teamLogo[index]);
  returnStadium = "The name of the Stadium is: " + currentStadiumName + ". The capacity of this stadium is " + currentStadiumCapacity ;
  return returnStadium;
}

//This function takes a team name as input and returns the Head Coach name
//and number of Super Bowl Wins for that team.
function findHcSbwins(teamName) {
  var headCoaches = "";
  var superbowlW = 0;
  var returnTeam = "";
  var index = 0;
//The code below will use sequentially over the Teams list and select the headcoach and 
//superbowl win count for the input parameter teamName for this function
  for (var i = 0; i < nflTeams.length; i++) {
    if (teamName == nflTeams[i]) 
    {
      index = i;
      headCoaches = headCoach[i];
      superbowlW = superbowlWins[i];
    }
  }
//Update the team logo, head coach and superbowl wins as output based on the team selected as input by user
  setProperty("teamLogo", "image", teamLogo[index]);
  if (superbowlW  == 1) {
    returnTeam = ((("The name of the Head Coach for this team is: " + headCoaches) + ". This team has ") + superbowlW) + " Super Bowl win." ;
  } else {
    returnTeam = ((("The name of the Head Coach for this team is: " + headCoaches) + ". This team has ") + superbowlW) + " Super Bowl wins." ;
  }
  return returnTeam;
}

//When pressing the Stadium Information Button,
//the screen will be taken to the second screen known as stadiumScreen
onEvent("stadiuminfoBtn", "click", function( ) {
  setScreen("stadiumScreen");
});

//When pressing the Team Information Button,
//the screen will be taken to the third screen known as teamScreen
onEvent("teaminfoBtn", "click", function( ) {
  setScreen("teamScreen");
});

//When the user clicks the dropdown on the stadium screen, the selected team from the dropdown will be
//a parameter in the findStadNameCapac function will run through the code to get a value.
//It will then output the values that are appropriate for the selected team in the stadium Text Area.
onEvent("stadiumDropdown", "change", function( ) {
  currentSelectedTeam = getText("stadiumDropdown");
  var stadDetails = findStadNameCapac(currentSelectedTeam);
  setText("stadiuminfoTxtAr", stadDetails);
});

//When the user clicks the dropdown on the team screen, the selected team from the dropdown will be 
//a parameter in the findHcSbwins function will run through the code to get a value.
//It will then output the values that are appropriate for the selected team in the team Text Area.
onEvent("teamDropdown", "change", function( ) {
  currentSelectedTeam = getText("teamDropdown");
  var teamDetails = findHcSbwins(currentSelectedTeam);
  setText("teamInfoTxtAr", teamDetails);
});

//When the back button on the team screen is clicked, the screen will be sent back to the main screen.
//All values on the team screen will reset back to what it was before the user changed any of the
//dropdown values.
//The NFL Logo image was retrieved from https://en.wikipedia.org/wiki/National_Football_League
onEvent("teambackBtn", "click", function( ) {
  setScreen("homeScreen");
  setText("teamDropdown", "Select Team");
  setText("teamInfoTxtAr", "");
  setProperty("teamLogo", "image", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png");
});

//When the back button on the stadium screen is clicked, the screen will be sent back to the main screen.
//All values on the stadium screen will reset back to what it was before the user changed any of the
//dropdown values
//The NFL Logo image was retrieved from https://en.wikipedia.org/wiki/National_Football_League
onEvent("stadiumbackBtn", "click", function( ) {
  setScreen("homeScreen");
  setText("stadiumDropdown", "Select Team");
  setText("stadiuminfoTxtAr", "");
  setProperty("stadiumteamLogo", "image", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png");
});
