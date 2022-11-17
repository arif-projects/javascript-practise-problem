var student = {
    name: 'Mohammad Arif',
    id: 01,
    department: 'CSE',
    session: 'Spring17',
    levelTerm: 'L1T1',
    age: 21
};

var sessionProperty = "session";
//same
student.age = 23;
student["department"] = 'EEE';
student[sessionProperty] = 'l2t2'
//same

console.log(student.age);
console.log(student);
