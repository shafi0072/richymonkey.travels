import React from "react";
import Header from "../Header/Header";
import Hero from "./Hero/Hero";
import Search from "./Search/Search";

const Banner = () => {
  return (
    <div
      className="bg-cover banner-bg"
    >
      <Header />
      <Hero/>
      <Search/>

      {/* <Modal /> */}
      {/* <Hero />
      <Search />
      <Offers
        heading={"Special Offers"}
        subHeading={
          "Discover top rated and featured hotels and begin planning the trip of your lifetime!"
        }
        list={offerList}
      />
      <Property />
      <Offers
        heading={"Explore Trending Destinations"}
        subHeading={
          "From thrillseeking trips to breathtaking views, we offer the best of it all!"
        }
        list={destinations}
      />
      <Bottom />
      <Footer /> */}
      {/* <ListProperty /> */}
    </div>
  );
};

export default Banner;
