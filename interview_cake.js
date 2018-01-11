
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