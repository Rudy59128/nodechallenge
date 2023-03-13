const information = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello, my name is ${information.fullname} and i'm studying at ${information.school}`,
    e : "oO",
    T : "U "
}));