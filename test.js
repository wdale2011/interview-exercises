const arr = [1, 2, 3, 4, 2, 4]

const duplicated = arr.reduce(
  (acc, curr, index) => [...acc, ...new Array(index).fill(curr)],
  []
)

console.log(duplicated)
