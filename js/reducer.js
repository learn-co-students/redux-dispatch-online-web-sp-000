let state = {count: 0}
let action = {}

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    case 'DECREASE_COUNT':
      return {count: state.count - 1}
    default:
      return state;
  }
}

changeState(state, action)

function dispatch(action) {
  state = changeState(state, action)
  render()
}

function render(){
  document.body.textContent = state.count
}

// call the render function
render()