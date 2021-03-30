
// 1
let arr1 = [101, 202, 303, 404, 505];
let arr2 = [606, 707, 808, 909];
let superArr = [...arr1, ...arr2];

console.log(superArr);

// 2
console.log(Math.min(...superArr));

//3
let obj = {
    width: 300,
    height: 550,
};

let newObj = {...obj, area: function () { return this.width * this.height }};
console.log(newObj.area());

//4

function sumNums (...rest) {
    return rest.reduce((sum,item) => {return sum + item},0);
};
console.log( sumNums(10, 20, 30, 40))