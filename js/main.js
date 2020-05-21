var createPolitician = function(name, partyColor){

    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;

    return politician;
};

var jim = createPolitician("Jim Halpert", [132, 17, 11]);

var michael = createPolitician("Michael Scott", [245, 141, 136]);

jim.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

michael.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

jim.electionResults[9] = 1;

michael.electionResults[9] = 28;

jim.electionResults[4] = 17;

michael.electionResults[4] = 38;

jim.electionResults[43] = 11;

michael.electionResults[43] = 27;

console.log(jim.electionResults);

console.log(michael.electionResults);

jim.voteTally = function ()
{
  this.totalVotes = 0;

  for(var i=0; i < this.electionResults.length; i++)
     {
      this.totalVotes = this.totalVotes + this.electionResults[i];
      console.log("Jim " + this.totalVotes);
     }
};

jim.voteTally();


michael.voteTally = function ()
{
  this.totalVotes = 0;

  for(var i=0; i< this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
      console.log("Micheal " + this.totalVotes);
    }
};

michael.voteTally();

var setStateResults = function(state){

    theStates[state].winner = null;

    if(jim.electionResults[state] > michael.electionResults[state]) {
 theStates[state].winner = jim;
    } else if (jim.electionResults[state] < michael.electionResults[state])
{
 theStates[state].winner = michael;
};

var stateInfoTable = document.getElementById("stateResults");
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1 = body.children[0].children[0];
var results1 = body.children[0].children[1];
var candidate2 = body.children[1].children[0];
var results2 = body.children[1].children[1];
var winnerName = body.children[2].children[1];

stateName.innerText= theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

candidate1.innerText = jim.name;
results1.innerText = jim.electionResults[state];

candidate2.innerText = michael.name;
results2.innerText =  michael.electionResults[state];

if(theStates[state].winner === null) {
  winnerName.innerText = "DRAW";
}else {
  winnerName.innerText = theStates[state].winner.name;
}

var stateWinner = theStates[state].winner;

if(stateWinner !== null){
     theStates[state].rgbColor = stateWinner.partyColor;
  } else
    theStates[state].rgbColor = [11, 32, 57];
}

var winner = "?";

if (jim.voteTally < michael.voteTally)
  {
    winner = michael.name;
  }else if
    (jim.voteTally > michael.voteTally)
    {
      winner = jim.name;
    }else
      {
        winner = "Draw.";
     }

console.log("The winner is " + winner + "!");

var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText=jim.name;
row.children[1].innerText=jim.totalVotes;
row.children[2].innerText=michael.name;
row.children[3].innerText=michael.totalVotes;
row.children[5].innerText= winner;
