function HashMap() {
    let capacity = 16;
    let loadFactor = 0.75;

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
        return 0
    }

    const set = (key, value) => {
        if (length() > capacity * loadFactor) {
            return // Double the bucket capacity if they have reached their load factor 
        };

        let bucketNumber = hash(key);
        let keyValue = key;

        if (!buckets[bucketNumber]) {
            buckets[bucketNumber] = {};
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
            return true
        }
        return false
    }

    return { hash, set, get, has, remove}

}




newMap = HashMap();

newMap.set('apple', 'red');
newMap.set('banana', 'yellow');
newMap.set('carrot', 'orange');
newMap.set('dog', 'brown');
newMap.set('elephant', 'gray');

console.log(newMap.get("apple"))
console.log(newMap.remove("apple"))
console.log(newMap.get("apple"))

/* Use the following snippet whenever you access a bucket through an index. We want to throw an error if we try to access an out-of-bounds index:
if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bounds");
  }
*/