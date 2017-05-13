var assert = require('assert');
var Food = require('../food.js');

describe('Food Test', function(){

  beforeEach(function(){
      food1 = new Food({ name: "bread", replenishValue: 2})
    });

  it('should have food values', function(){
    assert.equal("bread", food1.name);
    assert.equal(2, food1.replenishValue);
  });

  it('should have uncontaminated food', function(){
    assert.equal(false, food1.contaminated);
  });

  it('should be true once its been poisoned', function(){
    food1.poison();
    assert.equal(true, food1.contaminated);
  });

});