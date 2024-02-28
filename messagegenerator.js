
const lifeStyle = {
    firstSet : ['wake up', 'check the phone', 'pray', 'go to bathroom'],
    secondSet : ['eat','check messages'],
    thirdSet : ['setup for the day', 'do daily task', 'reading & personal development']
}

const generateRandom = num => Math.floor(Math.random() * num);

let dailyTask = [];

for (let style in lifeStyle){
    let indexOpt = generateRandom(lifeStyle[style].length)

    switch(style) {
        case "firstSet":
            dailyTask.push(`What to do first thing in the morning "${lifeStyle[style][indexOpt]}".`);
            break;

        case "secondSet":
            dailyTask.push(`What to do second thing after waking up "${lifeStyle[style][indexOpt]}"`);
            break;

        case "thirdSet":
            dailyTask.push(`What to do third thing after eating "${lifeStyle[style][indexOpt]}"`);
            break;

        default:
            dailyTask.push("other things done")
    }

}
function dailyLiving(input){
    const formatted = dailyTask.join('\n');
    console.log(formatted);
}

  
  dailyLiving(dailyTask);