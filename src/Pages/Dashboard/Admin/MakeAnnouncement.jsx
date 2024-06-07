import Swal from "sweetalert2";
import SectionTitle from "../../../Componenents/SectionTitle/SectionTitle";

import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();

  const handelAnnouncement = async (e) => {
    e.preventDefault();
    const announce = {
      title: e.target.title.value,
      description: e.target.description.value,
    };
    const res = await axiosSecure.post("/announcement", announce);
    if (res.data.acknowledged) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New Announcement Created",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
    }
  };

  return (
    <div>
      <SectionTitle Heading="Announcement"></SectionTitle>

      <div className="hero   ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold mb-4"></h1>
            <form onSubmit={handelAnnouncement} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#dbab43] text-white hover:bg-[#b18831]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
