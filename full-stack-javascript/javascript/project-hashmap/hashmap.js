export function HashMap() {
    let capacity = 16;
    let loadFactor = 0.75;
    let size = 0;

    let buckets = new Array(capacity);

    const hash = (key) => {
        let hashCode = 0;
        
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }

        return hashCode;
    }

    const length = () => {
        return size;
    }

    const set = (key, value) => {
        if (length() >= capacity * loadFactor) {
            doubleCapacity();
        };

        let bucketNumber = hash(key);

        if (!buckets[bucketNumber]) {
            buckets[bucketNumber] = {};

        }

        if (!(key in buckets[bucketNumber])) {
            size++;
        }
        buckets[bucketNumber][key] = value;

    }

    const get = (key) => {
        let bucketNumber = hash(key);
        if (buckets[bucketNumber] && buckets[bucketNumber][key]) {
            return buckets[bucketNumber][key]
        }
        return null
    }

    const has = (key) => {
        let bucketNumber = hash(key);
        if (buckets[bucketNumber] && buckets[bucketNumber][key]) {
            return true
        }
        return false
    }

    const remove = (key) => {
        let bucketNumber = hash(key);
        if (buckets[bucketNumber] && buckets[bucketNumber][key]) {
            delete buckets[bucketNumber][key];
            size--;
            if (Object.keys(buckets[bucketNumber]).length == 0) {
                delete buckets[bucketNumber];
            }
            return true
        }
        return false
    }

    const clear = () => {
        buckets = new Array(capacity);
        size = 0;
    }

    const keys = () => {
        let allKeys = [];
        for (let i = 0; i < capacity; i++) {
            if (buckets[i]) {
                allKeys.push(...Object.keys(buckets[i]));
            }
        }
        return allKeys;
    }

    const values = () => {
        let allValues = [];
        for (let i = 0; i < capacity; i++) {
            if (buckets[i]) {
                allValues.push(...Object.values(buckets[i]))
            }
        }
        return allValues;
    }

    const entries = () => {
        let allEntries = [];
        for (let i = 0; i < capacity; i++) {
            if (buckets[i]) {
                allEntries.push(...Object.entries(buckets[i]))
            }
        }
        return allEntries;
    }

    const doubleCapacity = () => {
        let allEntries = entries();
        capacity *= 2;
        clear();

        for (const [key, value] of allEntries) {
            set(key, value);
        };

    }

    const getCapacity = () => {
        return capacity;
    }
    

    return { hash, set, get, has, remove, length, clear, keys, values, entries, getCapacity}

}
