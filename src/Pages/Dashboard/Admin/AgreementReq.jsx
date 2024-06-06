import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import SectionTitle from "../../../Componenents/SectionTitle/SectionTitle";

const AgreementReq = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: agreements = [] } = useQuery({
    queryKey: ["agreement"],
    queryFn: async () => {
      const response = await axiosSecure.get("/agreements");
      return response.data;
    },
  });

  const updateAgreementStatus = async ({ id, status }) => {
    await axiosSecure.patch(`/agreements/${id}`, { status });
  };

  const updateUserRole = async (email) => {
    await axiosSecure.patch(`/users/updates/${email}`, { role: "member" });
  };
  const mutation = useMutation({
    mutationFn: updateAgreementStatus,
    onError: (error) => {
      console.error("Mutation error:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["agreement"] });
    },
  });

  const handleAccept = async (agreement) => {
    // console.log("Accepting agreement:", agreement);
    try {
      await mutation.mutateAsync({ id: agreement._id, status: "checked" });
      console.log("Agreement accepted successfully.");
      await updateUserRole(agreement.email);
      console.log("User role updated successfully.");
    } catch (error) {
      console.error("Acceptance error:", error);
    }
  };

  const handleReject = async (id) => {
    // console.log("Rejecting agreement:", id);
    try {
      await mutation.mutateAsync({ id, status: "rejected" });
      console.log("Agreement rejected successfully.");
    } catch (error) {
      console.error("Rejection error:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-CA", options);
  };

  return (
    <div>
      <SectionTitle Heading="Request"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Floor No</th>
              <th>Block Name</th>
              <th>Room No</th>
              <th>Rent</th>
              <th>Request Date</th>
              <th>Reject</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
            {agreements.map((agreement, index) => (
              <tr key={agreement._id}>
                <th>{index + 1}</th>
                <td>{agreement.name}</td>
                <td>{agreement.email}</td>
                <td>{agreement.FloorNo}</td>
                <td>{agreement.BlockName}</td>
                <td>{agreement.ApartmentNo}</td>
                <td>{agreement.Rent}</td>
                <td>{formatDate(agreement.requestDate)}</td>

                {agreement.status === "rejected" ? (
                  <td>
                    <span className="bg-red-500 border-red-400 rounded text-white p-[2px]">
                      Checked
                    </span>
                  </td>
                ) : (
                  <td
                    className="text-[20px]   "
                    onClick={() => handleReject(agreement._id)}
                  >
                    <RxCross2 />
                  </td>
                )}

                {/* <td
                  className="text-[20px]  "
                  onClick={() => handleReject(agreement._id)}
                >
                  <RxCross2 />
                </td> */}

                {agreement.status === "checked" ? (
                  <td>
                    <span className="bg-green-500 border-green-400 rounded text-white p-[2px]">
                      Checked
                    </span>
                  </td>
                ) : (
                  <td
                    className="text-[20px]  "
                    onClick={() => handleAccept(agreement)}
                  >
                    <FaCheck />
                  </td>
                )}

                {/* <td
                  className="text-[20px] btn m-2 "
                  onClick={() => handleAccept(agreement)}
                >
                  <FaCheck />
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgreementReq;
