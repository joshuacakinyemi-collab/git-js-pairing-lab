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