// Problem 3
const multiplyBy = (arr, multiplier) => {

let arr1=[];
for(const i of arr){
    arr1.push(i*multiplier);
}
return arr1;
}
export default multiplyBy;