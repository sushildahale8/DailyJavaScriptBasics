/*
1. == (Equal equal to)
2. === (Strict equal to)
3. != (Not equal to)
4. !== (Strict not equal to)
*/

// 1. == (Equal equal to) it compairs only Value
let a=10;
let b="10";
console.log(a==b); // Output true

// 2.=== (Strict equal to) it compairs only Value + Datatype
let c=10;
let d="10";
console.log(c===d); // Output false;

// 3. != (Not equal to) Value should not match
let e=22;
let f=23;
console.log(e!=f) //output True

// 4.!== (Strict not equal to) Value should not match, if it's match it will return FALSE
let g=13;
let h=23;
console.log(g!==h) //output True


