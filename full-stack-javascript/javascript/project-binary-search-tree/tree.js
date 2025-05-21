import { Node } from "./node.js";

const Tree = (array) => {
    let root = buildTree(array);
    
    function buildTree(array) {
        array.sort(compareNumbers); // Sort the array by comparing the number values
        array = [...new Set(array)]; // Remove the duplicates

        return buildTreeRecursive(array, 0, array.length - 1);
    };

    function buildTreeRecursive(array, start, end) {
        // Exit the recursion if at the end of branch
        if (start > end) return null;

        let mid = Math.floor((start + end) / 2);
        let rootNode = Node(array[mid]);

        rootNode.left = buildTreeRecursive(array, start, mid-1);
        rootNode.right = buildTreeRecursive(array, mid+1, end);

        return rootNode;
    }

    function compareNumbers(a, b) {
        return a - b;
    }

    function insertRecursive(value, currentNode) {
        if (currentNode === null) {
            return Node(value);
        }

        if (currentNode.data > value) {
            currentNode.left = insertRecursive(value, currentNode.left);
        } else if (currentNode.data < value) {
            currentNode.right = insertRecursive(value, currentNode.right);
        }
        // Implicitely doing nothing when the value already exists in the tree

        return currentNode;
    }

    const insert = (value) => {
        // Check if value does not already exists ?
        
        root = insertRecursive(value, root);
        return true;
    }

    function findSuccessor(currentNode) {
        currentNode = currentNode.right;
        while (currentNode !== null && currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    function deleteItemRecursive(value, currentNode) {
        if (currentNode === null) {
            console.log("Value does not exist in tree");
            return currentNode;
        }

        if (currentNode.data > value) {
            currentNode.left = deleteItemRecursive(value, currentNode.left);
        } else if (currentNode.data < value) {
            currentNode.right = deleteItemRecursive(value, currentNode.right);
        } else {
            // When node has not children or only right child
            if (currentNode.left === null) {
                return currentNode.right;
            }

            // When node has only left child
            if (currentNode.right === null) {
                return currentNode.left;
            }

            // When node has two children
            let successor = findSuccessor(currentNode);
            currentNode.data = successor.data;
            currentNode.right = deleteItemRecursive(successor.data, currentNode.right);
        }

        return currentNode;
    }

    const deleteItem = (value) => {
        root = deleteItemRecursive(value, root);
        return true;
    }

    function findValueRecursive(value, currentNode) {
        if (!currentNode) {
            console.log("Value not found");
            return null
        }
        if (currentNode.data === value) {
            return currentNode;
        } else if (currentNode.data > value) {
            currentNode = findValueRecursive(value, currentNode.left);
        } else if (currentNode.data < value) {
            currentNode = findValueRecursive(value, currentNode.right)
        }
        
        return currentNode
    }

    const findValue = (value) => {
        let currentNode = root;
        return findValueRecursive(value, currentNode);
    }

    const levelOrder = (callback) => {
        let queue = [root];
        while (queue.length != 0) {
            let currentNode = queue.shift();
            
            callback(currentNode);

            if (currentNode.left) { 
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
    }

    function inOrderRecursive(currentNode, callback) {
        if (currentNode === null) {
            return;
        }

        inOrderRecursive(currentNode.left, callback);
        callback(currentNode);
        inOrderRecursive(currentNode.right, callback);
    }

    const inOrder = (callback) => {
        inOrderRecursive(root, callback);
    }

    function preOrderRecursive(currentNode, callback) {
        if (currentNode === null) {
            return;
        }

        callback(currentNode);
        preOrderRecursive(currentNode.left, callback);
        preOrderRecursive(currentNode.right, callback);
    }
    
    const preOrder = (callback) => {
        preOrderRecursive(root, callback);
    }

    function postOrderRecursive(currentNode, callback) {
        if (currentNode === null) {
            return;
        }

        postOrderRecursive(currentNode.left, callback);
        postOrderRecursive(currentNode.right, callback);
        callback(currentNode);
    }

    const postOrder = (callback) => {
        postOrderRecursive(root, callback);
    }

    function heightRecursive(node) {
        if (node === null) {
            return -1;
        }
    
        let leftHeight = -1;
        if (node.left) leftHeight = heightRecursive(node.left);
        let rightHeight = -1;
        if (node.right) rightHeight = heightRecursive(node.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    const height = (value) => {
        let node = findValue(value);
        return heightRecursive(node);
    }

    const depth = (value) => {
        return
    }

    const isBalanced = () => {
        return
    }

    const rebalance = () => {
        return
    }

    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };

    return { root, prettyPrint, insert, deleteItem, findValue, levelOrder, inOrder, preOrder, postOrder, height, depth, isBalanced, rebalance }
}



const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let testTree = Tree(testArray);
testTree.prettyPrint(testTree.root)

//testTree.postOrder(node => console.log(node.data));

console.log(testTree.height(8))