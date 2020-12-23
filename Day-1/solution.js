// write all your solution here. 

function question1(arr){
     
return filtered_arr=arr.filter(item=> item!=0 && item!=null && item!=false &&item!="");

//filter function makes a new array of element passing function condition other would be eliminated

}

function question2(library){
    let compare=(a,b)=> (a.title).localeCompare(b.title);
    
    library.sort(compare);
    return library;
    /*concepts involved 
    local compare compare two strings -> will return two if first strings is greater in terms of dictionary
    compare function --> a is ith and b is (i+1)th if you want to swap them return true otherwise false , according to condition 
    you can return true or false
    */

}

function question3(n){

let number=n.split("");
for(let i=1;i<number.length;i++)
    {
        if(number[i]%2==0 && number[i-1]%2==0)
            {
                number.splice(i, 0, '-');
                i++;
            }
    }
return number.join("");


}



const answer1 = question1([58, '', 'abcd', true, null, false, 0]);
const answer2 = question2( [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ]);
const answer3 = question3("025468");

console.log(answer1);
console.log(answer2);
console.log(answer3);