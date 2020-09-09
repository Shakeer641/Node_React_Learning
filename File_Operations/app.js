/* Writing content to File */
var file = require('fs');

file.writeFileSync("./demo.txt","Hello SK")

/* Appending content to File */
var file = require('fs');

file.appendFileSync("./demo.txt","  How are you ?")


/* Reading content file from File */
var dataFromFile = file.readFileSync("./demo.txt", {encoding:'utf-8'});

console.log(dataFromFile);

