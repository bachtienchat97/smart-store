import { SUBMIT_INFO_USER,LOGOUT_USER } from 'constants';

export const submitInfoUser = payload => ({
  type: SUBMIT_INFO_USER,
  payload
}) 

export const logoutUser = payload => ({
  type: LOGOUT_USER,
  payload
}) 