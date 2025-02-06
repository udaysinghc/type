class BankInfo{

    private balance:number

    constructor(value:number)
    {
        this.balance=value
    }

    getBalance():number
    {
        return this.balance
    }

    setBalance(value:number):void
    {
        this.balance=value
    }
}

let bankInfo=new BankInfo(1000)
console.log("Before credit the salary in account, balance is:- "+bankInfo.getBalance())
bankInfo.setBalance(50000)
console.log("After credit the salary in account, balance is:-  "+bankInfo.getBalance())