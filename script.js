//Trouver le plus grand nombre dans un tableau : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre. Si le tableau est vide, retourne null.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maxNumber = findMaximum(numbers);

console.log("The largest number:", maxNumber);

function findMaximum(array) {
  if (array.length === 0) {
    return null;
  }
  return Math.max(...array);
}

//Trouver le plus petit nombre dans un tableau : Écris une fonction qui prend un tableau d'entiers et retourne le plus petit nombre. Si le tableau est vide, retourne null.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const minNumber = findMinimum(numbersList);

console.log("The smallest number:", minNumber);

function findMinimum(array) {
  if (array.length === 0) {
    return null;
  }
  return Math.min(...array);
}

// Trouver le plus petit et le plus grand nombre dans un tableau : Écris une fonction qui retourne le plus petit et le plus grand nombre d’un tableau.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sortedNumbers = [...numbers].sort((a, b) => a - b);

console.log("Original:", numbers);
console.log("Sorted:", sortedNumbers);
console.log(findMinMax(sortedNumbers));

function findMinMax(array) {
  const minNumber = array[0];
  const maxNumber = array[array.length - 1];
  console.log(minNumber);
  console.log(maxNumber);
  return { min: minNumber, max: maxNumber };
}

// Trouver le plus grand nombre dans un tableau avec une boucle for : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("The largest number:", findMax(numbers));

function findMax(array) {
  let maxNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}

// Trouver le plus petit nombre dans un tableau avec une boucle for : Écris une fonction qui prend un tableau d'entiers et retourne le plus petit nombre.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("The smallest number:", findMin(numbersList));

function findMin(array) {
  let minNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      minNumber = array[i];
    }
  }
  return minNumber;
}

// Supprimer les doublons d’un tableau : Écris une fonction qui retourne un tableau sans doublons.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArrayNumbers = removeDuplicates(numbers);

console.log(newArrayNumbers);

function removeDuplicates(array) {
  const uniqueValues = new Set(array);
  return [...uniqueValues];
}

// Supprimer les doublons d’un objet : Écris une fonction qui retourne un objet sans doublons.

const uniqueCharacters = removeDuplicateObjects(characters);

console.log(uniqueCharacters);

const characters = [
  { name: "Frodon" },
  { name: "Sam" },
  { name: "Gandalf" },
  { name: "Frodon" },
  { name: "Aragorn" },
];

function removeDuplicateObjects(array) {
  const seen = new Set();
  return array.filter((item) => {
    if (seen.has(item.name)) {
      return false;
    } else {
      seen.add(item.name);
      return true;
    }
  });
}

// Vérifier si une chaîne de caractères est un palindrome : Écris une fonction qui vérifie si une chaîne de caractères est un palindrome (c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche).

const words = ["kayak", "banana", "New York"];
const testingWord = words.forEach((element) => isPalindrome(element));

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  console.log(`Reversed Word: ${reversed}`);

  if (reversed === word) {
    console.log(`${word} is a palindrome`);
  } else {
    console.log(`${word} is not a palindrome`);
  }
}

// Vérifier si une chaîne de caractères est un palindrome : Écris une fonction qui vérifie si une chaîne de caractères est un palindrome (c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche) et retourne true si c’est un palindrome, false sinon.

const words = ["kayak", "banana", "New York"];
const testingWord = words.map((element) => isPalindrome(element));

console.log(testingWord);

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");

  if (reversed === word) {
    return true;
  } else {
    return false;
  }
}

// Inverser un tableau :
// Écris une fonction qui inverse l'ordre des éléments dans un tableau sans modifier le tableau d'origine.

const fruits = ["apple", "strawberry", "orange", "kiwi", "banana"];

console.log("Original:", fruits);
console.log("Reversed:", reverseArray(fruits));

function reverseArray(fruit) {
  const reversedFruits = [...fruit].reverse();
  return reversedFruits;
}

// Inverser un tableau avec une boucle for : Écris une fonction qui inverse l'ordre des éléments dans un tableau sans modifier le tableau d'origine.

const fruits = ["apple", "strawberry", "orange", "kiwi", "banana"];

console.log("Reversed2:", reverseArray(fruits));

function reverseArray(fruit) {
  const reversedFruits = [];
  for (let i = fruit.length - 1; i >= 0; i--) {
    reversedFruits.push(fruit[i]);
  }
  return reversedFruits;
}

// Inverser une chaîne de caractères : Écris une fonction qui inverse les lettres d’un mot. Ex: "chat" => "tahc"

const dogBreed = "Husky";

console.log(reverseString(dogBreed));

function reverseString(string) {
  const reversedString = string.split("").reverse().join("");
  return reversedString;
}

// Inverser une chaîne de caractères avec une boucle for : Écris une fonction qui inverse les lettres d’un mot. Ex: "cat" => "tac"

const dogBreed = "Husky";

console.log(reverseString(dogBreed));

function reverseString(string) {
  if (typeof string === "string") {
    console.log("is string");
  } else {
    throw new Error("is not a string");
  }
  let reversedString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  }
  return reversedString.join("");
}

// Compter les caractères dans une chaîne : Écris une fonction qui retourne le nombre de chaque caractère.

const letters = ["a", "b", "c", "b", "e", "e", "c", "b"];

console.log(countLetters(letters));

function countLetters(array) {
  const numberOfLetters = {};

  array.forEach((letter) => {
    if (numberOfLetters[letter]) {
      numberOfLetters[letter] = numberOfLetters[letter] + 1;
    } else {
      numberOfLetters[letter] = 1;
    }
  });
  return numberOfLetters;
}

// Compter les caractères uniques dans une chaîne : Écris une fonction qui retourne le nombre de caractères uniques dans une chaîne.

const titleMovie = "The Lord of the Rings";

console.log("Number of unique characters:", uniqueChar(string));

function uniqueChar(string) {
  const unique = [];
  const cleaned = string.replace(/\s+/g, "");
  const splitedString = cleaned.split("");
  console.log(splitedString);
  for (let i = 0; i < splitedString.length; i++) {
    if (!unique.includes(splitedString[i])) {
      unique.push(splitedString[i]);
    }
  }
  console.log("Unique characters:", unique);
  return unique.length;
}

// Compter le nombre unique dans un tableau : Écris une fonction qui retourne combien de nombres uniques il y a dans un tableau.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(uniqueNumbersCount(numbers));

function uniqueNumbersCount(array) {
  const unique = new Set(array);
  return unique.size;
}

// Compter le nombre de fois que chaque valeur apparaît dans un tableau : Écris une fonction qui retourne combien de fois chaque valeur apparaît dans le tableau.

const letters = ["a", "b", "c", "b", "e"];

console.log(countOccurrences(letters));

function countOccurrences(array) {
  return array.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

// Trouver combien de nombres pairs il y a dans un tableau : Écris une fonction qui calcule combien de nombres pairs il y a dans un tableau d'entiers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(countEvenNumbers(numbers));

function countEvenNumbers(array) {
  return array.filter((n) => n % 2 === 0).length;
}

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
