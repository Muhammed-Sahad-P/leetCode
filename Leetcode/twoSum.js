//program to find sum of 2 numbers(index)

//? Input: nums = [2,7,11,15], target = 9
//? Output: [0,1]

function twoSum(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;i<nums.length;i++){
            if(nums[i]+nums[j]===target){
                return [i,j]
            }
        }
    }
    return []
}

console.log(twoSum([2,7,11,15],9))