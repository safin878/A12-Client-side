import Swal from "sweetalert2";
import SectionTitle from "../../../Componenents/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const ManageCoupon = () => {
  const axiosSecure = useAxiosSecure();

  const { data: coupons = [], refetch } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const response = await axiosSecure.get("/coupons");
      return response.data;
    },
  });

  const handleAddCoupon = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Submit your coupon details",
      html:
        '<input id="coupon-code" class="swal2-input" placeholder="Coupon Code">' +
        '<input id="discount-percentage" class="swal2-input" placeholder="Discount Percentage">' +
        '<input id="coupon-description" class="swal2-input" placeholder="Coupon Description">',
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const couponCode = document.getElementById("coupon-code").value;
        const discountPercentage = document.getElementById(
          "discount-percentage"
        ).value;
        const couponDescription =
          document.getElementById("coupon-description").value;

        if (!couponCode || !discountPercentage || !couponDescription) {
          Swal.showValidationMessage("All fields are required");
          return false;
        }

        return { couponCode, discountPercentage, couponDescription };
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });

    if (formValues) {
      try {
        const response = await axiosSecure.post("/coupons", formValues);
        Swal.fire({
          title: "Coupon Submitted",
          html: `<p>Coupon Code: ${formValues.couponCode}</p>
                 <p>Discount Percentage: ${formValues.discountPercentage}%</p>
                 <p>Description: ${formValues.couponDescription}</p>`,
        });
        console.log(response);
        refetch();
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "There was an error submitting the coupon. Please try again.",
          icon: "error",
        });
      }
    }
  };

  const handlUpadate = async (coupon) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Coupon Details",
      html:
        `<input id="coupon-code" class="swal2-input" placeholder="Coupon Code" value="${coupon.couponCode}">` +
        `<input id="discount-percentage" class="swal2-input" placeholder="Discount Percentage" value="${coupon.discountPercentage}">` +
        `<input id="coupon-description" class="swal2-input" placeholder="Coupon Description" value="${coupon.couponDescription}">`,
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        const updatedCoupon = {
          couponCode: document.getElementById("coupon-code").value,
          discountPercentage: document.getElementById("discount-percentage")
            .value,
          couponDescription:
            document.getElementById("coupon-description").value,
        };

        try {
          const response = await axiosSecure.patch(
            `/coupons/${coupon._id}`,
            updatedCoupon
          );
          console.log(response);
          refetch(); // Refetch the coupons after successful update
          return true; // Proceed with the Swal action
        } catch (error) {
          console.error("Error updating coupon:", error);
          Swal.showValidationMessage(
            "Failed to update coupon. Please try again."
          );
          return false; // Prevent Swal from closing
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });

    if (formValues) {
      Swal.fire({
        title: "Coupon Updated",
        icon: "success",
      });
    }
  };

  const handleDelete = async (couponId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/coupons/${couponId}`);
          Swal.fire({
            title: "Deleted!",
            text: "Your coupon has been deleted.",
            icon: "success",
          });
          console.log(response);
          refetch(); // Refetch the coupons after successful deletion
        } catch (error) {
          console.error("Error deleting coupon:", error);
          Swal.fire({
            title: "Error",
            text: "There was an error deleting the coupon. Please try again.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle Heading="Manage Coupon"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Code</th>
              <th>Percentage</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder rows */}
            {coupons.map((coupon, index) => (
              <tr key={coupon._id}>
                <th>{index + 1}</th>
                <td>{coupon.couponCode}</td>
                <td>{coupon.discountPercentage}%</td>
                <td className="text-[11px]">{coupon.couponDescription}</td>
                <td onClick={() => handlUpadate(coupon)} className="text-2xl  ">
                  <FaRegEdit />{" "}
                </td>
                <td
                  onClick={() => handleDelete(coupon._id)}
                  className="text-2xl "
                >
                  <MdDeleteOutline />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center my-4 ">
        <button
          className="btn bg-[#d3963b] text-white hover:bg-[#b18831]"
          onClick={handleAddCoupon}
        >
          Add New Coupon
        </button>
      </div>
    </div>
  );
};

export default ManageCoupon;
