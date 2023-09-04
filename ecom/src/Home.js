import HeroSection from "./components/HeroSection";

import Featureproduct from "./components/Featureproduct";

const Home = () => {
  const data = {
    name: "MY shop",
  };

  return (
    <>
      <HeroSection myData={data} />
      <featureproduct/>
     
     
    </>
  );
};

export default Home;
