//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 0; i <= 100; i++)
        if (i >= 5 && i <= 100) {
            console.log(i);
        } else {
            console.log('error');
        }
};

//fiveToOneHundred();

//Write a function multiplesOfThree that console logs all positive numbers to 100 that is a multiple of 3.
const multiplesOfThree = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

multiplesOfThree();

// 3. Multiples of Three or Five
// Function written by Sadia
const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

multiplesOfThreeOrFive();
function add(a, b) {
    if (a === b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
}

// Example calls:
console.log(add(2, 4));   // 6
console.log(add(10, -5)); // 5
console.log(add(3, 7.5)); // 10.5
console.log(add(5, 5));   // 30
console.log(add(6, 6));   // 36

// untilNum
const untilNum = (number) => {
    for (let i = 1; i <= number; i++) {
        if (typeof i === "number") {
            console.log(i)
        }
    }
};

untilNum(5)

const multiply = (num1, num2) => {
    return num1 * num2;

};
console.log(multiply(2, 4))
