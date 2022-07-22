//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
var sc = {
    1: "Scope determines the accessibility (visibility) of variables.",

    2: "JavaScript has 3 types of scope:",

    3: "Block scope",
    4: "Function scope",
    5: "Global scope"
}
var constr = {
    1: "Sometimes we need a 'blueprint' for creating many objects of the same 'type'.",

    2: "The way to create an 'object type', is to use an object constructor function.",

    3: "Objects of the same type are created by calling the constructor function with the new keyword:",

}
var hoist = {
    1: "Hoisting is JavaScript's default behavior of moving declarations to the top.",

    2: "In JavaScript, a variable can be declared after it has been used.",

    3 : "In other words; a variable can be used before it has been declared.",

    4: "Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).",
    
}
var proto = {
    1: "Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.",

    2: "The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.",

    3: "When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.",
    

}

localStorage.setItem("scope",JSON.stringify(sc))
localStorage.setItem("constructor",JSON.stringify(constr))
localStorage.setItem("hoisting",JSON.stringify(hoist))
localStorage.setItem("prototype",JSON.stringify(proto))
document.getElementById("scope").addEventListener("click",fun1)
document.getElementById("constructor").addEventListener("click",fun2)
document.getElementById("hoisting").addEventListener("click",fun3)
document.getElementById("prototype").addEventListener("click",fun4)
function fun1(){
    var scope = localStorage.getItem("scope")
    scope = JSON.parse(scope)
    console.log(scope)
    var h = document.createElement("h1")
    h.innerText = "Scope"
    var tag = document.createElement("ul")
    for(var k in scope){
    var p = document.createElement("li")
    p.innerText = scope[k]
    tag.append(p)
    }
    document.querySelector("body").append(h,tag)
}
function fun2(){
    
    var scope = localStorage.getItem("constructor")
    scope = JSON.parse(scope)
    var h = document.createElement("h1")
    h.innerText = "Constructor Functions"
    var tag = document.createElement("ul")
    for(var k in scope){
        var p = document.createElement("li")
        p.innerText = scope[k]
        tag.append(p)
        }
    document.querySelector("body").append(h,tag)
}
function fun3(){
    
    var scope = localStorage.getItem("hoisting")
    scope = JSON.parse(scope)
    var h = document.createElement("h1")
    h.innerText = "Hoisting"
    var tag = document.createElement("ul")
    for(var k in scope){
        var p = document.createElement("li")
        p.innerText = scope[k]
        tag.append(p)
        }
    document.querySelector("body").append(h,tag)
}
function fun4(){
    
    var scope = localStorage.getItem("prototype")
    scope = JSON.parse(scope)
    var h = document.createElement("h1")
    h.innerText = "Prototype"
    var tag = document.createElement("ul")
    for(var k in scope){
        var p = document.createElement("li")
        p.innerText = scope[k]
        tag.append(p)
        }
    document.querySelector("body").append(h,tag)
}

