'use strict'

function Student(name, lastName, yearOfBirth) {

    //general data
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    
    // attendance 
    this.presenceItem = 0;
    this.presenseArray = new Array(10);
    this.presenceCounter = 0;
        
    // marks        
    this.marksCounter = 0;
    this.marksArray = new Array(10);

}

//getting age
Student.prototype.getAge = function() {
    const presentYear = new Date();
    return (`${this.name}'s age - ${presentYear.getFullYear() - this.yearOfBirth} years`);
}

//checking presence
Student.prototype.present = function() {
    if (this.presenceCounter === this.presenseArray.length) return 'Error, you`ve reached attendance maximum';
    ++this.presenceCounter;
    return this.presenseArray[this.presenceItem++] = true;
}

//checking absense
Student.prototype.absent = function() {
    if (this.presenceCounter === this.presenseArray.length) return 'Error, you`ve reached attendance maximum';
    return this.presenseArray[this.presenceItem++] = false;
}

//checking average presence
Student.prototype.getAveragePresence = function() {
    return this.presenceCounter / this.presenseArray.length;
}

// collecting of student's marks
Student.prototype.mark = function (point) {
    this.point = point;
    if (this.marksCounter === this.marksArray.length) return 'Error, you`ve reached maximum marks number ';        
    return this.marksArray[this.marksCounter++] = this.point;
}

// getting average mark
Student.prototype.getAverageMark = function () {
    let sum = 0;
    for (let i = 0; i < this.marksArray.length; i++) {
        sum += this.marksArray[i];
    }
    return sum / this.marksCounter;
}

// getting summary
Student.prototype.summary = function () {
    if (this.presenceCounter > 0.9 && this.getAverageMark() > 9) return `Ути какой молодчинка!`;
    if (this.presenceCounter <= 0.9 || this.getAverageMark() <= 9) return `Норм, но можно лучше`;
    else return `Редиска`;
}



let student1 = new Student('Vasya', 'Pupkin', 1985)
// console.log(student1)
// console.log(student1.getAge())

// console.log(student1.present())
// console.log(student1.absent())
console.log(student1.present())
console.log(student1.present())
console.log(student1.absent())
console.log(student1.present())
console.log(student1.present())
console.log(student1.present())
console.log(student1.present())
console.log(student1.present())
console.log(student1.present())
console.log(student1.absent())

// console.log(student1.presenseArray)
student1.mark(9)
// student1.mark(2)
student1.mark(9)
student1.mark(9)
student1.mark(9)
student1.mark(8)
student1.mark(9)
student1.mark(9)
student1.mark(9)
student1.mark(9)
student1.mark(9)
student1.mark(9)
student1.mark(9)
console.log(student1.marksArray)
console.log(student1.getAverageMark())
console.log(student1.getAveragePresence())
console.log(student1.presenceCounter)
console.log(student1.summary())


