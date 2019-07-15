function maxGap (numbers){
    let max = 0;
    numbers
      .sort((a, b) => a - b)
      .reduce((a, c) => {
        if (c - a > max) {
           max = c - a;
        }

        return c;
      });

   return max;
}

console.log(maxGap([2,5,13]));