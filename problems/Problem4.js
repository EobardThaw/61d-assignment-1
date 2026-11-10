// Problem 4
const indexAndConcat = (arr) => {
    

    let arr1=[];
    let n=0;
    for(let i of arr){

        arr1.push(String(n)+i);
        n+=1;
    }
    return arr1;


}
export default indexAndConcat;