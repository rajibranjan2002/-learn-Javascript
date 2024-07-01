let name = "Rajib Ranjan Sahoo";

function outer() {
    let age = "My age is 22";
    
    function inner() {
        let height = "My height is 5.11";
        console.log(height);  // Access own scope
        console.log(age);  // Access outer function's scope
        console.log(name);    // Access global scope
    }
    
    inner();
}

outer();