function calculator(a,b){
    return{
        a: a,
        b: b,

        add(){
            return a+b
        }
    }
}

let addition = calculator(10,20)
console.log(addition.add())