const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
}, []);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
