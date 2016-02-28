'use strict';
var bankOCR = bankOCR || {};

bankOCR.convert = function () {
  var characterDictionary = {};

  var zero = [' _ ','| |' ,'|_|','   '].join('\n');
  var one = ['   ','  |' ,'  |','   '].join('\n');
  var two = [' _ ',' _|' ,'|_ ','   '].join('\n');
  var three = [' _ ',' _|' ,' _|','   '].join('\n');
  var four = ['   ','|_|' ,'  |','   '].join('\n');
  var five = [' _ ','|_ ' ,' _|','   '].join('\n');
  var six = [' _ ','|_ ' ,'|_|','   '].join('\n');
  var seven = [' _ ','  |' ,'  |','   '].join('\n');
  var eight = [' _ ','|_|' ,'|_|','   '].join('\n');
  var nine = [' _ ','|_|' ,' _|','   '].join('\n');

  var recognizedCharacters = [zero, one, two, three, four, five, six, seven, eight, nine];
  for (var i = 0; i < recognizedCharacters.length; i++) {
   characterDictionary[recognizedCharacters[i]] = i;
  }

  return function(character){
    return characterDictionary[character];
  };
}();
