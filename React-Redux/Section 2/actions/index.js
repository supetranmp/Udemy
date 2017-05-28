var decrement = function() {
    var action = { type: 'DECREMENT' };
    return action;
}

var increment = function() {
    var action = { type: 'INCREMENT' };
    return action;
}


var getSum = function(a, b) {
    var action = { 
        type: 'SUM',
        a: a,
        b: b 
    };
    return action;
}
