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