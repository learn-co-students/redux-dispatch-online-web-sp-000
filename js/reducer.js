let state = {count: 0};
 
function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state; //state equal to object
    }
  }

function render(){ //render function that changes our html to display on page
    document.body.textContent = state.count
  }
 
function dispatch(action){ //define reducer in new function 
  state = changeState(state, action) 
  render()
}

render() //call the render function
 
dispatch({type: 'INCREASE_COUNT'}) //call dispatch function and pass through our action, passes object to reducer 
  // => {count: 1}
dispatch({type: 'INCREASE_COUNT'}) //return value contains count equal to the previous state (1 +1)
  // => {count: 2}
dispatch({type: 'INCREASE_COUNT'})
  // => {count: 3}