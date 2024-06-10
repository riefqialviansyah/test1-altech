/*
3. Buatlah fungsi dengan input string jika string tersebut dibalik 
dan tetap sama dengan string yang diinputkan maka return true jika tidak return false
*/

const no3 = (str) => {
  // tampung hasil pembalikan
  let result = "";

  // loop untuk membalik kata
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  // kembalikan hasil bila sama akan true bila tidak akan false
  return result == str;
};

// console.log(no3("katak"));
// console.log(no3("makan"));
// console.log(no3("kakak"));
// console.log(no3("tidur"));
// console.log(no3("kasur rusak"));
// console.log(no3("hidup"));
// console.log(no3("level"));
module.exports = no3;
