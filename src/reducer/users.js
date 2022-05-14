import { ADD_USER } from "../components/actions/actionType";

export default (users = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...users, action.payload];
    default:
      return users;
  }
};
