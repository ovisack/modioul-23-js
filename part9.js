
   



// function waitingTime(waitingTimes, serialNumber) {
//     if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number" || serialNumber <= waitingTimes.length) {
//         return "Invalid Input";
//     }

//     let totalTimes = 0;
//     for (let waitingTime of waitingTimes) {
//         totalTimes += waitingTime;
//     }
// let avgTime = totalTimes / waitingTimes.length;
//     let remainingPeople = (serialNumber -1) - waitingTimes.length;
    
//     let remainingTime = remainingPeople * avgTime;
 
//     return remainingTime;
// }
function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length){
        return 'invalid Input';
    } 
    let totalTimes = 0;
    for(let waitingTime of waitingTimes){
        totalTimes += waitingTime;
    }
    let remainingStudents = serialNumber - waitingTimes.length - 1;
    let avgTime = Math.round(totalTimes / waitingTimes.length);
    let remainingTime = remainingStudents * avgTime;
    return remainingTime;
}



console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10))

console.log(waitingTime([13, 2], 6))
console.log(waitingTime([13, 2, 6, 7, 10], 6))
console.log(waitingTime([6], 4))
console.log(waitingTime(7 , 10))
console.log(waitingTime("[6,2]", 9))
console.log(waitingTime([7, 8, 3, 4, 5], "9"))







