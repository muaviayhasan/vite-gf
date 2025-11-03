import axios from "axios";
import { returnErrors } from "./errorAction";
import { tokenConfig } from "./authConfig";

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../constants/ActionTypes";

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  // axios
  //   .get(`${import.meta.env.VITE_API_URL}/auth/user`, tokenConfig(getState))
  //   .then(res =>
  //     dispatch({
  //       type: USER_LOADED,
  //       payload: res.data
  //     })
  //   )
  //   .catch(err => {
  //     dispatch(returnErrors(err.response.data, err.response.status));
  //     dispatch({
  //       type: AUTH_ERROR
  //     });
  //   });
};

// Login User
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post(`${import.meta.env.VITE_API_URL}/auth/login`, body, config)
    .then(res =>
     
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
     
    )
    .catch(err => {
      dispatch(
        returnErrors("Invalid Username or Password", err.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};
