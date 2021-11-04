// decoder function

let res = [];

const decoder = string => {
  let addIncrement = Number(string[0]);
  for (i = 1; i < string.length; i++) {
    res.push(String.fromCharCode(string[i].charCodeAt(0) + addIncrement));
  }
  return res.join('');
}

console.log(decoder('1hknudbqxosnfq`ogx'));


// cipher function
let req = [];
const cipher = string => {
    let subtractIncrement = Number(string[0]);
    for (i = 1; i < string.length; i++) {
      req.push(String.fromCharCode(string[i].charCodeAt(0) - subtractIncrement));
    }
    return req.join('');
  }

  console.log(cipher('1ilovecryptography'))