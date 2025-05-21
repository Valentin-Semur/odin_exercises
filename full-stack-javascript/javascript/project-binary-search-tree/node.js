export const Node = (initialData) => {
    return { data: initialData, left: null, right: null };
};

/*
Here I am using direct access for the attributes of my Node.
It is fine since the Node is not a complex data structure, however it lacks encapsulation and validation/logic.
It is common to use this for such a simple data structure, it keeps the code lean.

However, a very good way to do it as well, even though it add more verbose would be:

export const Node = (initialData) => {
    let _data = initialData;
    let _left = null;
    let _right = null;

    return {
        get data() { return _data; },
        set data(newData) {
            // console.log('Setting data to:', newData); // Example: add logic
            _data = newData;
        },
        get left() { return _left; },
        set left(node) {
            if (node !== null && !(typeof node === 'object' && 'data' in node && 'left' in node && 'right' in node)) {
                console.warn("Attempting to set 'left' with a non-Node object.");
                throw new Error("Left child must be a Node object or null.");
            }
            _left = node;
        },
        get right() { return _right; },
        set right(node) {
            if (node !== null && !(typeof node === 'object' && 'data' in node && 'left' in node && 'right' in node)) {
                console.warn("Attempting to set 'right' with a non-Node object.");
                throw new Error("Left child must be a Node object or null.");
            }
            _right = node;
        }
    };
};

*/