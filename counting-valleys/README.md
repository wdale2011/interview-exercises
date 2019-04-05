# Counting Valleys

Source: [HackerRank](https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup)

## Solution

Runtime: `O(n)`

```js
function countingValleys(n, s) {
  let level = 0;
  let valleys = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === "U") {
      level++;
      // check if we passed from a valley back up to sea level
      if (level === 0) {
        valleys++;
      }
    } else {
      level--;
    }
  }
  return valleys;
}
```

The code is fairly self-explanatory.
We keep track of our `level` relative to sea level (so positive is above, negative is below).
Then, for each element in the array we either increment or decrement `level` according to the move.

When we increment, we should also check if are returning to sea level. This means we just left a valley, which we can add to our `valleys` sum.
