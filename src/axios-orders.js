import axios from "axios";

const instance = axios.create({
	baseURL: "https://react-my-burger-c67a2.firebaseio.com/",

});
export default instance;
