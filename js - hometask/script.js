
//задание 1
// for(let i = 0; i <= 1000; i++){
//     console.log(i);
// }
//задание 2
// let array = ['html','css','js','react'];

// array.push(prompt('Введите элемент для добавления в массив.'));
// console.log(array);

//задание 3
//
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// задание 4
// let array2 = [10,123,13,481,1931];
//
// function arraySum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     };
//     return sum;
// }
//
// let a = arraySum(array2);
//     console.log(a);

//задание 5

// let array3 = ['lorem', 123, true, 1993, 'php', 'mysql', 567, false];

//задание 6 - 7

let array4 = ['frontend', ['js', 'html', 'css'], 'react', ['node js', 'mysql'], 'php'];

for (let i = 0; i < array4.length; i++) {
    if (typeof array4[i] === 'object'){
        for (let j = 0; j < array4[i].length; j++) {
            console.log(array4[i][j]);
        };
    } else {
        console.log(array4[i]);
    };
};






