function render(){
  document.body.textContent = state.count
}
 
function dispatch(action){
  state = changeState(state, action)
  render()
}