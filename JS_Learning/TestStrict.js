'use strict'

/*let producID = 12;
{
    let producID =2000;
}
console.log(producID);*/

/* var getPrice = ()=> 5.99;
console.log(typeof getPrice);*/

var getPrice = (count,tax)=> count * 4.00 * (1+tax);
console.log(getPrice(2,.07));