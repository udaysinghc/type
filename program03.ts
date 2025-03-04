let stre:string="aaabbbccd"
let unique:string=""
for(let i=0; i<stre.length; i++)
{
    let ch:string=stre[i]
    let count:number=1
    for(let j=i+1; j<stre.length; j++)
    {
        let ch1:string=stre[j]
        if(ch==ch1)
        {
            count++
        }
    }
    if(count==1)
    {
        unique+=ch

    }
}
console.log(unique)

