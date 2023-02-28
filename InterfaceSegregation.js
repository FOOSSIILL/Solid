//Interface Segregation Principle (IPS):

//No cumplimiento
class Animal {
    walk();
    swim();
    fly();
}

class Dog extends Animal{
    walk() {
        console.log("El perro camina");
    }

    swim() {
        console.log ("El perro nada");
    }

    fly() {
       throw new Error("Los perros no vuelan"); 
    }
}