import MD5 from "crypto-js/md5";

export function findSolution(secretKey, prefix) {
  let i = 0;
  let textToHash = "";
  let currentHash = "";
  while (!currentHash.startsWith(prefix)) {
    i++;
    textToHash = secretKey + i;
    currentHash = MD5(textToHash).toString();
  }
  return textToHash.substr(secretKey.length, textToHash.length);
}

/*
const hexOf = (number: number): string => {
  return number / 16 === 0
    ? ""
    : hexOf(Math.floor(number / 16)) +
        "" +
        (number % 16 < 10
          ? (number % 16).toString()
          : String.fromCharCode((number % 16) - 9 + 64));
}; 
*/
