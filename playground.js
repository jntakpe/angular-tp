function User(name) {
    this.name = name;
    this.sayHello = function () {
        console.log('Bonjour ' + name);
    }
}

User.prototype.sayMyName = function () {
    console.log('Bonjour ' + this.name);
};

var jocelyn = new User('Jocelyn');
var gauthier = new User('Gauthier');

console.log(gauthier.sayHello === jocelyn.sayHello);
console.log(gauthier.sayMyName === jocelyn.sayMyName);

User.prototype.isAdmin = function () {
    console.log(!!this.admin);
};


function SuperUser(name) {
    User.call(this, name);
    this.admin = true;
}

SuperUser.prototype = Object.create(User.prototype);
SuperUser.prototype.constructor = SuperUser;

var su = new SuperUser('SomeAdmin');
su.sayMyName();
su.isAdmin();
jocelyn.isAdmin();

