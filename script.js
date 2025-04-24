//1 - Trouver le plus grand nombre dans un tableau : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre.

// ========================= Version ========================= \\

const numbers = [1, 4, 7, "10", 5, 8, "11r", 6.3, 9, "r", 2];
const highNumber = isHighNumber(numbers);
console.log("nombre plus grand : ", highNumber);

function isHighNumber(n) {
  const cleaningArray = n.map((e) => parseFloat(e)).filter((e) => !isNaN(e));
  if (cleaningArray.length === 0) {
    return null;
  } else return Math.max(...cleaningArray);
}

// ========================= Version ========================= \\

const numbers2 = [1, 4, 7, 5, 8, 6, 9, 2];
const numberMax = trouverMaximum(numbers2);
console.log("nombre plus grand2 :", numberMax);

function trouverMaximum(n) {
  if (n.length === 0) {
    return null;
  } else return Math.max(...n);
}

//2 Trouver le plus petit nombre dans un tableau : Écris une fonction qui retourne le plus petit nombre d’un tableau.

// ========================= Version ========================= \\

const numbers3 = [
  18, 23, 45, 67, 32, 23, 3, 9, 67, 4, 5, 76, 2, 41, 7, 8, 98, 67, 90, 49, 34,
  67,
];

function lowNumber(nb) {
  const minNumber = Math.min(...nb);
  return console.log(minNumber);
}

lowNumber(numbers);

// ========================= Version ========================= \\

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

// ========================= Version ========================= \\

function trouverMax(tableau) {
  tableau.sort((a, b) => a - b); // Trie le tableau par ordre croissant
  return tableau[tableau.length - 1]; // Retourne le dernier élément (le plus grand)
}

console.log(trouverMax([4, 8, 1, 9, 2])); // 9

// ========================= Version ========================= \\

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

// ========================= Version ========================= \\

const listNombre = [3, 5, 9, 8, 1, 9, -2, 5, 41, 23];

function findMe(array) {
  for (let i = 0; i < array.length; i++) {
    let candidatMin = array[i];
    for (let j = 0; j < array.length; j++) {
      if (array[j] < candidatMin) {
        candidatMin = array[j];
      }
    }
    if (candidatMin === array[i]) {
      return candidatMin;
    }
  }
}

const plusPetit = findMe(listNombre);
console.log(plusPetit);

// ========================= Version ========================= \\

const listnumber = [1, 2, 2, 3, 4, 4, 4];

function removeDuplicates(arr) {
  const uniqueValues = new Set(arr);
  return [...uniqueValues];
}

const newlistnumber = removeDuplicates(listnumber);

console.log(newlistnumber);

// ========================= Version ========================= \\

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

// ========================= Version ========================= \\

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findMax(arr) {
  const maxnumber = Math.max(...arr);
  return maxnumber;
}

console.log(findMax(numbersArr));

// ========================= Version ========================= \\

const numbersArr2 = [1, 2, 3, 41, 5, 6, 7, 8, 9];

function findMax2(arr) {
  let maxNumber = arr[0];
  console.log(maxNumber);
  for (let i = 1; i < arr.length; i++)
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  console.log(maxNumber);
}

findMax2(numbersArr2);

//3 - Vérifier si une chaîne est un palindrome : Écris une fonction qui vérifie si une chaîne de caractères est un palindrome (c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche) et retourne true si c’est un palindrome, false sinon.

// ========================= Version ========================= \\

const words = ["kayak", " banane ", "mardi", "New York", "BA AB"];
const testingWords = words.map((e) => isPalindrome(e));
console.log(testingWords);

function isPalindrome(word) {
  const cleaned = word.trim().replace(/\s+/g, "");
  const reversed = cleaned.split("").reverse().join("");
  console.log(`Cleeaned Word : ${cleaned}`);
  console.log(`Reversed Word : ${reversed}`);
  if (cleaned === reversed) {
    console.log(`${word} is palindrome`);
    return true;
  } else {
    console.log(`${word} is not palindrome`);
  }
  return false;
}

// ========================= Version ========================= \\

const words2 = ["kayak", "banane", "mardi", "New York", "BAAB"];
const testingWords2 = words2.map((e) => isPalindrome2(e));
console.log(testingWords2);

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

// ========================= Version ========================= \\

let promptUser = "Kayak";
isPalindrome(promptUser);

function isPalindrome3(str) {
  console.log(str);
  const cleanedWord = str.toLowerCase().replace(/\s+/g, "");
  console.log("clean :", cleanedWord);
  const reversedWord = cleanedWord.split("").reverse().join("");
  console.log("reverse :", reversedWord);
  if (reversedWord === cleanedWord) {
    return console.log(`${str.replace(/\s+/g, "")} is Palindrome =`, true);
  } else {
    return console.log(`${str.replace(/\s+/g, "")} is not Palindrome =`, false);
  }
}

// ========================= Version ========================= \\

const userPrompt2 = ["Kay ak", "kiwi", "lotus"];
userPrompt2.forEach((e) => isPalindrome2(e));

function isPalindrome4(str2) {
  console.log(str2);
  const cleanedWord = str2.toLowerCase().replace(/\s+/g, "");
  console.log("clean :", cleanedWord);
  const reversedWord = cleanedWord.split("").reverse().join("");
  console.log("reverse :", reversedWord);
  if (reversedWord === cleanedWord) {
    console.log(`${str2.replace(/\s+/g, "")} is Palindrome =`, true);
  } else {
    console.log(`${str2.replace(/\s+/g, "")} is not Palindrome =`, false);
  }
}

// ========================= Version ========================= \\

const userPrompt3 = ["Kay ak, kiwi, lotus"];
const cleanedUserPrompt3 = userPrompt3[0].split(",").map((e) => e.trim());
console.log(cleanedUserPrompt3);

cleanedUserPrompt3.forEach((e) => isPalindrome2(e));

function isPalindrome5(str3) {
  console.log(str3);
  const cleanedWord = str3.toLowerCase().replace(/\s+/g, "");
  console.log("clean :", cleanedWord);
  const reversedWord = cleanedWord.split("").reverse().join("");
  console.log("reverse :", reversedWord);
  if (reversedWord === cleanedWord) {
    console.log(`${str3.replace(/\s+/g, "")} is Palindrome =`, true);
  } else {
    console.log(`${str3.replace(/\s+/g, "")} is not Palindrome =`, false);
  }
}

//3 - Inverser un tableau : Écris une fonction qui inverse l'ordre des éléments dans un tableau sans modifier le tableau d'origine.

// ========================= Version ========================= \\

const fruits = ["pomme", "fraise", "orange", "kiwi", "banane"];
console.log("Orginal :", fruits);
console.log("reversed :", reverseArray(fruits));

function reverseArray(f) {
  const reversedFruits = [...f].reverse();
  return reversedFruits;
}

// ========================= Version ========================= \\

const fruits2 = ["pomme", "fraise", "orange", "kiwi", "banane"];
console.log("reversed2 :", reverseArray2(fruits2));

function reverseArray2(f) {
  const reversedFruits2 = [];
  for (let i = f.length - 1; i >= 0; i--) {
    reversedFruits2.push(f[i]);
  }
  return reversedFruits2;
}

//4 Inverser une chaîne de caractères : Écris une fonction qui Inverse les lettres d’un mot. Ex: "chat" => "tahc"

let userPrompt = "Husky";
let reversedPrompt = [];

function reverseWord(str) {
  const reversedStr = str.split("").reverse().join("");
  reversedPrompt.push(reversedStr);
  return reversedStr;
}
console.log(reverseWord(userPrompt));
console.log(reversedPrompt);

//5 - Compter les caractères dans une chaîne : Écris une fonction qui retourne le nombre de chaque caractères.

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

//6 - Compter les caractères uniques dans une chaîne : Écris une fonction qui retourne le nombre de caractères uniques dans une chaîne de caractères.

// ========================= Version ========================= \\

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

// ========================= Version ========================= \\

const numberlist = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];
console.log(uniqueChar2(numberlist));

function uniqueChar2(list) {
  const unique = new Set(list);
  return unique.size;
}

// ========================= Version ========================= \\

function countCharacters(array) {
  return array.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

console.log(countCharacters(["a", "b", "c", "b", "e"])); // { a: 1, b: 2, c: 1, e: 1 }

//7 - Trouve combien de nombres pairs il y a dans un tableau : Écris une fonction qui calcule combien de nombres pairs il y a dans un tableau d'entiers.

// ========================= Version ========================= \\

function countEvenNumbers(array) {
  return array.filter((n) => n % 2 === 0).length;
}

console.log(countEvenNumbers([1, 2, 3, 4, 6])); // 3

// ========================= Version ========================= \\

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

//8 - Trouver la somme des nombres pairs dans un tableau : Écris une fonction qui calcule la somme de tous les nombres pairs dans un tableau d'entiers.

// ========================= Version ========================= \\

const arraynumbers = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];
console.log(calculepair(arraynumbers));

function calculepair(arr) {
  const reduceArr = arr
    .filter((e) => e % 2 === 0)
    .reduce((accumulateur, e) => accumulateur + e, 0);
  return reduceArr;
}

// ========================= Version ========================= \\

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

// ========================= Version ========================= \\

function sumEvenNumbers(array) {
  return array.filter((n) => n % 2 === 0).reduce((sum, n) => sum + n, 0);
}

console.log(sumEvenNumbers([1, 2, 4, 6]));

//9 Trouver tous les nombres pairs et les classer par ordre décroissant : Écris une fonction qui retourne un tableau de nombres pairs triés du plus grand au plus petit.

// ========================= Version ========================= \\

const listNumber = [1, 4, 63, 6, 9, 4, 7, 5, 6, 5, 89, 43];

function getEvenSortedDescending(arr) {
  const evenNumbers = arr.filter((n) => n % 2 === 0);
  const sortedDescending = [];

  while (evenNumbers.length > 0) {
    const max = Math.max(...evenNumbers);
    sortedDescending.push(max);
    evenNumbers.splice(evenNumbers.indexOf(max), 1);
  }

  const mySetOfsortedDescending = [...new Set(sortedDescending)];

  return mySetOfsortedDescending;
}

console.log("this", getEvenSortedDescending(listNumber));

// ========================= Version ========================= \\

const listNumber2 = [1, 4, 63, 6, 9, 4, 7, 5, 6, 5, 89, 43];

function getEvenSortedDescending2(arr) {
  const newArr = arr.filter((num) => num % 2 === 0).sort((a, b) => b - a);
  return [...new Set(newArr)];
}

console.log(getEvenSortedDescending2(listNumber2));

//10 Vérifier si un nombre est premier : Écris une fonction qui vérifie si un nombre est un nombre premier.

const numbersList = [
  18, 23, 45, 67, 32, 23, 3, 9, 67, 4, 5, 76, 2, 41, 7, 8, 98, 67, 90, 49, 34,
  67,
];

numbersList.forEach((e) => isPrime(e));

function isPrime(nb) {
  if (nb <= 1) return false;

  for (let i = 2; i < nb; i++) {
    if (nb % i === 0) {
      return console.log(`${nb} is NOT prime`);
    }
  }

  return console.log(`${nb} is prime`);
}

//11 Compter les voyelles dans une chaîne : Écris une fonction qui retourne le nombre de voyelles dans une chaîne (a, e, i, o, u, y).

const voyelles = ["a", "e", "i", "o", "u", "y"];
const string = "Le Seigneurs des Anneaux";
let numberVoyelle = 0;

function isVoyelles(v, str) {
  const splitedStr = str.replace(/\s+/g, "").toLowerCase().split("");
  for (let i = 0; i < splitedStr.length; i++)
    if (v.includes(splitedStr[i])) {
      numberVoyelle++;
    }
}

isVoyelles(voyelles, string);
console.log(numberVoyelle);

//12 Supprimer les doublons d’un tableau : Écris une fonction qui retourne un tableau sans doublons.

const arr = [1, 2, 3, "e", 9, 3, 3, 4, 5, "d", "h", "a", "a", "b", 5, 4, "b"];
const obj = new Set();
arr.forEach((e) => obj.add(e));
const newArr = Array.from(obj);
const str = newArr.join().split(",");
console.log(str);

//13 Trouver le mot le plus long dans une phrase : Écris une fonction qui retourne le mot avec le plus grand nombre de caractères.

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

//14 Vérifier une anagramme :  Écris une fonction qui vérifie si deux mots sont des anagrammes. Deux mots sont des anagrammes s’ils contiennent exactement les mêmes lettres, mais dans un ordre différent.

function estAnagramme(mot1, mot2) {
  let cleanMot1 = mot1.toLowerCase().replace(/\s/g, "");
  let cleanMot2 = mot2.toLowerCase().replace(/\s/g, "");

  if (cleanMot1.length !== cleanMot2.length) return false;

  let sorted1 = cleanMot1.split("").sort().join("");
  let sorted2 = cleanMot2.split("").sort().join("");

  return sorted1 === sorted2;
}

console.log(estAnagramme("chien", "niche")); // true
console.log(estAnagramme("Paris", "piras")); // true
console.log(estAnagramme("Bonjour", "jourbon")); // false

//15 Détecter si un tableau est trié : Écris une fonction qui retourne true si les éléments d’un tableau sont dans l’ordre croissant.

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
