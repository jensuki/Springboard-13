/* What does the following code return? */
// new Set([1, 1, 2, 2, 3, 4])

{ 1, 2, 3, 4 };

/* What does the following code return? */
//[...new Set("referee").join("")];

"ref";


// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

/* Map(2){
    [1,2,3] => true,
    [1,2,3] => false
} */

// vowelCount
/* Write a function called vowelCount which accepts a string and
returns a map where the keys are numbers and the values are the
count of the vowels in the string. */
function vowelCount(str) {
    str = str.toLowerCase();

    const vowelsMap = new Map();

    for (let letter of str) {
        const count = vowelsMap.get(letter) || 0;
        if ('aeiou'.includes(letter)) {
            vowelsMap.set(letter, count + 1);
        }
    }
    return vowelsMap;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }