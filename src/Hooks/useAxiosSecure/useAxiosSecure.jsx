import axios from "axios";

const AxiosSecure = axios.create({
  baseURL: "https://buildify-server.vercel.app",
});

const useAxiosSecure = () => {
  return AxiosSecure;
};

export default useAxiosSecure;
