// import { useQuery } from "@tanstack/react-query";
// import SectionTitle from "./../../../Componenents/SectionTitle/SectionTitle";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
// import useAuth from "../../../Hooks/useAuth/useAuth";

// const PaymentHistory = () => {
//   const axiosSecure = useAxiosSecure();
//   const { User } = useAuth();

//   const { data: history = [] } = useQuery({
//     queryKey: ["history"],
//     queryFn: async () => {
//       const response = await axiosSecure.get(`/history/${User?.email}`);
//       return response.data;
//     },
//   });
//   const formatDate = (dateString) => {
//     const options = { year: "numeric", month: "2-digit", day: "2-digit" };
//     return new Date(dateString).toLocaleDateString("en-CA", options);
//   };

//   return (
//     <div>
//       <SectionTitle Heading={"Payment History"}></SectionTitle>

//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th></th>
//               <th>Email</th>
//               <th>TransactionId</th>
//               <th>Pay Date</th>
//               <th>Month</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             {history.map((histor, index) => (
//               <tr key={histor._id}>
//                 <th>{index + 1}</th>
//                 <td>{histor?.email}</td>
//                 <td>{histor?.transactionId}</td>
//                 <td>{formatDate(histor.date)}</td>
//                 <td>{histor.month}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PaymentHistory;

import { useQuery } from "@tanstack/react-query";
import SectionTitle from "./../../../Componenents/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { User } = useAuth();
  const [month, setMonth] = useState("");

  const { data: history = [] } = useQuery({
    queryKey: ["history", month],
    queryFn: async () => {
      const response = await axiosSecure.get(`/history/${User?.email}`, {
        params: { month },
      });
      return response.data;
    },
  });

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-CA", options);
  };

  return (
    <div>
      <SectionTitle Heading={"Payment History"}></SectionTitle>
      <div>
        <input
          type="text"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          placeholder=" Month Name"
        />
        <button className="-mx-6 ">
          <FaSearch />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>TransactionId</th>
              <th>Pay Date</th>
              <th>Month</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {history.map((histor, index) => (
              <tr key={histor._id}>
                <th>{index + 1}</th>
                <td>{histor?.email}</td>
                <td>{histor?.transactionId}</td>
                <td>{formatDate(histor.date)}</td>
                <td>{histor.month}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
