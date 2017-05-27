// STORE
var store = Redux.createStore(counterReducer);

// REDUCER
function counterReducer(currentState, action) {
    var DEFAULT_STATE = {
        count: 0,
        sum: 0
    };
    var nextState = Object.assign({}, currentState);

    if (currentState === undefined) {
        nextState = DEFAULT_STATE;
        return nextState;
    }

    switch (action.type) {
        case 'DECREMENT':
            nextState.count = currentState.count - 1;
            break;
        case 'INCREMENT':
            nextState.count = currentState.count + 1;
            break;
        case 'SUM':
            nextState.sum = (parseInt(action.a) || 0) + (parseInt(action.b) || 0);
            break;
    }

    return nextState;
}

// Render
var valueElement = document.getElementById('value');
var total = document.getElementById('total');

function render() {
    var state = store.getState();
    valueElement.innerHTML = state.count;
    total.value = state.sum;
};
render();
store.subscribe(render);

// On click handlers
document.getElementById('decrement')
    .addEventListener('click', function () {
        var action = { type: 'DECREMENT' };
        store.dispatch(action);
    });

document.getElementById('incrementAsync')
    .addEventListener('click', function () {
        var action = { type: 'INCREMENT' }
        store.dispatch(action);
    });

document.getElementById('sum')
    .addEventListener('click', function () {
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;
        var action = { 
            type: 'SUM',
            a: a,
            b: b 
        };
        store.dispatch(action);
    });