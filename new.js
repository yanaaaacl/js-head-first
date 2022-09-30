// let t = 0;
// function f1(){
//     t++;
//     console.log(t);
//     if (t == 100) return;
//     f1();
// }
// f1();
// цикл

// let result = 0;
// function f2(){
//     for(let i = 0; i < 100; i++){
//         result++;
//         console.log(result);

//     }
// }
// f2();
 
// k = 0;
// let d = ""; 
// function f3(){
//     k++;
//     d += k + " ";
//     if (k == 30) return;
//     f3();


// }
//f3();
//console.log(d);

// function randomInteger(min, max){
//     // случайное число от min до (max + 1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }
// // let s1 = 0; // переменная, где накапливаем деньги
// function moneyRecursion(){
//     let m = randomInteger(0, 100); // получаем какое-то к-во денег от 0 до 100
//     console.log("add: " + m); // выводим в консоль сколько денег нам дали
//     s1 += m; // копим деньги;
//     console.log("sum: " + s1); //смотрим что накопилось
//     if (s1 >= 300) return; // если больше 300 то стоп
//     moneyRecursion(); // повтор ф-ии самой себя
// }
// moneyRecursion(); // вызов ф-ии

//цикл moneyRecursion

// function moneyRecursion2(){
//     let s2 = 0;
    
//     for (let i = 0; s2 <= 300; i++){
//         let mon = randomInteger(0, 100);
//         console.log("add: " + mon);
//         s2 += mon;
//         console.log("sum: " + s2);

//     }
// }
//moneyRecursion2();

// function isEven(num){
//     if (num % 2 == 0){
//         return true;
//     } else{
//         return false;
//     }

// }
//console.log(isEven(-2));

// function countBs(ourString){
//     let b = 0;
//     for (let i = 0; i != ourString.length; i++){
//         if (ourString.charAt([i]) == "B"){
//             b += 1;
//         }
//     }
//     console.log(b);
// }
//countBs("BBBBbBB")

// function countChar(ourString, ourSimboul){
//     let b = 0;
//     for (let i = 0; i != ourString.length; i++){
//         if (ourString.charAt([i]) == ourSimboul){
//             b += 1;
//         }
//     }
//     console.log(b)
// }
//countChar("SSSBBBaaaa", "a");


// var mack = [];
// mack.push("Максим");
// mack.push("Мысливец", "козёл!");


// let newWord = mack.pop();

// mack.push("ублюдок!");
// console.log(mack);
// console.log(mack.join(" "));

// var stupid = {
//     name: "Максим",
//     surname: "Мысливец",
//     car: "Ford Mondeo 2011",
//     adress: "Хутынская, 27 к 1, подьезд 2, кв 20"
// };
// console.log(stupid.name);
// console.log(stupid.surname);
// stupid.brain = "Мозг отсутствует";
// console.log(stupid.brain);
// delete stupid.car;
// console.log(stupid.car);
// console.log("car" in stupid);



// var daysStupidMan = [];

// function addEntry(events, didITurnIntoAMonster){
//     daysStupidMan.push({
//         events: events,
//         squirrel: didITurnIntoAMonster
//     });
// }
// addEntry(["встать разбитым", "работа", "подудеть", "дом", "тупить в ведьмака"], true);
// addEntry(["выходной", "уборка", "родители", "пивасик", "подудеть", "тупить в ведьмака"], true);
// addEntry(["Водить машину", "ехать в питер к Вове", "пить пиво", "подудеть", "есть пиццу"], false);
// addEntry(["Водить машину", "ехать в питер к Вове", "пить с друзьями пиво", "подудеть", "есть суши"], false);

// console.log(daysStupidMan);

// var toDoList = [];

// function addToDoList(task){
//     toDoList.push(task);
// }
// function deleteToDoList(){
//     return toDoList.shift();
// }
// function addInTheEnd(task){
//     toDoList.unshift(task);
// }
// addToDoList("постирать");
// addToDoList("поесть");
// addToDoList("выучить JS");
// deleteToDoList();
// addInTheEnd("помыться");

// console.log(toDoList);

// function remove(array, index){
//     return array.slice(0, index).concat(array.slice(index + 1));
// }
// console.log(remove(["Максим", "Мысливец", "конченный", "урод"], 2));

// var daysStupidMan = [];

// function addEntry(squirrel){
//     var entry = {events: [], squirrel: squirrel};
//     for (var i = 1; i < arguments.length; i++){
//         entry.events.push(arguments[i]);
//     }
//     daysStupidMan.push(entry);
//     };

// addEntry(true, "встать разбитым", "работа", "подудеть", "дом", "тупить в ведьмака");


// console.log(daysStupidMan);

let number = [];
function range(one, two, three){
    
    for(let i = 0; number.length != two; i++){
        
        number.push(one);
        if (three > 1){
            one += three;
        }else{
            one += 1;
        }
        
           
    }
    console.log(number);
         
}
range(1, 10, 2);

function sum(){
    counter = 0;

    for(let b = 0; b != number.length; b++){
        counter += number[b];
    }
    console.log(counter);
}
sum();









