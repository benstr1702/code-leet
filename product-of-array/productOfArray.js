/**
 * @param {number[]} nums
 * @return {number[]}
 */

const calculatePrefix = (i , array) => {
    if (i === 0) return 1;
    let prefix = 1;
    for (let j = 0; j < i ; j++){
        prefix *= array[j];
       console.log({
        "j":j,
        "array[j]":array[j],
        "prefix":prefix
       }) 
        
    }
    return prefix
    
}

const calculateSuffix = (i , array) => {

    if (i === array.length - 1) return 1;
    let suffix = 1;
    for (let j = i + 1; j < array.length ; j ++  ) {
       suffix *= array[j]
        console.log({
        "j":j,
        "array[j]":array[j],
        "suffix":suffix
       })
    }
    return suffix;
}


const productExceptSelf = (nums) => {
    if (nums.length === 2) return [1,1] 
    const answer = []
    for (let i = 0 ; i < nums.length ; i++) {
       answer.push((calculatePrefix(i,nums)) * (calculateSuffix(i,nums))) 
    }
    return answer;

    
};


productExceptSelf(nums)