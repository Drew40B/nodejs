const _ = require('underscore');
console.log(_.range(5));

var os = require("os");
var hostname = os.hostname();
console.log(hostname);
console.log(os.arch());

console.log(os.platform());
console.log(os.type());

