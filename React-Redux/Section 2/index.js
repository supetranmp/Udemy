// Middleware
const logger = function(store) {
    return function(next) {
        return function(action) {
            console.group('logger');
            console.log('currentState == ', store.getState());
            console.log('next(action) // action == ', action);
            next(action);
            console.log('currentState == ', store.getState());            
            console.groupEnd('logger');
        }
    }
};

const exceptionHandler = function(store) {
    return function(next) {
        return function(action) {
            try {
                next(action);
            }
            catch(err) {
                console.group('errorHandler');
                console.error('An error occured while executing action ==', action);
                console.error(err);
                console.groupEnd('errorHandler');
            }
        }
    }
};

// Store
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, exceptionHandler));

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