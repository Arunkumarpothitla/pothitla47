//Using Slice on the Array
let arr = ["kavab ", "milmaker ", "milkshake ", "gobi ", "frencfrids","mogalai "]

let newarr = arr.slice(1,5)
document.write(newarr+"<br><br>")

//Using Splice on the Array
let ar1 = ["kavab","milmaker","milkshake","gobi","frencfrids","mogalai"]

ar1.splice(-3,0,'maggi','rosemilk')
document.write(ar1+"<br><br>")

//Array Filter
let arr1 = [30,40,50,60,70,80]
function isPrime(data){
    for(let i=2;i<data;i++){
        if(data%i==0){
            return false
        }
    }
    return true
}

let evenno = arr1.filter(element => isPrime(element))

document.write(evenno+"<br><br>")

//Using Reject on the Array
//As there is no such function as reject we are going to use the same filter function and we are going to work over the different conditon to yield the output

let arr2 = [30,40,50,60,70,80]

function isNotEven(data){
    let count = 0
    for(let i=2;i<data;i++){
        if(data%i==0){
            return true
        }
    }
    return false
}

let notprime = arr2.filter(isNotEven)

document.write(notprime+"<br><br>")


//Using Map on the Array
let newarr1 = [11, 34, 20, 5, 53, 16]

function findTheSqaureOfTheNumber(dat){
    return dat*dat
}

let squarearr = newarr1.map(findTheSqaureOfTheNumber) 

document.write("The total items "+squarearr+"<br><br>")

//Using Reduce on the Array
let myArr = [2, 3, 5, 10]
function multi(prevval, currval){
    return prevval*currval
}

let multarr = myArr.reduce(multi)

document.write(multarr+"<br><br>")