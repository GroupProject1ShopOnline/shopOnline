import { CITYNAME } from "../components/actions/actionType";
/* eslint-disable */
export default (users = [], action) => {
  switch (action.type) {
    case CITYNAME:
      return action.payload;
    default:
      return users;
  }
};