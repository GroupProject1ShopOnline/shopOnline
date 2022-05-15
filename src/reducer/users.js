import { ADD_USER } from "../components/actions/actionType";
/* eslint-disable */
export default (users = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...users, action.payload];
    default:
      return users;
  }
};
