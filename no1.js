/*
1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, 
dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan 
jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, cetak 
menggunakan console log atau sejenisnya.
*/

const no1 = (num) => {
  // tempat menampung hasil
  let result = "";

  for (let i = 1; i <= num; i++) {
    // tampung hasil sementara
    let tmpResult = "";

    // cek kalau habis dibagi 3
    i % 3 == 0 && (tmpResult += "fish");

    // cek kalau habis dibagi 5
    i % 5 == 0 &&
      (tmpResult == "fish" ? (tmpResult += " bash") : (tmpResult += "bash"));
    tmpResult == "" ? (tmpResult += i) : "";

    // cek agar tidak ada notasi newline berlebih '\n'
    i < num && (tmpResult += "\n");
    result += tmpResult;
  }
  return result;
};

// console.log(no1(15));
// console.log(no1(25));
// console.log(no1(50));

module.exports = no1;
