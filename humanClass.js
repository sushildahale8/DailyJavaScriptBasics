class Human{
    constructor(name,age,add){
        this.name=name
        this.age=age
        this.add=add
    }
    
    display(){
        console.log("name", this.name)
        console.log("age", this.age)
        console.log("add",  this.add)
    }

}

let hum1 = new Human("abc",20,"pune")
hum1.display()


class dog{
    constructor (color, brid, dob)
    {
        this.color=color
        this.brid=brid
        this.dob=dob
    }
    doginfo(){
        console.log("dog color", this.color)
        console.log("dog brif", this.brid)
        console.log("dog dob", this.dob)
    }    
}
let dog1 = new dog("black","jaerman",28)
dog1.doginfo()


function snake(name,brid){
return{
    name: name,
    brid: brid,

    displaysnk()
    {
        console.log("snake ",name)
        console.log("snake brid", brid)

    }
}
}
 let snk = snake("cobra","mamba")
 snk.displaysnk()