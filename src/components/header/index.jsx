import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store.flightReducer);

  return (
    <header>
      <div>
        <img
          src="https://flightradar.flights/content/uploads/2021/04/Logotrue128-min.png"
          alt=""
        />
        <h2>
          Flight Radar <span>24/7</span>
        </h2>
      </div>
      <h4>
        {store.isLoading
          ? "Flights Calculating"
          : `${store.flights.length} Flights Found`}
      </h4>
    </header>
  );
};

export default Header;
