import Swal from "sweetalert2";
import SectionTitle from "../../../Componenents/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

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
            </tr>
          </thead>
          <tbody>
            {/* Placeholder rows */}
            {coupons.map((coupon, index) => (
              <tr key={coupon._id}>
                <th>{index + 1}</th>
                <td>{coupon.couponCode}</td>
                <td>{coupon.discountPercentage}</td>
                <td>{coupon.couponDescription}</td>
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
