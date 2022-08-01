
function createPhoneNumber(numbers){
    
    var oneTwoThree;
    while(oneTwoThree.length < 3 ){
    if (numbers == 1 || numbers == 2 || numbers == 3){
      oneTwoThree += numbers;
    }  
    }
    alert(oneTwoThree);
  }
createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);