// 5. split string and convert to array of words
let _string: string = `Hello World`;
function stringToArray(_inputString: string) {
  return _inputString.split(` `);
}
const cekHasil = stringToArray(_string);
console.log(cekHasil);
