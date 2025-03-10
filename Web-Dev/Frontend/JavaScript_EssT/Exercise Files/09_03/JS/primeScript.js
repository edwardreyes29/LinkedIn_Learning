const CEILING = 100;

function primeTest(testValue) {
    let isPrime = true;
    for ( let i = 2; i<testValue; i++ ) {
        if ( testValue % i === 0 ) {
            isPrime = false;
        }
    }
    return isPrime;
}

for (let i = 2; i<=CEILING; i++) {
    let result = primeTest(i);
    // use continue to only display prime numbers
    if ( result == false) {
      continue; // skips to next iteration.
    }
    console.log(i + " is a prime number");
}
