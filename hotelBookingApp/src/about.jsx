import React from "react";
import { Card, Container } from "react-bootstrap";

/*This component shows detail of company*/
export const about = () => {
  return (
    <Container className="my-3">
      <Card className="p-3" style={{ backgroundColor: "#FAFAF5", fontSize: "14px"}}>
        <h2 className="text-center"> Quest Qisar Hotel</h2>
        
        <p >
          Welcome to Quest Qisar  Hotel, where hospitality meets comfort, and your satisfaction is our top priority. We are a dedicated team of professionals committed to providing you with the ultimate hotel experience.
        </p>

        <h3 style={{fontSize: "20px"}}>Our Story</h3>
        <p>
        Quest Qisar  Hotel's journey began with a simple vision: to create a home away from home for travelers, whether on business or leisure. Since our inception, we have welcomed guests from around the world, aiming to offer them a memorable stay.
        </p>

        <h3 style={{fontSize: "20px"}}>Our Philosophy</h3>
        <p>
          At Quest Qisar  Hotel, our philosophy is straightforward: to deliver exceptional service, convenience, and hospitality to every guest who walks through our doors. We believe that attention to detail makes a significant difference, and we strive to create lasting memories for our guests.
        </p>

        <h3 style={{fontSize: "20px"}}>Our Team</h3>
        <p>
          Behind every great hotel is a dedicated team, and Quest Qisar Hotel is no exception. Our team comprises hospitality professionals who work diligently to ensure your stay is smooth and unforgettable. We are here to fulfill your needs and preferences.
        </p>
        
      </Card>
    </Container>
  );
};
