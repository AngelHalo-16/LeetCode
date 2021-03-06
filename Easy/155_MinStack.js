/* 
https://leetcode-cn.com/problems/min-stack/
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。
 
示例:
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 
提示：
pop、top 和 getMin 操作总是在 非空栈 上调用。
*/

/**
 * initialize your data structure here.
 */

// 还有个思路是，可以使用一个辅助栈 min_stack，与元素栈同步插入与删除，用于存储与每个元素对应的最小值
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack[this.stack.length] = x
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack = this.stack.slice(0,this.stack.length - 1)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.stack[0]
    for (let i = 1; i < this.stack.length; i++) {
        min = Math.min(min, this.stack[i])
    }
    return min
};

 var obj = new MinStack()
 obj.push(1)
 obj.push(2)
 obj.push(0)
 obj.push(6)
 obj.push(5)
 obj.pop()
 console.log(obj.getMin())