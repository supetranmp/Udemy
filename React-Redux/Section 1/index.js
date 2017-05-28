// STORE
var store = Redux.createStore(combineReducer);

// Render
function render() {
    var state = store.getState();

    var valueElement = document.getElementById('value');
    valueElement.innerHTML = state.count;
    
    var total = document.getElementById('total');
    total.innerHTML = state.sum;
};

store.subscribe(render);
render();