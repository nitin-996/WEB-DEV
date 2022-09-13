

//this is prompt


var engine = prompt("type about motor engine")
var motorcount = engine.length;
alert("you have written" + motorcount +" character , you have remaining "+ (150 - motorcount) +"characterc remaining")

//this is length and slicing

var  myname = master001;
myname.slice(0,4);




var promp = prompt("type about master word limit is 100")
var slic = promp.slice(0, 200);
alert(slic)


//change user name first letter to capital

var rackname = prompt("type ur nam");
var nameslic = rackname.slice(0 ,1);
var namelower = rackname.slice(1 , rackname.length)
var lower = namelower.toLowerCase()
var uppername = nameslic.toUpperCase()

alert(uppername+lower)
