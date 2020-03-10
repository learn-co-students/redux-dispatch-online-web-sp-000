let state = {count: 0};

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action){
  state = changeState(state, action)
  return state
}

dispatch({type: 'INCREASE_COUNT'})
// => {count: 1}
dispatch({type: 'INCREASE_COUNT'})
// => {count: 2}
dispatch({type: 'INCREASE_COUNT'})
// => {count: 3}

/**

You declare your state to equal an object {count: 0}.
Then, define your reducer and your new function `dispatch`.

At the bottom, you call dispatch() and pass through your action, {type: 'INCREASE_COUNT'}.

Calling dispatch(), invokes your changeState reducer,
and passes the action object to the reducer.

When called, the changeState() reducer also takes in state, which has been declared up above.

state is assigned the return value of changeState.

Since the INCREASE_COUNT type was used, the returned value of changeState contains
a count equal to the previous state's count plus one.

Thus, your state is updated.

Each time dispatch is called, the current version of state is passed into changeState,
and then state is assigned a new value based on what changeState returns.

**/

let state = {count: 0};

function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
  state = changeState(state, action)
  return state
}

function render(){
  document.body.textContent = state.count
}

// call the render function
render()
