//1 - Trouver le maximum dans un tableau : Écris une fonction qui prend un tableau d'entiers et retourne le plus grand nombre.

const numbers = [1, 4, 7, "10", 5, 8, "11r", 6.3, 9, "r", 2];
const highNumber = isHighNumber(numbers);
console.log("nombre plus grand : ", highNumber);

function isHighNumber(n) {
  const cleaningArray = n.map((e) => parseFloat(e)).filter((e) => !isNaN(e));
  if (cleaningArray.length === 0) {
    return null;
  } else return Math.max(...cleaningArray);
}

const numbers2 = [1, 4, 7, 5, 8, 6, 9, 2];
const numberMax = trouverMaximum(numbers2);
console.log("nombre plus grand2 :", numberMax);

function trouverMaximum(n) {
  if (n.length === 0) {
    return null;
  } else return Math.max(...n);
}

//2 - Vérifier si une chaîne est un palindrome : Écris une fonction qui vérifie si une chaîne de caractères est un palindrome (c'est-à-dire qu'elle se lit de la même manière de gauche à droite et de droite à gauche)

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

//3 - Inverser un tableau : Écris une fonction qui inverse l'ordre des éléments dans un tableau sans modifier le tableau d'origine.

const fruits = ["pomme", "fraise", "orange", "kiwi", "banane"];
console.log("Orginal :", fruits);
console.log("reversed :", reverseArray(fruits));

function reverseArray(f) {
  const reversedFruits = [...f].reverse();
  return reversedFruits;
}

const fruits2 = ["pomme", "fraise", "orange", "kiwi", "banane"];
console.log("reversed2 :", reverseArray2(fruits2));

function reverseArray2(f) {
  const reversedFruits2 = [];
  for (let i = f.length - 1; i >= 0; i--) {
    reversedFruits2.push(f[i]);
  }
  return reversedFruits2;
}

//4 - Compter les caractères uniques dans une chaîne : Écris une fonction qui retourne le nombre de caractères uniques dans une chaîne de caractères.

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

const numberlist = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];
console.log(uniqueChar2(numberlist));

function uniqueChar2(list) {
  const unique = new Set(list);
  return unique.size;
}

//4.2 - Compter les caractères dans une chaîne : Écris une fonction qui retourne le nombre de chaque caractères.

const letter = ["a", "b", "c", "b", "e", "e", "c", "b"];
console.log(countLetters(letter));

function countLetters(arr) {
  const numberOfLetter = {}; // Crée un objet vide

  arr.forEach((l) => {
    if (numberOfLetter[l]) {
      numberOfLetter[l] = numberOfLetter[l] + 1;
    } else {
      numberOfLetter[l] = 1;
    }
  });
  return numberOfLetter;
}

//5 - Trouver la somme des nombres pairs dans un tableau : Écris une fonction qui calcule la somme de tous les nombres pairs dans un tableau d'entiers.

const arraynumbers = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];
console.log(calculepair(arraynumbers));

function calculepair(arr) {
  const reduceArr = arr
    .filter((e) => e % 2 === 0)
    .reduce((accumulateur, e) => accumulateur + e, 0);
  return reduceArr;
}

const arraynumbers2 = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];

function calculepair2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
      //sum = sum + arr[i];
    }
  }
  return sum;
}

console.log("Somme des nombres pairs : ", calculepair2(arraynumbers2));

//5.2 - Trouve combien de nombres pairs il y a dans un tableau : Écris une fonction qui calcule le combien de nombres pairs il y a dans un tableau d'entiers.

const arraynumbers3 = [1, 2, 4, 6, 3, 5, 2, 7, 8, 5, 9, 5, 6, 7, 4, 3];

function calculepair3(arr) {
  let sum = 0;
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += 1;
      //sum = sum +1;
      evenNumbers.push(arr[i]);
    }
  }
  console.log("Nombres pairs : ", evenNumbers);
  console.log("Total de nombres pairs : ", sum);
  return sum;
}

console.log("Retour total de nombres pairs : ", calculepair3(arraynumbers3));
