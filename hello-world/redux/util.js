export const forEachValue = function (obj, fn) {
  Object.keys(obj).forEach((key, index) => fn(key, index))
}

export const getParentModule = (path, rootModule) => {
  return path.reduce((module, key) => module._children[key], rootModule)
}
