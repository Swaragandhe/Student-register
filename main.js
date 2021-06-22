name_of_the_student_Array=[];
function sumbit(){
var name1=document.getElementById("name_of_the_student_1").value;
var name2=document.getElementById("name_of_the_student_2").value;
var name3=document.getElementById("name_of_the_student_3").value;
var name4=document.getElementById("name_of_the_student_4").value;
name_of_the_student_Array.push(name1);
name_of_the_student_Array.push(name2);
name_of_the_student_Array.push(name3);
name_of_the_student_Array.push(name4);
console.log(name_of_the_student_Array);
document.getElementById("display_name").innerHTML=name_of_the_student_Array;
document.getElementById("sumbit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student_Array.sort();
    console.log(name_of_the_student_Array);
    document.getElementById("display_name").innerHTML=name_of_the_student_Array;
}