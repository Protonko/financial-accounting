const isObject = (object: Record<string, any>) => object && typeof object === 'object'

export const isEqual = (obj1: Record<string, any>, obj2: Record<string, any>) => {
  if (obj1 === obj2) {
    return true
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (let key of keys1) {
    const value1 = obj1[key]
    const value2 = obj2[key]
    const bothObjects = isObject(value1) && isObject(value2)

    if (bothObjects && !isEqual(value1, value2) || (!bothObjects && value1 !== value2)) {
      return false
    }
  }

  return true
}