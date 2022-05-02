const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    if (this.list) {
      let add = new ListNode(value);
      let head = this.list;

      while (head.next) {
        head = head.next;
      }

      head.next = add;
    } else {
      this.list = new ListNode(value);
    }
  }

  dequeue() {
    if (this.list) {
      let temp = this.list.value;
      this.list = this.list.next;
      return temp;
    }
    return null;
  }
}

// queue.enqueue(1); // adds the element to the queue
// queue.enqueue(3); // adds the element to the queue
// queue.dequeue(); // returns the top element from queue and deletes it, returns 1
// console.log(queue.getUnderlyingList()); // returns { value: 3, next: null }

module.exports = {
  Queue
};
