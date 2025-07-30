function Node(val) {
  this.val = val;
  this.next = null;
}

function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

MyLinkedList.prototype.addAtHead = function (val) {
  // Create a new node
  let newNode = new Node(val);

  // New node is point to head
  newNode.next = this.head;

  // Head should point to new node
  this.head = newNode;

  // Increase the size of linked list
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;

    // reach the last element
    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (idx, val) {
  let newNode = new Node(val);

  if (idx < 0 || idx > this.size) return;
  if (idx == 0) {
    this.addAtHead(val);
    return;
  } else if (idx == this.size) {
    this.addAtTail(val);
    return;
  } else {
    let curr = this.head;
    for (let i = 0; i < idx - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.get = function (idx) {
  if (idx >= this.size || idx < 0) return -1;
  let curr = this.head;
  for (let i = 0; i < idx; i++) {
    curr = curr.next;
  }
  return curr.val;
};

MyLinkedList.prototype.deleteAtIndex = function (idx) {
  if (idx < 0 || idx >= this.size) return; // Corner case 1
  if (idx == 0) {
    this.head = this.head.next;
  } // Corner case 2
  let curr = this.head;
  for (let i = 0; i < idx - 1; i++) {
    curr = curr.next;
  }

  curr.next = curr.next.next;
  this.size--;
};
