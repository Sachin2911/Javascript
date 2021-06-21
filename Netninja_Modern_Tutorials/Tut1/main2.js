//common string methods

let email = "Sachinmohan29@gmail.com";
//Finds the last index of that chracter => where it appears last
let result = email.lastIndexOf("a");
console.log(result)

//Slice opperator takes in 2 params =? starting and ending slice
let result2 = email.slice(6, 11)
console.log(result2)

//Substring operator works sinilarly to slice, takes in 2 params first os the start and the 2nd instead of being the end is the number of chars it must go for. For example if start at postion 4 and set second parameter as 10 it will begin to slice at 4 and end at 14
let result3 = email.substring(0,10)
console.log(result3)

//replace swops all instances of first param in string given with the second param
let result4 = email.replace("S","m");
console.log(result4)

//template string
const title = "Best reads of 2021"
const author = "Mario"
const likes = "30"

//template literal creation
//*The first method */
let result5 = "The blog called " + title + " By:" + author + " Likes:" + likes
console.log(result5)

//*The second <method>*/ => Using backticks
let result6 = `The blog called: ${title} By: ${author} has ${likes} likes`
console.log(result6)