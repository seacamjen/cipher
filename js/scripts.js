var userResponse = prompt("Please enter a sentence. Do not use punctuation!?...");
alert(userResponse);
var capFirst = function() {
  return userResponse.charAt(0).toUpperCase();
};
var capLast = function() {
  return userResponse.charAt(userResponse.length-1).toUpperCase();
};
var capFirstLast = function() {
  return capFirst() + capLast();
};
alert(capFirstLast());

var capLastFirst = function() {
  return capLast() + capFirst();
};
alert(capLastFirst());

var sentenceLF = function () {
  return userResponse.concat(capLastFirst());
};
alert(sentenceLF());

var middleNumber = function () {
  return parseInt(userResponse.length/2);
};

var middleLetter = function () {
  return userResponse.charAt(middleNumber());
};

var aSentenceLF = function() {
  return middleLetter() + sentenceLF();
};
alert(aSentenceLF());

var finalFlip = function(){
  return aSentenceLF().split("").reverse().join("");
};
alert(finalFlip());
