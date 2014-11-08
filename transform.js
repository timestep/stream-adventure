(function () {
  var through = require('through');
  
  var write = function (buf) {
    var x = buf.toString().toUpperCase();
    this.queue(x);
  }
  var end = function () {
    this.queue(null);
  }
  
  var tr = through(write,end);

  process.stdin.pipe(tr).pipe(process.stdout);

})();