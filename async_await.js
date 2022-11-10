//async await book chapter 13 example
function saySomething(x) {
 return new Promise(resolve => {
 setTimeout(() => {
 resolve("something" + x);
 }, 0);
 });
}

async function talk(x) {
 const words = await saySomething(x);
 console.log(words);
}

/* function talk(x) {
    const words =  saySomething(x);
    console.log(words);
   } */
talk(2);
talk(4);
talk(8);