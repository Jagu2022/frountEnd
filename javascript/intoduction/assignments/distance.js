//The distance between two cities (in km.) is input through the keyboard. Write a program to convert and print this distance in meters, feet, inches and centimeters.

var kilometers = prompt("enter kilometers: ")
var meters = kilometers*1000
var feet = kilometers * 3280.84
var inch = kilometers * 39370.1
var centimetets = kilometers * 100000
console.log(`kilometers ${kilometers}`)
console.log(`meters ${meters}`)
console.log(`feet ${feet}`)
console.log(`centimeters ${centimetets}`)