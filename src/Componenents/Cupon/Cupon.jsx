import SectionTitle from "./../SectionTitle/SectionTitle";

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Cupon = () => {
  const axiosSecure = useAxiosSecure();

  const { data: coupons = [] } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const response = await axiosSecure.get("/coupons");

      return response.data;
    },
  });

  console.log(coupons);

  return (
    <div>
      <SectionTitle Heading="New Coupons"></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {coupons.map((coupon) => (
          <SwiperSlide key={coupon._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  {coupon.discountPercentage}% Coupon Code
                </h2>
                {coupon.couponDescription}
                <div className="card-actions ">
                  <label className="swap swap-flip w-full  ">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="hidden" />

                    <div className="swap-on w-full">
                      <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                        {coupon.couponCode}
                      </p>
                    </div>
                    <div className="swap-off w-full">
                      <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                        Show Code
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cupon;
