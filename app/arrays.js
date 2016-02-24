exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf : function(arr, item) {
        var i = 0, 
            len = arr.length;

        for (i = len - 1; i >= 0; i--) {
            if(arr[i] === item){
                return i;
            }
        };
        return -1;
    },

    sum : function(arr) {
        var sum = 0;
        arr.map(function(item){
            sum += item;
        });
        return sum;
    },

    remove : function(arr, item) {
        var remArr = [];

        remArr = arr.filter(function(arrItem){
            return (arrItem !== item);
        });

        return remArr;
    },

    removeWithoutCopy : function(arr, item) {
        var i = 0, 
            len = arr.length;

        for (i = len - 1; i >= 0; i--) {
            if(arr[i] == item){
                arr.splice(i, 1);
            }
        };
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift(arr);
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var i = 0, count = 0,
            len = arr.length;

        for (i = len - 1; i >= 0; i--) {
            if(arr[i] === item){
                count ++;
            }
        };
        return count;
    },

    duplicates : function(arr) {
        var dupEntry = {},
            dupArr = [];

        arr = arr.filter(function(item){
            dupEntry[item] = (item in dupEntry ? (dupEntry[item] + 1) : 1);
            return dupEntry[item] === 1;
        });
        
        for(var item in dupEntry){
            if(dupEntry[item] > 1){
                dupArr.push(item * 1);
            }
        }
        return dupArr;
    },

    square : function(arr) {
        var i = 0, sqrArr = [],
            len = arr.length;

        for (i = len - 1; i >= 0; i--) {
            sqrArr.push(arr[i] * arr[i]);
        };
        return sqrArr.reverse();
    },

    findAllOccurrences : function(arr, target) {
        var i = 0, occArr = [],
            len = arr.length;

        for (i = len - 1; i >= 0; i--) {
            if(arr[i] === target)
                occArr.push(i);
        };
        return occArr;
    }
};