interface I1{
    a:number
    b:number

    add():number
}

interface I2 extends I1{

    x:number
    y:number

    sub():number
}

class MyClass implements I2{

    a:number
    b:number
    x:number
    y:number

    constructor(a:number, b:number, x:number, y:number)
    {
        this.a=a
        this.x=x
        this.b=b
        this.y=y
    }

    add(): number {
        return this.a+this.b
    }
    
    
    sub():number{
        return this.a-this.b
    }
}

let c1=new MyClass(20,30,10,5)
console.log(c1.add())
console.log(c1.sub())
