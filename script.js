//Trouver le plus grand nombre dans un tableau : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre. Si le tableau est vide, retourne null.

const numbersList = [1, 4, 7, 5, 8, 3, 6, 9, 2, 5];
const maxNumber = findMaximum(numbersList);
console.log("The largest number:", maxNumber);

function findMaximum(arr) {
  if (arr.length === 0) {
    return null;
  }
  return Math.max(...arr);
}

//Trouver le plus petit nombre dans un tableau : Écris une fonction qui prend un tableau d'entiers et retourne le plus petit nombre. Si le tableau est vide, retourne null.

const numbersList = [1, 4, 7, 5, 8, 3, 6, 9, 2, 5];
const minNumber = findMinimum(numbersList);
console.log("The smallest number:", minNumber);

function findMinimum(arr) {
  if (arr.length === 0) {
    return null;
  }
  return Math.min(...arr);
}

// Trouver le plus petit et le plus grand nombre dans un tableau : Écris une fonction qui retourne le plus petit et le plus grand nombre d’un tableau.

const numbersList = [1, 4, 7, 5, 8, 3, 6, 9, 2, 5];

const sortedNumbers = [...numbersList].sort((a, b) => a - b);
console.log("Original:", numbersList);
console.log("Sorted:", sortedNumbers);

function findMinMax(arr) {
  const minNumber = arr[0];
  const maxNumber = arr[arr.length - 1];
  return console.log("Min:", minNumber), console.log("Max:", maxNumber);
}

findMinMax(sortedNumbers);

// Trouver le plus grand nombre dans un tableau avec une boucle for : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre.

const numbersList = [1, 4, 7, 5, 8, 3, 6, 9, 2, 5];

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log("Le plus grand nombre est :", findMax(numbersList));

// Trouver le plus petit nombre dans un tableau avec une boucle for : Écris une fonction qui prend un tableau d'entiers et retourne le plus petit nombre.

const numbersList = [1, 4, 7, 5, 8, 3, 6, 9, 2, 5];

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log("Le plus petit nombre est :", findMin(numbersList));

// Supprimer les doublons d’un tableau : Écris une fonction qui retourne un tableau sans doublons.

const numbersList = [1, 4, 7, 5, 8, 3, 6, 9, 2, 5];
const newListNumber = removeDuplicates(numbersList);

function removeDuplicates(arr) {
  const uniqueValues = new Set(arr);
  return [...uniqueValues];
}

console.log(newListNumber);

// Vérifier si une chaîne est un palindrome : Écris une fonction qui vérifie si une chaîne de caractères est un palindrome (c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche) et retourne true si c’est un palindrome, false sinon.

const wordsList = ["kayak", "banana", "New York"];
const testingWords = wordsList.forEach((elm) => isPalindrome(elm));
console.log(testingWords);

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  console.log(`Reversed Word: ${reversed}`);
  if (reversed === word) {
    console.log(`${word} is a palindrome`);
    return true;
  } else {
    console.log(`${word} is not a palindrome`);
  }
  return false;
}

// Inverser un tableau :
// Écris une fonction qui inverse l'ordre des éléments dans un tableau sans modifier le tableau d'origine.

const fruitslist = ["apple", "strawberry", "orange", "kiwi", "banana"];
console.log("Original:", fruitslist);
console.log("Reversed:", reverseArray(fruitslist));

function reverseArray(fruit) {
  const reversedFruits = [...fruit].reverse();
  return reversedFruits;
}

// Inverser un tableau avec une boucle for : Écris une fonction qui inverse l'ordre des éléments dans un tableau sans modifier le tableau d'origine.

const fruitslist = ["apple", "strawberry", "orange", "kiwi", "banana"];
console.log("Reversed2:", reverseArray(fruitslist));

function reverseArray(fruit) {
  const reversedFruits = [];
  for (let i = f.length - 1; i >= 0; i--) {
    reversedFruits.push(fruit[i]);
  }
  return reversedFruits;
}

// Inverser une chaîne de caractères : Écris une fonction qui inverse les lettres d’un mot. Ex: "chat" => "tahc"

let string = "Husky";
let reversedString = [];

function reverseWord(str) {
  const reversedStr = str.split("").reverse().join("");
  reversedWord.push(reversedStr);
  return reversedStr;
}

console.log(reverseWord(string));
console.log(reversedString);

// Inverser une chaîne de caractères avec une boucle for : Écris une fonction qui inverse les lettres d’un mot. Ex: "cat" => "tac"

const string = "The Lord of the Rings";

function reverseString(str) {
  if (typeof str === "string") {
    console.log("is string");
  } else {
    throw new Error("is not a string");
  }
  let reversedStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  return reversedStr.join("");
}

console.log(reverseString(string));

// Compter les caractères dans une chaîne : Écris une fonction qui retourne le nombre de chaque caractère.

const letters = ["a", "b", "c", "b", "e", "e", "c", "b"];
console.log(countLetters(letters));

function countLetters(arr) {
  const numberOfLetters = {};

  arr.forEach((letter) => {
    if (numberOfLetters[letter]) {
      numberOfLetters[letter] = numberOfLetters[letter] + 1;
    } else {
      numberOfLetters[letter] = 1;
    }
  });
  return numberOfLetters;
}

// Compter les caractères uniques dans une chaîne : Écris une fonction qui retourne le nombre de caractères uniques dans une chaîne.

const string = "Jaws";
console.log("Number of unique characters:", uniqueChar(string));

function uniqueChar(str) {
  const unique = [];
  const cleaned = str.replace(/\s+/g, "");
  const splitedTitle = cleaned.split("");
  console.log(splitedTitle);
  for (let i = 0; i < splitedTitle.length; i++) {
    if (!unique.includes(splitedTitle[i])) {
      unique.push(splitedTitle[i]);
    }
  }
  console.log("Unique characters:", unique);
  return unique.length;
}

// Compter le nombre unique dans un tableau : Écris une fonction qui retourne combien de nombres uniques il y a dans un tableau.

const numbersList = [1, 4, 7, 5, 8, 3, 6, 9, 2, 5];
console.log(uniqueNumbersCount(numbersList));

function uniqueNumbersCount(arr) {
  const unique = new Set(arr);
  return unique.size;
}

// Compter le nombre de fois que chaque valeur apparaît dans un tableau : Écris une fonction qui retourne combien de fois chaque valeur apparaît dans le tableau.

function countOccurrences(arr) {
  return arr.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

console.log(countOccurrences(["a", "b", "c", "b", "e"])); // { a: 1, b: 2, c: 1, e: 1 }

// Trouver combien de nombres pairs il y a dans un tableau : Écris une fonction qui calcule combien de nombres pairs il y a dans un tableau d'entiers.

function countEvenNumbers(arr) {
  return arr.filter((n) => n % 2 === 0).length;
}

console.log(countEvenNumbers([1, 2, 3, 4, 6]));

// Trouver combien de nombres pairs il y a dans un tableau avec une boucle for : Écris une fonction qui calcule combien de nombres pairs il y a dans un tableau d'entiers.

function countEvenNumbersWithLoop(arr) {
  let sum = 0;
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += 1;
      evenNumbers.push(arr[i]);
    }
  }
  console.log("Even numbers: ", evenNumbers);
  console.log("Total even numbers: ", sum);
  return sum;
}

console.log(
  "Total count of even numbers: ",
  countEvenNumbersWithLoop([1, 2, 3, 4, 6])
);

// Trouver la somme des nombres pairs dans un tableau : Écris une fonction qui calcule la somme de tous les nombres pairs dans un tableau d'entiers.

const numbersList = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];
console.log(calculateSumOfEvenNumbers(numbersList));

function calculateSumOfEvenNumbers(arr) {
  const sumOfEvenNumbers = arr
    .filter((elm) => elm % 2 === 0)
    .reduce((accumulator, elm) => accumulator + elm, 0);
  return sumOfEvenNumbers;
}

// Trouver la somme des nombres pairs dans un tableau avec une boucle for : Écris une fonction qui calcule la somme de tous les nombres pairs dans un tableau d'entiers.

const numbersList = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];

function calculateSumOfEvenNumbersWithLoop(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(
  "Sum of even numbers: ",
  calculateSumOfEvenNumbersWithLoop(numbersList)
);

// Trouver tous les nombres pairs et les classer par ordre décroissant : Écris une fonction qui retourne un tableau de nombres pairs triés du plus grand au plus petit.

const numbersList = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];

function getEvenNumbersSortedDescending(arr) {
  const evenNumbers = arr.filter((num) => num % 2 === 0).sort((a, b) => b - a);
  return [...new Set(evenNumbers)];
}

console.log(getEvenNumbersSortedDescending(numbersList));

// Vérifier si un nombre est premier : Écris une fonction qui vérifie si un nombre est un nombre premier.

const numbersList = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];

function isPrime(number) {
  if (number <= 1) {
    console.log(`${number} is not a prime number`);
    return false;
  }

  for (let j = 2; j < number; j++) {
    if (number % j === 0) {
      console.log(`${number} is not a prime number`);
      return false;
    }
  }

  console.log(`${number} is a prime number`);
  return true;
}

numbersList.forEach((nb) => isPrime(nb));

// Compter les voyelles dans une chaîne : Écris une fonction qui retourne le nombre de voyelles dans une chaîne (a, e, i, o, u, y).

const string = "Le Seigneurs des Anneaux";

function countVowels(str) {
  const vowelsSet = "aeiouyAEIOUY";
  let count = 0;
  const cleanedString = str.replace(/\s+/g, "").toLowerCase().split("");
  for (let i = 0; i < cleanedString.length; i++) {
    if (vowelsSet.includes(cleanedString[i])) {
      count++;
    }
  }
  return count;
}

const numberOfVowels = countVowels("aeiouyAEIOUY", string);
console.log(numberOfVowels);

// Trouver le mot le plus long dans une chaîne : Écris une fonction qui retourne le mot avec le plus grand nombre de caractères.

const string = "le seigneur des anneaux";

function findLongestWord(str) {
  const words = str.split(" ");
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord(string));

// Vérifier une anagramme : Écris une fonction qui vérifie si deux mots sont des anagrammes. Deux mots sont des anagrammes s’ils contiennent exactement les mêmes lettres, mais dans un ordre différent.

function checkAnagram(word1, word2) {
  let cleanedWord1 = word1.toLowerCase().replace(/\s/g, "");
  let cleanedWord2 = word2.toLowerCase().replace(/\s/g, "");

  if (cleanedWord1.length !== cleanedWord2.length) {
    console.log(`${word1} and ${word2} are not anagrams`);
    return false;
  }

  let sortedWord1 = cleanedWord1.split("").sort().join("");
  let sortedWord2 = cleanedWord2.split("").sort().join("");

  if (sortedWord1 === sortedWord2) {
    console.log(`${word1} and ${word2} are anagrams`);
    return true;
  } else {
    console.log(`${word1} and ${word2} are not anagrams`);
    return false;
  }
}

console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("Paris", "piras"));
console.log(checkAnagram("hello", "world"));

// Vérifier une anagramme avec une boucle for : Écris une fonction qui vérifie si deux mots sont des anagrammes. Deux mots sont des anagrammes s’ils contiennent exactement les mêmes lettres, mais dans un ordre différent.

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    console.log(`${str1} and ${str2} are not Anagrams`);
    return false;
  }

  let str2Copy = str2;

  for (let i = 0; i < str1.length; i++) {
    if (str2Copy.includes(str1[i])) {
      str2Copy = str2Copy.replace(str1[i], "");
    } else {
      console.log(`${str1} and ${str2} are not Anagrams`);
      return false;
    }
  }
  console.log(`${str1} and ${str2} are Anagrams`);
  return true;
}

console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("Paris", "piras"));
console.log(checkAnagram("hello", "world"));

// Détecter si un tableau est trié : Écris une fonction qui retourne true si les éléments d’un tableau sont dans l’ordre croissant ou décroissant.

function isSorted(array) {
  let isAscending = true;
  let isDescending = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isAscending = false;
    }
    if (array[i] > array[i - 1]) {
      isDescending = false;
    }
  }

  return isAscending || isDescending;
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([5, 4, 3, 2, 1]));
console.log(isSorted([1, 3, 2, 5, 4]));

//Trier un tableau de nombres : Écris une fonction sortNumbers(arr) qui prend un tableau d’entiers et retourne un tableau trié par ordre croissant.

//Exemple :
sortNumbers([5, 3, 8, 2, 9]); // [2, 3, 5, 8, 9]
sortNumbers([10, 4, 7, 1, 3]); // [1, 3, 4, 7, 10]

//Trier un tableau de nombres : Écris une fonction sortNumbers(arr) qui prend un tableau d’entiers et retourne un tableau trié par ordre decroissant.

//Exemple :
sortNumbers([5, 3, 8, 2, 9]); // [2, 3, 5, 8, 9]
sortNumbers([10, 4, 7, 1, 3]); // [1, 3, 4, 7, 10]

//Vérifier si un tableau a un total égal à un nombre donné : Écris une fonction hasTotal(arr, total) qui prend un tableau de nombres et un total, et qui retourne true si la somme des éléments du tableau est égale au total, sinon false.

//Exemple :
hasTotal([1, 2, 3, 4], 10); // true (1 + 2 + 3 + 4 = 10)
hasTotal([1, 2, 3], 10); // false (1 + 2 + 3 = 6)
