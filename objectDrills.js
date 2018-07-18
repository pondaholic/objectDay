function createMyObject() {
    return {
        foo: 'bar',
        answerToUniverse: 42, 
        'olly olly': 'oxen free',
        sayHello: function() {
            return 'Hello'
        }
    }
}

const something = {}
console.log(createMyObject(something));