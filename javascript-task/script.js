

const people = [
    {name: 'Sandra', age: 18},
    {name: 'Erin', age: 28},
    {name: 'Carl', age: 42},
    {name: 'Lloyd', age: 12},
    {name: 'Samuel', age: 31},
    {name: 'William', age: 65},
    {name: 'Ric', age: 53},
    {name: 'Mick', age: 12},
    {name: 'Ludwig', age: 74},
    {name: 'Hilaire', age: 10},
    {name: 'Menachem', age: 4},
    {name: 'Saul', age: 52},
    {name: 'Robert', age: 65},
    {name: 'Blair', age: 12},
    {name: 'Robert', age: 81},
    {name: 'Peter', age: 69}
];
// 1. Вывести в консоль первый элемент массива
console.log(people[0]);

// 2. Вывести в консоль последний элемент массива
console.log(people[people.length - 1]);

// 3. Вывести в консоль кол-во элементов в массиве
console.log(people.length);

// 4. Вывести в консоль все элементы массива используя наиболее удобный для этого метод
people.forEach((item)=> console.log(item));

// 5. Используя тот же метод (из 4-го пункта), вывести в консоль все имена людей (свойство `name`)
people.forEach((item)=> console.log(item.name));
// 6. Используя наиболее удобный для этого метод создать новый массив - `minorPeople`, на основе массива `people`,
//     который будет хранить в себе только несовершеннолетних людей. (Младше 18 лет).
let minorPeople = people.filter((item) => {
    return item.age < 18
});
console.log(minorPeople)

// 7. Используя тот же метод (из 6-го пункта) создать новый массив - `oldPeople`,
//     на основе массива `people`, в котором будут люди только от 50 лет.
let oldPeople = people.filter((item) => {
    return item.age > 50
});
console.log(oldPeople)

// 8. Используя наиболее удобный для этого метод создайте новый массив - `futurePeople` ,
//     на основе массива `people`, однако возраст у каждого из них должен увеличиться на 30 лет.

let futurePeople = people.map((item) => {
    item.age += 30;
    return item
});
console.log(futurePeople)

// 9. Используя тот же метод (из 8-го пункта), создайте новый массив - `deadPeople`,
//     на основе массива `futurePeople`, в котором к людям, чей возраст превышает 100 лет,
//     должно добавиться еще одно свойство `isDead` со значением `true`, а к остальным, со значением `false`.
let deadPeople = futurePeople.map(function (item, key, arr) {
    if (item.age > 100) {
        item.isDead = true;
        return item;
    } else {
        item.isDead = false;
        return item;
    }

})
console.log(deadPeople)

//Посчитайте средний возраст людей из массива people.

function getMediumAge (arr) {
    let result = arr.reduce(function (sum, item){
        return sum + item.age;
    },0);
    return result / arr.length // округлять число не стал, так как такого в задании не было (не знал нужно ли это, или нет)
}

console.log(getMediumAge(people))