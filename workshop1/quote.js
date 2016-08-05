/**
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * L&T quote generator
 */

var things = ["Tennis", "Art", "Dance", "Theater", "Math", "Architecture"];
var programmers = ["tennis playe", "artist", "choreographer", "director", "mathematician", "architect"]
var castles = ["courts", "bridges", "cities"]
var exertions = ["rally", "strain", "struggle", "toil", "endeavor", "hard work", "labor"];
var airs = ["red clay", "atmosphere", "heavens", "ether", "wind"];

var is = ["is", "is not", "is like", "includes", "excludes", "is beyond",
	  "extends", "encodes", "represents", "signifies", "consists of"];

function choosei(lst){
    var i = Math.floor(Math.random() * lst.length);
    return i;
}

function choose(lst){
    return lst[choosei(lst)];
}

var pick = choosei(things);
var thing = things[pick];
var programmer = programmers[pick];
var castles = choose(castles);
var exertion = choose(exertions);
var air = choose(airs);

var t = document.getElementById("thing").innerHTML = thing;
var p = document.getElementById("person").innerHTML = programmer + "s";
var q = document.getElementById("quote");

q.innerHTML =
    "\"The " + programmer +
    ", like the poet, works only slightly removed from pure thought-stuff. He builds his " +
    castles + " in the " + air + ", from " + air + ", creating by " + exertion + " of the imagination.\"" +
    "\u2014" +  "Fred Brooks, " + programmer;

q.innerHTML += "<br><br><br>";

for (var i = 0; i < is.length; i++){
    q.innerHTML += "Code " + is[i] + " language. <br>";
    q.innerHTML += "Language " + is[i] + " code. <br>";
}

q.innerHTML += "\u2014 For Loop";
