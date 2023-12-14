const Node = require("./node.js");

class LinkedList {
    constructor() {
        this.listHead = null; 
    }

    prepend(value){
        let newNode = new Node(value);
        if (this.listHead == null){
            this.listHead = newNode; 
        } else {
            let temp = this.listHead; 
            this.listHead = newNode;
            this.listHead.nextNode = temp;
        }
    }

    append(value){
        let newNode = new Node(value); 
        if (this.listHead == null){ 
            this.listHead = newNode; 
        } else {
            let currentNode = this.listHead; 
            while (currentNode.nextNode != null){
                currentNode = currentNode.nextNode; 
            }
            currentNode.nextNode = newNode;
        }

    }

    size() {
        let temp = this.listHead; 
        let counter = 0;
        while (temp != null) {
            temp = temp.nextNode; 
            counter++;
        }
        return counter;
    }

    head() {
        return this.listHead
    }
    
    tail() {
        let currentNode = this.listHead; 
        while (currentNode.nextNode != null){
            currentNode = currentNode.nextNode
        }
        return currentNode;
    }

    at(index) { 
        let current = this.listHead; 
        for (let i = 0; i < index; i++) {
            if (current.nextNode == null) {
                return 'index out of bounds'
            }
            current = current.nextNode
        }

        return current;
    }

    pop() {
        let currentNode = this.listHead;
        let prevNode = null;
        while (currentNode.nextNode != null) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode; 
        }

        prevNode.nextNode = null;
    }
    
    contains(value) {
        let currentNode = this.listHead; 

        while (currentNode.nextNode != null) {
            if (currentNode.value === value) {
                return true
            } else {
                currentNode = currentNode.nextNode; 
            }
        }

        if (currentNode.nextNode == null && currentNode.value === value) {
            return true
        } else {
            return false
        }

    }

    find(value) {
        let currentNode = this.listHead;
        let counter = 0;
        while (currentNode.nextNode != null) { 
            if (currentNode.value === value) {
                return counter
            } else {
                counter++;
                currentNode = currentNode.nextNode;
               }
            }

        if (currentNode.nextNode == null && currentNode.value === value) {
            return true
        }
        
        return 'not in list';
    }

    toString() {
        let currentNode = this.listHead; 
        let stringList = ""; 

        while (currentNode.nextNode != null){ 
            stringList += `${currentNode.value} -> `;
            currentNode = currentNode.nextNode;
        }

        return stringList+= 'null';
    }

    insertAt(value, index) {
        const newNode = new Node(value); 
        let cur = this.listHead;
        let prev = null;

        
        for (let i = 0; i < index; i++){
            prev = cur;
            cur = cur.nextNode; 
        }

        newNode.nextNode = cur;

        if (prev == null){
            this.listHead = newNode; 
        } else {
            prev.nextNode = newNode;
        }

    }

    removeAt(index){
        if (this.listHead == null) {
            return 'empty list'
        }

        if (index === 0) {
            this.listHead = this.listHead.nextNode;
            return
        }

        let cur = this.listHead; 
        let prev = null; 


        for (let i=0; i<index; i++){
            prev = cur; 
            cur = cur.nextNode; 
            if (cur == null) {
                return 'out of bounds'
            }
        }

        prev.nextNode = cur.nextNode; 

    }

 
}

module.exports = LinkedList
