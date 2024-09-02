import { Card, Button, Row, Col } from "react-bootstrap";
import React from "react";
import { getHotelShopData } from "./hotelstoredata";//import the fucntion to fetch data.
import { Link } from "react-router-dom";
import Rating from 'react-rating';
import { HotelSearchBar} from './HotelSearchBar';

/*This component shows each hotel in a card. Bootstrap Card have been used in this component */
export const content = (props) => {
  //here we fetch the input parameter which are category and search phrase by the user
  const category = props.match.params.category;
  //we use || symbol here in case the search phrase is null 
  const searchPhrase = props.match.params.searchPhrase || "";

  //Fetch all data to an array of objects
  const hotelArray = getHotelShopData();

  return (
    <div>
      <HotelSearchBar/>
    <div className="p-0 my-5 mx-5">
      <h1 className="text-center my-5 font-weight-bold">Trendig Destinations</h1>
      <Row style={{ backgroundColor: '#FAFAF5' }} >
        {
          /*here we use map to create a loop and show hotels. At the same time we filter the list if the user has chosen a category or entered a search phrase. */
          hotelArray
            .filter(
              (x) =>
                (x.category == category || category == "all") &&
                x.title.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1
            )
            .map((hotel) => (
              <Row className='border p-2'>
              <Col sm="auto" className='p-1'>
                  <img src={hotel.image}
                      style={{ width: "200px", height: "300px" }} className="bookpic" />
              </Col>
              <Col className='d-flex flex-column'>
                  <div className="d-flex justify-content-between">
                      <div className='h4 mb-1'>{hotel.hotelName}</div>
                      {/*here we use Rating component. the component accepts which icon to show. here we use "star" icon from FontAwesome. We have set a fixed value for the component but the value should come from the data too.*/}
                      <Rating
                          emptySymbol="far fa-star fa-lg text-warning"
                          fullSymbol="fas fa-star fa-lg text-warning"
                          initialRating={5}
                          readonly
                      />
                  </div>
  
                  <div className='mb-1'>{hotel.title}</div>
                  <div className='font-weight-bold text-success mb-1'>{hotel.specifications}</div>
                  <div className='mb-2' style={{ flex: '1 0 100px', overflow: 'hidden' }}>
                      {hotel.desc}
                  </div>
                  <ul class="fa-ul">
                      {/*Here we use data to show different icons in the component. The syntas is "inline if" which we use for conditional rendering. */}
                      {hotel.isChild ? <li className="mb-2 p-2"><span className="fa-li"><i class="fas fa fa-child fa-2x"></i></span>Child Friendly</li> : ""}
                      {hotel.isMetro ? <li className="mb-2 p-2"><span className="fa-li"><i class="fas fa fa-train fa-2x"></i></span>Metro Access</li> : ""}
                      {hotel.isDesk ? <li className="mb-2 p-2"><span className="fa-li"><i class="fas fa fa-desktop fa-2x"></i></span>24/7 Desk</li> : ""}
                  </ul>
                  <div className="d-flex justify-content-between">
                      
                      {/*The link to the detail hotel component. we must send hotelID to the component. Otherwise the component does not know which hotel to show*/}
                      <Link to={"/hoteldetails/" + hotel.hotelID}><Button className="button" style={{ backgroundColor: '#3E5682' }}>{hotel.price}</Button></Link>
                    </div>
              </Col>
          </Row>
          ))}
      </Row>
    </div>
    </div>
  );
};
