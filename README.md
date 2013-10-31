mirrormirror
============
Send `console.log` logs to a simple server.


Installation
------------
* `nodemon app.js`


Usage
-----
* `curl 'http://localhost:7000?message=Yolo`
* Or from a `console.log` wrapper function in your JS:

```javascript
function log() {
    // `console.log` wrapper that prefixes log statements.
    var msg = Array.prototype.slice.call(arguments, 0).join(' ');
    new Image().src = 'http://localhost:7000/log?msg=' + msg;
    console.log(msg);
}
```
