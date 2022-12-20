/**
 * @param {string} s
 * @return {boolean}
 */
var isAlmostPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    if(s.length<=2) return true;

    let rightPointer = s.length - 1;
    for (let leftPointer = 0; leftPointer <= rightPointer; leftPointer++) {
        if (s[leftPointer] !== s[rightPointer]) {
            if (!isPalindromeAfterSubstriction(s, leftPointer + 1, rightPointer)) {
                return isPalindromeAfterSubstriction(s, leftPointer, rightPointer - 1);
            } else {
                return true;
            }
       }
        --rightPointer;
   }
   return true;
};

var isPalindromeAfterSubstriction=function (s,leftPointer,rightPointer){
    while(leftPointer<=rightPointer){
        if(s[leftPointer]!==s[rightPointer]){
            return false;
        }
        --rightPointer;
    }

    return true;
}


console.log(isAlmostPalindrome("12345321"));