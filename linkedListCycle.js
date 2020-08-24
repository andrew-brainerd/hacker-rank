class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function containsCycle(element) {
  let next1 = element;
  let next2 = element;

  while (next2.next !== null && next2.next.next !== null) {
    next1 = next1.next;
    next2 = next2.next.next;

    if (next1 === next2) {
      return true;
    }
  }

  return false;
}

const firstElement = new Node('A');
const secondElement = new Node('B');
const thirdElement = new Node('C');
const fourthElement = new Node('D');

firstElement.next = secondElement;
secondElement.next = thirdElement;
thirdElement.next = fourthElement;
// fourthElement.next = secondElement;

console.log(containsCycle(firstElement));
