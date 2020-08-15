(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     ;
     console.log("byeSpeaker"+ window.byeSpeaker.speak(names[i]));
  } else {
     console.log ("helloSpeaker"+ window.helloSpeaker.speak(names[i]));
  }
}
})();