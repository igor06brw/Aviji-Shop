export default function firebaseReducer(state = null, action) {
  switch (action.type) {
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
    case "LOGOUT":
      return action.currentUser
    default:
      return state
  }
}