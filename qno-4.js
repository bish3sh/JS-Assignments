// let fruits=['apple','orange','mango','grape','peach'];
// console.log('first fruit:'+ fruits[0]);
// console.log('last fruit:'+ fruits[fruits.length-1]);

// fruits.push('pear');
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// for(fruit of fruits){
//     console.log(fruit);
// }

const large = (arr) => {
    let largest = arr[0];
    for (num of arr) {
        if (num > largest) {
            largest = num;
        }
    }
    return largest;
}

let numbers=[5,7,8,4,3]
console.log('Largest: '+large(numbers))





