import FeaturedCourses from "../Components/FeaturedCourses";
import Hero from "../Components/Hero";
import WhatWeOffer from "../Components/WhatWeOffer";
import WhyLightHouse from "../Components/WhyLightHouse";
const HomePage = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <WhatWeOffer />
      </div>
      <div>
        <FeaturedCourses />
      </div>
      <div>
        <WhyLightHouse />
      </div>
    </>
  );
};

export default HomePage;
