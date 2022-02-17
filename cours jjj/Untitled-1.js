/* exercices 1 */

var a = 12;
console.log(a);

/*exercices 2 */

var a = 2;
var b = 1;
function addition(b) {
    var a = b * 2;
   return a
   function Multiplie(b) {
    var a = b * 2;
   return a
   function soustraire(b) {
    var a = b * 2;
   return a
   }
}
}
 /*exercices 3*/

var a = "bonjour"
console.log(a);

/*exercices 4 */

var chaine1 = "coucou";
var chaine2 = "peruche";
var chaine3 = chaine1+chaine2;
console.log(chaine1+chaine2);


/*exercices 5 */

var a = 1;
var b = 2;
b = [a, a = b][0];
console.log(b);

 /*exercices 6 */

var var1 = 42
var var2 = 12
var var3 = 7
var var4 = 13
var var5 = 57

 /*exercices 7*/

var a = 1;
var b = 2;
function chiffre(a,b){
   if(a<b){
       console.log(a,b)
   } else{
       console.log(b,a)
   }
}  
/*exercices8*/

for(var i=0;i<10;i++){
console.log(Math.random());
}

/*exercice9*/

var min=1; 
var max=10;  
var random = Math.random() * (max - min) + min; 
alert(random);

/*exercices10*/
var a = 0
while(a <90){
    a =Math.floor(Math.random() * 100) + 1
    console.log(a+"\n")
}