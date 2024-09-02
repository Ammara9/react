import React, { useState } from "react";
import { FormControl, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styling.css";

export const HotelSearchBar = () => {
  //here we used state to save the search phrase by the user
  const [searchPhrase, setSearchPhrase] = useState("");
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [rooms, setRooms] = useState("");

  const handleAdultsChange = (e) => {
    const value = parseInt(e.target.value, 10); // Parse input as an integer
    if (!isNaN(value) && value >= 0) {
      // Ensure the value is a non-negative number
      setAdults(value);
    }
  };

  const handleChildrenChange = (e) => {
    const value = parseInt(e.target.value, 10); // Parse input as an integer
    if (!isNaN(value) && value >= 0 && value <= 10) {
      // Ensure the value is a non-negative number
      setChildren(value);
    }
  };

  const handleRoomsChange = (e) => {
    const value = parseInt(e.target.value, 10); // Parse input as an integer
    if (!isNaN(value) && value >= 0) {
      // Ensure the value is a non-negative number
      setRooms(value);
    }
  };

  return (
    <header className="mt-0">
      <div className="search-styled rounded">
        <div className="container ">
          <div className=" row justify-content-md-center ">
            <div className="col-sm px-0 p-2 mx-2 ">
              <InputGroup>
                <FormControl
                  className="p-3 "
                  placeholder="Destination"
                  value={searchPhrase}
                  onChange={(e) => setSearchPhrase(e.target.value)}
                />
              </InputGroup>
            </div>

            <div className=" px-0  p-2 col-sm">
              <div className="d-flex justify-content-between date-picker-container  ">
                <DatePicker
                  selected={checkinDate}
                  onChange={(date) => setCheckinDate(date)}
                  placeholderText="Check-in Date "
                  className="form-control p-3"
                />
                <DatePicker
                  selected={checkoutDate}
                  onChange={(date) => setCheckoutDate(date)}
                  placeholderText="Check-out Date"
                  className="form-control p-3"
                />
              </div>
            </div>

            <div className="col-sm px-0 p-2 mx-2  ">
              <InputGroup>
                <FormControl
                  type="number"
                  placeholder="adults"
                  value={adults}
                  onChange={handleAdultsChange}
                  className="p-3"
                />
                <FormControl
                  type="number"
                  placeholder="children"
                  value={children}
                  onChange={handleChildrenChange}
                  className="p-3"
                />
                <FormControl
                  type="number"
                  placeholder="room"
                  value={rooms}
                  onChange={handleRoomsChange}
                  className="p-3"
                />
              </InputGroup>
            </div>

            <div className=" px-0 p-2 col-lg-1">
              {/*We have placed button inside a Link component to enable "Route" here.*/}
              <Link to={"/content/all/" + searchPhrase}>
                <Button className="p-3 " style={{ background: "#3E5682" }}>
                  Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="bg-image">
          <div className="text-image">Explore hotels worldwide</div>
        </div>
      </div>
    </header>
  );
};
