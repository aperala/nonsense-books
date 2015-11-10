
var codeClassic = function(){
  var titles = ["A Farewell to Params","As I Lay DRYing", "A Dance to the Music of MIME Types", "Infinite REST", "The Maltese Function", "War && Peace", "Portnoy's Constraint", "Parade's Expected End of Statement", "The Day of the Local Host", "A Room with a Model-View-Controller", "Let Us Now Praise Famous Methods", "Speak, Memory Leak", "The Scarlet Getter", "The Golden Boolean", "The Old Man and the Foreign Keys", "The Heart is a Lonely Bundler", "Tropic of Closure", "Strings Fall Apart", "Brave New Hello, World", "Lady Chatterley's Hover Effect", "The Handmaid's Tail Recursion", "Lucky Gem", "In Search of Lost Runtime", "Homage to Concatenation", "var Tinker, Tailor, Soldier, Spy;", "The Remains of the Array", "The Age of Inheritance", "Love in the Time of CoffeeScript", "The Sound and the For Loop", "One Flew Over the Cuckoo's Nested Model", "Of Blice and Men", "The Fountain<head>", "The Hero with a Thousand Interfaces", "Never Let Me Goto", "The Pull Request and the Glory", "If on a Winter's Night an Event Handler", "Vanity Pair Programming", "A Tale of Two Commits", "For Whom the Git Blame Tolls", "What We Talk about When We Talk about Lambda", "The Unbearable Lightness of Bugfixing", "The Heart of the Attr"];
  var randQuote = titles[Math.floor(Math.random() * titles.length)];
  document.getElementById('book-title').innerHTML = randQuote;

}

codeClassic();

var refresh = document.getElementById('btn');
refresh.addEventListener('click', codeClassic.bind());
