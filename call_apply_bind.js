// Using Call in the Wild. let's examine a very common use case

function sayHi(){
    return 'Hi ' + this.firstName;
}

var colt = {
    firstName: 'Colt'
}

var elie = {
    firstName: 'Elie'
}


sayHi.call(colt);


// Using bind() in setTimeout(). async stuff

var colt = {
    firstName:'Colt',
    sayHi: function(){
        setTimeout(function(){
            console.log('Hi ' + this.firstName)
        }.bind(this), 5000)
    }
}

colt.sayHi();