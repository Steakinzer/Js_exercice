const data = [5, 10, 3, 6];

function isResult(data, k) {
  const set = new Set();
  for (i = 0; i < data.length; i++) {
    const j = k - data[i];
    if (set.has(j)) {
      return true;
    } else {
      set.add(data[i]);
    }
  }
}

console.log(isResult(data, 15));
