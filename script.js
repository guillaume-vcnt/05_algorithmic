//Trouver le plus grand nombre dans un tableau : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre.

const numbers2 = [1, 4, 7, 5, 8, 3, 6, 9, 2, 5];
const numberMax = trouverMaximum(numbers2);
console.log("nombre plus grand2 :", numberMax);

function trouverMaximum(nb) {
  if (nb.length === 0) {
    return null;
  } else return Math.max(...nb);
}

//Trouver le plus petit nombre dans un tableau : Écris une fonction qui retourne le plus petit nombre d’un tableau.

const numbers3 = [1, 4, 7, 5, 8, 3, 6, 9, 2, 5];
const numberMin = lowNumber(numbers3);
console.log("nombre plus grand2 :", lowNumber);

function lowNumber(nb) {
  if (nb.length === 0) {
    return null;
  } else return Math.min(...nb);
}

// Trouver le plus petit et le plus grand nombre dans un tableau : Écris une fonction qui retourne le plus petit  et le plus grand nombre d’un tableau.

const numbers4 = [
  18, 23, 45, 67, 32, 23, 3, 9, 67, 4, 5, 76, 2, 41, 7, 8, 98, 67, 90, 49, 34,
  67,
];

const numbers2ByOrder = [...numbers2].sort((a, b) => a - b);
console.log("Original", numbers2);
console.log("With order", numbers2ByOrder);

function lowNumber2(nb) {
  const minNumber = nb[0];
  const maxNumber = nb[nb.length - 1];
  return console.log("Min:", minNumber), console.log("Max:", maxNumber);
}

lowNumber2(numbers2ByOrder);

//Trouver le plus grand nombre dans un tableau avec une boucle for : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre.

function trouverMax2(tableau) {
  let max = tableau[0];
  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
      max = tableau[i];
    }
  }
  return max;
}

console.log(trouverMax([4, 8, 1, 9, 2]));

//Trouver le plus petit nombre dans un tableau avec une boucle for : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre.

const listNombre = [3, 5, 9, 8, 1, 9, -2, 5, 41, 23];

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log("Le plus petit nombre est :", findMin(listNumber));

//Supprimer les doublons d’un tableau : Écris une fonction qui retourne un tableau sans doublons.

const listnumber = [1, 2, 2, 3, 4, 4, 4];
const newlistnumber = removeDuplicates(listnumber);

function removeDuplicates(arr) {
  const uniqueValues = new Set(arr);
  return [...uniqueValues];
}

console.log(newlistnumber);

//Vérifier si une chaîne est un palindrome : Écris une fonction qui vérifie si une chaîne de caractères est un palindrome (c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche) et retourne true si c’est un palindrome, false sinon.

const words = ["kayak", "banane", "New York"];
const testingWords = words.forEach((e) => isPalindrome2(e));
console.log(testingWords);

function isPalindrome2(word) {
  const reversed = word.split("").reverse().join("");
  console.log(`Reversed Word : ${reversed}`);
  if (reversed === word) {
    console.log(`${word} is palindrome2`);
    return true;
  } else {
    console.log(`${word} is not palindrome2`);
  }
  return false;
}

//Inverser un tableau : Écris une fonction qui inverse l'ordre des éléments dans un tableau sans modifier le tableau d'origine.

const fruits = ["pomme", "fraise", "orange", "kiwi", "banane"];
console.log("Orginal :", fruits);
console.log("reversed :", reverseArray(fruits));

function reverseArray(f) {
  const reversedFruits = [...f].reverse();
  return reversedFruits;
}

//Inverser un tableau avec une boucle for : Écris une fonction qui inverse l'ordre des éléments dans un tableau sans modifier le tableau d'origine.

const fruits2 = ["pomme", "fraise", "orange", "kiwi", "banane"];
console.log("reversed2 :", reverseArray2(fruits2));

function reverseArray2(f) {
  const reversedFruits2 = [];
  for (let i = f.length - 1; i >= 0; i--) {
    reversedFruits2.push(f[i]);
  }
  return reversedFruits2;
}

//Inverser une chaîne de caractères : Écris une fonction qui Inverse les lettres d’un mot. Ex: "chat" => "tahc"

let userPrompt = "Husky";
let reversedPrompt = [];

function reverseWord(str) {
  const reversedStr = str.split("").reverse().join("");
  reversedPrompt.push(reversedStr);
  return reversedStr;
}
console.log(reverseWord(userPrompt));
console.log(reversedPrompt);

//Inverser une chaîne de caractères avec uen boucle for : Écris une fonction qui Inverse les lettres d’un mot. Ex: "chat" => "tahc"
const titleMovie2 = "Le seigneur des anneaux";

function reverseString2(str) {
  if (typeof str === "string") {
    console.log("is string");
  } else {
    throw new Error("is not a string");
  }
  let reversedTitle = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedTitle.push(str[i]);
  }
  return reversedTitle.join("");
}

console.log(reverseString2(titleMovie2));

//Compter les caractères dans une chaîne : Écris une fonction qui retourne le nombre de chaque caractères.

const letter = ["a", "b", "c", "b", "e", "e", "c", "b"];
console.log(countLetters(letter));

function countLetters(arr) {
  const numberOfLetter = {};

  arr.forEach((l) => {
    if (numberOfLetter[l]) {
      numberOfLetter[l] = numberOfLetter[l] + 1;
    } else {
      numberOfLetter[l] = 1;
    }
  });
  return numberOfLetter;
}

//Compter les caractères uniques dans une chaîne : Écris une fonction qui retourne le nombre de caractères uniques dans une chaîne.

const titlemovie = "Les dents de la mer";
console.log("Nombre de char unique :", uniqueChar(titlemovie));

function uniqueChar(t) {
  const unique = [];
  const cleaned = t.replace(/\s+/g, "");
  const splitedtitle = cleaned.split("");
  console.log(splitedtitle);
  for (let i = 0; i < splitedtitle.length; i++) {
    if (!unique.includes(splitedtitle[i])) {
      unique.push(splitedtitle[i]);
    }
  }
  console.log("Caractères uniques : ", unique);
  return unique.length;
}

//Compter les nombre uniques dans un tableau : Écris une fonction qui retourne combien de nombre uniques il y a dans un tableau.

const numberlist = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];
console.log(uniqueChar2(numberlist));

function uniqueChar2(list) {
  const unique = new Set(list);
  return unique.size;
}

//Compter le nombre de fois que chaque valeur apparaît dans un tableau : Écris une fonction qui retourne combien de fois chaque apparait dans le tableau

function countCharacters(array) {
  return array.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

console.log(countCharacters(["a", "b", "c", "b", "e"])); // { a: 1, b: 2, c: 1, e: 1 }

//Trouve combien de nombres pairs il y a dans un tableau : Écris une fonction qui calcule combien de nombres pairs il y a dans un tableau d'entiers.

function countEvenNumbers(array) {
  return array.filter((n) => n % 2 === 0).length;
}

console.log(countEvenNumbers([1, 2, 3, 4, 6])); // 3

//Trouve combien de nombres pairs il y a dans un tableau avec une boucle for : Écris une fonction qui calcule combien de nombres pairs il y a dans un tableau d'entiers.

const arraynumbers3 = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];

function calculepair3(arr) {
  let sum = 0;
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += 1;
      evenNumbers.push(arr[i]);
    }
  }
  console.log("Nombres pairs : ", evenNumbers);
  console.log("Total de nombres pairs : ", sum);
  return sum;
}

console.log("Retour total de nombres pairs : ", calculepair3(arraynumbers3));

//Trouver la somme des nombres pairs dans un tableau : Écris une fonction qui calcule la somme de tous les nombres pairs dans un tableau d'entiers.

const arraynumbers = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];
console.log(calculepair(arraynumbers));

function calculepair(arr) {
  const reduceArr = arr
    .filter((e) => e % 2 === 0)
    .reduce((accumulateur, e) => accumulateur + e, 0);
  return reduceArr;
}

//Trouver la somme des nombres pairs dans un tableau avec une boucle for : Écris une fonction qui calcule la somme de tous les nombres pairs dans un tableau d'entiers.

const arraynumbers2 = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];

function calculepair2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log("Somme des nombres pairs : ", calculepair2(arraynumbers2));

//Trouver tous les nombres pairs et les classer par ordre décroissant : Écris une fonction qui retourne un tableau de nombres pairs triés du plus grand au plus petit.

const listNumber2 = [1, 4, 63, 6, 9, 4, 7, 5, 6, 5, 89, 43];

function getEvenSortedDescending2(arr) {
  const newArr = arr.filter((num) => num % 2 === 0).sort((a, b) => b - a);
  return [...new Set(newArr)];
}

console.log(getEvenSortedDescending2(listNumber2));

//Vérifier si un nombre est premier : Écris une fonction qui vérifie si un nombre est un nombre premier.

const numbersList = [
  18, 23, 45, 67, 32, 23, 3, 9, 67, 4, 5, 76, 2, 41, 7, 8, 98, 67, 90, 49, 34,
  67,
];

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

//Compter les voyelles dans une chaîne : Écris une fonction qui retourne le nombre de voyelles dans une chaîne (a, e, i, o, u, y).

const string = "Le Seigneurs des Anneaux";

function isVoyelles(v, str) {
  const vowels = "aeiouyAEIOUY";
  let count = 0;
  const splitedStr = str.replace(/\s+/g, "").toLowerCase().split("");
  for (let i = 0; i < splitedStr.length; i++)
    if (v.includes(splitedStr[i])) {
      count++;
    }
}

isVoyelles(voyelles, string);
console.log(numberVoyelle);

//Trouver le mot le plus long dans une phrase : Écris une fonction qui retourne le mot avec le plus grand nombre de caractères.

const phrase = "le seigneur des anneaux";

function theMostLongestWord(str) {
  const newStr = str.split(" ");
  let maxWord = newStr[0];
  for (let i = 1; i < newStr.length; i++) {
    if (newStr[i].length > maxWord.length) {
      maxWord = newStr[i];
    }
  }

  return maxWord;
}

console.log(theMostLongestWord(phrase));

//Vérifier une anagramme :  Écris une fonction qui vérifie si deux mots sont des anagrammes. Deux mots sont des anagrammes s’ils contiennent exactement les mêmes lettres, mais dans un ordre différent.

function estAnagramme(mot1, mot2) {
  let cleanMot1 = mot1.toLowerCase().replace(/\s/g, "");
  let cleanMot2 = mot2.toLowerCase().replace(/\s/g, "");

  if (cleanMot1.length !== cleanMot2.length) {
    console.log(`${mot1} and ${mot2} are not Anagrams`);
    return false;
  }

  let sorted1 = cleanMot1.split("").sort().join("");
  let sorted2 = cleanMot2.split("").sort().join("");

  if (sorted1 === sorted2) {
    console.log(`${mot1} and ${mot2} are Anagrams`);
    return true;
  } else {
    console.log(`${mot1} and ${mot2} are not Anagrams`);
    return false;
  }
}

console.log(estAnagramme("listen", "silent")); //true
console.log(estAnagramme("Paris", "piras")); // true
console.log(estAnagramme("hello", "world")); // false

//Vérifier une anagramme avec boucle for:  Écris une fonction qui vérifie si deux mots sont des anagrammes. Deux mots sont des anagrammes s’ils contiennent exactement les mêmes lettres, mais dans un ordre différent.

areAnagrams("listen", "silent");
areAnagrams("hello", "world");

function areAnagrams(str1, str2) {
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

//Détecter si un tableau est trié : Écris une fonction qui retourne true si les éléments d’un tableau sont dans l’ordre croissant.

function estTrie(tableau) {
  let estCroissant = true;
  let estDecroissant = true;

  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < tableau[i - 1]) {
      estCroissant = false;
    }
    if (tableau[i] > tableau[i - 1]) {
      estDecroissant = false;
    }
  }

  return estCroissant || estDecroissant;
}

console.log(estTrie([1, 2, 3, 4, 5])); // true
console.log(estTrie([5, 4, 3, 2, 1])); // true
console.log(estTrie([1, 3, 2, 5, 4])); // false

//Trier un tableau de nombres
//Écris une fonction sortNumbers(arr) qui prend un tableau d’entiers et retourne un tableau trié par ordre croissant.

//Exemple :
sortNumbers([5, 3, 8, 2, 9]); // [2, 3, 5, 8, 9]
sortNumbers([10, 4, 7, 1, 3]); // [1, 3, 4, 7, 10]

//Trier un tableau de nombres
//Écris une fonction sortNumbers(arr) qui prend un tableau d’entiers et retourne un tableau trié par ordre decroissant.

//Exemple :
sortNumbers([5, 3, 8, 2, 9]); // [2, 3, 5, 8, 9]
sortNumbers([10, 4, 7, 1, 3]); // [1, 3, 4, 7, 10]

//Vérifier si un tableau a un total égal à un nombre donné
//Écris une fonction hasTotal(arr, total) qui prend un tableau de nombres et un total, et qui retourne true si la somme des éléments du tableau est égale au total, sinon false.

//Exemple :
hasTotal([1, 2, 3, 4], 10); // true (1 + 2 + 3 + 4 = 10)
hasTotal([1, 2, 3], 10); // false (1 + 2 + 3 = 6)
