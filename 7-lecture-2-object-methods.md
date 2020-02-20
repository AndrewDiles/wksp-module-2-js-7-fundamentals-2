# 2.7.2 - JS - Object Methods

---

## Situation

You have an object that you _need_ to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```

---

## [Object.keys(OBJECTNAME)](https://www.geeksforgeeks.org/object-keys-javascript/)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

```

Now I am interested in the average age of my friends.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

object.keys(friendsAge).foreach(friend = > {
    console.log(friendsAge[friend])  // logs each ages
    console.log(friend) // logs each name

    console.log(`${friend} : ${friendsAge[friend]}`); //logs name : age
})?
```

---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

const age = Object.values(friendsAge);
// outputs the values of the keys
```
const friendsAge = [
{name: 'Kevin' , age: '32'},
{name: 'Rick' , age: '60'},
{name: 'Morty' , age: '14'},
{name: 'Jerry' , age: '35'}
]

friends.sort() // doesn't sort
freinds.sort((a,b) => a.age - b.age);  //works
---