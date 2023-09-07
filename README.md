# protofill
> Enhance native JavaScript prototypes with custom methods safely.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/protofill

# add types for `src/global.d.ts`
import '@jswork/protofill/dist/types';
```

## usage
```js
// just oneline
import '@jswork/protofill'

// ------ Array ---- 
// const arr = [1,2,3]
set first: arr.first = 'a';
get first: arr.first;

// set last: arr.last = 'a';
// get last: arr.last;

// filter2tuple
const numbers = [1, 2, 3, 4, 5];
const result = numbers.filter2tuple((item) => item > 2);
// result: [[3, 4, 5], [1, 2, 3, 4, 5]]


// ------ Date ----
// const date = new Date();
// format: date.format('YYYY-MM-DD HH:mm:ss');
```

## license
Code released under [the MIT license](https://github.com/afeiship/protofill/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/protofill
[version-url]: https://npmjs.org/package/@jswork/protofill

[license-image]: https://img.shields.io/npm/l/@jswork/protofill
[license-url]: https://github.com/afeiship/protofill/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/protofill
[size-url]: https://github.com/afeiship/protofill/blob/master/dist/protofill.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/protofill
[download-url]: https://www.npmjs.com/package/@jswork/protofill
