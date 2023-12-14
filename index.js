const LinkedList = require("./linked-list.js");

const list = new LinkedList()

list.append(4);
list.append(3);
list.append(5);
list.append('hello')

console.log(list.toString())
list.removeAt(1)
console.log(list.toString())
