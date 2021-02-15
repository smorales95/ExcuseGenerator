let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
 

 let randomWho=who[Math.floor(Math.random()*who.length)]; 
 let randoWhat=what[Math.floor(Math.random()*what.length)];
 let randomWhen=when[Math.floor(Math.random()*when.length)];
 let resultado = (randomWho+" "+randoWhat+" "+randomWhen);

 document.querySelector("#frase").innerHTML=resultado;
