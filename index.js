let animal = 'lion';
console.log(animal);
console.log(typeof animal);


let month = 5;
console.log(month);
console.log(typeof month);


let isSunny = true;
console.log(isSunny);
console.log(typeof isSunny);

let isCloudy = false;
console.log(isCloudy);
console.log(typeof isCloudy);


let day;
console.log(day);
console.log(typeof day);


let party = null;
console.log(party);
console.log(typeof party);


const x = 7; 
console.log(x);
console.log(typeof x);

// x = 3;
// console.log(x); //index.js:33 Uncaught TypeError: Assignment to constant variable.
                //at index.js:33


let lombardy = {
    city: 'Milan',
    position: 'north',
    municipality: 1.506
};
console.log(lombardy);
console.log(typeof lombardy);

let lazio = {
    city: 'Rome',
    position: 'center',
    municipality: 378
};
console.log(lazio);
console.log(typeof lazio);

let calabria = {
    city: 'Catanzaro',
    position: 'south',
    municipality: 409
};
console.log(calabria);
console.log(typeof calabria);


let italy = [lombardy, lazio, calabria] ;
console.log(italy);
console.log(typeof italy);

//*Bonus: What is the type of the array variable? 
//Answer: object
