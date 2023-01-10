import { SUBMIT_INFO_USER,LOGOUT_USER } from "constants";

const initState = {
  users: [],
}

function reducer(state, action) { //state is initState : {users: []}, action : {payload,type}
  switch (action.type) {
    case SUBMIT_INFO_USER:
      return {
        ...state,
        users: action.payload
      }
    case LOGOUT_USER:
      return {
        ...state,
        users: action.payload
      }
    default:
      throw new Error('Invalid action');
  }
}

export { initState }
export default reducer