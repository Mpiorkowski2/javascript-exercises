const leapYears = function(strt) {
if (strt % 400 === 0){
    return true;
}
else if(strt % 100 === 0){
    return false;
}
else if(strt % 4 === 0){
    return true;
}
else{
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
