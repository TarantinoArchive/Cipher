/* jslint browser: true */
/* jslint node: true */
/* eslint no-unused-vars: */

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
