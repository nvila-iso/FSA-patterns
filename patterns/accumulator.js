/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  // TODO
  if (typeof n !== "number") {
    return NaN;
  }

  if (n > 0) {
    let product = n;
    for (let i = 1; n > i; i++) {
      product *= i;
    }
    return product;
  }

  if (n < 0) {
    return undefined;
  }

  if (n === 0) {
    return 1;
  }
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  // TODO
  let arrNum = [];

  if (typeof n !== "number") {
    return null;
  }

  if (n <= 0) {
    return arrNum;
  }

  if (n > 0) {
    for (let i = 1; n >= i; i++) {
      arrNum.push(i);
    }
    return arrNum;
  }
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // TODO
  let word = "";

  if (strings.length === 0) {
    return word;
  }

  for (let string of strings) {
    if (string.length > word.length) {
      word = string;
    }
  }
  return word;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  // TODO
  let count = 0;

  if (attendance.length > 0) {
    for (let student of attendance) {
      if (student === true) {
        count++;
      }
    }
  }

  return count;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // TODO
  let compliment = "";

  if (typeof dna !== "string") {
    return null;
  }

  for (let letter of dna) {
    if (letter === "A") {
      compliment += "T";
    } else if (letter === "C") {
      compliment += "G";
    } else if (letter === "G") {
      compliment += "C";
    } else if (letter === "T") {
      compliment += "A";
    }
  }

  return compliment;
}
