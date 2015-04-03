var unique = require('uniq')
//var unique = require('./node_modules/uniq')

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6]

var output = unique(data)

console.log(output)
document.querySelector("#output").innerHTML = output
