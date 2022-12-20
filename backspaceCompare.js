/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i1 = s.length-1;
    let i2 = t.length-1;
    while(i1>=0||i2>=0){
        i1=backspace(i1,s);
        i2=backspace(i2,t);
        if(s[i1]!==t[i2]){
            return false;
        }
        i1--;
        i2--;
    }
    return true;
}

var backspace=(i,s)=>{
    let backcount =0;
    if(s[i]==="#"){
        backcount += 2;
        while(backcount>0){
            i--;
            backcount--;
            if(s[i]==="#"){
                backcount+=2;
            }
        }
    }
    return i;
}
    console.log(backspaceCompare("ab##","c#d#"));