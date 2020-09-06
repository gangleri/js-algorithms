const Queue = require('../Queue')

test('FIFO queue', () => {
  const q = new Queue()
  q.enqueue(1)
  q.enqueue(2)
  q.enqueue(3)

  let v = q.dequeue()
  expect(v).toStrictEqual(1)

  v = q.dequeue()
  expect(v).toStrictEqual(2)

  v = q.dequeue()
  expect(v).toStrictEqual(3)
})
