function sayiUret(ustLimit = 49) {
    return Math.ceil(Math.random() * ustLimit)
}
sayiUret()
//console.log(ustLimit) **error

// var sayı1 = Math.ceil(Math.random() *49)
// var sayı2 = Math.ceil(Math.random() *49)
// var sayı3 = Math.ceil(Math.random() *49)
// var sayı4 = Math.ceil(Math.random() *49)
// var sayı5 = Math.ceil(Math.random() *49)
// var sayı6 = Math.ceil(Math.random() *49)

var sayı1 = sayiUret(20000)
var sayı2 = sayiUret()
var sayı3 = sayiUret()
var sayı4 = sayiUret()
var sayı5 = sayiUret()
var sayı6 = sayiUret()

console.log("kolon: " + sayı1 + " " + sayı2 + " " + sayı3 + " " + sayı4 + " " + sayı5 + " " + sayı6)
