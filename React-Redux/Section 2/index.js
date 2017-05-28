// STORE
var store = Redux.createStore(combineReducer);

// Render
var valueElement = document.getElementById('value');
var total = document.getElementById('total');

function render() {
    var state = store.getState();
    valueElement.innerHTML = state.count;
    total.innerHTML = state.sum;
};
render();
store.subscribe(render);

// On click handlers
document.getElementById('decrement')
    .addEventListener('click', function () {
        store.dispatch(decrement());
    });

document.getElementById('incrementAsync')
    .addEventListener('click', function () {
        store.dispatch(increment());
    });

document.getElementById('sum')
    .addEventListener('click', function () {
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;
        store.dispatch(getSum(a, b));
    });