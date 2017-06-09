function getName(node){
  return node['name']
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node, collection){
  const nextAddress = node['next']
  const nextNode = collection[nextAddress]
  return nextNode
}

function nodeAt(index, linkedList, collection){
  let node = headNode(linkedList, collection)
  for (let i = 0; i < index; i++){
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection){
  let address = linkedList
  for (let i = 0; i < index; i++){
    address = collection[address]['next']
  }
  return address
}

function indexAt(node, collection, linkedList){
  let n = headNode(linkedList, collection)
  let index = 0
  while (n != node){
    n = next(n, collection)
    index++
  }
  return index
}

function insertNodeAt(index, address, linkedList, collection){
  let previousNode = nodeAt(index-1, linkedList, collection)
  let newNode = collection[address]
  let nextNode = nodeAt(index, linkedList, collection)
  let addressForNextNode = previousNode.next
  previousNode.next = address
  newNode.next = addressForNextNode
}

function deleteNodeAt(index, linkedList, collection){
  let deletedNode = nodeAt(index, linkedList, collection)
  let previousNode = nodeAt(index-1, linkedList, collection)
  let nextProp = deletedNode.next
  previousNode.next = nextProp
}

// get next property of deleted node
  // set this as the next property of the previous node
