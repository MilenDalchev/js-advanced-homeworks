function fibonacci() {
    let prev = undefined;
    let current = 1;
    let result;

    return function() {
        if (prev === undefined) {
            result = 1;
            prev = 0;
        } else {
            result = prev + current;
            prev = current;
            current = result;
        }
        
        return result;
    };
}

let fibonator = fibonacci();
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());
console.log(fibonator());