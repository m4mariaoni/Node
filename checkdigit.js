let array=[5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];

const validateCred = array => {
    let total =0;
    for (let i = array.length-1; i >= 0; i--){
      let value = array[i];
      if((array.length - 1 - i) % 2 === 1){
        value *= 2;
        if (value > 9){
          value -= 9;
        }      
      }
      total += value;
    }
    return total % 10 === 0
}

console.log(validateCred(array));