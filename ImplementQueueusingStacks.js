var MyQueue = function() {
    this.stack=[];
    this.reverseStack=[];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.reverseStack.length){
        return this.reverseStack.pop();
    }else{
        while(this.stack.length){
            this.reverseStack.push(this.stack.pop());
        }
        return this.reverseStack.pop();
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const seeValue = this.pop();
    this.reverseStack.push(seeValue);
    return seeValue;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack.length && !this.reverseStack.length;
};



 var obj = new MyQueue()
 obj.push(1);
 var param_2 = obj.pop()
 var param_3 = obj.peek()
 var param_4 = obj.empty()


console.dir([param_2,param_3,param_4]);