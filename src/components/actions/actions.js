import { ADD_USER } from "./actionType";

import * as api from "../api";

export const addUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.addUser(userData);
    dispatch({ type: ADD_USER, payload: data });
  } catch (error) {
    /* eslint-disable */
    console.log(error.message);
  }
};
