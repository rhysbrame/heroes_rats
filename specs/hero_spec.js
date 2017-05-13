var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js');

describe('Hero Test', function(){

  beforeEach(function(){
    hero = new Hero({ name: "Mario", favFood: "Pizza", oneLiner: "I used to be Jumpman!"});
    food1 = new Food({ name: "bread", replenishValue: 2});
    food2 = new Food({ name: "Pizza", replenishValue: 20});
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
  });

  it('should have a task to do', function(){
    var levelOne = new Task({ level: 1, difficulty: 1, urgency: 1, maxReward: 1000});
    hero.addTask(levelOne);
    assert.equal( 1, hero.tasks.length);
  });

  it('should replenish health when eats food', function(){
    hero.health = 50;
    hero.eat(food1)
    assert.equal(52, hero.health);
  });

  it('should replenish health when eats favfood', function(){
    hero.health = 50;
    hero.eat(food2)
    assert.equal(80, hero.health);
  });

  it('should set health to 100 if over 100', function(){
    hero.health = 90;
    hero.eat(food2)
    assert.equal(100, hero.health);
  });

  it('should decrease health when food contaminated', function(){
    hero.health = 50;
    food1.contaminated = true;
    hero.eat(food1)
    assert.equal(48, hero.health);
  }) 

  it('should decrease health when favfood contaminated', function(){
    hero.health = 50
    food2.contaminated = true;
    hero.eat(food2)
    assert.equal(20, hero.health);
  })   

});















