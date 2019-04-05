## Solution

Source: [HackerRank](https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup)

Runtime: `O(n)`

This is a **greedy** solution. Explanation on greedy algorithms [here](https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/).

```js
function jumpingOnClouds(c) {
  let currCloud = 0;
  let steps = 0;

  while (currCloud != c.length - 1) {
    // greedily choose next step
    // first, try 2
    if (c[currCloud + 2] === 0) {
      currCloud = currCloud + 2;
      steps++;
    } else {
      // else take 1
      currCloud = currCloud + 1;
      steps++;
    }
  }
  return steps;
}
```

Not much to explain here. Basically, because our algorithm is greedy, we always try to choose the most optimal move first. Optimization for this problem means minimizing the number of moves, so a bigger step of 2 would be more optimal. If we can't 2 steps, we take 1.

We are able to use a greedy algorithm here because we can assume that there is always a solution.
