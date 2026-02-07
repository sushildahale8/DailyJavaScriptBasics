// 1. Variable declare and print
{
    let a=10;
    console.log(a);
}
// 2. print out side the block

console.log("Print A ouotside the block =",a);

// 3. Re-assign and print
{
    let b=10;
    b=20;
    console.log("b=", b);
}

// 4. Re-Declare and print
{
    let c=30;
   // let c=50; >> Re-declare not possible in let
    console.log("c =", c);
}