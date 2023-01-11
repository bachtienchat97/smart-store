import React, { useRef } from 'react'
import httpClient from 'configAxios';

import { useStore, actions } from 'store';
import { SMART_STORE_USERNAME } from 'constants';
import { LoginForm, RegisterForm } from 'components/user'

export default function Login() {
  const [ state, dispatch ] = useStore();
  const usernameRef = useRef();

  const login = async (userInfor) => {
    const response = await httpClient.post("login", userInfor);
    if(response.status === 200) {
      await dispatch(actions.submitInfoUser(response.data));
      localStorage.setItem(SMART_STORE_USERNAME, JSON.stringify([response.data]));
    }
  }

  return (
    <div className="content">
     <LoginForm login={login}/>
     <RegisterForm usernameRef={usernameRef} />
      <div className="clear" />
    </div>
  )
}
