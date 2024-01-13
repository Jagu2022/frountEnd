//If the marks obtained by a student in five different subjects are input through the keyboard, find out the aggregate marks and percentage marks obtained by the student. Assume that the maximum marks that can be obtained by a student in each subject is 100.

var english = +prompt("enter your english marks by 100 :") 
var hindi = +prompt("enter your hindi marks by 100 :") 
var math = +prompt("enter your math marks by 100 :") 
var science = +prompt("enter your science marks by 100 :") 
var social = +prompt("enter your social marks by 100 :") 
var totalMarks = english+hindi+math+science+social
var aggregate = totalMarks/5
console.log(`aggregate ${aggregate}`)
var percentageOfMarks = 100/500 * totalMarks
console.log(`percentageOfMarks ${percentageOfMarks}`)
