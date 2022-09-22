let t = 0;
function f1(){
    t++;
    console.log(t);
    if (t == 100) return;
    f1();
}
// f1();
// цикл

let result = 0;
function f2(){
    for(let i = 0; i < 100; i++){
        result++;
        console.log(result);

    }
}
// f2();
 
k = 0;
let d = ""; 
function f3(){
    k++;
    d += k + " ";
    if (k == 30) return;
    f3();


}
//f3();
//console.log(d);

function randomInteger(min, max){
    // случайное число от min до (max + 1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let s1 = 0; // переменная, где накапливаем деньги
function moneyRecursion(){
    let m = randomInteger(0, 100); // получаем какое-то к-во денег от 0 до 100
    console.log("add: " + m); // выводим в консоль сколько денег нам дали
    s1 += m; // копим деньги;
    console.log("sum: " + s1); //смотрим что накопилось
    if (s1 >= 300) return; // если больше 300 то стоп
    moneyRecursion(); // повтор ф-ии самой себя
}
// moneyRecursion(); // вызов ф-ии

//цикл moneyRecursion

function moneyRecursion2(){
    let s2 = 0;
    
    for (let i = 0; s2 <= 300; i++){
        let mon = randomInteger(0, 100);
        console.log("add: " + mon);
        s2 += mon;
        console.log("sum: " + s2);

    }
}
//moneyRecursion2();

function isEven(num){
    if (num % 2 == 0){
        return true;
    } else{
        return false;
    }

}
//console.log(isEven(-2));

function countBs(ourString){
    let b = 0;
    for (let i = 0; i != ourString.length; i++){
        if (ourString.charAt([i]) == "B"){
            b += 1;
        }
    }
    console.log(b);
}
//countBs("BBBBbBB")

function countChar(ourString, ourSimboul){
    let b = 0;
    for (let i = 0; i != ourString.length; i++){
        if (ourString.charAt([i]) == ourSimboul){
            b += 1;
        }
    }
    console.log(b)
}
countChar("SSSBBBaaaa", "a");