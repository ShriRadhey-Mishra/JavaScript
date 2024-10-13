// Grade Rating:
// 0-59    F    
// 60-69   D
// 70-79   C
// 80-89   B
// 90-100  A

const marks = [80, 80, 50]

console.log(calculateGrades(marks));

function calculateGrades(marks) {
    let sum = 0;
    for (let item of marks)
        sum += item 

    let average = sum / marks.length;

    if (average<60) return 'F';
    if (average<70) return 'D';
    if (average<80) return 'C';
    if (average<90) return 'B';
    return 'A'
}