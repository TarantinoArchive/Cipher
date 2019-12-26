/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable func-names */
/* global encryptCaesar, decryptCaesar, getCaesarKey */

function wait(ms) {
  const start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

$(document).ready(function() {
  $('#caesarCard').hide();
  $('#vigenereCard').hide();
  $('#caesarButton').click(function() {
    $('.mdl-chip')
      .css('transition', 'color 1s')
      .css('color', 'black');
    $('.mdl-card').fadeOut();
    wait(500);
    if ($('#caesarCard').hasClass('invisible')) $('#caesarCard').toggleClass('invisible');
    $('#caesarCard').fadeIn();
    $('#caesarButton')
      .css('transition', 'color 1s')
      .css('color', 'blue');
  });
  $('#vigenereButton').click(function() {
    $('.mdl-chip')
      .css('transition', 'color 1s')
      .css('color', 'black');
    $('.mdl-card').fadeOut();
    wait(500);
    if ($('#vigenereCard').hasClass('invisible')) $('#vigenereCard').toggleClass('invisible');
    $('#vigenereCard').fadeIn();
    $('#vigenereButton')
      .css('transition', 'color 1s')
      .css('color', 'blue');
  });
  $('.caesarEncryptButton').click(function() {
    const word = document.getElementById('caesarTextE').value.toLowerCase();
    const key = parseInt(document.getElementById('caesarKeyE').value, 10) % 26;
    const decWord = encryptCaesar(word, key);
    alert(`The encrypted word is ${decWord}`);
  });
  $('.caesarDecryptButton').click(function() {
    const word = document.getElementById('caesarTextD').value.toLowerCase();
    const key = parseInt(document.getElementById('caesarKeyD').value, 10) % 26;
    const encWord = decryptCaesar(word, key);
    alert(`The decrypted word is ${encWord}`);
  });
  $('.caesarKeyButton').click(function() {
    const word1 = document.getElementById('cTextK').value.toLowerCase();
    const word2 = document.getElementById('cText2K').value.toLowerCase();
    const key = getCaesarKey(word1, word2);
    alert(`The encryption key is ${key}`);
  });
  $('.vigenereEncryptButton').click(function() {
      const word1 = document.getElementById('vigenereTextE').value.toLowerCase();
      const word2 = document.getElementById('vigenereTextE2').value.toLowerCase();
      const decWord = encryptVigenere(word1, word2);
      alert(`The encrypted word is ${decWord}`);
  });
  $('.vigenereDecryptButton').click(function() {
      const word1 = document.getElementById('vigenereTextD').value.toLowerCase();
      const word2 = document.getElementById('vigenereTextD2').value.toLowerCase();
      const decWord = decryptVigenere(word1, word2);
      alert(`The decrypted word is ${decWord}`);
  });
  $('.vigenereKeyButton').click(function() {
      const word1 = document.getElementById('vTextK').value.toLowerCase();
      const word2 = document.getElementById('vText2K').value.toLowerCase();
      const decWord = keyVigenere(word1, word2);
      alert(`The encryption key is ${decWord}`);
  });
});
