/*
    Premitive Datatypes:
    1. Number   : Numeric value Integer / Decimal.
    2. String   : Text value.
    3. Boolean  : True or False.
    4. Undefined: Declare but not assign.
    5. Null     : Intentional empty value.
    6. BigInt   : Very large number.
    7. Symbol   : Unique indetifiers

*/

// 1. Number   : Numeric value Integer / Decimal.
{
    let num1 = 10.10;
    let num2 = 20;
    console.log(typeof num1) // "typeof" helps to get to know it's data type. 
    console.log(num1);
    console.log(num2);
}


//2. String   : Text value.
{
    let name1 = "veera dahale";
    console.log("name =", name1);
    console.log(typeof name1);
}

//3. Boolean  : True or False.
{
    let t1 = true;
    let t2 = false;
    console.log(typeof t1); // "typeof" helps to get to know it's data type. 
    console.log(t1);
    console.log(t2);
}

//4. Undefined: Declare but not assign.
{
    let vv;
    console.log("vv =", vv);
}

//5. Null     : Intentional empty value.
{
    let i="";
    console.log("i =",i);
}

// 6. BigInt   : Very large number.
{
    let bi= 99606877789960687778996068777899606877789960687778996068777899606877789960687778n;
    console.log(typeof bi);
}

// 7. Symbol   : Unique indetifiers
{
   let id = Symbol("id");

let user = {
  name: "Sushil",
  age: 34,
  [id]: 101
};
console.log(user);
}