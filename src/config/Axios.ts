import axios from "axios";
const Axios = axios.create({
  baseURL: `${import.meta.env.BE_URL}`,
});
export default Axios;
