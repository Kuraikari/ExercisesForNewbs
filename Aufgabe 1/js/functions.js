function calc(input) {
  var operators = ["+", "-", "*", "/", "^", "√"];
  if (input.indexOf("+") > 0) {
    var nums = input.split("+");
    console.log(add(parseInt(nums[0]), parseInt(nums[1])));
  }
  if (input.indexOf("-") > 0) {
    var nums = input.split("-");
    console.log(subtract(parseInt(nums[0]), parseInt(nums[1])));
  }
  if (input.indexOf("*") > 0) {
    var nums = input.split("*");
    console.log(multiply(parseInt(nums[0]), parseInt(nums[1])));
  }
  if (input.indexOf("/") > 0) {
    var nums = input.split("/");
    console.log(divide(parseInt(nums[0]), parseInt(nums[1])));
  }
  if (input.indexOf("√") > 0) {
    var nums = input.split("√");
    console.log(squareRoot(parseInt(nums[0])));
  }
}

function add(a, b) {
  return (a + b);
}
function subtract(a, b) {
  return ;
}
function divide(a, b) {}

function multiply() {}

function squareRoot(a) {
  var precision = 0.00001;
  var low = 0;
  var high = a;
  var mid = 0;
  while((high - low) > precision){
    mid = ((low + high) / 2);
    if ((mid - precision) >= mid * mid && mid * mid <= (precision + mid)) {
      break;
    } else if (mid * mid < a) {
      low = mid;
    } else {
      high = mid;
    }
  }
  if (parseInt(mid) >= (Math.round((mid / precision) * precision))) {
    return Math.round((mid / precision) * precision);
  } else if (parseInt(mid) <= (Math.round((mid / precision) * precision))) {
      return Math.round((mid / precision) * precision);
  } else {
    return mid;
  }


}

// FUNKTION fürs HOCHRECHNEN |
//                           |
//                           V
