/**
 * Created by chris on 10/6/2016.
 */
module.exports = function(){
    this.array = [];

    this.push = function(data){
        this.array.push(data);
    }

    this.pop = function(data){
        return this.array.pop(data);
    }

    this.peek = function(){
        return this.array[this.array.length - 1];
    }

    this.isEmpty = function(){
        return this.array.length <= 0;
    }

    
    this.toString = function(){
        return this.array.toString();
    }
}
