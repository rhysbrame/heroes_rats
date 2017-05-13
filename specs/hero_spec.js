var assert = require('assert');
var Hero = require('../hero.js');

describe('Hero', function(){

  beforeEach(function(){
    hero = new Hero({ name: "Mario", favFood: "Pizza", oneLiner: "I used to be Jumpman!"});
  });

  it('should have a name, favFood and oneLiner', function(){
    assert.equal( "Mario", hero.name);
    assert.equal( "Pizza", hero.favFood);
    assert.equal( "I used to be Jumpman!", hero.oneLiner);
  });

  it('should have starting health of 100', function(){
    assert.equal( 100, hero.health);
  })
});