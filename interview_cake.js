
// 1. APPLE STOCKS. solution GREEDY.
// Suppose we could access yesterday's stock prices as an array, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// For example:

//   var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

// getMaxProfit(stockPricesYesterday);
// // returns 6 (buying for $5 and selling for $11)

// No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).

// SOLUTION. we'll greedily walk through the array to track the max profit and lowest price so far. A greedy algo builds up a solution by choosing the option that looks the best at every step.
// To try it on a new problem, start by asking yourself:
// "Suppose we could come up with the answer in one pass through the input, by simply updating the 'best answer so far' as we went. What additional values would we need to keep updated as we looked at each item in our input, in order to be able to update the 'best answer so far' in constant time?"





// 46. FIND THE SHORTEST ROUTE FOR A MESSAGE FROM ONE USER(SENDER) TO
// ANOTHER(RECIPIENT). RETURN AN ARRAY OF USERS THAT MAKE UP THIS ROUTE

// arrays, objects, graphs? Graphs!
// so, how do we find the shortest path from a start node to an end node in an unweighted, undirected graph?

// there are 2 common ways to explore undirected graphs: DFS & BFS.

// DFS.Advantages: on a binary tree generally requires less memory than BFS. It can be easily implemented with recursion.
// DFS.Disadvantages: Doesn't necessarily find the shortest path to a node. BFS does.







// 20. LARGEST STACK
// YOU WANT TO ABLE TO ACCESS THE LARGEST ELEMENT IN A STACK

// Complexity
// O(1)O(1) time for push(), pop(), and getMax(). O(m)O(m) additional space, where mm is the number of operations performed on the stack.

// What We Learned (JUST-IN-TIME vs AHEAD-OF-TIME)
// Notice how in the solution we're spending time on push() and pop() so we can save time on getMax(). That's because we chose to optimize for the time cost of calls to getMax().
// But we could've chosen to optimize for something else. For example, if we expected we'd be running push() and pop() frequently and running getMax() rarely, we could have optimized for faster push() and pop() methods.
// Sometimes the first step in algorithm design is deciding what we're optimizing for. Start by considering the expected characteristics of the input.

function MaxStack() {
    this.stack = new Stack();
    this.maxesStack = new Stack();
}

MaxStack.prototype.push = function(item) {
    this.stack.push(item);
    if (!this.maxesStack.peek() || item >= this.maxesStack.peek()) {
        this.maxesStack.push(item);
    }
};

MaxStack.prototype.pop = function() {
    var item = this.stack.pop();
    if (item === this.maxesStack.peek()) {
        this.maxesStack.pop();
    }
    return item;
};

MaxStack.prototype.getMax = function() {
    return this.maxesStack.peek();
};










// 19. IMPLEMENT A QUEUE WITH 2 STACKS.

function QueueTwoStacks() {
    this.inStack  = [];
    this.outStack = [];
}

QueueTwoStacks.prototype.enqueue = function(item) {
    this.inStack.push(item);
}

QueueTwoStacks.prototype.dequeue = function() {
    if (this.outStack.length === 0) {

        // Move items from inStack to outStack, reversing order
        while (this.inStack.length > 0) {
            var newestInStackItem = this.inStack.pop();
            this.outStack.push(newestInStackItem);
        }

        // If outStack is still empty, raise an error
        if (this.outStack.length === 0) {
            return undefined;
        }
    }
    return this.outStack.pop();
}




// 15. Compute the nth Fibonacci Number. Write a function fib() that takes an integer n and returns the nth fibonacci number.

/*
going 'bottom-up' is a way to avoid recursion, saving memory cost that recursion incurs 
when it builds up the call stack. A 'bottom up' A starts from the beginning, while a
recursive A often 'starts from the end and works backwards'

call stack: is what a program uses to keep track of what function it's currently running
and what to do with that function's return value.
Whenever you call a function, a new frame gets pushed onto the call stack, which is popped off when the function returns. As functions call other functions, the stack gets taller. In recursive functions, the stack can get as tall as the number of times the function calls itself. This can cause a problem: the stack has a limited amount of space, and if it gets too big you can get a stack overflow error.

'bottom up' is a common strategy for solving dynamic programming problems.
the other on is 'memoization'.

function fib(n){
    //base case
    if(n === 0 || n === 1){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

try drawing it out as a tree where each call has 2 child calls => binary tree
*/


function fib(n){
    // edge cases
    if(n < 0){
        throw new Error ('index was negative. Try again!')
    } else if (n === 0 || n === 1){
        return n;
    }

    // we'll be building the fibonacci series from the bottom up. we'll need to track the previous 2 numbers at each step.

    var prevPrev = 0; //0th fibonacci
    var prev = 1  // 1st fibonacci
    var current; // declare current

    for(var i = 1; i < n; i++){
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return current;

}

fib(10);








// 2. PRODUCT OF ALL OTHER NUMBERS. You have an array of integers, and for each index you want to
// find the product of every integer except the integer at that index.

// write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns
// an array of the products.
// for ex: given [1,7,3,4] your function would return [84,12,28,21]

// a BF approach would use two loops to multiply the integer at every index by the integer at every nestedIndex, unless index === nestedIndex. O(N^2)

// SOLUTION. Solution
// To find the products of all the integers except the integer at each index, we'll go through our array greedily ↴ twice. First we get the products of all the integers before each index, and then we go backwards to get the products of all the integers after each index.
// When we multiply all the products before and after each index, we get our answer—the products of all the integers except the integer at each index!


function getProductsOfAllIntsExceptAtIndex(intArray){
    if(intArray.length < 2){
        throw new Error('At least 2 numbers are required!')
    }

    var productsOfAllIntsExceptAtIndex = [];

    var productSoFar = 1;
    for(var i = 0; i < intArray.length; i++){
        productsOfAllIntsExceptAtIndex[i] = productSoFar;
        productSoFar *= intArray[i]; 
    }

    productSoFar = 1;
    for(var j = intArray.length - 1; j>= 0; j--){
        productsOfAllIntsExceptAtIndex[j] *= productSoFar;
        productSoFar *= intArray[j]; 
    }

    return productsOfAllIntsExceptAtIndex;
}

getProductsOfAllIntsExceptAtIndex([4,2,3,8,2]);










// 3. HIGHEST PRODUCT OF 3. GIVEN AN ARRAY OF INTEGERS, FIND THE HIGHEST PRODUCT YOU CAN GET FROM 3 OF THE INTEGERS.
// the input of arrayOfInts will always have at least 3 integers.

// BRUTE FORCE: probably involve 3 nesting loops and a O(n^3) runtime.
// SORTING: Would let us grab the highest numbers quickly. Sorting takes O(n lg n) time.
// SOLUTION: Greedy A. O(n) time, O(1) space.

// SOLUTION. Use of a greedy A to keep track 
// -looping through the array and using Math.max() & Math.min() 
// functions, of the values that are relevant. Need to update the variables in the right order, otherwise you might end up
// e.g multiplying the current number by itself to get a new highestProductOf2.


function highestProductOf3(arrayOfInts){
    if(arrayOfInts.length < 3){
        throw new Error('Less than 3 items!');
    }

    var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    var lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);


    var highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
    var lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

    var highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

    for (var i = 2; i < arrayOfInts.length; i++){
        var current = arrayOfInts[i];

        // do we have a new highestProductOf3?
        highestProductOf3 = Math.max(
            highestProductOf3,
            current * highestProductOf2,
            current * lowestProductOf2
        );

        // new highestProductOf2?
        highestProductOf2 = Math.max(
            highestProductOf2,
            current * highest,
            current * lowest
        )

        // new lowestProductOf2
        lowestProductOf2 = Math.min(
            lowestProductOf2,
            current * highest,
            current * lowest
        )

        // new highest
        highest = Math.max(highest, current);

        // new lowest
        lowest = Math.min(lowest, current);
    }

    return highestProductOf3;

}