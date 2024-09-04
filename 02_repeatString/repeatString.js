const repeatString = function(word,occ) {
    if(occ<0) return "ERROR";
    let s="";
    for(let i=0;i<occ;i++){
        s=word+s;
    }
    return s;
};

// Do not edit below this line
module.exports = repeatString;
