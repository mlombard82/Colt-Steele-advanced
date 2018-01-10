// HIGHEST PRODUCT OF 3. GIVEN AN ARRAY OF INTEGERS, FIND THE HIGHEST PRODUCT YOU CAN GET FROM 3 OF THE INTEGERS.
// the input of arrayOfInts will always have at least 3 integers.

// SOLUTION. Use of a greedy A to keep track 
// -looping through the array and using Math.max() & Math.min() 
// functions, of the values that are relevant.


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