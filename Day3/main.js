let login ={
    username: "Test09",
    password: "Test"
}

let database = [
    login,
]

let newsfeed =[
    {username: "dummy1", timeline: "dummy1"},
    {username: "dummy2", timeline: "dummy2"}

]
console.log(login)
console.log(database)
console.log(newsfeed);

//exercise XP

let num1 = prompt("enter number 1")
let num2 = prompt("enter number 2")

if(num1 < num2){
    alert("num 2 is greater than num1")
} else if(num1 > num2){
    alert("num 1 is greater than num2")
};

let newdog = [ "chihuahua"];
let length = newdog.length;
console.log(length);

let number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    alert("The number is even.");
}

// if the number is odd
else {
    alert("The number is odd.");
};

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let username = prompt("Enter a username");

if(username == "Lea123") {
    alert("user Lea123 is online");

}else if(username == "Princess45"){
    alert("user Princess45 is online");

}else if(username == "cat&doglovers"){
    alert("cat&doglovers is online");
} else if(username == "helooo"){
    alert("helooo is online");

} else if(username == "cat" || username == "Lea123" || username == "Princess45" || username == "helooo"){
    alert("user " + username + " is online");

}else{
    alert("user is not online");

};

//exercise Gold

let language = prompt("which language do you speak ?");
switch(language){
    case "French":
        alert("Bonjour");
    break;
    case "English":
        alert("Hello");
    break;
    case "Hebrew":
        alert("Shalom");
    break;
    default:
        alert("01110011 01101111 01110010 01110010 01111001");
};

let grade = prompt("Enter grade");
if(grade >= 90){
    alert("Grade = A")
} else if(grade >= 80 && grade <= 90){
    alert("Grade = B")
} else if(grade >= 70 && grade <= 80){
    alert("Grade = C")
} else if(grade <= 70){
    alert("Grade = D")
}else{
    alert("Result not vaild");

};

let string = prompt("Enter a verb:");
if(string.length >= 3 && !string.endsWith("ing")){
 let concatenate = string.concat("ing");
  alert(`${concatenate}`);
}

else if (string.length>= 3 && string.endsWith("ing")){
 let concatenate2 = string.concat("ly");
 alert(`${concatenate2}`);

}

else if( string.length < 3){
alert(`${string}`);

};

////EXE NIJA

let yr1 = Number("2002");

let yr2 = Number("2022");

let diff = yr2 - yr1;

console.log(`The younger will be exactly half age in ${yr2 + diff}`);






let word = prompt("Enter word")
const reg = /[aeiou]/gi
word = word.replace(/a/gi, 1);
word = word.replace(/a/gi, 2);
word = word.replace(/a/gi, 3);
word = word.replace(/a/gi, 4);
word = word.replace(/a/gi, 5);
console.log(word);





//Daily Challenge

const sentence = "The movie is not that bad I like it"
const wordNot =  sentence.search("not")
const wordBad =  sentence.search("bad")

if(wordNot === -1){
    console.log(sentence)
}else if(wordNot < wordBad){

    console.log("wordBad:", wordBad)
    console.log("wordNot:", wordNot)

const firstPart = sentence.slice(0, wordNot)
const secondPart = sentence.slice(wordBad + 3)
console.log(firstPart + "good" + secondPart)
} else{

    console.log(sentence)
}


















