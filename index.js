// Oliver Kovacs 2021

// enables [<array>].sum()
Array.prototype.sum = function() {
    return this.reduce((acc, cur) => acc + cur);
}

const weigh = (a, b) => a.sum() > b.sum();

const heaviest = array => {
    if (array.length === 1) return 0;

    // array must have a lenght of (2^n)-1 where n is a positive integer
    if (!Number.isInteger(Math.log2(array.length + 1))) {
        return console.error(`ERR: invalid input array length ${array.length}`);
    }

    a = array.slice(0, array.length / 2);
    b = array.slice(array.length / 2 + 1);

    if (weigh(a, b)) {
        return heaviest(a);
    }
    if (weigh(b, a)) {
        return Math.ceil(array.length / 2) + heaviest(b);
    }
    return Math.floor(array.length / 2);
};

module.exports = heaviest;