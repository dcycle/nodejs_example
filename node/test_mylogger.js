var assert = require('assert');
var log = require('./mylogger');

testAddTwoNumbers = function() {
  var x = 5;
  var y = 1;
  var sum1 = x + y;
  var sum2 = log.addTwoNumbers(x, y);

  console.log('addTwoNumbers() should return the sum of its two parameters.');
  console.log('Expect ' + sum1 + ' to equal ' + sum2 + '.');

  assert.equal(sum1, sum2, 'Sum equal.');
}

testAddTwoNumbers();
