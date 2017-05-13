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


});