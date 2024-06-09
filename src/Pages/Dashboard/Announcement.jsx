import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import SectionTitle from "./../../Componenents/SectionTitle/SectionTitle";
const Announcement = () => {
  const axiosSecure = useAxiosSecure();

  const { data: announcements = [] } = useQuery({
    queryKey: ["announcement"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/announcement`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle Heading="Announcement"></SectionTitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement, index) => {
              return (
                <tr key={announcement._id}>
                  <th>{index + 1}</th>
                  <td>{announcement?.title}</td>
                  <td>{announcement?.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Announcement;
