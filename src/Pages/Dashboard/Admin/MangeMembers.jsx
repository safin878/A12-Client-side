import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import SectionTitle from "./../../../Componenents/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
const MangeMembers = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: members = [] } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const response = await axiosSecure.get("/members");

      return response.data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async ({ email }) => {
      const { data } = await axiosSecure.patch(`/users/update/${email}`, {
        role: "user",
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["members"]);
    },
  });

  const removeHandler = async (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await mutateAsync({ email });
        } catch (error) {
          console.error("Failed to update role", error);
        }

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle Heading="Manage Members"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {members.map((member, index) => (
              <tr key={member._id}>
                <th>{index + 1}</th>
                <td>{member?.name}</td>
                <td>{member.email}</td>
                <td
                  onClick={() => removeHandler(member.email)}
                  className="btn my-2 bg-red-500 text-white hover:bg-red-700"
                >
                  Remove Role
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MangeMembers;
