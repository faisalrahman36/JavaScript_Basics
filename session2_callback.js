const students =[{name:"Fawad", age: 26},{name: "Zohaib", age: 27}];

function getStudents(){
    setTimeout(()=>{
        let studentInfo='';
        students.forEach((student,index)=>{ studentInfo+=` ${student.name} `+` ${student.age}`+ ' \n';
    });
    console.log(studentInfo);
},1000);
};

function printStudents() {

    console.log(students);
}
function createStudent(student, callback){
    setTimeout(()=>{
        students.push(student);
        callback();
    },10000);
}
createStudent({name:'Faisal', age: 37},getStudents);

var student1= {name: 'Ali', age: 25};

console.log('printStudent')
createStudent(student1,printStudents);
