# 2.7.1 - JS - array.sort()

---

## .sort() - without parameters

```js
const characters = ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'];

characters.sort();


// output : (5) ["Beth", "Jerry", "Morty", "Rick", "Summer"]  but ascii codes dont work well for capital letters
```

---

This method will sort the array items by their `unicode` numbers.

(sort of alphabetical...)

---

This will work for _most_ cases, but what about when it doesn't?

---

### Example

This doesn't work as _expected_.

```js
const numbers = [123, 13, 12, 6, 76, 0, 9];

numbers.sort();

// outcome? [0, 12, 123, 6, 76, 9] based on first digit of each number
```

---

## Solution: Define out own sorting function!

---

## .sort() - with a function parameters

- This method can accept a function as a parameter.
- This function acts as a sorting function.

---

```js
const numbers = [123, 13, 12, 6, 76, 0, 9];

numbers.sort((a, b) => a - b)

// outcome? smallest to largest because it sorts via the difference between every number pairing
```

---

