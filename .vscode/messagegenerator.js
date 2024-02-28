

const lifeStyle = {
    firstSet : ['wake up', 'check the phone', 'pray', 'go to bathroom'],
    secondSet : ['eat','check messages'],
    thirdSet : ['setup for the day', 'do daily task', 'reading & personal development']
}

const generateRandom = num => Math.floor(Math.random() * num);

for (let style in lifeStyle){
    let index = generateRandom(lifeStyle[style].length)
    console.log(style);
    console.log(index);
}