let student={
    name: 'Bishesh', age:23,grade:'A',isEnrolled:true
}

// console.log(student.name);
// console.log(student.grade);

// student.grade='A+';
// console.log(student.grade)

// student.hobby='Gaming';
// console.log(student.hobby);

// for (let att in student){
//     console.log(student[att]);
// }

const describestudent=(stu)=>{
    return(stu.name+stu.age+stu.grade);
}

console.log(describestudent(student));