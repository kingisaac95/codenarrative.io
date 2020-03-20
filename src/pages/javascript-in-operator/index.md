---
title: JavaScript “in” operator
date: 2020-03-20
---

How do you check if a value is in an object?

### Property accessors

In JavaScript, we have property accessors - bracket notation and dot notation - which are used to reach into an object and retrieve a property using it’s key.
Using `object['property’]` or `object.property` returns the value of the key if it exits or undefined if it doesn’t.

Personally, I mostly use `object['property’]`, but today while solving an algorithm question, I wanted to test if a key is in an object without returning the value.

### Object.prototype.hasOwnProperty()

I could do that by using `objectName.hasOwnProperty(key)` which will return a boolean depending on whether the specified property exits or not(you can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)), but I stumbled on another interesting way of doing that same task.

### “in” operator

According to (MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in), the in operator returns `true` if the specified property is in the specified object or its prototype chain.

For example, given the following object

```js
const person = {
	name: ‘Kingdom’,
	sex: ‘male’
	occupation: ‘food’
}
```

you can check if `name` property exists in the person object as follows

```js
const hasName = name in person // returns true
```

or you can use it in a comparison operation like

```js
if (name in person) {
  // do something
}
```

Cool, right?

### Performance

Talking about performance, `Object.prototype.hasOwnProperty()` is much faster than using `”in” operator`. Here’s a [JS Perf test result](https://jsperf.com/object-return-property-or-null/3) on that.
The reason might be because it’s rarely used and therefore not performance-sensitive (maybe no one has really thought to work on improving it’s performance). But this is not a performance bottleneck though.

If like me you like trying new things, then maybe you should give the `”in” operator` a go and see how it works. I personally think it’s cool.

Questions/Comments? Please hit me up on [Twitter](https://twitter.com/kingisaac95).

_Happy coding, and more bliss!_
