var assert = require('assert');
var Rat = require('../rat.js');
var Food = require('../food.js');

describe('Rat Test', function(){

  beforeEach(function(){
    rat = new Rat();
    food = new Food({ name: "bread", replenishValue: 2});
  });

  it('should change the contaminated after rat nibbles it', function(){
    rat.nibble(food);
    assert.equal(true, food.contaminated);
  })
})