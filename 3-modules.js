// Modules
// CommonJS, Every file is module (by default)
// Modules - Encapsulated code (only share minimum)
// node uses CommonJS library under the hood.

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade')
//console.log(data)
//console.log(names)



sayHi('Sriram')
sayHi(names.john)
sayHi(names.peter)
