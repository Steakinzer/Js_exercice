const data = [5, 10, 3, 6];
//            0   1  2  3
function isResult(k) {
  for (i = 0; i < data.length; i++) {
    for (j = i + 1; j < data.length; j++) {
      if (data[i] + data[j] === k) {
        return true;
      }
    }
  }
  return false;
}

console.log(isResult(10));
