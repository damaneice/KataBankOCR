var fs = require('fs')

var bankOCR = require('./lib/bankOcr');
fs.readFile('input.txt', 'utf8', function(err,data){
  var inputArray = data.split('\n');

  for (var i = 0; i < inputArray.length; i = i + 4){
    console.log(bankOCR.recognize(inputArray.slice(i,i + 4).join('\n')))
  }
});
