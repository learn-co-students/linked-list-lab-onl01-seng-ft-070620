// returns the name of the node passed through
function getName(node) {
  return node.name;
}

// returns the head node of a given list
function headNode(list, collection) {
  return collection[list];
}

// returns the following node each time it's called
function next(node, collection) {
  let next = node.next
  return collection[`${next}`];
}

// returns the node at a given index
function nodeAt(index, list, collection) {
  let currentNode = headNode(list, collection);
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection);
  }
  return currentNode;
}

// returns the index of a given node
function indexAt(node, collection, list){
  let currentNode = headNode(list, collection);
  let currentIndex = 0;

  while(currentNode != node){
    currentNode = next(currentNode, collection);
    currentIndex++;
  }
  return currentIndex;
}

// return the address of a given node
function addressAt(index, list, collection) {
  if (index === 0) {
    return list;
  } else {
    let node = nodeAt(index-1, list, collection);
    return node.next;
  }
}

// insert node at provided index while maintaining order
function insertNodeAt(index, newAddress, list, collection) {
  let prevNode = nodeAt(index-1, list, collection);
  let nextNode = nodeAt(index, list, collection);
  let nextNodeAddress = addressAt(nextNode, list, collection);

  prevNode.next = newAddress;
  let newNode = collection[newAddress];
  newNode.next = nextNodeAddress;
}

// delete the node at provided index while maintaining order
function deleteNodeAt(index, list, collection) {
  let prevNode;
  let currentNode = headNode(list, collection);
  for (let i = 0; i < index; i++) {
    prevNode = currentNode;
    currentNode = next(currentNode, collection);
  }
  prevNode.next = currentNode.next;
}