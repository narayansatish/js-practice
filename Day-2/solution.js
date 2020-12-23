// write all your solution here. 
/////////////////////////////////////////////////////////////////////////
function question1(input){
    return Array.isArray(input);

}
let  answer1 = question1('w3resource');
console.log(answer1);

answer1 = question1([1, 2, 4, 0]);
console.log(answer1);
/////////////////////////////////////////////////////////////////////////////
function question5(input){

    return input.filter((item)=>{
        if(item>0)
            return item;
    });


}
let answer5=question5([-4, 3, 2, -21, 1]);
console.log(answer5);


/*
function question3(){

}



const answer1 = question1('pass sample input');
const answer2 = question2('pass sample input');
const answer3 = question3('pass sample input');



console.log(answer2);
console.log(answer3);
*/