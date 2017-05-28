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