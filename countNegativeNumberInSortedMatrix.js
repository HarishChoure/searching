//https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        count += grid[i].length - bs(grid[i]);
    }
    return count;
};

let bs = function(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (arr[mid] < 0) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};
