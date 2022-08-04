let names = ["marge", "homer", "bart", "lisa"];
function capitalizeItUp(item){
    let firstLetter = item.charAt(0).toUpperCase();
    return firstLetter + item.slice(1);
}
let newNames = names.map(capitalizeItUp);
alert(newNames);