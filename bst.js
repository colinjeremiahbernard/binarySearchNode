var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return Node;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (data) {
        var newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    BinarySearchTree.prototype.insertNode = function (node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    BinarySearchTree.prototype.inOrder = function (node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    };
    return BinarySearchTree;
}());
// Example usage
var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
// Display the tree using in-order traversal
bst.inOrder(bst.root);
