const words = ["apple", "banaNA", "kiWi", "ORANGE"];

console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]

const output1 = document.getElementById('output1')
output1.textContent = capitalizeStrings(words).join('***')

function capitalizeStrings(array) {
    const resultArray = []
    for (const word of array) {
        const firstLetter = word[0].toUpperCase()
        const cutWord = word.toLowerCase().substr(1)
        const resultWord = firstLetter + cutWord
        resultArray.push(resultWord)
    }
    return resultArray
}