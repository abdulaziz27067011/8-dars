let ism = prompt('Ism kiriting')
let harf = prompt('Harf kiriting')

if (ism.toLocaleLowerCase().includes(harf.toLocaleLowerCase())) {
    alert(`${ism}da ${harf} harfi bor`)
} else {
    alert(`${ism}da ${harf} harfi yoq`)
}
let letterSearch = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"];

let wordsWithN = [];
let wordsWithoutN = [];

for (let word of letterSearch) {
    if (word.toLowerCase().includes("н")) {
        wordsWithN.push(word);
    } else {
        wordsWithoutN.push(word);
    }
}

console.log("Слова с 'н':", wordsWithN);
console.log("Слова без 'н':", wordsWithoutN);