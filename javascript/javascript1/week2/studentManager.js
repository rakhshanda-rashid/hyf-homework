//This file contains a homework for HackYourFuture javascript week2
//Student Manager
/*This javascript code will 
add the limited students in 
the class.
Function addStudentToClass will 
add no more than 6 students in class,
and also will not add student who already been enrolled.
Queen can enroll anytime.
*/
//Author: Rakhshanda Rashid

let class10Students = [];
let studentName="jennie";


function addStudentToClass(studentName) 
{  
   if(getNumberOfStudents()===6 && studentName!="Queen")
       {
        return "Number of Students exceeds ,Cannot add more then 6 students in class 10"
       }
    
   else if(studentName === "Queen")
       {
        class10Students.push(studentName);
        return "Queen is added anyway";
       }
   else if(getNumberOfStudents()>0 && getNumberOfStudents()<7)
           {
          for(let i=0;i<=getNumberOfStudents() ;i++)
             {
                if(studentName === class10Students[i])
                {
                  return "Student is already in the class"
                }
             }
           }
     
   else 
     {
        class10Students.push(studentName);
        return studentName;
     }
}

console.log("New student" + " " + addStudentToClass("jennie") + " "  + "successfully added");

//function getNumberOfStudent will calculate the length of array
function getNumberOfStudents() 
{    
    if(class10Students === null)
    {
        console.log("Class should not empty");
    }
   
    return class10Students.length;

}
console.log("Number of students in array are " + getNumberOfStudents());

