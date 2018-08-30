var expect = require('chai').expect;
var log = require('../my/mylogger');


describe('addTwoNumbers()', function () {
  // This is the equivalent of data providers in PHPUnit.
  // See https://gist.github.com/burkhardr/54162f667ff756540574082f61350b38.
  const assertions = [
    { first: 5, second: 1 },
    { first: -10000, second: -80 },
    { first: -9999999999999999, second: -9999999999999999 },
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
