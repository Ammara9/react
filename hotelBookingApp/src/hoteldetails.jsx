import { Col, Button } from "react-bootstrap";
import Rating from "react-rating";
import { getHotel } from "./hotelstoredata"; //import the function to fetch each hotel.
import { Link } from "react-router-dom";

/*This component shows detail of each hotel.*/
export const HotelDetails = (props) => {
  //here we fetch the hotel ID that we have already sent from hotelcardview component.
  const hotelID = props.match.params.hotelID;

  //we fetch the hotel with it ID.
  const hotel = getHotel(hotelID);

  return (
    <div className="m-5 p-5">
      {/*here we use heading.*/}
      <Col className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div className="h2 mb-1">{hotel.hotelName}</div>
          {/*here we use button to reservation component.*/}
          <div>
            {/*The link to the reservation component. we must link to the component.*/}
            <Link as={Link} to="/message">
              <Button className="button" style={{ backgroundColor: "#3E5682" }}>
                Reserve Now
              </Button>
            </Link>


          </div>
        </div>
        <p className="text-secondary mb-1">{hotel.adress}</p>
      </Col>

      <div className="border mx-0 my-5">
        <div className="container ">
          <div className="row">
            <div className="col-4 border pr-0 mx-0">
              <img
                src={hotel.image1}
                style={{ height: "250px", width: "400px" }}
                className="img-fluid"
              />
            </div>
            <div className="col-8 border pr-0 mx-0">
              <img
                src={hotel.image}
                style={{ height: "250px", width: "800px" }}
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-4 border pr-0 mx-0">
              <img
                src={hotel.image2}
                style={{ height: "250px", width: "400px" }}
                className="img-fluid"
              />
            </div>
            <div className="col-4 border pr-0 mx-0">
              <img
                src={hotel.image3}
                style={{ height: "250px", width: "400px" }}
                className="img-fluid"
              />
            </div>
            <div className="col-4 border pr-0 mx-0">
              <img
                src={hotel.image4}
                style={{ height: "250px", width: "400px" }}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <Col
        className="d-flex flex-column"
        style={{ backgroundColor: "#FAFAF5" }}
      >
        <div className="d-flex justify-content-between">
          <div className="h3 mx-3 my-4">Popular Amenities</div>
          {/*here we use Rating component. the component accepts which icon to show. here we use "star" icon from FontAwesome. We have set a fixed value for the component but the value should come from the data too.*/}
          <Rating
            emptySymbol="far fa-star fa-lg text-warning"
            fullSymbol="fas fa-star fa-lg text-warning"
            initialRating={5}
            readonly
          />
        </div>

        <div className="Container">
          <div className="row">
            <div className="col">
              <ul class="fa-ul">
                <li className="mb-2">Free WIFI</li>
                <li className="mb-2">Restaurant</li>
                <li className="mb-2">Air Conditioning</li>
                <li className="mb-2">Car Rentals</li>
                <li className="mb-2">Taxi Booking</li>
              </ul>
            </div>
            <div className="col">
              <ul class="fa-ul">
                <li className="mb-2">
                  Breakfast buffet daily from 06:00 AM to 11:00 AM.
                </li>
                <li className="mb-2">Bar</li>
                <li className="mb-2">24-hours front desk</li>
                <li className="mb-2">Non-smoking</li>
                <li className="mb-2">Family room</li>
              </ul>
            </div>
          </div>
        </div>

        <div></div>
      </Col>

      <Col
        className="d-flex flex-column my-3"
        style={{ backgroundColor: "#FAFAF5" }}
      >
        <div className="font-weight-bold h3 mx-4 my-4">About The Hotels</div>
        <div className="d-flex justify-content-between">
          <div className="my-2 mx-4">{hotel.desc}</div>
        </div>
      </Col>

      <Col
        className="d-flex flex-column my-3"
        style={{ backgroundColor: "#FAFAF5" }}
      >
        <div className="font-weight-bold h3 mx-4 my-4">Restaurant</div>
        <div className="d-flex justify-content-between">
          <div className="my-2 mx-4">
            <p>
              CantM - a restaurant serving breakfast, lunch, and dinner. Guests
              can order drinks and socialize at the bar.
            </p>
            CantM - a bar specializing in vegetarian food and serving only light
            meals. Open daily....
            <span className="text-secondary">
              <Link as={Link} to="/resturants">
                {" "}
                See More
              </Link>
            </span>
          </div>
        </div>
      </Col>

      <Col
        className="d-flex flex-column my-3"
        style={{ backgroundColor: "#FAFAF5" }}
      >
        <div className="font-weight-bold h3 mx-4 my-4">
          Convenient Taxi Booking at Your Service
        </div>
        <div className="d-flex justify-content-between">
          <div className="my-2 mx-4">
            At our Hotel, we strive to provide you with seamless and stress-free
            travel experiences, and that includes effortless taxi bookings.
            Whether you need a ride to the airport, a local attraction, or any
            other destination, our dedicated team is here to assist you with all
            your transportation needs.
            <span className="text-secondary">
              <Link as={Link} to="/taxiBooking">
                {" "}
                See Here our services
              </Link>
            </span>
          </div>
        </div>
      </Col>
    </div>
  );
};
