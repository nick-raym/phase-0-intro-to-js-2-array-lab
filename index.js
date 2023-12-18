// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const copyCats = [...cats,name];
    return copyCats;
}

function prependCat(name){
    const copyCats = [name,...cats];
    return copyCats;
}

function removeLastCat(){
    const copyCats = cats.slice(0,2);
    return copyCats;
}
//console.log(removeLastCat());

function removeFirstCat(){
    const copyCats = cats.slice(1);
    return copyCats;
}
console.log(removeFirstCat());