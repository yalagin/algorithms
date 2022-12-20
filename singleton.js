
let view = "123";
function init(){
     view = "test";
    console.log("test1");
    return function(){

    }
}

const test=init();
test();
test();
test();
console.log(view)