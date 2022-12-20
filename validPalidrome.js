/**
 * @param {string} s
 * @return {boolean}
 */
var oldisPalindrome = function(s) {
    s= s.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    let rightPointer = s.length-1 ;
    for(let leftPointer =0;leftPointer< Math.round(s.length/2);leftPointer++){
        if(s[leftPointer]!==s[rightPointer]){
            return false;
        }
        rightPointer--;
    }
    return true;
};
//aaabaaa 4-1 =3index
//aaaaaa 6/2= 3
var old2isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    let leftPointer;
    let rightPointer;
    if(s.length % 2===0){
         leftPointer = s.length/2-1;
         rightPointer = s.length/2;
    }else{
         leftPointer = Math.round(s.length / 2) - 1;
         rightPointer = Math.round(s.length / 2) - 1;
    }
    while(leftPointer>=0||rightPointer<s.length){
        if(s[leftPointer]!==s[rightPointer]){
            return false;
        }
        leftPointer--;
        rightPointer++;
    }
    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let s1 = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    let s2 = s1.split("").reverse().join("");
    for(let i=0;i<s1.length/2;i++){
        if(s1[i]!==s2[i]){
            return false;
        }
    }
    return true;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));