class calculate{


    constructor (a,b){
        this.a=a
        this.b=b
    }

    add()
    {
        let c =this.a+this.b
        return c
    }

    mul()
    {
        return this.a*this.b
    }

    sub()
    {
        return this.a-this.b
    }

}

let addition = new calculate(10,20)
let multi = new calculate(10,20)
let subtraction = new calculate (100,50)

console.log(addition.add())
console.log(multi.mul())
console.log(subtraction.sub())