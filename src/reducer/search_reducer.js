import { SEARCH } from "../components/actions/actionType";
/* eslint-disable */
export default (users = [{tool:"hammer",state:"Rajputana",city:"jaipur"}], action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return users;
  }
};
