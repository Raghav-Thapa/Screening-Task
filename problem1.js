// Given three numbers X, Y & Z. write a function/method that finds the greatest among the numbers.

function greatest(x,y,z) {
    if(x > y && x > z){
        return x
    }
    else if(y > x && y > z){
       return y
    }
    else{
        return z
    }
}

let numbers = greatest(14,12,13)
console.log("Greatest number is ",numbers)

