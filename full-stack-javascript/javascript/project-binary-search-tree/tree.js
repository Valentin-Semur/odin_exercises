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

    return { root, prettyPrint }
}



const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let testTree = Tree(testArray);
testTree.prettyPrint(testTree.root)