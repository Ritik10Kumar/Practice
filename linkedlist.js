class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Insert a node at the end
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Insert a node at the beginning
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    // Insert at a specific position
    insertAt(index, value) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) return this.prepend(value);
        if (index === this.size) return this.append(value);

        const newNode = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        newNode.next = prev.next;
        prev.next = newNode;
        this.size++;
    }

    // Remove from the beginning
    removeFirst() {
        if (!this.head) return null;
        const removedValue = this.head.value;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.size--;
        return removedValue;
    }

    // Remove from the end
    removeLast() {
        if (!this.head) return null;
        if (this.size === 1) {
            const removedValue = this.head.value;
            this.head = this.tail = null;
            this.size--;
            return removedValue;
        }
        let prev = this.head;
        while (prev.next !== this.tail) {
            prev = prev.next;
        }
        const removedValue = this.tail.value;
        prev.next = null;
        this.tail = prev;
        this.size--;
        return removedValue;
    }

    // Remove at a specific position
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) return this.removeFirst();
        if (index === this.size - 1) return this.removeLast();

        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        const removedValue = prev.next.value;
        prev.next = prev.next.next;
        this.size--;
        return removedValue;
    }

    // Search for a value
    search(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) return index; // we can also return current so we can get curent node in return insted of its index
            current = current.next;
            index++;
        }
        return -1;
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        this.tail = this.head;
        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    // Print the linked list
    print() {
        let current = this.head;
        let output = "";
        while (current) {
            output += `${current.value} -> `;
            current = current.next;
        }
        console.log(output + "null");
    }

    // Recursive Reverse
    reverseRecursive(node = this.head) {
        if (!node || !node.next) {
          this.head = node;
          return node;
        }
      
        let newHead = this.reverseRecursive(node.next);
        node.next.next = node;
        node.next = null;
        return newHead;
    }
      
}






//