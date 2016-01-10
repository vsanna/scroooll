# readme
## how to use

scroooll.js is a simple JavaScript library to create button to scroll up easily.
**CARE! scroooll.js needs jquery**

```javascript

// if you don't care any DOM to scroll up
// scroooll.js create a new DOM(span.toTop) instead of you.
new $.scroool();
```

```javascript
// if you already have some DOM to scroll up
// pass some options to scroooll.js like this.
$.scroool({
  selector: 'span.upto', // the DOM you want to use.
  className: 'target',
  message: 'up to top',
  duration: 1000,
  top: 100,
});
```
