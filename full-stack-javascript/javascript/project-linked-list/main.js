function createNode(value = null) {
    return {
        value: value,
        next: null,
    };
}

function createLinkedList() {
    var head = null;

    const append = (value) => {
        const newNode = createNode(value);
        if (!head) {
            head = newNode;
            return;
        }
        var current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    };
    
    const prepend = (value) => {
        const newNode = createNode(value);
        newNode.next = head;
        head = newNode;
    };

    // To change
    const toString = () => {
        console.log(head);
    }

    return { 
        append, prepend, toString,
    }
}



testList = createLinkedList();
testList.append("first");
testList.append("second");
testList.prepend("zero");
testList.toString();