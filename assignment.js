// Basic JS problem 

// Problem 1

function seerToMon(seer) {

    // Error section will return from here
    if (typeof seer != 'number') {
        return 'Please give a number';
    }
    if (seer < 0) {
        return 'Please a give a positive value';
    }

    return seer / 40; // From here Return value is mon 
}

const seerQuantity = seerToMon(1200); //Passing the value of seer to the function 
console.log(seerQuantity); // retuned value will be shown 


// ---------------



// Problem 2 


function totalSales(shirts, pants, shoes) {
    // Error section will return from here
    if (typeof shirts != 'number' || typeof pants != 'number' || typeof shoes != 'number') {
        return 'Please give all values number';
    }
    if (shirts < 0 || pants < 0 || shoes < 0) {
        return 'Please a give all values  a positive value';
    }

    return shirts * 100 + pants * 200 + shoes * 500; // from here retunr value is total sales money
}
const productsQuantity = totalSales(23, 10, 30,); //Passing the quantity of shirt,pantand shoe to the function 
console.log(productsQuantity); // retuned value will be shown 


//---------------


// Problem 3


function deliveryCost(tShirts) {

    // Error section will return from here
    if (typeof tShirts != 'number') {
        return 'Please give a number';
    }
    if (tShirts < 0) {
        return 'Please a give a positive value';
    }

    // as quantity deliery cost is initialized

    const first100Cost = 100;
    const second100Cost = 80;
    const up200Cost = 50;

    // Condition section and total cost will return form here 
    if (tShirts <= 100) {
        return tShirts * first100Cost;
    }
    else if (tShirts <= 200) {
        return 100 * first100Cost + (tShirts - 100) * second100Cost;
    }
    else {
        return 100 * first100Cost + 100 * second100Cost + (tShirts - 200) * up200Cost;
    }
}
//Passing the quantity of t shirts to the function 
const tShirtsQuantity = deliveryCost(220);
console.log(tShirtsQuantity);// retuned value will be shown 

// --------------


// Problem 4


function perfectFriend(friends) {

    let count = 0;
    for (const friend of friends) {
        if (friend.length == 5) {
            return friend; // from here first 5 length name will be returned
            count++;
            break; // After getting first 5 length name stop the lop . actually it is not necessery because after return first value then the loop will be exicuted.
        }
    }

    // Throw section 
    if (count == 0) {
        return 'There is no name found with 5 length';
    }

}

// Friens list with an array
let friends = ['Shimul', 'shovon', 'Bani', 'Bipro', 'Lucky', 'Prince', 'Nisha', 'Pinky'];

let lucky5Firend = perfectFriend(friends); // Function call section passing with friends
console.log(lucky5Firend); // retuned value will be shown 



// -----------------------------------------------








