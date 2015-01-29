var bro    = require('../bro.js');
var sinon  = require('sinon');
var chai   = require('chai');
var should = chai.should();

// spy on this
function hear ( noise ) {
  
  console.log(noise);
}

function Bro (name) {
  this.name = name;
  
  this.yell = function ( statement ) {
    statement = statement.toUpperCase()+"!!!!!!";
    hear(this.name + ' yelling statement: ' + statement);
    return statement;
  }

}

describe("Brototype", function() {
  var first_bro;
  var second_bro;

  beforeEach(function() {
    first_bro = new Bro("Strong Bad");
    second_bro = new Bro("The Cheat");
  });

  it("should have a reference to bro, and do things as bros", function () {
    
    var spy = sinon.spy(console, "log");

    bro.call( first_bro, second_bro );

    first_bro.yell("burnado bros");

    spy.called.should.be.true;
    spy.calledWith("Strong Bad yelling statement: BURNADO BROS!!!!!!").should.be.true;
    spy.calledWith("The Cheat yelling statement: BURNADO BROS!!!!!!").should.be.true;

  });


});