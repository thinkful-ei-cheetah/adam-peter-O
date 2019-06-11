function sheep(num){
    for(let i=num; i >= 1; --i){
        console.log(`${i} : Another Sheep jumped over the fence`)
        if(i === num){
        console.log(`All sheep jumped over the fence`)
        }
    }
}
//O(n)



//sheep(3);

function power(base, exp){
    return Math.pow(base, exp)
}
// O(1)

// console.log(power(2,8))

function revStr(string){
    return string.split("").reverse().join('')
}
// O(1)
// console.log(revStr("oop"))

function trigNum(n){
    let num = 0
    for(let i = 1; i<=n; i++){
        if(i === 1){
            num = 1
        }
        else{
        num += i
        }
    }
    return num
}
// O(n)
console.log(trigNum(4))

function stringSplitter(str, limit){
    let splitStr = [];
    for (let i=1; i < str.length; i++){
        if (str[i] !== limit){
            splitStr.push(str[i])
        }
    }
    return splitStr.join('');
}
// O(n)
console.log(stringSplitter("02/20/2020", "/"))

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
  
        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
  }
  //O(n)

function factorial(n){
    let num = 1
    for(let i=1; i<=n; i++){
        num *= i;
    }
    return num;
}
//O(n)
console.log(factorial(6))



function countSheep(num) {
    if (num === 0) {
      console.log('All sheep jumped over the fence');
      return '';
    }
    console.log(`${num}: Another sheep jumped over the fence`);
    countSheep(num - 1);
  }
  //O(n)
  // countSheep(3);



  
  function powerCalculator(base, exp) {
    if (exp === 0) {
      return 1;
    }
    const exponent = base * powerCalculator(base, exp - 1);
    return exponent;
  }
   //O(n)
  // console.log(powerCalculator(2, 7));
  
  
  function revString(str) {
    if (str === '') {
      return '';
    }
    const newChar = str[str.length - 1];
    return newChar + revString(str.slice(0, str.length - 1));
  }
   //O(n)
  // console.log(revString('hello'));
  
  
  function triangularNumber(base) {
    if (base === 1) {
      return 1;
    }
    return base + triangularNumber(base - 1);
  }
   //O(n)
  // console.log(triangularNumber(4));
  // console.log(triangularNumber(5));
  
  
  function stringSplitter(str, limit) {
    if (str === '') {
      return '';
    }
    const newChar = str[0];
    if (str[0] === limit) {
      return stringSplitter(str.slice(1), limit);
    } else {
      return newChar + stringSplitter(str.slice(1), limit);
    }
  }
   //O(n)
  console.log(stringSplitter('0/2/2/0/20/2/0', '/'));
  
  function fibonacci(n){
    if (n < 2 ){
      return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
  }
  //O(2^n)
  console.log(fibonacci(4));
  
  function factorial(n){
    if (n === 0 ){
      return 1;
    }
    return n*factorial(n-1);
  }
   //O(n)
  console.log(factorial(5));

