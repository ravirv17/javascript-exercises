const removeFromArray = function(array,...args) {
    let nArr= [];
    array.forEach((i)=>{
        if(!args.includes(i)){
            nArr.push(i);
        }
    });
    return nArr;
};

// Do not edit below this line
module.exports = removeFromArray;
