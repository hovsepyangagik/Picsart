function getStudentsWithNamesAndTopNotes(studentNotesArr) {
    let studentTopNotesArr = [];

    studentNotesArr.forEach(studentObj => {
        let newStudent = {};
        let topNote = studentObj.notes.sort((a, b) => b - a)[0];

        newStudent.name = studentObj.name;
        newStudent.topNote = topNote;
        studentTopNotesArr.push(newStudent);
    });

    return studentTopNotesArr
}

console.log(getStudentsWithNamesAndTopNotes([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
]));
