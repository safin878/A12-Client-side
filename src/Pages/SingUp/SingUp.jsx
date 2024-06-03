import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import SocialLogin from "../../Componenents/SocialLogin/SocialLogin";

const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
    <span className="loading loading-bars loading-lg text-blue-500"></span>
  </div>
);

const SingUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();

  const { CreateUser, UpdateProfile, setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await CreateUser(data.email, data.password);
      const loggedUser = result.user;
      console.log(loggedUser);

      await UpdateProfile(data.name, data.photo);
      setUser({
        ...result?.user,
        photoURL: data.photo,
        displayName: data.name,
      });
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        photo: data.photo,
        role: "user",
      };
      const res = await axiosPublic.post("/users", userInfo);
      if (res.data.insertedId) {
        console.log("user added");
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign Up Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error during sign up", error);
      // Optionally show an error message with Swal or another method
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>BuildiFy || SingUp</title>
      </Helmet>

      {loading && <LoadingScreen />}

      <div className="p-6">
        <div>
          <section className=" min-h-screen flex items-center justify-center  ">
            {/* login container */}
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center  flex-row-reverse ">
              {/* form */}
              <div className="md:w-1/2 px-8 md:px-16">
                <h2 className="font-bold text-2xl text-[#ce9451]">
                  Sing Up Now!
                </h2>
                <p className="text-xs mt-4 text-[#002D74]">
                  If you are not a member, Please Sing Up
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  action=""
                  className="flex flex-col"
                >
                  <input
                    className="p-2 mt-8 rounded-xl border"
                    type="text"
                    name="name"
                    placeholder="Username"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span>Name is required</span>}
                  <input
                    className="mt-3 p-2  rounded-xl border"
                    type="email"
                    name="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span>Email is required</span>}
                  <div className="relative">
                    <input
                      className="mt-3 p-2 rounded-xl border w-full z-0 "
                      type="password"
                      name="password"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        // pattern:
                        //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/,
                      })}
                    />
                    {errors.password?.type === "required" && (
                      <p role="alert">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p role="alert">Minimum 6 is required</p>
                    )}
                    {/* {errors.password?.type === "pattern" && (
                    <p role="alert">pattern Not Matched</p>
                  )} */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="gray"
                      className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 z-20"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </div>

                  <input
                    className="p-2 mt-3  rounded-xl border"
                    type="text"
                    name="photo"
                    placeholder="PhotoURL"
                    {...register("photo", { required: true })}
                  />
                  {errors.photo && <span>Photo is required</span>}
                  <button className="bg-[#c08f57]  rounded-xl text-white py-2 hover:scale-105 duration-300 col-span-2 mt-3">
                    Sing Up
                  </button>
                </form>
                <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                  <hr className="border-gray-400" />
                  <p className="text-center text-sm">OR</p>
                  <hr className="border-gray-400" />
                </div>
                <SocialLogin name="Sing Up"></SocialLogin>
                <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                  <a href="#">Forgot your password?</a>
                </div>
                <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                  <p>Do you have an account?</p>
                  <Link to="/singIn">
                    {" "}
                    <button className="py-2 px-5   bg-[#aa865c] text-white border rounded-xl hover:scale-110 duration-300">
                      Sing In
                    </button>
                  </Link>
                </div>
              </div>
              {/* image */}
              <div className="md:block hidden w-1/2">
                <img
                  className="rounded-2xl"
                  src="https://i.postimg.cc/prNCP85N/Default-my-need-not-pinkis-yheme-my-need-minimalist-brownish-t-3.jpg"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SingUp;
