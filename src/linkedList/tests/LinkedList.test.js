const LinkedList = require('../LinkedList')

test('Find value', () => {
  const l = new LinkedList()
  l.push(42)
  l.push(55)
  l.push(99)
  const n = l.find(55)
  expect(n).not.toBeNull()
  expect(n.value).toBe(55)
  expect(n.next).not.toBeNull()
  expect(n.next.value).toStrictEqual(99)
})

test('Find value does not exist', () => {
  const l = new LinkedList()
  l.push(42)
  l.push(55)
  l.push(99)
  expect(l.find(43)).toBeNull()
})

test('Iterator to Array', () => {
  const l = new LinkedList()
  l.push(42)
  l.push(55)
  l.push(99)

  const results = [42, 55, 99]
  let count = 0

  for (const v of l) {
    expect(v).toStrictEqual(results.shift())
    count++
  }

  expect(count).toStrictEqual(3)
})

test('Array from LinkedList', () => {
  const l = new LinkedList()
  l.push(42)
  l.push(55)
  l.push(99)

  expect(Array.from(l)).toStrictEqual([42, 55, 99])
})

test('LinkedList unshift', () => {
  const l = new LinkedList()
  l.push(42)
  l.push(55)
  l.push(99)

  l.unshift(33)

  expect(Array.from(l)).toStrictEqual([33, 42, 55, 99])
})

test('remove item from list', () => {
  const l = new LinkedList()
  l.push(42)
  l.push(55)
  l.push(99)

  l.remove(55)

  expect(Array.from(l)).toStrictEqual([42, 99])
})

test('remove null from list', () => {
  const l = new LinkedList()
  l.push(42)
  l.push(55)
  l.push(99)

  l.remove(null)

  expect(Array.from(l)).toStrictEqual([42, 55, 99])
})

test('remove non-existing item from list', () => {
  const l = new LinkedList()
  l.push(42)
  l.push(55)
  l.push(99)

  l.remove(88)

  expect(Array.from(l)).toStrictEqual([42, 55, 99])
})
