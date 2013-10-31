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
* From [mozilla/fireplace](https://github.com/mozilla/fireplace):

```diff
diff --git a/hearth/media/js/log.js b/hearth/media/js/log.js
index 8488dfa..4a92d98 100644
--- a/hearth/media/js/log.js
+++ b/hearth/media/js/log.js
@@ -48,6 +48,9 @@ define('log', ['storage', 'utils'], function(storage, utils) {
                 // TODO: Add colorification support here for browsers that support it.
                 // *cough cough* not firefox *cough*

+                var msg = Array.prototype.slice.call(args, 0).join(' ');
+                new Image().src = 'http://localhost:7000/log?msg=' + msg;
+
                 console[log_level].apply(console, args);
             };
         }
diff --git a/yulelog/main.js b/yulelog/main.js
index 5c585ce..b50d5b8 100644
--- a/yulelog/main.js
+++ b/yulelog/main.js
@@ -2,13 +2,15 @@

     function log() {
         // `console.log` wrapper that prefixes log statements.
-        console.log('[yulelog]', Array.prototype.slice.call(arguments, 0).join(' '));
+        var msg = Array.prototype.slice.call(arguments, 0).join(' ');
+        new Image().src = 'http://localhost:7000/log?msg=' + msg;
+        console.log('[yulelog]', msg);
     }

     // No trailing slash, please.
     // Note: our Makefile swaps this out when you supply `DOMAIN`
     // when running `make log`.
-    var MKT_URL = 'https://marketplace.firefox.com';
+    var MKT_URL = 'http://localhost:8675';
     log('MKT_URL:', MKT_URL);

     var activitiesToSend = [];
```
