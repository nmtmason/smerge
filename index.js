module.exports = function smerge() {
  var target = {}
  var objs = Array.prototype.slice.call(arguments)
  for (var i = 0; i < objs.length; i += 1) {
    var obj = objs[i]
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        target[key] = obj[key]
      }
    }
  }
  return target
}

