import SectionTitle from "./../SectionTitle/SectionTitle";

const Place = () => {
  return (
    <div className="my-3 container mx-auto">
      <SectionTitle Heading="Location Details"></SectionTitle>

      <div className="grid grid-cols-3 gap-3">
        <div className="container mx-auto hover:scale-105 transition">
          <div className="card w-full bg-base-100 shadow-xl h-full">
            <figure>
              <img
                src="https://i.postimg.cc/y6D16274/Default-New-York-City-USA-3.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New York City, USA</h2>
              <p>
                New York City (NYC), often simply called New York, is the most
                populous city in the United States. Located in the state of New
                York, it is a global hub for commerce, culture, and finance
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto hover:scale-105 transition">
          <div className="card w-full bg-base-100 shadow-xl h-full">
            <figure>
              <img
                src="https://i.postimg.cc/m2gzBmh0/Default-Tokyo-Japan-2.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tokyo, Japan</h2>
              <p>
                Tokyo, the capital of Japan, is a bustling metropolis and the
                most populous city in the world. Known for its skyscrapers,
                shopping, and food scene, Tokyo is a major international finance
                center and a leader in technology and innovation.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto hover:scale-105 transition">
          <div className="card w-full bg-base-100 shadow-xl h-full">
            <figure>
              <img
                src="https://i.postimg.cc/Pqp5NckR/Default-Paris-France-0.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Paris, France</h2>
              <p>
                Paris, the capital city of France, is famed for its art,
                fashion, and culture. The city is home to iconic landmarks such
                as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.
                Paris is a significant global city for commerce, culture, and
                finance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
