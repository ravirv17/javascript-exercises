const reverseString = function(string) {
    let n="";
    for(let i=string.length-1;i>=0;i--){
        n+=string.charAt(i);
    }
    return n;
};

// Do not edit below this line
module.exports = reverseString;
