var add = function(){
    console.log("Hello");
};

var mul = function(a,b){
    console.log(a());
    console.log(b);
};

var x= "ABC";

mul(add,x);