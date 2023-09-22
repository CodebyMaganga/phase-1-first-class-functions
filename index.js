function receivesAFunction(callback){
    callback();
}

/**
let fn = (returnsANamedFunction) => returnsANamedFunction();

console.log(fn(function (){
    console.log("Print me if working")
}))
*/

function returnsANamedFunction(){
    function printMe(){
        console.log("I am a callback function")
    }
    console.log("I am working")
    return printMe;
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    console.log("Checking to see if I work")
    return function (){
        console.log("Print me out")
    }
}


