import { createContext,useReducer } from "react";
import reducer, { initState } from 'store/reducer';

const UserContext = createContext();

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      { children }
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };