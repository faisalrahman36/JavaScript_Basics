//hello world
console.log('hello world'); console.log('how are you?');

console.log('I am a student of programming. \nI love JavaScript.');

console.log("These are double \tquotes.");

//number

var a=0;
console.log(a, typeof(a));

//string

var b="1"
console.log(b,typeof(b));
//boolean
var x=false;
console.log(x,typeof(x));

//if else 
//passing a boolean value in if
if(x){
    console.log('x is true');
}

else {
    console.log('x is false');
}

//passing a number
a=0.0;
if(a){
    console.log(' a?',a);
}

else {
    console.log(' a--',a);
}

//comparisons between numbers

var c=15;
var d=15;

if (c>d) {
    console.log('c is greater than d');
} 

else if (c<d) {
    console.log('c is less than d');
}

else {
    console.log('c is equal to d');
}

//greater than or equal to
var e=6;
var f=5;

if (e>=f){
    console.log('e is greater than or equal to f');
}

else {
    console.log('e is less than f');
}
//Practice task: try less than or equal to case


// nested if

if (e>=f){
    console.log('e is greater than or equal to f--');
    if (e>12) {
        console.log('e is greater than 12');
    }
    else {
        console.log('e is not greater than 12');
    }
}

else {
    console.log('e is less than f');
}

// for loop 
var text="some text";
for (var i=0; i<10;i++){
    console.log('number is: %d --- %s',i,text);
}

console.log('reverse')
for (var i=10; i>0;i--){
    console.log('number is: %d --- %s',i,text);
}

//while loop

var t=0;

while(t<=10){
    console.log(t,'t');
    //t++;
    t=t+2;
}


//let var and const
let p=3;
p=4;
console.log(p);
var j=3;
j=4;
console.log(j);

const k=5;
//k=1;  //Error: Assignment to constant variable  [We cannot change the value of a constant]
console.log(k);


//let vs var
//reassign 

var o=4;
var o=3;

let w=4;
//let w=1;  //cannot redeclare 'let' variable in the same scope

if(true){
    let w=3;  //this is allowed as this is a different scope
}

//reassigning var in different scope
var z=3;

if(true){
    var z=4;
    console.log(z, 'value of z inside if');

}
console.log(z, 'value of z outside if');

//reassigning let in different scope

let g=4;

if(true){
    let g=2;
    console.log(g, 'value of g inside if');
}
console.log(g,'value of g outside if');

