import SectionTitle from "./../../Componenents/SectionTitle/SectionTitle";
import AboutCard from "./AboutCard";
import useAxiosPublic from "./../../Hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const AboutBuilding = () => {
  const axiosPublic = useAxiosPublic();
  const { data: aparts = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/apartments");
      return res.data;
    },
  });

  console.log(aparts);

  return (
    <>
      <SectionTitle Heading={"About The Building"}></SectionTitle>
      <div className="container mx-auto md:grid md:grid-cols-3 grid  gap-6">
        {aparts.map((apart) => {
          return <AboutCard key={apart._id} apart={apart}></AboutCard>;
        })}
      </div>
    </>
  );
};

export default AboutBuilding;
