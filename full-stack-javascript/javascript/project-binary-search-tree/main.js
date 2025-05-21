import { Tree } from "./tree.js";

function createRandomArray(n, min, max) {
    const uniqueNumbers = new Set();

    while (uniqueNumbers.size < n) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        uniqueNumbers.add(randomNumber);
    }

    return Array.from(uniqueNumbers);
}


let testTree = Tree(createRandomArray(20, 0, 100));

console.log("Here is the tree that was created");
testTree.prettyPrint(testTree.getRoot());

console.log("This tree is balanced:");
console.log(testTree.isBalanced());

console.log("Here are the element in level order:");
let elementOrder = [];
testTree.levelOrder(node => elementOrder.push(node.data));
console.log(elementOrder);

console.log("Here are the element in pre order:");
elementOrder = [];
testTree.preOrder(node => elementOrder.push(node.data));
console.log(elementOrder);

console.log("Here are the element in post order:");
elementOrder = [];
testTree.postOrder(node => elementOrder.push(node.data));
console.log(elementOrder);

console.log("Here are the element in inorder:");
elementOrder = [];
testTree.inOrder(node => elementOrder.push(node.data));
console.log(elementOrder);

console.log("Now unbalancing the tree...")
testTree.insert(594);
testTree.insert(395);
testTree.insert(124);
testTree.insert(223);

console.log("Indeed now the balance is:");
console.log(testTree.isBalanced());
testTree.prettyPrint(testTree.getRoot());

console.log("Rebalancing the tree...")
testTree.rebalance();

console.log("Indeed now the balance is:")
console.log(testTree.isBalanced())
testTree.prettyPrint(testTree.getRoot());

console.log("Here are the element in level order:");
elementOrder = [];
testTree.levelOrder(node => elementOrder.push(node.data));
console.log(elementOrder);

console.log("Here are the element in pre order:");
elementOrder = [];
testTree.preOrder(node => elementOrder.push(node.data));
console.log(elementOrder);

console.log("Here are the element in post order:");
elementOrder = [];
testTree.postOrder(node => elementOrder.push(node.data));
console.log(elementOrder);

console.log("Here are the element in inorder:");
elementOrder = [];
testTree.inOrder(node => elementOrder.push(node.data));
console.log(elementOrder);