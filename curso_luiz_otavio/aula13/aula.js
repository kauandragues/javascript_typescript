//String
let umaString = "um \"texto\" legal";
let stringComBarra = "colocando a \\";

//string são iteráveis

console.log(umaString);
console.log(stringComBarra);
console.log(stringComBarra[12]);
console.log(stringComBarra.indexOf("a "));
console.log(umaString.concat(" outra string"));
console.log(umaString.at(4))
console.log(umaString.endsWith("l")) //essa string termina com l?
console.log(umaString.length)
console.log(umaString.repeat(2))
console.log(umaString.trim())
console.log(umaString.replace("um", "dois"))
console.log(umaString.slice(0, 6))