import SectionTitle from "./../../Componenents/SectionTitle/SectionTitle";

import useAxiosPublic from "./../../Hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ApartCard from "./ApartCard";

const ApartConten = ({ name }) => {
  const axiosPublic = useAxiosPublic();
  const { data: aparts = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/apartments");
      return res.data;
    },
  });

  return (
    <>
      <SectionTitle Heading={name}></SectionTitle>
      <div className="container mx-auto md:grid md:grid-cols-3 grid  gap-6">
        {aparts.map((apart) => (
          <ApartCard key={apart._id} apart={apart}></ApartCard>
        ))}
      </div>
    </>
  );
};

export default ApartConten;
