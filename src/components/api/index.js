import axios from "axios";

const url = "https://tools-on-rent.herokuapp.com/users/addUsers";

export const addUser = (data) => axios.post(url, data);
