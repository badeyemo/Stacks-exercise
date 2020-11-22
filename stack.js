class DoublyNode {
    constructor (val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyStack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        this.size++;
        let newNode = new DoublyNode(value);
        if(this.first) {
            let currentFirst = this.first;
            this.first= newNode;
            newNode.next = currentFirst;
            currentFirst.prev = this.first;
        } else{
            this.first = newNode;
            this.last = newNode;
        }
        return this.size;
    }
    pop() {
        this.size--;
        if(this.first) {
            let firstItem = this.first;
            this.first = this.first.next;
            this.first.prev = null;
            return firstItem.value;
        }
        return null;
    }
    peek() {
        return this.first ? this.first.value : undefined;
    }
    print () {
        if(this.size) {
            let currentItem = this.first;
            while(currentItem !== null) {
                console.log(currentItem.value);
                currentItem = currentItem.next;
            }
        } 
    }
} 
 1  index.html 
@@ -18,6 +18,7 @@
  <script>mocha.setup('bdd')</script>
  <script src="./stack.spec.js"></script>
  <script src="./stack.js"></script>
  <script src="./doublyLinkedStack.js"></script>
  <script>
    mocha.checkLeaks();
    mocha.run();
 48  stack.js 
@@ -0,0 +1,48 @@
class Node {
    constructor (val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        this.size++;
        let newNode = new Node(value);
        if(this.first) {
            let currentFirst = this.first;
            this.first= newNode;
            newNode.next = currentFirst;
        }else {
            this.first = newNode;
            this.last = newNode;
        }
        return this.size;
    }
    pop() {
        this.size--;
        if(this.first) {
            let firstItem = this.first;
            this.first = this.first.next;
            return firstItem.value;
        }
        return null;
    }
    peek() {
        return this.first ? this.first.value : undefined;
    }
    print () {
        if(this.size) {
            let currentItem = this.first;
            while(currentItem !== null) {
                console.log(currentItem.value);
                currentItem = currentItem.next;
            }
        } 
    }
} 
