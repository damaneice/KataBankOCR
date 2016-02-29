'use strict';
var module = {}

describe('checkSum:', function(){
  it('account number is valid', function() {
    var accountNumber = '345882865';

    var result = checkSum.isValidAccountNumber(accountNumber);

    expect(result).to.equal(true);
  });

  it('account number is invalid', function() {
    var accountNumber = '664371495';

    var result = checkSum.isValidAccountNumber(accountNumber);

    expect(result).to.equal(false);
  });
});
