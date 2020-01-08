/* jslint browser: true */
/* jslint node: true */
/* eslint no-unused-vars: */

function findFirstIndex(arr, secondIndex, el) {
  for (let i = 97; i <= 122; i++) {
    if (arr[String.fromCharCode(i)][secondIndex] == el) return String.fromCharCode(i);
  }
  return false;
}
function findSecondIndex(arr, firstIndex, el) {
  for (let i = 97; i <= 122; i++) {
    if (arr[firstIndex][String.fromCharCode(i)] == el) return String.fromCharCode(i);
  }
  return false;
}

function multiplicativeInverse(a) {
  let flag = 0;
  for (let i = 0; i < 26; i++) if ((a * i) % 26 == 1) return i;
}
/*
function multiplicativeInverse(a) {
  return (1 - a) % 26;
}*/
function encryptCaesar(word, key) {
  let i;
  let finStr = '';
  let currChar;
  for (i = 0; i < word.length; i += 1) {
    currChar = word[i].charCodeAt() + key;
    if (currChar > 122) {
      currChar = 96 + currChar - 122;
    } else if (currChar < 97) {
      currChar = 122 - (96 - currChar);
    }
    finStr += String.fromCharCode(currChar);
  }
  return finStr;
}
function decryptCaesar(word, key) {
  let i;
  let finStr = '';
  let currChar;
  for (i = 0; i < word.length; i += 1) {
    currChar = word[i].charCodeAt() - key;
    if (currChar > 122) {
      currChar = 96 + currChar - 122;
    } else if (currChar < 97) {
      currChar = 122 - (96 - currChar);
    }
    finStr += String.fromCharCode(currChar);
  }
  return finStr;
}
function getCaesarKey(word1, word2) {
  return (
    Math.max(word1[0].charCodeAt(), word2[0].charCodeAt()) -
    Math.min(word1[0].charCodeAt(), word2[0].charCodeAt())
  );
}
function encryptVigenere(word1, word2) {
  let secondIndex = 0,
    decodedWord = '';
  for (let i = 0; i < word1.length; i++) {
    decodedWord = decodedWord + vigenereAlphabet[word1[i]][word2[secondIndex]];
    secondIndex++;
    if (secondIndex == word2.length) secondIndex = 0;
  }
  return decodedWord;
}
function decryptVigenere(word1, word2) {
  let secondIndex = 0,
    decodedWord = '';
  for (let i = 0; i < word1.length; i++) {
    decodedWord = decodedWord + findFirstIndex(vigenereAlphabet, word2[secondIndex], word1[i]);
    secondIndex++;
    if (secondIndex == word2.length) secondIndex = 0;
  }
  return decodedWord;
}
function keyVigenere(word1, word2) {
  let decodedWord = '';
  for (let i = 0; i < word1.length; i++) {
    decodedWord = decodedWord + findSecondIndex(vigenereAlphabet, word1[i], word2[i]);
  }
  for (let i = 0; i < word1.length; i++) {
    if (encryptVigenere(word1, decodedWord.substring(0, i)) == word2)
      decodedWord = decodedWord.substring(0, i);
  }
  return decodedWord;
}
function encryptAffine(word, num1, num2) {
  let decodedWord = '',
    currChar;
  for (let i = 0; i < word.length; i++) {
    currChar = alphabetize(word[i]);
    currChar = characterize((num1 * currChar + num2) % 26);
    decodedWord = decodedWord + currChar;
  }
  return decodedWord;
}
function decryptAffine(word, num1, num2) {
  let decodedWord = '',
    currChar;
  num1 = multiplicativeInverse(num1);
  for (let i = 0; i < word.length; i++) {
    currChar = alphabetize(word[i]);
    currChar = characterize((num1 * (currChar - num2)) % 26);
    decodedWord = decodedWord + currChar;
  }
  return decodedWord;
}
function keyAffine(word1, word2) {
  for (let num1 = 0; i < 100; i++) {
    for (let num2 = 0; i < 100; i++) {
      if (encryptAffine(word1, num1, num2) == word2) {
        return [num1, num2];
      }
    }
  }
  return [-9999, -9999];
}
