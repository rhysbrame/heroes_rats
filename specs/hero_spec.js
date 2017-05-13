var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js');

describe('Hero Test', function(){

  beforeEach(function(){
    hero = new Hero({ name: "Mario", favFood: "Pizza", oneLiner: "I used to be Jumpman!"});
    food1 = new Food({ name: "bread", replenishValue: 2});
    food2 = new Food({ name: "Pizza", replenishValue: 20});
    level1 = new Task({ level: 1, difficulty: 1, urgency: 1, maxReward: 1000});
    level27 = new Task({ level: 27, difficulty: 5, urgency: 8, maxReward: 2000});
    level34 = new Task({ level: 34, difficulty: 4, urgency: 2, maxReward: 5000});
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
    hero.addTask(level1);
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
  }); 

  it('should decrease health when favfood contaminated', function(){
    hero.health = 50
    food2.contaminated = true;
    hero.eat(food2)
    assert.equal(20, hero.health);
  });   

  it('should sort array by level', function(){
    hero.addTask( level1 );
    hero.addTask( level27 );
    hero.addTask( level34 );
    assert.equal( 3, hero.tasks.length);
    
    var levels = (hero.sortLevel()).map(function(task){
      return task.level
    });
    
    assert.deepEqual( [1, 27, 34] , levels)
  });

it('should sort array by difficulty', function(){
    hero.addTask( level1 );
    hero.addTask( level27 );
    hero.addTask( level34 );
    assert.equal( 3, hero.tasks.length);
    
    var levels = (hero.sortDifficulty()).map(function(task){
      return task.level
    });
    
    assert.deepEqual( [1, 34, 27] , levels)
  });

it('should sort array by urgency', function(){
    hero.addTask( level1 );
    hero.addTask( level27 );
    hero.addTask( level34 );
    assert.equal( 3, hero.tasks.length);
    
    var levels = (hero.sortUrgency()).map(function(task){
      return task.level
    });
    
    assert.deepEqual( [1, 34, 27] , levels)
  });

it('should sort array by maxReward', function(){
    hero.addTask( level1 );
    hero.addTask( level27 );
    hero.addTask( level34 );
    assert.equal( 3, hero.tasks.length);
    
    var levels = (hero.sortMaxReward()).map(function(task){
      return task.level
    });
    
    assert.deepEqual( [34, 27, 1] , levels)
  });

});



// var vals = testArray.map(function(a) {return a.val;});











