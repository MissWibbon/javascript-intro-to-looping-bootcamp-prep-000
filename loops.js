function forLoop(array) {

  for (var i = 0; i < 25; i++) {

    if (i===1) {
      array.push("I am " + i + " strange loop.");
    }
    else {
      array.push("I am " + i + " strange loops.")
    }
  }
  return array;
}

function whileLoop(n) {
  while(n > 0){
    console.log(n);
    --n;
  }
  return "done";
}

function doWhileLoop(num) {
  var i = 0

  function incrementVariable() {
    i += 1
    return i
  }

  do {
    console.log("I run once regardless.")
  } while (incrementVariable() < num)
  return function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {console.log("I run once regardless.")} 
  while (num.length === 0 && maybeTrue() < num); 
  return num(10) 
}