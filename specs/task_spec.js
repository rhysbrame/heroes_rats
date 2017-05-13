var assert = require('assert');
var Task = require('../task.js');

describe('Task Test', function(){

  beforeEach(function(){
    task5 = new Task({ level: 5, difficulty: 1, urgency: 2, maxReward: 1000})
  });

  it('should have task attributes', function(){
    assert.equal( 5, task5.level);
    assert.equal( 1, task5.difficulty);
    assert.equal( 2, task5.urgency);
    assert.equal( 1000, task5.maxReward);
  });

  it('should have a false completion', function(){
    assert.equal( false, task5.completed);
  });

  it('should have a true completeion when task is completed', function(){
    task5.completeTask();
    assert.equal( true, task5.completed);
  });

});