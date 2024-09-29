const path = require('path')

console.log("Normalize: "+path.normalize('/abc/def/..'))
console.log("Join: "+path.join('/abc','/def'))
console.log("Resolve: "+path.resolve('abc','def'))
console.log("Relative: "+path.relative('/abc/bar','/abc/def'))
console.log("Dirname: "+path.dirname('/abc/def.txt'))
console.log("Basename: "+path.basename('/abc/def.txt'))
console.log("Extreme: "+path.extname('/abc/def.txt'))
