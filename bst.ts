class TreeNode {
  data: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchNode {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(data: number): void {
    const newNode = new TreeNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode, newNode: TreeNode): void {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrder(node: TreeNode | null): void {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
}

// Example usage
const bsn = new BinarySearchNode();
bsn.insert(10);
bsn.insert(5);
bsn.insert(15);
bsn.insert(2);
bsn.insert(7);

// Display the tree using in-order traversal
bsn.inOrder(bsn.root);
