function bestFirend(fnames) {
  let bestFirend = fnames[0];
  for (let fname of fnames) {
    if (fname.length < bestFirend.length) {
      bestFirend = fname;
    }
    return bestFirend;
  }
}

let names = ["mehedi", "refat", "nusrat", "subrato", "samin"];

let result = bestFirend(names);
console.log(result);
