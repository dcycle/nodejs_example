var expect = require('chai').expect;
var log = require('../my/mylogger');
var sinon = require('sinon');
var fs = require('fs');

describe('myLogger()', function () {
  const assertions = [
    { text: 'Hello world.' },
  ];

  assertions.forEach(({text}) => {
    describe(`Logging ${text}`, function() {
      it(`should log the ${text}`, function() {
        var appendFile = sinon.stub(fs, 'appendFile');
        log.myLogger(text);
        sinon.assert.calledOnce(appendFile);
      })
    })
  })
});

describe('addTwoNumbers()', function () {
  // This is the equivalent of data providers in PHPUnit.
  // See https://gist.github.com/burkhardr/54162f667ff756540574082f61350b38.
  const assertions = [
    { first: 5, second: 1 },
    { first: -10000, second: -80 },
    { first: -99999, second: -99999 },
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
