function getName(node) {
  return node.name
}

function headNode(list, collection) {
  return collection[list]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, list, collection) {
  let currentNode = headNode(list, collection)
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection)
  }
  return currentNode;
}

function addressAt(index, list, collection) {
  if (index === 0) {
    return list
  } else {
    const node = nodeAt(index - 1, list, collection)
    return node. next
  }
}

function indexAt(node, collection, list) {
  let currentNode = headNode
}

