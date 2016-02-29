'use strict';
var bankOCR = bankOCR || {};
var module = module || {};

bankOCR.convert = function () {
  var characterDictionary = {};

  var zero = [' _ ','| |' ,'|_|','   '].join('');
  var one = ['   ','  |' ,'  |','   '].join('');
  var two = [' _ ',' _|' ,'|_ ','   '].join('');
  var three = [' _ ',' _|' ,' _|','   '].join('');
  var four = ['   ','|_|' ,'  |','   '].join('');
  var five = [' _ ','|_ ' ,' _|','   '].join('');
  var six = [' _ ','|_ ' ,'|_|','   '].join('');
  var seven = [' _ ','  |' ,'  |','   '].join('');
  var eight = [' _ ','|_|' ,'|_|','   '].join('');
  var nine = [' _ ','|_|' ,' _|','   '].join('');

  var recognizedCharacters = [zero, one, two, three, four, five, six, seven, eight, nine];
  for (var i = 0; i < recognizedCharacters.length; i++) {
   characterDictionary[recognizedCharacters[i]] = i.toString();
  }

  return function(character){

    return characterDictionary[character];
  };
}();

bankOCR.recognize = function(characters){
  var extractCharacters = function(characters){
    var lines = characters.split('\n');
    var rawCharacters = [];
    for (var i = 0; i < 4; i++){
      var characterNumbers = 0;
      for ( var j = 0; j < lines[i].length; j = j + 3){
        var line = lines[i].substring(j, j + 3)
        if (!rawCharacters[characterNumbers]){
            rawCharacters.push(line);
        }else {
          rawCharacters[characterNumbers] = rawCharacters[characterNumbers] + line;
        }
        characterNumbers++;
      }
    }
    return rawCharacters
  }
  var extractedCharacters = extractCharacters(characters);
  var accountNumber = '';
  for (var i = 0; i < extractedCharacters.length; i++){
    accountNumber = accountNumber + bankOCR.convert(extractedCharacters[i]);
  }
  return accountNumber;
};
bankOCR.isValidAccountNumber = function (number) {
  var numberArray = number.split("");
  var checkSum = 0;
  numberArray.reverse();
  for (var i = 0; i < numberArray.length; i++){
    checkSum = checkSum + parseInt(numberArray[i]) * (i + 1);
  }

  return checkSum % 11 == 0;
};

module.exports = bankOCR;
