// Enum:- Enumeration: data type- hold the collection of constants.
// numeric
// string
// heterogenous

enum Browser{
    chrome,
    firefox,
    edge,
    safari
}
console.log(Browser.chrome)  //It will print the index of the element
console.log(Browser.firefox)  //It will print the index of the element
console.log(Browser)         


//  Custom the values:-
enum Browser1{
    chrome=5,
    firefox=8,
    edge,
    safari
}

console.log("The output of the custom value of firefox is:-"+Browser1.firefox)
console.log("The output of custom value of safari is:-"+Browser1.safari)


function getversion(browserName:string):number{
    if(browserName==='chrome')
    {
        return 123
    }
    return -1
}

enum brow{
    chrome=getversion('chrome'),
    firefox = getversion('firefox'),
    edge = getversion('edge'),
    safari = getversion('safari')
}

console.log(brow.chrome)
console.log(brow.edge)

// String enum:-

enum environment{
    DEV="dev",
    QA="qa",
    PROD="prod",
    STAGE="staging"
}

console.log(environment.DEV)
console.log(environment['PROD'])

// heterogeneous enum:-

enum Status{
    ACTIVE="active",
    DEACTIVE=1,
    PENDING
}

console.log(Status.ACTIVE)
console.log(Status.DEACTIVE)
console.log(Status.PENDING)