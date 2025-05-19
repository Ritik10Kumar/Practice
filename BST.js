class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BSTree{
    constructor(){
        this.root = null;
    }
    isTreeEmpty(){
        return this.root === null
    }

    makeTree(value){
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(root.value > newNode.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    searchNode(root,value){
        if(root ==null){
            return false
        }
        else if(root.value ===  value){
            return true
        }else if(root.value > value){
            return this.searchNode(root.left,value)
        }else{
            return this.searchNode(root.right,value)
        }
    }
   
    //Depth First Search Traversing have three methods mention below
    
    // Definition: Visit the Node first, then the Left subtree, and finally the Right subtree.
    // Order: Node → Left → Right
    preOrder(root ){
        if(root){
            // console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    // Definition: Visit the Left subtree, then the Node (root), and finally the Right subtree.
    // Order: Left → Node → Right
    inOrder(root){ 
        if(root){  
            this.inOrder(root.left)
            // console.log(root.value)
            this.inOrder(root.right)
        }
    }

    // Definition: Visit the Left subtree, then the Right subtree, and finally the Node itself.
    // Order: Left → Right → Node
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            // console.log(root.value)
        }
    }

    //Breadth First Search Traversing  

    // Definition: Breadth-First Search (BFS) is a tree traversal technique where we visit all the nodes level by level, from left to right on each level.
    bfsTraversing(){
        let queue =[]
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
            console.log(current.value)
        }
    }


    //Find Minimum value from tree
    minimumNode(root){
        if(!root.left){
            return root.value
        }else{
            return this.minimumNode(root.left)
        }
    }

    //Find Maximum value from tree
    maximumNode(root){
        if(!root.right){
            return root.value
        }else{
            return this.maximumNode(root.right)
        }
    }


    //Delete Node from Binary Tree Must follow Three cases

    // Case 1: Node has no children (Leaf Node)
    // Simply remove the node.

    // You can just set the parent's left/right pointer to null.
    // Example: Deleting 40
    //     30
    //     /
    //    40   ← delete this (leaf)

    // Case 2: Node has one child
    // Replace the node with its only child.

    // Example: Deleting 20 (has only right child 25)
    //     30
    //     /
    //    20
    //      \
    //       25   ← child replaces 20

    // After deletion:
    //     30
    //     /
    //    25
 
    // Case 3: Node has two children
    // This is the trickiest one!
    // You need to:
        // Find the inorder successor (smallest value in the right subtree) or
        // Find the inorder predecessor (largest value in the left subtree)

    // Replace the value of the node with that value.
    // Then delete that successor/predecessor node (which will fall into Case 1 or 2).

    // Example: Deleting 50
    //     50
    //     /  \
    //    30   70
    //        /
    //      60

    // Inorder successor of 50 is 60.
    // Replace 50 with 60, then delete 60.

    removeDate(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root ==null){
            return false
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value) 
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value) 
        }else{
            if(!root.left && !root.right){
                return null 
            }else if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            //if both nodes are present (left and right) then below scenerio will work
            root.value = this.minimumNode(root.right) // it will provide the minimum value of right side
            root.right = this.deleteNode(root.right,root.value)
        }
        return root;
    }


 
}

let BST = new BSTree()
BST.makeTree(20)
BST.makeTree(10)
BST.makeTree(5)
BST.makeTree(11)
BST.makeTree(30)
BST.makeTree(40)
BST.makeTree(23)

console.log(BST.searchNode(BST.root,11),'Output of Search Function')

BST.preOrder(BST.root)
BST.inOrder(BST.root)
BST.postOrder(BST.root)



console.log(BST.minimumNode(BST.root),"smallest value from tree")
console.log(BST.maximumNode(BST.root),"biggest value from tree")

BST.removeDate(5)

BST.bfsTraversing(BST.root)//need to check
console.log(BST.root,'complete tree structure') // complete tree structure


// teach about inorder predecessor and inorder successor during deletion of a node when it has both left and right nodes




let arr = [10, 20, 30, 40, 50];
let target = 40;

function findelelementbyBS(arr,findingelement){

    let start = 0
    let end = arr.length -1
    while(start <= end){
        let pivot = Math.floor((start + end) /2)
        if(arr[pivot] === findingelement){
            return pivot
        }else if(arr[pivot] < findingelement){
            start = pivot + 1
        }else{
            end = pivot -1
        }
    }
    return -1

  }
  
  console.log(findelelementbyBS(arr,target))



//   Peak Element in Mountain Array
arr = [1, 3, 5, 7, 6, 4, 2]
function findPeakElement(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] < arr[mid + 1]) {
        // You're in the **ascending** part of the mountain
        start = mid + 1;
      } else {
        // You're in the **descending** part of the mountain
        end = mid;
      }
    }
  
    // start === end → Peak element index
    return start;
  }
  

console.log(findPeakElement(arr))























// //CodeHelp

// class Node {
//     constructor(key) {
//         this.value = key;  // Value of the node
//         this.left = null;   // Left child
//         this.right = null;  // Right child
//     }
// }


// class BinarySearchTree {
//     constructor() {
//         this.root = null;  // Initialize the root of the tree as null
//     }

//     insert(key) {
//         if (this.root === null) {
//             this.root = new Node(key);  // If the tree is empty, create the root node
//         } else {
//             this._insertRecursive(this.root, key);  // Insert recursively
//         }
//     }

//     _insertRecursive(node, key) {
//         if (key < node.value) {
//             if (node.left === null) {
//                 node.left = new Node(key);  // Insert left
//             } else {
//                 this._insertRecursive(node.left, key);  // Recursively insert to the left
//             }
//         } else if (key > node.value) {
//             if (node.right === null) {
//                 node.right = new Node(key);  // Insert right
//             } else {
//                 this._insertRecursive(node.right, key);  // Recursively insert to the right
//             }
//         }
//     }

//     inorder() {
//         this._inorderRecursive(this.root);  // Start inorder traversal from the root
//     }

//     _inorderRecursive(node) {
//         if (node !== null) {
//             this._inorderRecursive(node.left);  // Visit left subtree
//             console.log(node.value);  // Visit node
//             this._inorderRecursive(node.right);  // Visit right subtree
//         }
//     }
// }


// // Test the BinarySearchTree class
// const bst = new BinarySearchTree();
// bst.insert(50);
// bst.insert(30);
// bst.insert(20);
// bst.insert(40);
// bst.insert(70);
// bst.insert(60);
// bst.insert(80);

// // Print the tree in inorder (sorted) order
// bst.inorder();  // Expected Output: 20 30 40 50 60 70 80
