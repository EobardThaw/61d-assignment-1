// Problem 2
const largestMystery = (arr, mysteryFunc) => {


let lar=null;
for(const num of arr){
    if (mysteryFunc(num)){

        if (lar<num||lar==null){

            lar=num;
        }
    }
}

if(lar==null){

    return "No number passes the function!";
}else{

    return lar
}
}
export default largestMystery;  