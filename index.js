//1
function countToTen(){
  for(let i=1; i<=10; i++){
      console.log(i);
  }
}

//2
function countFromOne(num){
  for(let i=1; i<=num; i++){
      console.log(i);
  }
}

//3
function countEveryEven(num){
  for(let i=1; i<=num; i++){
      if(i % 2 === 0){
      console.log(i);
      }
    }
}

//4
function countEveryOdd(num){
  for(let i=1; i<=num; i++){
      if(i % 2 > 0){
      console.log(i);
      }
  }
}

//5 
function countEvens(arr){
    let count = 0;
  for(let i=1; i< arr.length; i++){
      if(arr[i] % 2 === 0){
      count++;
      }
  }
  return count;
}

countToTen();
countFromOne(10);
countEveryEven(10);
countEveryOdd(10)
console.log(countEvens([1,2,3,4,5,6,8]));