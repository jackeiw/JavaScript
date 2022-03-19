function MyClass(name){
    this.name = name;
}

MyClass.prototype.sayHello = function(name){
    alert(this.name+" prototype say: hello,"+name);
}

MyClass.StaticSay = function(name, msg){
    alert(" Static say: hello," + name + '!' + msg);
}

var myObject = {};
myObject.sayHello = function(name){
    alert('hello'+name);
}

