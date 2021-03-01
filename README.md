# weight

Finds element with the highest value in an array the most efficient way given that some conditions are statisfied.

### Explaination
Recursively splits the array in three parts: the element in the middle, every element before and every after.

If the sum of the first and last part are equal, the index of the element in the middle is returnd, else the function is called with whichever part was bigger.

The length of the array must be (2^n)-1, worst case scenario is O(log2(l+1)).

### Download
Download with [git](https://git-scm.com/).
```bash
git clone https://github.com/OliverKovacsBrg/weight
```

### Import
```js
// CommonJS
const heaviest = require("./index.js");

// ES6
import heaviest from "./index.js";
```

### Usage
```js
/**
 * Takes an array of numbers and returns the index of the number that has a greater value than the others.
 * @param {Number[]} array Must have a lenght of (2^n)-1 where n is a positive integer
 * @returns {Number} Index of biggest number
*/
const heaviest = array => index;
```

### Test
Run with [Node.js](https://nodejs.org/en/).
```bash
node weight.test.js
```