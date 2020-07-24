// // -reject
// // -resolve
// // -pending


// function func1() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log('Promise Resolved')
//                 resolve();
//             } else {

//                 console.log('not resolved')
//                 reject('Sorry not fulfilled')
//             }
//         }, 2000);
//     })
// }
// // when resolve
// func1().then(function() {
//     console.log('Thnaks for resolving')
// }).catch(function(reason) {
//     console.log('Very Bad:',
//         reason)
// })



// Use as a substitute for callback functions
// previous callback function to promises eg:
const students = [
    { name: 'daniya', subject: 'javascript' },
    { name: 'neha', subject: 'content writing' }
]
let newStudent = {
    name: 'sunny',
    subject: 'python'
};
enrollStudents(newStudent).then(getStudents).catch(errorFunc)


function enrollStudents(student) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            students.push(student);
            console.log(`student has been enrolledd`);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    })
}

function getStudents() {
    setTimeout(function() {
        let str = '';
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log('student has been fetched')
    }, 1000);
}

function errorFunc() {
    alert(`oops some error occured`)
}