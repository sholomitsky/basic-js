module.exports = function transform(arr) {
    transformedArr = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--discard-next') {
                i++;
            } else if (arr[i] == '--discard-prev') {
                if (transformedArr.length > 0) 
                    transformedArr.pop();
            } else if (arr[i] == '--double-next') {
                if (i < arr.length-1)
                    transformedArr.push(arr[i+1]);
            } else if (arr[i] == '--double-prev') {
                if (i > 0)
                    transformedArr.push(arr[i-1]);
            } else 
                transformedArr.push(arr[i]);
        }
        return transformedArr;
    } else
        throw new Error();
};
