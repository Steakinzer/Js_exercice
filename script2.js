const data = [4, 3, 2, 1, 9];
let nbrBuilding = 0;
function sunBuilduing(data) {
  console.log("complex");
  if (data.length < 1) {
    return nbrBuilding;
  } else {
    nbrBuilding++;
    let higherBuilding = Math.max(...data);
    let newArr = data.slice(data.indexOf(higherBuilding) + 1);
    sunBuilduing(newArr);
  }
  return nbrBuilding;
}
console.time("sunBuilduing");
sunBuilduing(data);
console.timeEnd("sunBuilduing");
console.log(nbrBuilding);
