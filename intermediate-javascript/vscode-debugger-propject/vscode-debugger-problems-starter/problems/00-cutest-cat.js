/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/
debugger
function cutestCat(cats) {
  let cutest=0;
  let i = 0;
  let cat = 0;

  while (i < cats.length) {
    if (cats[i].cuteness > cutest) {
      cat = cats[i];
      cutest = cat.cuteness;
    }
    i++;
  }

  return cat;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }