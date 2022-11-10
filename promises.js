//create articles using promise
const articles = [
    {title:'First article'},
    {title:'Second article'}
 ];

 function getArticles(){
    setTimeout(()=>{
       let articleContent='';
       articles.forEach((article,index)=>{
          articleContent+=`${article.title}`+` `;
       });
       console.log(articleContent);
    },1000);
 };

 function createArticle(article){
    return new Promise((resolve,reject)=>{
       articles.push(article);
       //let isError=false;
       //if(!isError){
       if (true){  
       resolve(console.log("success"));
       } else {
          reject("failure");
       }
    });
 }

 createArticle({title:'Third article'})
 .then(getArticles())
 .catch(value => {

    console.log(value, typeof value);
    });