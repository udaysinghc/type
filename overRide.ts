class Bank{

    rateOfInterest:number

    roi():number
    {
        return 0
    }
}

class BankX extends Bank
{
    roi():number
    {
        return 10.5
    }
}

class BankY extends Bank
{
    roi():number
    {
        return 12.5
    }
}

let bank1=new BankX()
console.log("The BankX rate is :-"+bank1.roi())


let bank2=new BankY()
console.log("The BankY rate is :-"+bank2.roi())


