let a,b, rest;

[a,b, ...rest] = [1,2,4,5,9,10]

console.log(a);
console.log(b);
console.log(rest);

function f() {
    return [1,2]
}

let c,d;
[c,d] = f();

console.log(c,d);