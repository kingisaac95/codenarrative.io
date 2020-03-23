---
title: What is JavaScript “in” operator
date: 2020-03-20
---

How do you check if a value is in an object?

In JavaScript, there are several ways to do that. One of them is using the `"in" operator`, but before we look at that, let's highlight other more common methods of accessing object properties.

### Property accessors

There are two property accessors in JavaScript land, bracket notation and dot notation. Both notations are used to reach into an object and retrieve a property using it’s key.

Using `object['property’]` (bracket notation) or `object.property` (dot notation) returns the value of the key if it exits or undefined if it doesn’t.

Personally, I use the bracket notation when I'm getting the property name dynamically, and dot notation when accessing a single known property name.

> Sometimes I use dot notation to access properties that have more than on word as their key, eg. `person['first name']`. But, I try to avoid this when I can by using camel case for such property names, eg. `person.firstName`

But today while solving an algorithm question, I wanted to test if a key exists in an object without returning the value.

### Object.prototype.hasOwnProperty()

Using `objectName.hasOwnProperty(key)` will return a boolean depending on whether the specified property exits or not (you can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)), but I stumbled on another interesting way of doing that same task. It's the `"in" operator`!

### “in” operator

According to [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in), the in operator returns `true` if the specified property is in the specified object or its prototype chain.

For example, given the following object

```js
const person = {
	name: ‘Kingdom Orjiewuru’,
	age: 24
	occupation: ‘Software Engineer’
}
```

you can check if `name` property exists in the person object as follows

```js
const hasName = "name" in person // returns true
```

or you can use it in a comparison operation like

```js
if ("name" in person) {
  // do something
}
```

Cool, right?

### Performance

Talking about performance, `Object.prototype.hasOwnProperty()` is much faster than using `”in” operator`. Here’s a [JS Perf test result](https://jsperf.com/object-return-property-or-null/3) on that.
The reason why `”in” operator` is slower might be because it’s rarely used and therefore not performance-sensitive(maybe no JS engine has really thought of improving it’s performance), but this is not a performance bottleneck though.

If like me you like trying new things, then maybe you should give the `”in” operator` a go and see how it works. I personally think it’s cool.

Questions/Comments? Please hit me up on [Twitter](https://twitter.com/kingisaac95).

_Happy coding, and more bliss!_
