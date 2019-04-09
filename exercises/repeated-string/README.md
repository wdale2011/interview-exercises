# Repeated String

Source: [HackerRank](https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup)

## Problem

Lilah has a string, `s` , of lowercase English letters that she repeated infinitely many times.

Given an integer, `n`, find and print the number of letter `a`'s in the first `n` letters of Lilah's infinite string.

For example, if the string `s = 'abcac'` and `n = 10` and , the substring we consider is `abcacabcac`, the first `10` characters of her infinite string. There are `4` occurrences of `a` in the substring.

### Function Description

Complete the `repeatedString` function. It should return an integer representing the number of occurrences of `a` in the prefix of length `n` in the infinitely repeating string.

`repeatedString` has the following parameter(s):

- `s`: a string to repeat
- `n`: the number of characters to consider

### Input Format

The first line contains a single string, `s`.
The second line contains an integer, `n`.

### Constraints

- `1 <= s.length <= 100`
- `1 <= n < 10^12`
- For 25% of the test cases, `n <= 10^6`

### Output Format

Print a single integer denoting the number of letter `a`'s in the first `n` letters of the infinite string created by repeating `s` infinitely many times.

### Sample Input 0

```
aba
10
```

#### Sample Output 0

```
7
```

#### Explanation 0

The first `n = 10` letters of the infinite string are `abaabaabaa`. Because there are 7 a's, we print 7 on a new line.

### Sample Input 1

```
a
1000000000000
```

#### Sample Output 1

```
1000000000000
```

#### Explanation 1

Because all of the first `n = 1000000000000` letters of the infinite string are `a`, we print `1000000000000` on a new line.

## Solution

### Brute-force Solution

(Will terminate due to timeout)

Runtime: `O(n)`

```js
function repeatedString(s, n) {
  let numAs = 0;
  for (let i = 0; i < n; i++) {
    if (s[i % s.length] === "a") numAs++;
  }

  return numAs;
}
```

We calculate the "mega-string" character-by-character, checking if each character is an `a`. If it is, we increment `numAs`.

We calculate which index in the "mega-string" corresponds to its respective index in `s` by modding `i` by the length of `s`.

### Optimized Solution

Runtime: `O(s.length)` which is essentially `O(1)` as `s` is

```js
function repeatedString(s, n) {
  // calculate a's
  let numAs = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") numAs++;
  }

  // calculate number of times the string **fully** repeats
  const repeats = Math.floor(n / s.length);

  // calculate totalAs from fully repeated strings
  let totalAs = numAs * repeats;

  // calculate remaining As
  for (let i = 0; i < n % s.length; i++) {
    if (s[i] === "a") totalAs++;
  }

  return totalAs;
}
```

First, we calculate the number of `a`'s in `s`. Then, we calculate the number of **complete** repeats of `s` that will fit into our "mega-string" of `n` characters.

The number of `a`'s in the "mega-string" will be:

- the number of `a`'s in `s` times the number of times `s` is fully repeated in the "mega-string"

PLUS

- the number of `a`'s in the remaining characters needed to reach `n` after a complete repeat of `s`

(this is extremely difficuly to explain in words lol)

We can find the number of remaining characters by modding `n` by `s.length` (modulus gives the remainder after a division).
