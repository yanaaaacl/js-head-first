let defaultName = "JavaScript";

function sayHello(name){
    if (name == null){
        alert("Hello, " + defaultName + "!");
    }else{
        alert("Hello, " + name + "!");
    }
}
sayHello();