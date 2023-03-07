let metodoCharAt = "Este es el primer string";
// ``
console.log("El caracter en el indice 19 es '" + metodoCharAt.charAt(18) + "'")
console.log("El caracter en el indice 20 es '" + metodoCharAt.charAt(20) + "'")
console.log("El caracter en el indice 21 es '" + metodoCharAt.charAt(21) + "'")
console.log("El caracter en el indice 22 es '" + metodoCharAt.charAt(22) + "'")
console.log("El caracter en el indice 23 es '" + metodoCharAt.charAt(23) + "'")
console.log("El caracter en el indice 24 es '" + metodoCharAt.charAt(24) + "'")

let metodocharCodeAt = "Unicode"

console.log("El valor Unicode de 'U' es '" + metodocharCodeAt.charCodeAt(0) + "'")

let metodoFromCharCode = String.fromCharCode(68,65,89,73,83)

console.log(metodoFromCharCode)

let metodoConcat =['1', '2', '3']
let metodoConcat1 =['4', '5', '6']
let metodoConcat2 = metodoConcat.concat(metodoConcat1)

console.log(metodoConcat2)

let metodoIndexOf = "Clear Sky"

console.log(metodoIndexOf.indexOf("Sky"))

let metodoLocaleCompare = "ABC"
let metodoLocaleCompare1 = "DEF"

console.log(metodoLocaleCompare.localeCompare(metodoLocaleCompare1))