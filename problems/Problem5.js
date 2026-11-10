// Problem 5
const uppercaseStringsContainingWaldo = (arr) => {

let match=arr.filter((text )=> text.includes("waldo"));
return match.map((text)=>text.toUpperCase());


}
export default uppercaseStringsContainingWaldo;



