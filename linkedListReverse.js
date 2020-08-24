class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseList(firstElement) {
  let head = firstElement;
  let previous = null;
  let current = firstElement;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  head = previous;

  return head;
}

function printList(firstElement) {
  let current = firstElement;
  let list = [];

  while (current !== null) {
    list.push(current.data);
    current = current.next;
  }

  console.log(list);
}

let firstElement = new Node('A');
let secondElement = new Node('B');
let thirdElement = new Node('C');

firstElement.next = secondElement;
secondElement.next = thirdElement;

printList(reverseList(firstElement));

firstElement = new Node('A');
secondElement = new Node('B');
thirdElement = new Node('C');
let fourthElement = new Node('D');
let fifthElement = new Node('E');

firstElement.next = secondElement;
secondElement.next = thirdElement;
thirdElement.next = fourthElement;
fourthElement.next = fifthElement;

printList(reverseList(firstElement));
