const fs = require('fs');

const file = fs.readFileSync('enc.txt', {
  encoding: 'hex',
});

const seed = 20;

let decryptedText = '';

for (let i = 0; i < file.length; i++) {
  let num = '';
  while (!Number.isNaN(Number(file[i]))) {
    num += file[i];
    i++;
  }
  decryptedText += Number(num) / seed;
  if (file[i]) {
    decryptedText += file[i];
  }
}

fs.writeFileSync('dec.txt', decryptedText, {
  encoding: 'hex',
  flag: 'w',
});
