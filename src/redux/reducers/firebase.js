export default function firebaseReducer(state = null, action) {
  switch (action.type) {
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      return action.currentUser
    default:
      return state
  }
}