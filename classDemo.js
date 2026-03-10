class student{
    constructor(name, age)
    {
    this.name = name
    this.age = age
    }
display()
{
    console.log(this.name)
    console.log(this.age)
}
}

let std1 = new student("abc",20)

std1.display()