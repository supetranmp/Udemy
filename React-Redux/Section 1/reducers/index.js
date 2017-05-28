function combineReducer(currentState, action) {
    var nextState = Object.assign({}, currentState);
    nextState = {
        count: count(nextState.count, action),
        sum: sum(nextState.sum, action)
    };

    return nextState;
}