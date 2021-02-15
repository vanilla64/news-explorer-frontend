const wordPluralize = (length, arr) => {
  // const words = Array.of(
  //   'сохраненная статья', 'сохраненные статьи', 'сохраненных статей')
  //
  // const wordEndings = Array.of(
  //   '-м', '-ти', '-ми'
  // )

  length = Math.abs(length) % 100;
  let n1 = length % 10;

  if (length > 10 && length < 20) { return arr[2]; }
  if (n1 > 1 && n1 < 5) { return arr[1]; }
  if (n1 === 1) { return arr[0]; }
  return arr[2];
}

export default wordPluralize;
