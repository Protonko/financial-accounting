import {isEqual} from '../isEqual'

describe('isEqual', () => {
  const emptyObject1 = {}
  const emptyObject2 = {}
  const object1 = {a: 1}
  const object2 = {b: 2}
  const object3 = {a: 1}
  const deepObject1 = {a: {b: 123}}
  const deepObject2 = {b: {c: {d: 'Test'}}}
  const deepObject3 = {a: {b: 123}}

  it('Objects should be equal', () => {
    expect(isEqual(emptyObject1, emptyObject2)).toBeTruthy()
    expect(isEqual(object1, object3)).toBeTruthy()
    expect(isEqual(deepObject1, deepObject3)).toBeTruthy()
    expect(isEqual(object1, object1)).toBeTruthy()
  })

  it('Object shouldn\'t be equal', () => {
    expect(isEqual(emptyObject1, object1)).not.toBeTruthy()
    expect(isEqual(deepObject1, deepObject2)).not.toBeTruthy()
    expect(isEqual(object1, object2)).not.toBeTruthy()
  })
})