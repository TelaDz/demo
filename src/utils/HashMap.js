function each(arr, cb, context) {
  if (!(arr && cb)) {
    return
  }
  if (arr.forEach && arr.forEach === nativeForEach) {
    arr.forEach(cb, context)
  } else if (arr.length === +arr.length) {
    for (var i = 0, len = arr.length; i < len; i++) {
      cb.call(context, arr[i], i, arr)
    }
  } else {
    for (var key in arr) {
      if (arr.hasOwnProperty(key)) {
        cb.call(context, arr[key], key, arr)
      }
    }
  }
}

var objToString = Object.prototype.toString

function isArray(value) {
  if (Array.isArray) {
    return Array.isArray(value)
  }
  return objToString.call(value) === '[object Array]'
}

var HashMap = (function () {
  function HashMap(obj) {
    this.data = {}
    var isArr = isArray(obj)
    this.data = {}
    var thisMap = this
    obj instanceof HashMap ? obj.each(visit) : obj && each(obj, visit)
    function visit(value, key) {
      isArr ? thisMap.set(value, key) : thisMap.set(key, value)
    }
  }
  HashMap.prototype.get = function (key) {
    return this.data.hasOwnProperty(key) ? this.data[key] : null
  }
  HashMap.prototype.set = function (key, value) {
    return (this.data[key] = value)
  }
  HashMap.prototype.each = function (cb, context) {
    for (var key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        cb.call(context, this.data[key], key)
      }
    }
  }
  HashMap.prototype.keys = function () {
    return keys(this.data)
  }
  HashMap.prototype.removeKey = function (key) {
    delete this.data[key]
  }
  return HashMap
})()
