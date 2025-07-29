const arr = [3, 1, 5, 4, 1, 5, 3];

const obj = {};

for (let i = 0; i < arr.length; i++) {
  if (arr[i] in obj) {
    obj[arr[i]] = obj[arr[i]] + 1;
  } else {
    obj[arr[i]] = 1;
  }
}
const objArr = Object.entries(obj);
for (let i of objArr) {
  if (i[1] === 1) {
    console.log(i[0]);
  }
}
