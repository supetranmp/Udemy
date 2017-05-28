// Reducer
function count(currentState, action) {
    const DEFAULT_STATE = 0;
    var nextState;   
    
    if (currentState === undefined) {
        nextState = DEFAULT_STATE;
        return nextState;
    }

    switch (action.type) {
        case 'DECREMENT':
            nextState = currentState - 1;
            break;
        case 'INCREMENT':
            nextState = currentState + 1;
            break;
        default:
            nextState = currentState;
    }
    return nextState;
}

function sum(currentState, action) {
    const DEFAULT_STATE = 0;
    var nextState;

    if (currentState === undefined) {
        nextState = DEFAULT_STATE;
        return nextState;
    }
    
    switch (action.type) {
        case 'SUM':
            nextState = (parseInt(action.a) || 0) + (parseInt(action.b) || 0);        
            break;
        default:
            nextState = currentState;
    }
    return nextState;
}

function combineReducer(currentState, action) {
    var nextState = Object.assign({}, currentState);
    nextState = {
        count: count(nextState.count, action),
        sum: sum(nextState.sum, action)
    };

    return nextState;
}