

//this is prompt


var engine = prompt("type about motor engine")
var motorcount = engine.length;
alert("you have written" + motorcount + " character , you have remaining " + (150 - motorcount) + "characterc remaining")

//this is length and slicing

var myname = master001;
myname.slice(0, 4);




var promp = prompt("type about master word limit is 100")
var slic = promp.slice(0, 200);
alert(slic)


//change user name first letter to capital

var rackname = prompt("type ur nam");
var nameslic = rackname.slice(0, 1);
var namelower = rackname.slice(1, rackname.length)
var lower = namelower.toLowerCase()
var uppername = nameslic.toUpperCase()

alert(uppername + lower)


//numbers (age converter)

var age = prompt("dog age to human age converter");
var humanage = (age - 2) * 4 + 21;
alert(humanage);

// X++ means that it is incremented by 1 
// x+2 means that it is incremented by 2 
// we can apply same thing by - ,*,/,+

//funtions

function milk(bottle) {
    var money = 5;
    var totalcost = money * bottle;
    return (totalcost)
}

var bottle = prompt("type the number of bottles which u want , we will calculate the cost")
alert(milk(bottle));

//random number function

function random() {
    var n1 = Math.random();
    var n2 = n1 * 6;
    var n3 = Math.floor(n2) + 1;

    return n3;

}

random()


// if else statement . practice it more .

// lear year if funtion 

function isleeap(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) { return "it is a leap year" }
            else { return "not a leap year" }
        }
        else { return "leap year" }
    } else { return "not leap year" }



}


// array

var cars = [MG, Suzuki, harley]
var car = cars[2];

var guestlist = [MG, hector, suzuki, tata, toyota]
var guestname = prompt("what is your name")
if (guestlist.includes(guestname)) { alert("welcome") }  // include method return true or false value check on https://www.w3schools.com/jsref/jsref_includes_array.asp
else { alert("sorry , try next time") }

// push method push the input at the end of array
// pop method takeout the input .


var output = [];  // we created the empty array
var count = 1;     // count variable


// this is function , it first push the count variable in output the increase count 1 by 1 then at the last print the output of function .
function fizzbazz() {

    //while loop added
    while (count <= 100) {

        // if loop function is working 
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("fizzbuzz");
        } else if (count % 3 === 0) {
            output.push("fizz");
        } else if (count % 5 === 0) {
            output.push("buzz");
        } else {
            output.push(count);
        }


        count++;

    }
    console.log(output);
}

fizzbazz()


//loops
//syntax ==>>> for ([initialExpression]; [conditionExpression]; [incrementExpression])
//statement



