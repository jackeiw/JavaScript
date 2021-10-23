function MyClass(name){
    this.name = name;
}

MyClass.prototype.sayHello = function(name){
    alert(this.name+" prototype say: hello,"+name);
}

var myObject = {};
myObject.sayHello = function(name){
    alert('hello'+name);
}

