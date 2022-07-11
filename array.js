
const array = [1, 3, 5, 7];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
});

console.log(double);

const mapArray = array.map((num) => {
    return num * 3;
})
console.log(mapArray);
