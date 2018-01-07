/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    var newArray = [];

    arr.forEach(element => {
        newArray.push(element * 2);
    });

    return newArray;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    var newArray = [];

    arr.forEach(function(n){
        if(n % 2 === 0){
            newArray.push(n);
        }
    })

    return newArray;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){

    var newArray = [];

    arr.forEach(function(string){
        var stringSplitted = string.split("");
        var firstAndLast = stringSplitted[0] + stringSplitted[stringSplitted.length - 1];
        newArray.push(firstAndLast);
    })

    return newArray;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    
    arr.forEach(function(val){
       val[key] = value;
    });

    return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
 
    var obj = {};
    var strArray = str.split("");
    var vowels = 'aeiou';

    strArray.forEach(letter => {
        if(vowels.indexOf(letter.toLowerCase())!== -1){
            if(letter in obj) {
                obj[letter] ++;
            } else {
                obj[letter] = 1;
            }
        }
    });

    return obj;
}



// MAP ***************************************************************************************

function mappy (arr, callback){
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
        newArray.push(callback(arr[i], i, arr));
    }

    return newArray;
};



/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr){
    return arr.map(function(x){return x*2})

}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(val, index){
        return val * index;
    })
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    var mapped = arr.map(function(obj){
        return obj.name;
    } );

    return mapped;
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(function(obj){
        return obj.first + " " + obj.last;
    });
}

//FILTER ****************************************************************

function filter (arr, callback){
    var newArr = [];

    for(var i = 0; i < arr.length; i++)
        if(callback(arr[i], i, arr)){
            newArr.push(arr[i]);
        }
    {}

    return newArr;
}



/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key){
    return arr.filter(function(value, i, arr){ //not using it here, but just a reminder that the callback function also accepts the value index and the whole array as arguments.
        return value[key] !== undefined;
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue){
    return find.filter(function(val){
        return val === searchValue;
    })[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue){
    return arr.filter(function(obj){
        return obj[key] === searchValue;
    })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str){
    var vowels = "aeiou";

    return str.toLowerCase().split("").filter(function(letter){
        return vowels.indexOf(letter) === -1;
    }).join("");
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !== 0
    }).map(function(value){
        return value * 2;
    })
}


// SOME ************************************************

function some(arr, callback){
    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return true;
        }
    }

    return false;
}

function every(arr, callback){
    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr) === false){
            return false;
        }
    }
    return true;
}

function allLowerCase (str){
    return str.split('').every(function(value, index, arr){
        return value === value.toLowerCase();
    });
}

allLowerCase('this is really nice');