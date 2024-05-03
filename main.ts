import inquirer from "inquirer"

class student {
    id: string;
    name: string;
    coursesEnrolled: string[];
    feesAmount: number;

    constructor(id: string, name: string, coursesEnrolled:string[], feesAmount: number){
        this.id = id
        this.name = name
        this.coursesEnrolled = coursesEnrolled
        this.feesAmount = feesAmount
    }
}

let baseId = 10000
let studentId: string = "";
let continueEnrollment = true;

let students: student[] = []



do{
    let action = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "please select an option:\n",
        choices: ["Enroll a student", "show student ststus"]
    })

if(action.ans === "Enroll a student"){
    let studentName = await inquirer.prompt({
        type: "input",
        name: "ans",
        message: "please Enter your name:"
    })
    let trimmedStudentName = (studentName.ans).trim().toLowerCase()
let studentNameCheck = students.map(obj => obj.name)
if(studentNameCheck.includes(trimmedStudentName) === false){
if(trimmedStudentName !== ""){
    baseId++
    studentId = "STID" +  baseId
    console.log("\n\t your account has been created");
    console.log(`welcome, ${trimmedStudentName}!`);
    let course = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: " please select a course",
        choices: ["IT", "English", "cooking"]
    })
        let courseFees = 0;
        switch(course.ans) {
            case "IT" :
            courseFees = 5000;
            break;



            case "English" :
            courseFees = 500;
            break;



            case "cooking" :
            courseFees = 200;
            break;
        }
        let courseConfirm = await inquirer.prompt({
            type: "confirm",
            name: "ans",
            message: "Do you want to enroll in this course"
        })

        if(courseConfirm.ans === true){
            let Student  = new student  (studentId, trimmedStudentName, [course.ans], courseFees)
            students.push(Student)

            console.log("you have enrolled in this course");
        }
    }else{
        console.log("invalid Name");
    }

   }else{
    console.log("this name is already exists");
   }





}
   else if(action.ans === "show student status"){
    if(students.length !== 0){
    let studentNameCheck = students.map(e => e.name)
    
    let selectedStudent = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "please select name",
        choices: studentNameCheck
    })

    let foundStudent = students.find(e => student.name === selectedStudent.ans)

    console.log("student information");
    console.log(foundStudent);
    console.log("\n");


   }else{
    console.log("Record is empty");
   }

}
    let userConfirm = await inquirer.prompt({
        type: "confirm",
        name: "ans",
        message: "Do you want to continue?"
    })

    if(userConfirm.ans === false){
        continueEnrollment = false
    }

}while(continueEnrollment)