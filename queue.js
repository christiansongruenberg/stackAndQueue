/**
 * Created by chris on 10/6/2016.
 */

module.exports = function(){

    this.array = [];

    this.isEmpty = function(){
        return this.array.length <= 0
    }

    this.enqueue = function(data){
        this.array.unshift(data)
    }

    this.dequeue = function(){
        return this.array.pop();
    }

    this.peek = function(){
        return this.array[this.array.length - 1];
    }


    this.toString = function(){
        return this.array.toString();
    }

}