
// 1. array with 3 functions and call each function
let func1 = () => {
    console.log("This is function1 of functionAsVariableArray");
}
let func2 = () => {
    console.log("This is function1 of functionAsVariableArray");
}
let func3 = () => {
    console.log("This is function1 of functionAsVariableArray");
}
let functionsAsVariables = [func1,func2,func3];
//forEach() method execute once for each array element
functionsAsVariables.forEach(function(element)
{
    element();
}) 

//2.create a function as const and try create a function normally then call both function
const funcConst = function constFunc(){
    console.log("constant function");
  }
  funcConst();
  function normal(){
      console.log("Normal function");
  }
  normal();
 
  //3. Create an object that has a key whose value is a function. Try calling this function.
  let obJect = {
    objKey : () => {
        console.log("This is function as a key Of object");
    }
}
obJect.objKey();
  
