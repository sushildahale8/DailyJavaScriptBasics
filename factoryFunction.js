function student(name, age)
{

    return{
        name: name,
        age: age,

        display(){
        
            console.log(name)
            console.log(age)

        }
    }
}

 let stud1 = student("abc",20)
    stud1.display()