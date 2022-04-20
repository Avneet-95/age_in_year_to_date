// console.log('hello')
function Ageindays(){
var birthyear=prompt("what year were you born?");
var ageindays=(2022-birthyear)*365;
var h1=document.createElement('h1');
var textAnswer=document.createTextNode(" you are "+ageindays+"days old");
h1.setAttribute('id','Ageindays');
h1.appendChild(textAnswer);
document.getElementById('this').appendChild(h1);
console.log(ageindays);
}
function reset(){
    document.getElementById(Ageindays).remove();

}