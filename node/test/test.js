var expect = require('chai').expect;
var log = require('../my/mylogger');

describe('addTwoNumbers()', function () {
  const assertions = [
    { first: 5, second: 1 },
    { first: -10000, second: -80 },
  ];

  assertions.forEach(({first, second}) => {
    describe(`Adding ${first} and ${second}`, function() {
      var result = first + second;
      it(`should return ${result}`, function() {
        var sum2 = log.addTwoNumbers(first, second);
        expect(sum2).to.be.equal(result);
      })
    })
  })
});
