var myClient = '{  "name": "Mark", "age": 30, "city": "New York"}';

//"car": {
// "make": "Toyota",
// "Model": "V1",
//},

var myPer = JSON.parse(myClient);
document.getElementById(
    "demo"
).innerHTML = `${myPer.name} ${myPer.age} ${myPer.city} `;

document.writeln(`${myPer["name"]} ${myPer["age"]} ${myPer["city"]}`) ;
document.getElementById("demo").innerHTML = myPer;
console.log(myPer);