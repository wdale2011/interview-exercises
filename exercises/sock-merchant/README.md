# Sock Merchant

Source: [HackerRank](https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup)

## Solution

### Brute-force Solution

Runtime: `O(n^2)`

There is a brute-force solution where you can use nested for loops to match pairs. I actually think this solution is much more complicated.

### Optimal Solution Using Hash Map

Runtime: `O(n)`

```js
function sockMerchant(n, ar) {
  const foundSocks = {};

  // go over our array and fill our hash map (object) with amount of each sock
  for (let i = 0; i < n; i++) {
    const sock = ar[i];
    foundSocks[sock] = foundSocks[sock] ? foundSocks[sock] + 1 : 1;
    // Above is a fancy way of doing below
    // if (foundSocks[sock]) {
    //     foundSocks[sock] = foundSocks[sock] + 1;
    // } else {
    //     foundSocks[sock] = 1;
    // }
  }

  let pairs = 0;
  // iterate over object keys
  for (let sock in foundSocks) {
    const amount = foundSocks[sock];
    pairs += Math.floor(amount / 2);
  }

  return pairs;
}
```

This solution leverages the great accessing and adding runtime of a Hash Map. It takes `O(1)` (constant) time to both add and access elements to a Hash Map.

Hash Maps map unique keys to values. In JavaScript, we can represent a Hash Map using plain objects.

The first part of our algorithm fills the Hash Map by iterating over the array to count the types of socks.
Our Map will map sock type (key) to amount of that type (value).
So if we had the array

```
[1, 2, 2, 1, 3]
```

Our map would look like:

```
{
  1: 2,
  2: 2,
  3: 1
}
```

The second part of our algorithm computes the number of pairs using the values stored in our Map.
Since we already know how many socks there are of each type, we can divide that number by 2 to get the number of pairs.

We sum up that value and then return it.

Boom 💥
