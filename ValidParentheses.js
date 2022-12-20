/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const hash = {
        '(':')',
        '{':'}',
        '[':']'
    }
    let result=true;
    s.split("").forEach(letter=>{
        if(hash[letter]){
            stack.push(letter);
        }else{
            const leftParentheses = stack.pop();
            if(hash[leftParentheses]!==letter){
                 result=false;
            }
        }
    })
    return result&&stack.length===0;
};

console.log(isValid("()"));