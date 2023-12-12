import Banner from "../../ui/banner/Banner";
import Footer from "../../ui/footer/Footer";
import HotelDetails from "../../ui/hotelDetails/HotelDetails";
import OurServices from "../../ui/ourServices/OurServices";
import Working from "../../ui/working/Working";
import React from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <HotelDetails />
      <OurServices />
      <Working />
      <Footer />
    </div>
  );
}
