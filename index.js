//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 0; i <= 100; i++)
        if (i >= 5 && i <= 100) {
            console.log(i);
        } else {
            console.log('error');
        }
};

fiveToOneHundred()