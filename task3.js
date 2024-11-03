const numbers = [1, 2, 3, 4, 5];

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }

const title = document.getElementById("analyzeArray")

const resultObject = analyzeArray(numbers)
for (const key in resultObject) {
    const p = title.appendChild(document.createElement("p"));
    p.id = key
    p.textContent = resultObject[key]
}

function analyzeArray(ar) {
  const result = {};

  let sumValue = 0;
  for (const el of ar) {
    sumValue += el;
  }

  result.sum = sumValue;
  result.average = +(sumValue / ar.length).toFixed(0);

  let minValue = numbers[0];
  for (let i = 1; i < ar.length; i++) {
    if (ar[i] < minValue) {
      minValue = ar[i];
    }
  }

  result.min = minValue;

  let maxValue = numbers[0];
  for (let i = ar.length - 1; i > 0; i--) {
    if (ar[i] > maxValue) {
      maxValue = ar[i];
    }
  }

  result.max = maxValue;

  return result;
}
