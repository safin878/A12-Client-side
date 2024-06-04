import useAxiosPublic from "./../../Hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ApartCard from "./ApartCard";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import "./../../App.css";
import SectionTitle from "../../Componenents/SectionTitle/SectionTitle";

const ApartConten = ({ name }) => {
  const axiosPublic = useAxiosPublic();
  const { count } = useLoaderData();
  const [itemPerPage, setItemPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfPages = Math.ceil(count / itemPerPage);

  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i + 1);
  }

  const handelItemChange = (e) => {
    const val = parseInt(e.target.value);
    setItemPerPage(val);
    setCurrentPage(1); // Reset to first page when items per page change
  };

  const handelPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handelNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const {
    data: aparts = [],
    refetch,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["apartments", currentPage, itemPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/apartments?page=${currentPage}&size=${itemPerPage}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  // Refetch data when currentPage or itemPerPage changes
  useEffect(() => {
    refetch();
  }, [currentPage, itemPerPage, refetch]);

  // Add loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading apartments.</div>;

  return (
    <>
      <SectionTitle Heading={name}></SectionTitle>
      <div className="container mx-auto md:grid md:grid-cols-3 grid gap-6">
        {aparts.map((apart) => (
          <ApartCard key={apart._id} apart={apart}></ApartCard>
        ))}
      </div>

      <div className="text-center my-10">
        <button onClick={handelPrevPage} className="btn m-2">
          Prev
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`${
              currentPage === page ? "selected" : ""
            } btn m-2 hover:bg-[#cab763]`}
            key={page}
          >
            {page}
          </button>
        ))}
        <select value={itemPerPage} onChange={handelItemChange}>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>

        <button onClick={handelNextPage} className="btn m-2">
          Next
        </button>
      </div>

      <p>{currentPage}</p>
    </>
  );
};

export default ApartConten;
