'use strict';
var module = {}
describe('Parse character into account number', function() {

  it('zero to 0', function() {
    var zero =
       [' _ ',
        '| |' ,
        '|_|',
        '   '
      ].join('');

    var actual = bankOCR.convert(zero);

    expect(actual).to.equal('0')
  });

  it('one to 1', function() {
    var one =
       ['   ',
        '  |' ,
        '  |',
        '   '
      ].join('');

    var actual = bankOCR.convert(one);

    expect(actual).to.equal('1')
  });

  it('two to 2', function() {
    var two =
    [' _ ',
     ' _|' ,
     '|_ ',
     '   '].join('');

    var actual = bankOCR.convert(two);

    expect(actual).to.equal('2')
  });

  it('three to 3', function() {
    var three =
    [' _ ',
     ' _|' ,
     ' _|',
     '   '].join('');

    var actual = bankOCR.convert(three);

    expect(actual).to.equal('3')
  });

  it('four to 4', function() {
    var four =
    ['   ',
     '|_|' ,
     '  |',
     '   '].join('');

    var actual = bankOCR.convert(four);

    expect(actual).to.equal('4')
  });

  it('five to 5', function() {
    var five =
    [' _ ',
     '|_ ' ,
     ' _|',
     '   '].join('');

    var actual = bankOCR.convert(five);

    expect(actual).to.equal('5')
  });

  it('six to 6', function() {
    var six =
    [' _ ',
     '|_ ' ,
     '|_|',
     '   '].join('');

    var actual = bankOCR.convert(six);

    expect(actual).to.equal('6')
  });

  it('seven to 7', function() {
    var seven =
       [' _ ',
        '  |' ,
        '  |',
        '   '
      ].join('');

    var actual = bankOCR.convert(seven);

    expect(actual).to.equal('7')
  });

  it('eight to 8', function() {
    var eight =
    [' _ ',
     '|_|' ,
     '|_|',
     '   '].join('');

    var actual = bankOCR.convert(eight);

    expect(actual).to.equal('8')
  });

  it('nine to 9', function() {
    var nine =
    [' _ ',
     '|_|' ,
     ' _|',
     '   '].join('');

    var actual = bankOCR.convert(nine);

    expect(actual).to.equal('9')
  });

  it('unknown number to ?', function() {
    var unknown =
    [' _ ',
     '| |' ,
     ' _|',
     '   '].join('');

    var actual = bankOCR.convert(unknown);

    expect(actual).to.equal('?')
  });
});

describe('Account numbers:', function(){

  it('should recognize account number as 000000000', function() {
    var accountNumber =
       [' _  _  _  _  _  _  _  _  _ ',
        '| || || || || || || || || |' ,
        '|_||_||_||_||_||_||_||_||_|',
        '                           '
      ].join('\n');

    var actual = bankOCR.recognize(accountNumber);

    expect(actual).to.equal('000000000')
  });

  it('should recognize account number as 123456789', function() {
    var accountNumber =
       ['    _  _     _  _  _  _  _ ',
        '  | _| _||_||_ |_   ||_||_|' ,
        '  ||_  _|  | _||_|  ||_| _|',
        '                           '
      ].join('\n');

    var actual = bankOCR.recognize(accountNumber);

    expect(actual).to.equal('123456789')
  });

  it('should recognize account number contains an illegible character', function() {
    var accountNumber =
       ['    _  _     _  _  _  _  _ ',
        '  | _| _||_||_ |_   ||_|| |' ,
        '  ||_  _|  | _||_|  ||_| _|',
        '                           '
      ].join('\n');

    var actual = bankOCR.recognize(accountNumber);

    expect(actual).to.equal('12345678? ILL')
  });

  it('should recognize account number is invalid', function() {
    var accountNumber =
       ['    _  _     _  _  _  _  _ ',
        '  | _| _||_||_ |_   ||_||_|' ,
        '  ||_  _|  | _||_|  ||_||_|',
        '                           '
      ].join('\n');

    var actual = bankOCR.recognize(accountNumber);

    expect(actual).to.equal('123456788 ERR')
  });

});
