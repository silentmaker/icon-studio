export function reducer (state, action) {
  switch (action.type) {
  case 'UPDATE_DESIGN':
    const payload = {}
    payload[action.key] = action.value
    return Object.assign({}, state, payload)
  default:
    return state
  }
}