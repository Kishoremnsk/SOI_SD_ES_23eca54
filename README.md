FOR PROBLEM 1:

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
}, []);
console.log(uniqueArray);


FOR PROBLEM 2:


function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    let left = 0, right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("madam"));  
console.log(isPalindrome("hello"));  
