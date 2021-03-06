'use strict';

var shown = [];

var codeClassic = function(){
  var titles = ["11111000000", "Call the Pretty Sources", "Gulliver's Traversals", "Their Eyes Were Watching Console Log", "The #FF0000 and the #000000", "The Postman Always Makes an API Call Twice", "The Call Stack of the Wild", "Jane Error", "The Good Clojure", "Darkness at var hr = new Date( ); hr.setHours(12, 0, 0);", "The Tin Scrum", "The Magic Mouseover", "Pilgrim’s Progressive Enhancement", "DOM Quixote", "LESS of the D'Urbervilles", "To Kill a Mock Object", "A Farewell to Params", "As I Lay DRYing", "A Dance to the Music of MIME Types", "Infinite REST", "The Maltese Function", "War && Peace", "Portnoy's Constraint", "Parade's Expected End of Statement", "The Day of the Local Host", "A Room with a Model-View-Controller", "Let Us Now Praise Famous Methods", "Speak, Memory Leak", "The Scarlet Getter", "The Golden Boolean", "The Old Man and the Foreign Keys", "The Heart is a Lonely Bundler", "Tropic of Closure", "Strings Fall Apart", "Brave New Hello, World", "Lady Chatterley's Hover Effect", "The Handmaid's Tail Recursion", "Lucky Gem", "In Search of Lost Runtime", "Homage to Concatenation", "var Tinker, Tailor, Soldier, Spy;", "The Remains of the Array", "The Age of Inheritance", "Love in the Time of CoffeeScript", "The Sound and the For Loop", "One Flew Over the Cuckoo's Nested Model", "Of Splice and Men", "The Hero with a Thousand Interfaces", "Never Let Me Goto", "The Pull Request and the Glory", "If on a Winter's Night an Event Handler", "Vanity Pair Programming", "A Tale of Two Setters", "The Master Branch and Margarita", "The Flowers of Eval", "The Greps of Wrath", "The Beautiful and the Commented-Out Mess", "The French Lieutenant's Workload", "For Whom the Git Blame Tolls", "What We Talk About When We Talk About Lambda", "The Unbearable Lightness of Debugging", "The Heart of the Attr"];
  
  var randTitle = titles[Math.floor(Math.random() * titles.length)];
  if (shown.length === titles.length) 
    document.getElementById('book-title').innerHTML = "The End";
  else if (shown.indexOf(randTitle) === -1) {
    document.getElementById('book-title').innerHTML = randTitle;
    shown.push(randTitle);
  } else {
    codeClassic();
  }
}

var refresh = function(){
  var getBtn = document.getElementById('btn');
  getBtn.addEventListener('click', codeClassic.bind(), false);
}

codeClassic();
refresh();
