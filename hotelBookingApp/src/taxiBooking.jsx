import React from "react";


/*This component shows detail of company*/
export const taxiBooking = () => {
  return (
    <div className= "">
 
    <h2 className='text-center py-5 fw-bold fs-3'>Welcome to Our Taxi Booking System</h2>

    <div className='mx-5 my-4 px-4 py-4 rounded' style={{ backgroundColor: '#FAFAF5' }} >
      <h3>Option 1:</h3>
      <h4>Standard Taxi (1-5 passengers)</h4>
      <div>Description: Our standard taxi is perfect for smaller groups of up to 5 passengers. It is comfortable and spacious, ensuring a smooth journey to your destination at an affordable price.</div>
      <div className = "text-success">Price From: 40 €</div>
      <div>Call US to book you Taxi now: <span>+46 8-555 555 55</span> </div>
    </div>
   
    <div className='mx-5 my-4 px-4 py-4 rounded'style={{ backgroundColor: '#FAFAF5' }}>
      <h3>Option 2: </h3>
      <h4>Large Taxi (1-10 passengers)</h4>
      <div>Description: For larger groups of up to 10 passengers, we offer our spacious large taxis. These vehicles are ideal for families, corporate groups, or friends traveling together.</div>
      <div className = "text-success">Price From: 70 €</div>
      <div>Call US to book you Taxi now: <span>+46 8-555 555 55</span> </div>
    </div>

  </div>
  );
};
