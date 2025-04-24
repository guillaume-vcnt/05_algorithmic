//📌 Exercice 1 : Trouver le minimum dans un tableau
//Écris une fonction findMin(arr) qui retourne le plus petit élément d’un tableau d’entier

// ========================= Version ========================= \\

const numbersArray = [5, 3, 8, 2, 9];

function findMin(arr) {
  if (arr.every((n) => !isNaN(n))) {
    const minNumber = Math.min(...arr);
    return minNumber;
  } else {
    throw new Error("Error");
  }
}
console.log("Original :", numbersArray);
console.log("Return func type :", typeof findMin(numbersArray));
console.log("Return func :", findMin(numbersArray));

// ========================= Version ========================= \\

const numbersArray2 = [5, 3, 8, 2, 9];

function findMin2(arr) {
  let minNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }
  return minNumber;
}

console.log(findMin2(numbersArray2));

//📌 Exercice 2 : Inverser une chaîne de caractères
//Écris une fonction reverseString(str) qui prend une chaîne de caractères et retourne cette chaîne inversée.

// ========================= Version ========================= \\

const titleMovie = "Le seigneur des anneaux";

function reverseString(str) {
  if (typeof str === "string") {
    console.log("is string");
  } else {
    throw new Error("is not a string");
  }
  const splitedStr = str.split("").reverse().join("");
  console.log(splitedStr);
  return splitedStr;
}

reverseString(titleMovie);

// ========================= Version ========================= \\

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

//📌 Exercice 3 : Vérifier si un nombre est un nombre premier
//Écris une fonction isPrime(n) qui prend un nombre entier et retourne true s’il est premier, sinon false.
//(Un nombre premier est un nombre entier naturel strictement supérieur à 1 qui n'est divisible que par 1 et par lui-même.)

for (let i = 1; i <= 10; i++) {
  isPrime(i);
}

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

//📌 Exercice 4 : Vérifier si deux chaînes sont des anagrammes
//Écris une fonction areAnagrams(str1, str2) qui prend deux chaînes de caractères et retourne true si elles sont des anagrammes (elles contiennent les mêmes lettres avec les mêmes fréquences), sinon false.

// ========================= Version ========================= \\

areAnagrams("listen", "silent");
areAnagrams("hello", "world");

function areAnagrams(str1, str2) {
  if (str1.length != str2.length) {
    console.log(`${str1} and ${str1} are not Anagrams`);
    return false;
  }
  const splitedStr1 = str1.split("").sort().join();
  const splitedStr2 = str2.split("").sort().join();
  if (splitedStr1 != splitedStr2) {
    console.log(`${str1} and ${str1} are not Anagrams`);
    return false;
  } else {
    console.log(`${str1} and ${str1} are Anagrams`);
    return true;
  }
}

// ========================= Version ========================= \\

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

//📌 Exercice 5 : Compter les voyelles dans une chaîne
//Écris une fonction countVowels(str) qui prend une chaîne de caractères et retourne le nombre de voyelles (a, e, i, o, u) qu’elle contient.

countVowels("abcdefghgghfdhghgjkljuhkgweruokbvx");

function countVowels(str) {
  const vowels = "aeiouyAEIOUY";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  console.log("nombre de voyelle :", count);
  return count;
}

//📌 Exercice 6 : Trier un tableau de nombres
//Écris une fonction sortNumbers(arr) qui prend un tableau d’entiers et retourne un tableau trié par ordre croissant.

//Exemple :
sortNumbers([5, 3, 8, 2, 9]); // [2, 3, 5, 8, 9]
sortNumbers([10, 4, 7, 1, 3]); // [1, 3, 4, 7, 10]

//📌 Exercice 7 : Vérifier si un tableau a un total égal à un nombre donné
//Écris une fonction hasTotal(arr, total) qui prend un tableau de nombres et un total, et qui retourne true si la somme des éléments du tableau est égale au total, sinon false.

//Exemple :
hasTotal([1, 2, 3, 4], 10); // true (1 + 2 + 3 + 4 = 10)
hasTotal([1, 2, 3], 10); // false (1 + 2 + 3 = 6)

//📌 Exercice 8 : Vérifier si tous les éléments d’un tableau sont uniques
//Écris une fonction allUnique(arr) qui prend un tableau et retourne true si tous les éléments du tableau sont uniques (aucun doublon), sinon false.

//Exemple :
allUnique([1, 2, 3, 4]); // true
allUnique([1, 2, 2, 4]); // false
