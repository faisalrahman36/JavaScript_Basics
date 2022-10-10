/* Solution of Basic JavaScript and NodeJS tasks from:
https://github.com/panacloud-modern-global-apps/typescript-node-projects/blob/main/getting-started-exercises.md
By Syed Faisal ur Rahman
faisalrahman36@gmail.com
*/
//Task 23

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");

console.log(car == 'subaru');

car = 'toyota';

console.log("Is car == 'toyota'? I predict True.");

console.log(car == 'toyota');

car = 'honda';

console.log("Is car == 'honda'? I predict True.");

console.log(car == 'honda');

car = 'bmw';

console.log("Is car == 'bmw'? I predict True.");

console.log(car == 'bmw');

car = 'hyundai';

console.log("Is car == 'hyundai'? I predict True.");

console.log(car == 'hyundai');

car = 'hyundai';

console.log("Is car == 'subaru'? I predict False.");

console.log(car == 'subaru');

car = 'bmw';

console.log("Is car == 'toyota'? I predict False.");

console.log(car == 'toyota');

car = 'toyota';

console.log("Is car == 'honda'? I predict False.");

console.log(car == 'honda');

car = 'honda';

console.log("Is car == 'bmw'? I predict False.");

console.log(car == 'bmw');

car = 'bmw';

console.log("Is car == 'hyundai'? I predict False.");

console.log(car == 'hyundai');

//Task 24

let personName="faisal";
console.log("Is personName == 'faisal'? I predict True.");

console.log(personName == 'faisal');


console.log("Is personName == 'ahmed'? I predict False.");

console.log(personName == 'ahmed');

personName='FAISAL'

console.log("Is personName == 'faisal'? I predict False.");

console.log(personName == 'faisal');

console.log("Is personName.toLowerCase() == 'faisal'? I predict True.");

console.log(personName.toLowerCase() == 'faisal');

let number=10;

console.log("Is number == 10? I predict True.");

console.log(number == 10);

console.log("Is number < 10? I predict False.");

console.log(number < 10);

console.log("Is number > 10? I predict False.");

console.log(number > 10);

console.log("Is number <= 10? I predict True.");

console.log(number <= 10);

console.log("Is number >= 10? I predict True.");

console.log(number >= 10);

console.log("Is number >= 10 and <11? I predict True.");

console.log(number >= 10 && number<11);

console.log("Is number >= 10 or <11? I predict True.");

console.log(number >= 10 || number<11);

//check if item in array
let cities=['Karachi','Lahore','Islamabad'];

console.log("Is Karachi in cities? I predict True.");

console.log(cities.includes('Karachi'));

console.log("Is Karachi not in cities? I predict False.");

console.log(!cities.includes('Karachi'));

// Task 25

let alien_color= ['green', 'yellow', 'red'];
let userPoints=0.;
for (let i = 0; i < alien_color.length; i++) {

    if (alien_color[i]=='green')
    {
        console.log('User has earned 5 points'); // output if test passes
        userPoints+=5;
    }

    else {
        //no output if test fails
    }
}

console.log('User points', userPoints);

//Task 26

userPoints=0.;
for (let i = 0; i < alien_color.length; i++) {

    if (alien_color[i]=='green')
    {
        console.log('User has earned 5 points'); // output if test passes
        userPoints+=5;
    }

    else {
        //output if test fails
        console.log('User has earned 10 points'); // output if test passes
        userPoints+=10;
    
    }
}

console.log('User points', userPoints);

//Task 27

userPoints=0.;
for (let i = 0; i < alien_color.length; i++) {

    if (alien_color[i]=='green')
    {
        console.log('User has earned 5 points'); // output if test passes
        userPoints+=5;
    }



    else if (alien_color[i]=='yellow') {
        //output if test fails
        console.log('User has earned 10 points'); // output if test passes
        userPoints+=10;
    
    }

    else {
        //output if test fails
        console.log('User has earned 15 points'); // output if test passes
        userPoints+=15;
    
    }

}

console.log('User points', userPoints);

//Task 28

// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age=18;

// • If the person is less than 2 years old, print a message that the person is a baby.
if (age<2) {
    console.log('The person is a baby.');
}


// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age>=2 && age<4)
{
    console.log('The person is a toddler.');


}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age>=4 && age<13)
{
    console.log('The person is a kid.');


}

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age>=13 && age<20)
{
    console.log('The person is a teenager.');


}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age>=20 && age<65)
{
    console.log('The person is an adult.');


}
// • If the person is age 65 or older, print a message that the person is an elder.
else {

    console.log('The person is an elder.');

}

//Task 29
let favorite_fruits =['mango','banana','orange'];

if (favorite_fruits.includes('mango'))
{
    console.log('I really like %s', 'mango');

}
if (favorite_fruits.includes('orange'))
{
    console.log('I really like %s', 'orange');

}if (favorite_fruits.includes('kiwi'))
{
    console.log('I really like %s', 'kiwi');

}if (favorite_fruits.includes('banana'))
{
    console.log('I really like %s', 'banana');

}if (favorite_fruits.includes('apple'))
{
    console.log('I really like %s', 'apple');

}

//Task 30

let userNames=['faisal', 'ahmed', 'admin', 'zia'];

for (i=0;i<userNames.length;i++){

    if (userNames[i]=='admin'){

        console.log('Hello admin, would you like to see a status report?');
    }

    else {
        console.log('Hello %s, thank you for logging in again.',userNames[i]);
    }
}

//Task 31

userNames=[]; //emptying the list
console.log('userNames.lenght',userNames.length);
if (userNames.length<1)
{
    console.log('We need to find some users.');
}

//Task 32

 current_users=['faisal', 'ahmed', 'asad', 'ZiA','zeeshan'];
 let new_users=['FAISAL', 'zahid', 'amjab', 'zia','saqib'];


const lower_current_users = current_users.map(element => {  //convert current_users into lower case 
  return element.toLowerCase();
});
for (i=0;i<new_users.length;i++){

if (lower_current_users.includes(new_users[i].toLowerCase())){
    console.log('Make a new username.');
}
else{
    console.log('username available.');
}
}

//Task 33

let positions=[1,2,3,4,5,6,7,8,9];

for (i=0;i<positions.length;i++) 
{
      if (positions[i]==1) {
      console.log('1st position');
      }
      else if (positions[i]==2) 
      {
        console.log('2nd position');

      }

      else if (positions[i]==3) 
      {
        console.log('3rd position');

      }

      else 
      {
          console.log('%dth position',positions[i])
      }
}
