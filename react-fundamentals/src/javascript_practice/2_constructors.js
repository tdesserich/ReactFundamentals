//We name the class
class User {
    //We call the constructor function and create parameters.
    //These will be values that we want to be passed in and stored in the object.
    constructor(first, last, email) {
                //On the right side of these expressions, the word 'first', 'last', and 'email' below, 
                //we have the value that is getting passed into the parens when the object is created.
                // vvv
        this.f = first;
        this.l = last;
        this.e = email;
        //^^^^^^^^ 
      //On the left side we have the actual properties of the object. 
      //The left side stores the incoming value from the right side as 
      //the property for 'this' specific object being created.  
    }
}

var userOne = new User("Tracy", "Desserich", "tdesserich@gmail.com");
console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne.e);
console.log(userOne);



class Player {
    constructor(player, number, averagePoints) {
        this.p = player;
        this.n = number;
        this.a = averagePoints;
    }    
}

var playerOne = new Player("Peyton Manning", 18, 21);
console.log(playerOne.p);
console.log(playerOne.n);
console.log(playerOne.a);
console.log(playerOne);


class Car {
    constructor(make, model, year) {
        this.mk = make;
        this.md = model;
        this.yr = year;
    }
}

var carOne = new Car("Chrysler", "Pacifica", 2017);
console.log(carOne.mk);
console.log(carOne.md);
console.log(carOne.yr);
console.log(carOne);