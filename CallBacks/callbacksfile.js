console.log('callback')
    // from server 
const students = [
    { name: 'daniya', subject: 'javascript' },
    { name: 'neha', subject: 'content writing' }
]


function enrollStudent(student, callback) {
    setTimeout(function() {
        students.push(student)
        console.log('student has been enrolled');
        callback();
        console.log('call back execute')
    }, 8000);
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
let newStudent = {
    name: 'sunny',
    subject: 'python'
};
enrollStudent(newStudent, getStudents);
getStudents();
//getStudents work in 1 sec but enroll take place in 3 seconds SO ADD A CALLBACK FUNCTION IN ENROLL FUNCTION IT WILL EXECUTE WHEN THE WORKING OF ENROLLSTUDENT GET DONE