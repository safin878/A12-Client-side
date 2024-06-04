import SectionTitle from "./../SectionTitle/SectionTitle";

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Cupon = () => {
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
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions ">
                <label className="swap swap-flip w-full  ">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" className="hidden" />

                  <div className="swap-on w-full">
                    <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                      Show Code
                    </p>
                  </div>
                  <div className="swap-off w-full">
                    <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                      B-572
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions ">
                <label className="swap swap-flip w-full  ">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" className="hidden" />

                  <div className="swap-on w-full">
                    <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                      Show Code
                    </p>
                  </div>
                  <div className="swap-off w-full">
                    <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                      B-572
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions ">
                <label className="swap swap-flip w-full  ">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" className="hidden" />

                  <div className="swap-on w-full">
                    <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                      Show Code
                    </p>
                  </div>
                  <div className="swap-off w-full">
                    <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                      B-572
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions ">
                <label className="swap swap-flip w-full  ">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" className="hidden" />

                  <div className="swap-on w-full">
                    <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                      Show Code
                    </p>
                  </div>
                  <div className="swap-off w-full">
                    <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                      B-572
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions ">
                <label className="swap swap-flip w-full  ">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" className="hidden" />

                  <div className="swap-on w-full">
                    <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                      Show Code
                    </p>
                  </div>
                  <div className="swap-off w-full">
                    <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                      B-572
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions ">
                <label className="swap swap-flip w-full  ">
                  {/* this hidden checkbox controls the state */}
                  <input type="checkbox" className="hidden" />

                  <div className="swap-on w-full">
                    <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                      Show Code
                    </p>
                  </div>
                  <div className="swap-off w-full">
                    <p className="btn   w-full bg-[#9b872f] hover:bg-[#968434] border-none text-white">
                      B-572
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cupon;
