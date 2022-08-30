//create for loop that iterates from 1 - 100
for (let i = 1; i < 100; i++) {
  //create an if conditional/statement for multiples of 3 & 5
  if (i % 5 === 0 && i % 3 === 0) {
    // create element and append result in DOM
    const fizzBuzz = document.createElement("h3");
    fizzBuzz.innerHTML = `FizzBuzz`;
    document.body.appendChild(fizzBuzz);
  }
  //create an if conditional/statement for multiples of 3
  else if (i % 3 === 0) {
    // create element and append result in DOM
    const fizz = document.createElement("h3");
    fizz.innerHTML = `Fizz`;
    document.body.appendChild(fizz);
  }
  //create an if conditional/statement for multiples of 5
  else if (i % 5 === 0) {
    // create element and append result in DOM
    const buzz = document.createElement("h3");
    buzz.innerHTML = `Buzz`;
    document.body.appendChild(buzz);
  } else {
    const none = document.createElement("h3");
    none.innerHTML = i;
    document.body.appendChild(none);
  }
}
