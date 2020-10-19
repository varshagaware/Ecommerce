exports.isprime = function(number)
{
    
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
       
    }
    return true;
}
exports.calFact = function (num) {
    var fact = 1;
    for (var i = num; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}
exports.isPerfect = function (no) {
    var temp = no;
    var sum = 0;
 
   for (var k = 1; k <=(no/2); k++) {
       if (no % k == 0) {
           sum = sum + k;
       }
    }
    if (temp == sum) {
        return true;
    }
    else {
        return false;
    }
}