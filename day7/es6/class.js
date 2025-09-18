const student1={
    roll_no :1,
    name :"xyz",
    branch :"CSE DS",
    section :"c"

}
const student2={
    roll_no:2,
    name :"xyz",
    branch :"CSE DS",
    section :"c"

}
console.log(student1)
console.log(student2)

class student{
    constructor(roll_no,name,branch,section){
    this.roll_no=roll_no;
    this.name=name;
    this.branch=branch;
    this.section=section;}
}
const student3=new student(3,"ab","cseds","c");
console.log(student3)