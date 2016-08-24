/*var name;
var setName=function(thyname){
    name=thyname;
};
var sayHello=function(){
    console.log('hello '+name);
};
exports.setName=setName;
exports.sayHello=sayHello;
*/
function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    };
    this.sayHello = function () {
        console.log('Hello ' + name);
    };
};
//module.exports = Hello;
exports.Hello=Hello;