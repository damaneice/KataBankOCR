'use strict';
var checkSum = checkSum || {};

var module = module || {};

checkSum.isValidAccountNumber = function (number) {
  var numberArray = number.split("");
  var checkSumValue = 0;
  numberArray.reverse();
  for (var i = 0; i < numberArray.length; i++){
    checkSumValue = checkSumValue + parseInt(numberArray[i]) * (i + 1);
  }

  return checkSumValue % 11 == 0;
};

module.exports = checkSum;
