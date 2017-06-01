
//15 is first number that is both divisible by 3 and 5, therefore
//it's dividing by that number.
//It's a first condition, because otherwise  it would print fizz or buzz instead
//(Depends which condition was first to check the number)
var numbersArray = [];
for(var i = 1; i<=100;i++){
    numbersArray.push(i);
}
for (var num in numbersArray) {
  var element = numbersArray[num];
  if(element % 15 ==0){ 
      console.log("FizzBuzz");
  }else if(element % 5 ==0){
      console.log("Buzz");
  }else if(element % 3 == 0){
      console.log("Fizz");
  }else{
      console.log(element);
  }
}