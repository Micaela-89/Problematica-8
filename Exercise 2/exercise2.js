/********************************
a. Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase).
*********************************/
var firstString = "Javascript";
console.log(firstString.toUpperCase());

/********************************
b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*********************************/
var otherString = "radiumRocket";
var shortString = otherString.substring(0, 5);
console.log(shortString);

/********************************
c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*********************************/
var secondString= "visualStudio";
var shorterString= secondString.substring(9, 12);
console.log(shorterString);

/********************************
d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).
*********************************/
var exdString = "mycomputer";
var firstLetter = exdString.substring(0,1);
var restOfString = exdString.substring(1);
var newString = firstLetter.toUpperCase() + restOfString.toLowerCase();
console.log(newString);

/********************************
e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*********************************/
var exeString = "Micaela Casais";
var whiteSpace = exeString.indexOf(" ");
console.log(whiteSpace);

/********************************
f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
toLowerCase y el operador +).
*********************************/

var lastExString = "ultrasound preparation";
var upFirstWord = lastExString.substring(0,1);
var upSecondWord = lastExString.substring(11,12);
var lowerFirstWord = lastExString.substring(1, 10);
var lowerSecondWord= lastExString.substring (12, 22);

var bothWords = upFirstWord.toUpperCase() + lowerFirstWord.toLowerCase() + " " + upSecondWord.toUpperCase() + lowerSecondWord.toLowerCase();

console.log(bothWords);
console.log(bothWords.indexOf(" "));