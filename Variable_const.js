
// 1. Declare const and print
{
const pi_1 = 13.14;
console.log("pi_1 value =",pi_1);
}

// 2. Re-assign and print
{
    const pi_2 = 14.55;
    // pi_2 = 15.55;  >> Run time error : Reassign not possible in Const variable. 
    console.log("pi_2 value =",pi_2);
}

// 3. Re-declare and print
{
    const pi_3= 10.33;
    //const pi_3= 20.11; >> Compile time error : Redeclare not possible in Const variable
    console.log("pi_3 value=",pi_3);
}

// 4. Try to access outside the block

//console.log("pi_3 value print outside the block",pi_3); >> To access the const variable outside the block is not possible.