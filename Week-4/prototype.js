/**
 * Exercise4.2
 * 
 * Create an object called Teacher derived from the Personclass,
 * and implement a method called teach which receives a string called subject,
 * and prints out:
 * [teacher's name] is now teaching [subject]
 * 
 */

const Person = function() {};
Person.prototype.initialize = function(name,age){
    this.name=name;
    this.age=age;
}

const Teacher = function() {};
Teacher.prototype.teach = function(subject){
    console.log(`${this.name} is now teaching ${subject}`)
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);


const teacher1 = new Teacher();
teacher1.initialize("Akash", 23);
teacher1.teach("Laravel");


const teacher2 = new Teacher();
teacher1.initialize("Maneesh", 28);
teacher1.teach("React");