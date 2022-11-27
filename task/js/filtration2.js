const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
  return num % 2 === 0;
}

var filterArray = (arr, filterFN) => {

  var filteredArray = [];

  arr.forEach(num => {
    if (filterFN(num)) {
      filteredArray.push(num);
    }
  });

  return filteredArray;

}

console.log(filterArray(mixedArray, isEven));

