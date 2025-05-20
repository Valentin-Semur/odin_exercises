function createNode(value = null) {
    return {
        value: value,
        next: null,
    }
}

function createLinkedList() {
    let listHead = null

    const append = (value) => {
        const newNode = createNode(value)
        if (!listHead) {
            listHead = newNode
            return
        }
        let current = listHead
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }
    
    const prepend = (value) => {
        const newNode = createNode(value)
        newNode.next = listHead
        listHead = newNode
    }

    const size = () => {
        // If the list is empty return 0
        if (!listHead) {
            return 0
        }

        let size = 0
        let current = listHead
        while (current) {
            size ++
            current = current.next
        }
        return size
    }

    const head = () => {
        return listHead
    }

    const tail = () => {
        if (!listHead) {
            return listHead
        }

        let current = listHead
        while (current.next) {
            current = current.next
        }
        return current
    }

    const at = (index) => {
        if (!listHead) {
            return listHead
        }

        let current = listHead
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current

    }

    const pop = () => {
        if (!listHead) {
            return
        }

        const lastIndex = size() - 1
        let current = listHead
        for (let i = 0; i < lastIndex - 1; i++) {
            current = current.next
        }
        current.next = null
        return
    }

    const contains = (value) => {
        if (!listHead) {
            return false
        }

        let current = listHead
        while (current) {
            if (current.value == value) {
                return true
            }
            current = current.next
        }
        return false
    }

    const find = (value) => {
        if (!listHead) {
            return null
        }

        let current = listHead
        let index = 0
        while (current) {
            if (current.value == value) {
                return index
            }
            current = current.next
            index++
        }
        return null
    }

    const toString = () => {
        let fullString = ""
        let current = listHead

        while (current) {
            fullString += `( ${current.value} ) -> `
            current = current.next
        }
        fullString += "null"

        return fullString
    }

    return { 
        append, prepend, size, head, tail, at, pop, contains, find, toString, 
    }
}



const list = createLinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())
