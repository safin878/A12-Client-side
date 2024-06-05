import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { User, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: role = " ", isLoading } = useQuery({
    queryKey: ["role", User?.email],
    enabled: !loading && !!User?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${User?.email}`);

      return data.role;
    },
  });

  return [role, isLoading];
};

export default useRole;
