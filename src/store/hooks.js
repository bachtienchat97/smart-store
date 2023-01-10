import { useContext } from 'react';
import { UserContext } from 'context/UserContext';

export const useStore = () => {
  const [ state, dispatch ] = useContext(UserContext);
  
  return [ state, dispatch ]
}