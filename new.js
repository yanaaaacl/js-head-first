
function hummus (factor){
    function ingredient (amount, unit, name){
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "банка", "нута");
    ingredient(0.25, "стакан", "кунжутной пасты");
    ingredient(0.25, "стакан", "лимонного сока");
    ingredient(1, "зубок", "чеснока");
    ingredient(2, "столовые ложки", "оливкого масла");
    ingredient(0.5, "чайной ложки", "кумина");

};
hummus(5);