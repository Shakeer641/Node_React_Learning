function add(x,y){
    return x+y;
}
function Cumulativeaddition(x,y){
    return x*x+y*y;
}

var MyName = "SK";
/* Adding functions to other files */
module.exports = {
    add, Cumulativeaddition,
    MyName
}