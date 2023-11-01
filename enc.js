const fs = require('fs');

const file = fs.readFileSync('file.txt', {
  encoding: 'hex',
});

const seed = 20;

let encryptedText = '';

for (let i = 0; i < file.length; i++) {
  let num = '';
  while (!Number.isNaN(Number(file[i]))) {
    num += file[i];
    i++;
  }
  encryptedText += Number(num) * seed;
  if (file[i]) {
    encryptedText += file[i];
  }
}

console.log(file);
console.log(encryptedText);

fs.writeFileSync('enc.txt', encryptedText, {
  encoding: 'hex',
  flag: 'w',
});
