function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  // randomly choose if success is true or false
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}

function onAwesomeSuccess(data) {
  console.log("It was successful: ", data.message);
}

function onAwesomeFailure() {
  console.log("It failed :(");
}

myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);

//handles performing the mathematical operation using the two numbers.

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function square(a) {
  return a * a;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(4, null, square);

console.log(result);

nums = []

addEventListener("click",o){
    nums=nums.push(1)
}

addEventListener("click",t,{
    nums=nums.push(2)
})

addEventListener("click",th,{
    nums=nums.push(3)
})

addEventListener("click",f,{
    nums=nums.push(4)
})

addEventListener("click",fi,{
    nums=nums.push(5)
})

addEventListener("click",s,{
    nums=nums.push(6)
})
addEventListener("click",se,{
    nums=nums.push(7)
})
addEventListener("click",e,{
    nums=nums.push(8)
})
addEventListener("click",n,{
    nums=nums.push(9)
})
addEventListener("click",a,{
    nums=nums.push("+")
})
addEventListener("click",su,{
    nums=nums.push("-")
})
addEventListener("click",ex,{
    nums=nums.push("^")
})
addEventListener("click",eq,{
    nums=nums.push("=")

})
