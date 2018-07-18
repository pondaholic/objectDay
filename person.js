function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    }
  }
  return person;
}

const naming = personMaker()
console.log(naming['fullName']);

//console.log(naming);