/**
 * @param {string} s
 * @return {number}
 */
var oldlengthOfLongestSubstring = function(s) {
    let maxSubstring = 0;
    let hash ={};
    let counter =0;
    for(let i=0;i<s.length;i++){
        const isRepited= hash[s[i]];
        if(isRepited>=0){
            hash={};
            i=isRepited;
            maxSubstring=Math.max(maxSubstring,counter);
            counter=0;
        }else{
            hash[s[i]]=i;
            counter++;
        }
    }
    return Math.max(counter,maxSubstring);
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxSubstring = 0;
    let hash ={};
    let counter =0;
    let leftPointer=0;
    for(let i=0;i<s.length;i++){
        const isRepited= hash[s[i]];
        if(isRepited>=0&&isRepited>=leftPointer){
            counter=i-isRepited;
            leftPointer=isRepited+1;
        }else{
            maxSubstring=Math.max(maxSubstring,++counter);
        }
        hash[s[i]]=i;
    }
    return maxSubstring;
};

console.log(lengthOfLongestSubstring("aab"));