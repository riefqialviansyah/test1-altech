/*
2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari 
kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,
*/

const no2 = (arr) => {
  // copy dan tempat penampungan hasil yang akan di urutkan
  const result = [...arr];

  // loop untuk proses mengurutkan
  for (let i = 0; i < result.length - 1; i++) {
    // tampungan sementara nilai element result pada index ke i
    let tmpI = result[i];
    for (let j = i + 1; j < result.length; j++) {
      // tampungan sementara nilai element result pada index ke j
      let tmpJ = result[j];
      // tukar nilai jika didapatkan elemen index i lebih besar dari elemen index j
      if (tmpI > tmpJ) {
        let tmpElResult = result[j];
        result[j] = result[i];
        result[i] = tmpElResult;
      }
    }
  }
  return result;
};

console.log(no2([2, 1, 3, 6, 5, 7, 9, 8]));
console.log(no2([2, 3, 8, 7, 5]));
console.log(no2([1, 3, 9, 7, 6]));

module.exports = no2;
