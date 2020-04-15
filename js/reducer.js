let state = { count: 0 }

const changeState = (state, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 }
    case 'DECREASE_COUNT':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const render = () => document.body.textContent = state.count

const dispatch = (action) => {
  state = changeState(state, action)
  render()
}


dispatch({ type: 'INCREASE_COUNT' })
dispatch({ type: 'INCREASE_COUNT' })
dispatch({ type: 'INCREASE_COUNT' })

dispatch({ type: 'DECREASE_COUNT' })
