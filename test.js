/**
 * Created by chris on 10/6/2016.
 */
var chai = require('chai');
var Stack = require('./stack');
var Queue = require('./queue');

describe('stack', function(){

    var stack = new Stack();


    it('isEmpty returns true after init', function(){
        chai.expect(stack.isEmpty()).to.be.true;
    });

    describe('push 1,2,3', function(){

        beforeEach(function(){
            stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);
        });

        it('toString shows the stack array', function(){
            chai.expect(stack.toString()).to.eql('1,2,3');
        });

        it('peek() will show the last pushed', function(){
            chai.expect(stack.peek()).to.equal(3);
        })

        it('shows 1,2 after pop', function(){
            chai.expect(stack.pop()).to.equal(3);
            chai.expect(stack.toString()).to.eql('1,2');
        })

        it('is empty of 3 pops', function(){
            stack.pop();
            stack.pop();
            stack.pop();
            chai.expect(stack.isEmpty()).to.be.true;
        });
    })
});

describe('queue', function(){
    var queue;

    beforeEach(function(){
        queue = new Queue();
    })
    it('isEmpty() returns true when just initialized', function(){
        chai.expect(queue.isEmpty()).to.be.true;
    })
    
    describe('queueing 1,2,3', function(){
        beforeEach(function(){
            queue = new Queue;
            queue.enqueue(1)
            queue.enqueue(2)
            queue.enqueue(3)
        })

        it('toString() shows 3,2,1', function(){
            chai.expect(queue.toString()).to.eql('3,2,1');
        })

        it('dequeue() will return 1', function(){
            chai.expect(queue.dequeue()).to.equal(1);
            chai.expect(queue.toString()).to.equal('3,2');
        })

        it('peek() shows 1 but queue remains intact', function(){
            chai.expect(queue.peek()).to.equal(1);
            chai.expect(queue.toString()).to.equal('3,2,1');
        })
    })
})