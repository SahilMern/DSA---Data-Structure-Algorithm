// 07. Factorial Program

const Factorial = (num)=> {
  if(num<0){
    return false
  }

  if(num===0 || num===1){
    return 1
  }

  return num * Factorial(num-1)
}
console.log(Factorial(5));
