let name ={
    firstname : "rajib",
    lastname : "Sahoo",

}
 let printFullName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " ," + state);
}

printFullName.call(name, "Bhubaneswar", "Odisha");

let name2 = {
    firstname:"Virat",
    lastname:"kohli",
}

// function borrowing
// call method
printFullName.call(name2, "south delhi", "Delhi");
// apply method
printFullName.apply(name2, ["south delhi","Delhi"]);
// bind method
let printMyname = printFullName.bind(name2, ["south delhi","Delhi"]);
console.log(printMyname);
printMyname();
