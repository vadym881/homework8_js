const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(array1, array2)); // [3, 4, 5]

const output2 = document.getElementById('output2')
output2.textContent = Math.min(...findCommonElements(array1, array2)).toFixed(3)

function findCommonElements(ar1, ar2) {
  const resultArray = [];
  for (const el of ar1) {
    if (ar2.includes(el)) {
      resultArray.push(el);
    }
  }
  for (let i = 0; i < ar2.length; i++) {
    if (ar1.includes(ar2[i])) {
      if (!resultArray.includes(ar2[i])) {
        resultArray.push(ar2[i]);
      }
    }
  }
  return resultArray;
}
