console.log('Hello Anant');

const Students=[{name:'Anant Yadav',subject:'java Script'},
{name:'Vikash Yadav',subject:'Machine Learning'}];


function enrollStudents(Student,callback){
        setTimeout( function() {
            Students.push(Student);
            callback();
            console.log('Student has been enrolled');
            
   
    }, 1000);
}

function getStudent(){
    setTimeout(function() {
        let str="";
        Students.forEach(function(Student){
            str+=`<li>${Student.name}</li>`
            console.log('Student have been fetched');
     });
        document.getElementById('Students').innerHTML=str;
        // console.log(Student.name);
        
    }, 3000);
}

let newStudent={name:'Sunny',subject:'python'};
enrollStudents(newStudent,getStudent);
// getStudent();

