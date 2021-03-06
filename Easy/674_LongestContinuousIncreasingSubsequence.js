/* 
https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/

给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。
连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，
如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，
那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。

示例 1：
输入：nums = [1,3,5,4,7]
输出：3
解释：最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。 

示例 2：
输入：nums = [2,2,2,2,2]
输出：1
解释：最长连续递增序列是 [2], 长度为1。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
{
    let findLengthOfLCIS = function(nums) {
        if (!nums || nums.length < 1) return null
        if (nums.length === 1) return 1
    
        let result = 1
        let sum = 1
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                sum += 1
            } else {
                result = Math.max(result, sum)
                sum = 1
            }
        }
    
        return Math.max(result, sum)
    };
}

// 每个（连续）增加的子序列是不相交的，
// 并且每当 nums[i-1]>=nums[i] 时，每个此类子序列的边界都会出现。
// 当它这样做时，它标志着在 nums[i] 处开始一个新的递增子序列，
// 我们将这样的 i 存储在变量 anchor 中。
var findLengthOfLCIS = function(nums) {
    if (!nums || nums.length < 1) return null
    if (nums.length === 1) return 1

    let result = 1
    let anchor = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) anchor = i
        result = Math.max(result, i - anchor + 1)
    }

    return result
}

console.log(findLengthOfLCIS([1,3,5,4,2,3,4,5]))