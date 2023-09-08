// code your solution here
const saturdayFun = function (arg = "roller-skate") {
    return `This Saturday, I want to ${arg}!`
}

const mondayWork = function (arg = "go to the office") {
    return `This Monday, I will ${arg}.`
}

const wrapAdjective = function (visualFlair = "*") {
    
    const inner = function (arg = "special") {
        return `You are ${visualFlair + arg + visualFlair}!`;
    }
    
    return inner;
}

console.log(wrapAdjective("%")())