# smerge

Simple object merge.

## Example

    var smerge = require('smerge')

    var o1 = { a: 'one', b: 'two' }
    var o2 = { b: 'deux', c: 'trois' }
    var o3 = { c: 'zwei', d: 'drei' }

    var result = smerge(o1, o2, o3)
    // { a: 'one', b: 'deux', c: 'zwei', d: 'drei' }

