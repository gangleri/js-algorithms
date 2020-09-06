const LinkedListNode = require('./LinkedListNode')

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  unshift (value) {
    const nn = new LinkedListNode(value, this.head)
    this.head = nn

    if (!this.tail) {
      this.tail = nn
    }
  }

  push (value) {
    const nn = new LinkedListNode(value)

    if (!this.head) {
      this.head = nn
      this.tail = nn

      return this
    }

    this.tail.next = nn
    this.tail = nn

    return this
  }

  find (value) {
    let curr = this.head
    while (curr) {
      if (curr.value === value) {
        return curr
      }
      curr = curr.next
    }
    return null
  }

  remove (value) {
    if (!this.head || !value) {
      return this
    }
    if (this.head.value === value) {
      this.head = this.head.next
      return this
    }
    let curr = this.head
    while (curr) {
      if (curr?.next?.value === value) {
        curr.next = curr?.next?.next
        break
      }
      curr = curr.next
    }
    return this
  }

  * [Symbol.iterator] () {
    let curr = this.head
    while (curr) {
      yield curr.value
      curr = curr.next
    }
  }
}

module.exports = LinkedList
