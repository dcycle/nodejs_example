var expect = require('chai').expect;
var log = require('../my/mylogger');

describe('addTwoNumbers()', function () {
  it('should add two numbers', function () {
    var x = 5;
    var y = 1;
    var sum1 = x + y;
    var sum2 = log.addTwoNumbers(x, y);

    console.log('addTwoNumbers() should return the sum of its two parameters.');
    console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.');

    expect(sum2).to.be.equal(sum1);
  });
});
