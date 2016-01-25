pathjoin
========
**(c)[Bumblehead][0], 2014,2015,2016** [MIT-license](#license)

join posix-style paths.

```javascript
pathjoin('/duck', '/duck');
// '/duck/duck'

pathjoin('/duck', '/duck', '/duck', '/duck');
// '/duck/duck/duck/duck'

pathjoin('duck', 'duck');
// 'duck/duck'

pathjoin('duck', '')
// 'duck/'

pathjoin('', 'duck')
// '/duck'

pathjoin('http://mydomain', 'path/to/file.js')
// 'http://mydomain/path/to/file.js'

pathjoin('/duck/duck/', '.././goose')
// '/duck/goose'
```

'pathjoin' is fine for general use-cases. If you need something bigger and more comprehensive I recommend these: [node-posix-path][1], [node-path][2].

[0]: http://www.bumblehead.com                            "bumblehead"
[1]: https://github.com/jden/node-path-posix "node-posix-path"
[2]: https://github.com/jinder/path "node-path"
[7]: https://raw.githubusercontent.com/iambumblehead/es5classic/master/es5classic_120x120.png

![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png)[![es5 classic][7]][7] 

(The MIT License)

Copyright (c) 2014 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
