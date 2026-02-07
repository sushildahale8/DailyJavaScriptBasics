// 1. Declare var and access in same block
{
    var a =10;
    console.log("A =", a)
}

// 2. Declare and try to acceess out side of the block

{
    var b=20;
}
console.log("b =",b); // possible var can accees out side of the block

// 3. Re-assign >> Allow in var

{
    var c=30;
    console.log("C before Re-Assign",c);
    c=50;
    console.log("C After Re-Assign",c); // Print 50, Re-assign possible for Var.
}

// 4. Re-declare >> Allow in var

{
    var d=60;
    console.log("D before Redeclare",d);

    var d=70;
    console.log("D after declare",d);
}