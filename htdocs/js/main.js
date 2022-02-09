console.log("loaded");

let quoteButton = document.getElementById("quoteButton");
let output = document.getElementById("output");

const quotes = [
  "“You cant always roll 6 with a dice” - Thomas Kuijvenhoven",
  "“There are no strangers, only friends you havent met friends” - poet William Butler Yeats",
  "“Be yourself; everyone else is already taken”. - Oscar Wilde",
  "“In three words I can sum up everything I've learned about life: it goes on.― Robert Frost",
  "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals”.- J.K. Rowling, Harry Potter and the Goblet of Fire",
  "“With great power comes great responsibility” - Spiderman",
  "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”― Maya Angelou",
  "“A friend is someone who knows all about you and still loves you.” ― Elbert Hubbard",
  "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ― Ralph Waldo Emerson",
];

quoteButton.addEventListener("click", getRandomQuote);

function getRandomQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;
}
