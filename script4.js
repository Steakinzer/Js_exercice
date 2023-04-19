const data = [1, 2, 9, 5, 3, 2, 1];

function nombreImmeublesVueOuest(data) {
  let nbrSun = 1;
  let currentMax = data[data.length - 1];
  console.log(currentMax);
  for (i = data.length - 1; i > 0; i--) {
    if (data[i - 1] > currentMax) {
      currentMax = data[i - 1];
      nbrSun++;
    }
  }
  return nbrSun;
}

console.log(nombreImmeublesVueOuest(data));
