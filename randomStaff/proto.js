
//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.


Date.prototype.lastYear=function () {
    return this.getFullYear()-1;
}

console.log((new Date('1900-10-10')).lastYear())
//'1899'


Array.prototype.map = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i]+ '🗺';
    }
};

//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
console.log([1,2,3].map());
//1🗺, 2🗺, 3🗺