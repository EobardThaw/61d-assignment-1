// Problem 7

const doubleAge = (obj) => {
    let p=JSON.parse(obj)
    if ('age' in p){
        p.age=p.age*2
    }else{
        p.age=0
    }

return p


};

export default doubleAge;
