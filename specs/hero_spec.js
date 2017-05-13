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
  });

  it('should have an empty array for tasks', function(){
    assert.equal( 0, hero.tasks.length);
  });

  it('should be able to say its tag line', function(){
    console.log(hero.talk());
    assert.equal("I am Mario. I used to be Jumpman!", hero.talk());
  })
});