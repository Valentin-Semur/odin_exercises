const removeFromArrayBad = function(array, ...toRemove) {
    for (let i = 0; i < toRemove.length; i++) {
        let j = 0
        while (j < array.length) {
            if (array[j] === toRemove[i]) {
                array.splice(j, 1);
            } else j++
        };
    };
    return array;
};

const removeFromArrayGood = function(array, ...toRemove) {
    const newArray = [];
    array.forEach((item) => {
        if (!toRemove.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray
}

// Do not edit below this line
module.exports = removeFromArray;
