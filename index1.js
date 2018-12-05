console.log('Hello World');
let number=1;
console.log(number);
number++;
number=number+2;
number+=1;
number-=2;

console.log(number);

console.log('1'==true);

let points=100;

let TypeOfMembership = points>100? 'gold':'silver';

console.log(TypeOfMembership);

function getSquare(number)
{ 
    return number*number;
}
console.log(getSquare(5));

let x=10;

console.log(x);
x=x*2;

console.log(x);

console.log( ! 1);

let time=06;
if( time>5 && time<=12 ){
    console.log('good morning');
}
else if(time>12 && time <=17){
    console.log('good afternoon'); 
}
else {
    console.log('good night');
}
let role='ankit';

switch (role) {

case 'ankit': 
console.log('its ankit');
break;

case 'guest':
console.log('its is guist');
break;
default: 
console.log('its not ankit');
}

// for(let i=0;i<=5;i++)
// {
// console.log(i);
// }

// let i=0;

// while(i<=5){
//     console.log(i);
//     i++;
// }
const person={
    name:'Ankit',
    age:30
    };
    for(let key in person)
    {
        console.log(key,person[key]);
    }

    const output= fizzBuzz(16);

console.log(output);


function fizzBuzz(Number){
    if( typeof Number!== 'number')
    return 'NAN';
    if(Number%3===0&&Number%5===0)
    return 'Devide by 3'
    else 
    return 'Default'

}



let number= greatestNumber(12,1)
console.log(number)

function greatestNumber(a,b){
return a>b ?a:b;
}

const movies={
    title:'JIT',
    language:'Hindi',
    rating:4.6,
    old:10
    };
    
    movie(movies);
    
    function movie(obj){
        for(let key in obj)
     
        if(typeof obj[key]=='string'){
            console.log(obj[key]);
        }
    }

    const marks = [80,70,60];

console.log(findGrade(marks));

function findGrade(mar){
   let sum=0;
   let length=marks.length;
    for(let index of mar)
    {
       // console.log(index)
  
  sum+=index;
  //  length++;
    }
    return sum/length;
}




record(10);

function record(number){
    let txt='';
    for(let i=0;i<=number;i++){
        txt=txt+'*'
        console.log(txt)
    }
}