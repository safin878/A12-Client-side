import SectionTitle from "./../../../Componenents/SectionTitle/SectionTitle";
import useAgree from "../../../Hooks/useAgree/useAgree";
import { useContext } from "react";
import { MonthContext } from "../../../Provider/MonthProvider";
import { useNavigate } from "react-router-dom";

const MakePayment = () => {
  const [cart] = useAgree();
  const { setMonth } = useContext(MonthContext);
  const navigate = useNavigate();

  // const handleMonthChange = (e) => {
  //   const selectedMonth = e.target.value;
  //   setMonth(selectedMonth); // Set the selected month in the context
  // };

  const handelSubmit = (e) => {
    e.preventDefault();
    const month = e.target.month.value;
    console.log(month);
    setMonth(month);
    navigate("/dashboard/payment");
  };

  return (
    <div>
      <SectionTitle Heading="Pay Details"></SectionTitle>

      <div className="hero   ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold mb-4"></h1>
            <form
              onSubmit={handelSubmit}
              className="card-body grid grid-cols-2"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={cart[0]?.email}
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Floor</span>
                </label>
                <input
                  type="text"
                  defaultValue={cart[0]?.FloorNo}
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Block Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  defaultValue={cart[0]?.BlockName}
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Apartment No</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  defaultValue={cart[0]?.ApartmentNo}
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rent</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  defaultValue={cart[0]?.Rent}
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Month</span>
                </label>
                <select
                  name="month"
                  className="select select-success w-full max-w-xs"
                  // onChange={handleMonthChange}
                  required
                >
                  <option disabled selected>
                    Pick Your Rent of Month
                  </option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July </option>
                  <option>August </option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div className="form-control mt-6 col-span-2">
                <button className="btn bg-[#dbab43] text-white hover:bg-[#b18831] ">
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
