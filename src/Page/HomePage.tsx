import FeaturedCourses from "../Components/FeaturedCourses";
import Hero from "../Components/Hero";
import WhatWeOffer from "../Components/WhatWeOffer";
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
    </>
  );
};

export default HomePage;
