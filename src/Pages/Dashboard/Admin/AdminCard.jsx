import { useQuery } from "@tanstack/react-query";
import { FaUserCheck, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { RiCommunityLine } from "react-icons/ri";

const AdminCard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const { data: members = [] } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axiosSecure.get("/members");
      return res.data;
    },
  });
  const { data: agreements = [] } = useQuery({
    queryKey: ["agreement"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agreements");
      return res.data;
    },
  });
  const { data: aparts = [] } = useQuery({
    queryKey: ["aparts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/apartmentsCount");
      return res.data;
    },
  });
  const aSum = (100 / 24) * 24 - agreements.length;
  const bSum = aparts.count - agreements.length;
  const sum = (agreements.length * 100) / 24;

  return (
    <div className="container mx-auto text-center my-6 mb-4">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-[#da9945] text-3xl ">
            <RiCommunityLine />
          </div>
          <div className="stat-title">Total Room</div>
          <div className="stat-value">{aparts?.count}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-[#da9945] text-3xl">
            <FaUsers></FaUsers>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{users.length}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-[#da9945] text-3xl">
            <RiCommunityLine />
          </div>
          <div className="stat-title">Available Room</div>
          <div className="stat-value">
            {bSum}
            <span className="text-[12px]">({aSum}%)</span>
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-[#da9945] text-3xl">
            <FaUserCheck />
          </div>
          <div>
            <div className="stat-title">Member</div>
            <div className="stat-value">{members.length}</div>
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-[#da9945] text-3xl">
            <RiCommunityLine />
          </div>
          <div>
            <div className="stat-title">Agreement Room</div>
            <div className="stat-value">
              {agreements.length} <span className="text-[12px]">({sum}%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
