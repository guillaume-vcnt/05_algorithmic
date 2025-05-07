//1 - Trouver le plus grand nombre dans un tableau : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre. Si le tableau est vide, retourne null.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maxNumber = findMaximum(numbers);

console.log("The largest number:", maxNumber);

function findMaximum(array) {
  if (array.length === 0) {
    return null;
  }
  return Math.max(...array);
}

//1.1 - Trouver le plus grand nombre dans un tableau avec une boucle for : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre.

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

//2 - Trouver le plus petit nombre dans un tableau : Écris une fonction qui prend un tableau d'entiers et retourne le plus petit nombre. Si le tableau est vide, retourne null.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const minNumber = findMinimum(numbers);

console.log("The smallest number:", minNumber);

function findMinimum(array) {
  if (array.length === 0) {
    return null;
  }
  return Math.min(...array);
}

//2.1 - Trouver le plus petit nombre dans un tableau avec une boucle for : Écris une fonction qui prend un tableau d'entiers et retourne le plus petit nombre.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("The smallest number:", findMin(numbers));

function findMin(array) {
  let minNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }
  return minNumber;
}

//3 - Trouver le plus petit et le plus grand nombre dans un tableau : Écris une fonction qui retourne le plus petit et le plus grand nombre d’un tableau.

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

//4 - Supprimer les doublons d’un tableau : Écris une fonction qui retourne un tableau sans doublons.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArrayNumbers = removeDuplicates(numbers);

console.log(newArrayNumbers);

function removeDuplicates(array) {
  const uniqueValues = new Set(array);
  return [...uniqueValues];
}

//5 - Supprimer les doublons d’un objet : Écris une fonction qui retourne un objet sans doublons.

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
  const seenItem = new Set();
  return array.filter((item) => {
    if (seenItem.has(item.name)) {
      return false;
    } else {
      seenItem.add(item.name);
      return true;
    }
  });
}

//6 - Vérifier si une chaîne de caractères est un palindrome : Écris une fonction qui vérifie si une chaîne de caractères est un palindrome (c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche) et retourne true si c’est un palindrome, false sinon.

const words = ["kayak", "banana", "New York"];
const testingWord = words.map((element) => isPalindrome(element));

console.log(testingWord);

function isPalindrome(word) {
  const cleanedWord = word.toLowerCase().replace(/\s+/g, "");
  const reversedWord = cleanedWord.split("").reverse().join("");
  return reversedWord === cleanedWord;
}

//7 - Inverser un tableau : Écris une fonction qui inverse l'ordre des éléments dans un tableau sans modifier le tableau d'origine.

const fruits = ["apple", "strawberry", "orange", "kiwi", "banana"];

console.log("Original:", fruits);
console.log("Reversed:", reverseArray(fruits));

function reverseArray(fruit) {
  const reversedFruits = [...fruit].reverse();
  return reversedFruits;
}

//7.1 - Inverser un tableau avec une boucle for : Écris une fonction qui inverse l'ordre des éléments dans un tableau sans modifier le tableau d'origine.

const fruits = ["apple", "strawberry", "orange", "kiwi", "banana"];

console.log("Reversed2:", reverseArray(fruits));

function reverseArray(fruit) {
  const reversedFruits = [];
  for (let i = fruit.length - 1; i >= 0; i--) {
    reversedFruits.push(fruit[i]);
  }
  return reversedFruits;
}

//8 - Inverser une chaîne de caractères : Écris une fonction qui inverse les lettres d’un mot. Ex: "chat" => "tahc"

const dogBreed = "Husky";

console.log(reverseString(dogBreed));

function reverseString(string) {
  const reversedString = string.split("").reverse().join("");
  return reversedString;
}

//8.1 - Inverser une chaîne de caractères avec une boucle for : Écris une fonction qui inverse les lettres d’un mot. Ex: "cat" => "tac"

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

//9 - Compter les caractères dans une chaîne : Écris une fonction qui retourne le nombre de chaque caractère.

const alphabet = ["a", "b", "c", "b", "e", "e", "c", "b"];

console.log(countChars(alphabet));

function countChars(array) {
  const numberOfChars = {};

  array.forEach((element) => {
    if (numberOfChars[element]) {
      numberOfChars[element] = numberOfChars[element] + 1;
    } else {
      numberOfChars[element] = 1;
    }
  });
  return numberOfChars;
}

//10 - Compter les caractères uniques dans une chaîne : Écris une fonction qui retourne le nombre de caractères uniques dans une chaîne.

const titleMovie = "The Lord of the Rings";

console.log("Number of unique characters:", uniqueChar(titleMovie));

function uniqueChar(string) {
  const splitedString = string.split(" ").join("");
  const unique = new Set(splitedString);

  console.log("Unique characters:", [...unique]);

  return unique.size;
}

//10.1 - Compter les caractères uniques dans une chaîne avec boucle for : Écris une fonction qui retourne le nombre de caractères uniques dans une chaîne.

const titleMovie = "The Lord of the Rings";

console.log("Number of unique characters:", uniqueChar(titleMovie));

function uniqueChar(string) {
  const unique = [];
  const splitedString = string.split(" ").join("");
  console.log(splitedString);
  for (let i = 0; i < splitedString.length; i++) {
    if (!unique.includes(splitedString[i])) {
      unique.push(splitedString[i]);
    }
  }
  console.log("Unique characters:", unique);
  return unique.length;
}

//11 - Compter les nombres uniques dans un tableau : Écris une fonction qui retourne combien de nombres uniques il y a dans un tableau.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(uniqueNumbersCount(numbers));

function uniqueNumbersCount(array) {
  const unique = new Set(array);
  return unique.size;
}

//12 - Compter le nombre de fois que chaque valeur apparaît dans un tableau : Écris une fonction qui retourne combien de fois chaque valeur apparaît dans le tableau.

const letters = ["a", "b", "c", "b", "e"];

console.log(countOccurrences(letters));

function countOccurrences(array) {
  return array.reduce((accumulator, value) => {
    accumulator[value] = (accumulator[value] || 0) + 1;
    return accumulator;
  }, {});
}

//13 - Trouver combien de nombres pairs il y a dans un tableau : Écris une fonction qui calcule combien de nombres pairs il y a dans un tableau d'entiers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(countEvenNumbers(numbers));

function countEvenNumbers(array) {
  return array.filter((nb) => nb % 2 === 0).length;
}

//13.1 - Trouver combien de nombres pairs il y a dans un tableau avec une boucle for : Écris une fonction qui calcule combien de nombres pairs il y a dans un tableau d'entiers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Total count of even numbers: ", countEvenNumbersWithLoop(numbers));

function countEvenNumbersWithLoop(array) {
  let sum = 0;
  let evenNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += 1;
      evenNumbers.push(array[i]);
    }
  }
  console.log("Even numbers: ", evenNumbers);
  console.log("Total even numbers: ", sum);
  return sum;
}

//14 - Trouver la somme des nombres pairs dans un tableau : Écris une fonction qui calcule la somme de tous les nombres pairs dans un tableau d'entiers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(calculateSumOfEvenNumbers(numbers));

function calculateSumOfEvenNumbers(array) {
  const sumOfEvenNumbers = array
    .filter((element) => element % 2 === 0)
    .reduce((accumulator, element) => accumulator + element, 0);
  return sumOfEvenNumbers;
}

//14.1 - Trouver la somme des nombres pairs dans un tableau avec une boucle for : Écris une fonction qui calcule la somme de tous les nombres pairs dans un tableau d'entiers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  "Sum of even numbers: ",
  calculateSumOfEvenNumbersWithLoop(numbers)
);

function calculateSumOfEvenNumbersWithLoop(array) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}

//15 - Trouver tous les nombres pairs et les classer par ordre décroissant : Écris une fonction qui retourne un tableau de nombres pairs triés du plus grand au plus petit.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getEvenNumbersSortedDescending(numbers));

function getEvenNumbersSortedDescending(array) {
  const evenNumbers = array
    .filter((element) => element % 2 === 0)
    .sort((a, b) => b - a);
  return [...new Set(evenNumbers)];
}

//16 - Vérifier si un nombre est premier : Écris une fonction qui vérifie si un nombre est un nombre premier.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((element) => isPrime(element));

function isPrime(nb) {
  if (nb <= 1) {
    console.log(`${nb} is not a prime number`);
    return false;
  }

  for (let j = 2; j < nb; j++) {
    if (nb % j === 0) {
      console.log(`${nb} is not a prime number`);
      return false;
    }
  }

  console.log(`${nb} is a prime number`);
  return true;
}

//17 - Trouver le nombre le plus proche de zéro : Écris une fonction qui prend un tableau de nombre et retourne le nombre le plus proche de zéro

const numbers = [7, -2, 3, -1, 5];

console.log(closestToZero(numbers));

function closestToZero(array) {
  let closestValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (Math.abs(array[i]) < Math.abs(closestValue)) {
      closestValue = array[i];
    }
  }
  return closestValue;
}

//18 - Compter les voyelles dans une chaîne : Écris une fonction qui retourne le nombre de voyelles dans une chaîne (a, e, i, o, u, y).

const titleMovie = "The Lord of the Rings";
const numberOfVowels = countVowels(titleMovie);

console.log(numberOfVowels);

function countVowels(string) {
  const vowelsSet = "aeiouy";
  return [...string.toLowerCase()].filter((element) =>
    vowelsSet.includes(element)
  ).length;
}

//18.1 - Compter les voyelles dans une chaîne avec une boucle for : Écris une fonction qui retourne le nombre de voyelles dans une chaîne (a, e, i, o, u, y).

const titleMovie = "The Lord of the Rings";
const numberOfVowels = countVowels(titleMovie);

console.log(numberOfVowels);

function countVowels(string) {
  const vowelsSet = "aeiouyAEIOUY";
  let count = 0;
  const cleanedString = string.replace(/\s+/g, "").split("");
  for (let i = 0; i < cleanedString.length; i++) {
    if (vowelsSet.includes(cleanedString[i])) {
      count++;
    }
  }
  return count;
}

//18.2 - Compter les voyelles dans une chaîne avec une boucle for of : Écris une fonction qui retourne le nombre de voyelles dans une chaîne (a, e, i, o, u, y).

const titleMovie = "The Lord of the Rings";
const numberOfVowels = countVowels(titleMovie);

console.log(numberOfVowels);

function countVowels(string) {
  const vowelsSet = "aeiouy";
  let count = 0;
  for (const char of string.toLowerCase()) {
    if (vowelsSet.includes(char)) {
      count++;
    }
  }
  return count;
}

//19 - Trouver le mot le plus long dans une chaîne : Écris une fonction qui retourne le mot avec le plus grand nombre de caractères.

const titleMovie = "The Lord of the Rings";

console.log(findLongestWord(titleMovie));

function findLongestWord(string) {
  const splitedwWords = string.split(" ");
  let longestWord = splitedwWords[0];
  for (let i = 1; i < splitedwWords.length; i++) {
    if (splitedwWords[i].length > longestWord.length) {
      longestWord = splitedwWords[i];
    }
  }
  return longestWord;
}

//20 - Vérifier une anagramme : Écris une fonction qui vérifie si deux mots sont des anagrammes. Deux mots sont des anagrammes s’ils contiennent exactement les mêmes lettres, mais dans un ordre différent.

console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("Paris", "piras"));
console.log(checkAnagram("hello", "world"));

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

//20.1 - Vérifier une anagramme avec une boucle for : Écris une fonction qui vérifie si deux mots sont des anagrammes. Deux mots sont des anagrammes s’ils contiennent exactement les mêmes lettres, mais dans un ordre différent.

console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("Paris", "piras"));
console.log(checkAnagram("hello", "world"));

function checkAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    console.log(`${word1} and ${word2} are not Anagrams`);
    return false;
  }

  let word2Copy = word2;

  for (let i = 0; i < word1.length; i++) {
    if (word2Copy.includes(word1[i])) {
      word2Copy = word2Copy.replace(word1[i], "");
    } else {
      console.log(`${word1} and ${word2} are not Anagrams`);
      return false;
    }
  }
  console.log(`${word1} and ${word2} are Anagrams`);
  return true;
}

//21 - Détecter si un tableau est trié : Écris une fonction qui retourne true si les éléments d’un tableau sont dans l’ordre croissant ou décroissant.

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([5, 4, 3, 2, 1]));

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

//22 - Modifier un tableau existant : Écris une fonction updateArray qui prend deux tableaux en paramètre et retourne un nouveau tableau.
// - Conserve les éléments présents dans les deux tableaux
// - Remplace les éléments du tableau B qui n'existent pas dans le tableau A par "delete.{element}"
// - Ajoute "add.{element}" pour chaque élément du tableau A absent de tableau B
// - Ajoute "duplicate.{element}" pour chaque doublons du tableau B
// Exemple : ["banana", "apple", "Kiwi", "duplicate.Kiwi", "delete.Pineapple", "add.Strawberry", "add.Orange"]

const fruitsA = ["banana", "apple", "Strawberry", "Kiwi", "Orange"];
const fruitsB = ["banana", "apple", "Kiwi", "Kiwi", "Pineapple"];

updateArray(fruitsA, fruitsB);

function updateArray(a, b) {
  let newArray = [];
  let seenFruit = [];

  for (let fruit of b) {
    if (!a.includes(fruit)) {
      newArray.push(`delete.${fruit}`);
    } else if (a.includes(fruit)) {
      newArray.push(fruit);
    }
  }

  for (let fruit of a) {
    if (!b.includes(fruit)) {
      newArray.push(`add.${fruit}`);
    }
  }

  for (let i = 0; i < newArray.length; i++) {
    if (seenFruit.includes(newArray[i])) {
      newArray[i] = `duplicate.${newArray[i]}`;
    } else {
      seenFruit.push(newArray[i]);
    }
  }

  console.log(newArray);
}

//23 - Détecter les pics et creux dans un tableau : Ecris une fonction capable d'identifier les pics et les creux dans un tableau de nombres. Un pic est un élément du tableau qui est strictement supérieur à ses deux voisins (l'élément avant et l'élément après). Un creux est un élément du tableau qui est strictement inférieur à ses deux voisins.
//Un pic doit être au moins 5 unités supérieur à ses deux voisins et un creux doit être au moins 5 unités inférieur à ses deux voisins.
// Le tableau doit contenir au minimum 3 valeurs pour pouvoir comparer un élément à ses deux voisins. Si ce n’est pas le cas, la fonction doit retourner 0.

const numbersA = [10, 18, 4, 17, 6, 16, 2, 15, 4, 14, 3, 16, 2, 18, 8];
const numbersB = [5, 12, 9, 14, 8, 13, 7, 16, 4, 15, 9, 14, 3, 13, 10];
const numbersC = [0];

findPeaks(numbersA);
findPeaks(numbersB);
findPeaks(numbersC);

function findPeaks(array) {
  if (array.length < 3) {
    console.log("Error : Array must contain at least 3 elements.");
    return 0;
  }

  let highPeak = [];
  let lowPeak = [];

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] > array[i - 1] + 4 && array[i] > array[i + 1] + 4) {
      highPeak.push(array[i]);
    }
  }

  for (let j = 1; j < array.length - 1; j++) {
    if (array[j] < array[j - 1] - 4 && array[j] < array[j + 1] - 4) {
      lowPeak.push(array[j]);
    }
  }

  if (highPeak.length === 0) {
    console.log("No peaks found.");
  } else {
    console.log(`Peak value(s) : ${highPeak}`);
    console.log(`Number of peak value(s) : ${highPeak.length}`);
  }

  if (lowPeak.length === 0) {
    console.log("No low found.");
  } else {
    console.log(`Low value(s) : ${lowPeak}`);
    console.log(`Number of low value(s) : ${lowPeak.length}`);
  }

  console.log("\n ========== \n");
}
