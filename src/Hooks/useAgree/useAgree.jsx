import { useQuery } from "@tanstack/react-query";

import useAuth from "./../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAgree = () => {
  const axiosSecure = useAxiosSecure();
  const { User } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", User?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts/${User.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useAgree;
