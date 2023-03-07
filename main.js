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

let metodoRepeat = "REPITE"

console.log(metodoRepeat.repeat(3))

let metodoReplace = "Ayer compre un nuevo auto"

console.log(metodoReplace.replace("auto", "telefono"))

let metodoReplaceAll = metodoReplace.replaceAll("compre", "vendi")
console.log(metodoReplaceAll)

let metodoSlice = "Cortemos esta string"

console.log(metodoSlice.slice(9, -1))

let metodoToLowerCase = "TODO EN MAYUSCULAS"

console.log(metodoToLowerCase.toLowerCase())

let metodoToUpperCase = "todo en minisculas"

console.log(metodoToUpperCase.toUpperCase())

let metodoTrim = "    Black     "

console.log(metodoTrim.trim())
console.log(metodoTrim.trimEnd())
console.log(metodoTrim.trimStart())
