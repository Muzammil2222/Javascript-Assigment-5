 var citties = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
 var userInput = prompt("Enter city name");
 var isFound = false
 for(var i = 0; i < citties.length; i++){
     if(userInput === citties[i]){
         document.write("City is Found" + userInput);
         isFound = true;
         break;
     }
 }
 if(isFound === false){
     alert("City is not found" + userInput);
 }

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var emptyArray = [];
var multiArray = [
    [0, 1, 2, 3 ],
    [1, 0, 1, 2 ],
    [2, 1, 0, 1 ]
]
document.write(multiArray[0] + "<br>");
document.write(multiArray[1] + "<br>");
document.write(multiArray[2] + "<br>");

// 3. Write a program to print numeric counting from 1 to 10.
for(var i = 1; i <= 10; i++){
    document.write(i + "<br>");
}

//4. Write a program to print multiplication table of any
//number using for loop. Table number & length should be
// taken as an input from user.

var usertable = +prompt("Enter a number to show its multiplication table");
var tableLength = +prompt("Enter Length of table");
for(var i = 1; i <= tableLength; i++){
    document.write(`${usertable} * ${i} = ${usertable * i}` + `<br>`);
}

//5. Write a program to print items of the following array
//using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”,
//“strawberry”]

var fruitArray = ["apple", "banana", "mango", "orange", "strewberry"];
for(var i = 0; i < fruitArray.length; i++){
    document.write(`Element at index ${i} is ${fruitArray[0]}  <br>`);
    document.write(`Element at index ${i} is ${fruitArray[1]}  <br>`);
    document.write(`Element at index ${i} is ${fruitArray[2]}  <br>`);
}

/*6. Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

*/
document.write("Counting:");
for(var i = 1; i <= 15; i++){
    document.write(i + ",");
}
document.write("<br>");
document.write("Reverse Counting:");
for(var i = 10; i >= 1; i--){
    document.write(i + ",");
}
for(var i = 0; i <= 20; i++){
    if(i % 2 === 0){
        document.write(i + ",");
    }
}
for(var i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        document.write(i + ",");
    }
}
for(var i = 1; i <= 20; i++){
    if(i % 2 === 0){
        document.write(i + "k,");
    }
}
/*7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example:
*/
var bakeryitems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to Own Bakery What do you want to order sir/ma'am");
var isFound = false;
for(var i = 0; i < bakeryitems.length; i++){
    if(userInput === bakeryitems[i]){
        document.write(`${userInput} is available at index ${i} in our bakery`);
        isFound = true;
        break;
    }
}
if(isFound === false){
    document.write(`We are sorry. ${userInput} is not available in our bakery`);
}



