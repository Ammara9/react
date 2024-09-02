import React from 'react';
import {  Row, Col, Button } from 'react-bootstrap';
import {  Link, Outlet } from 'react-router-dom';

const HowToHelp = () => {
   
  return (
    <>
   
    <div className="mt-4 p-2 m-2" style={{ backgroundColor: '#F6F6F2', color: 'black',borderRadius: '10px', fontSize: 14, border: 'none'}}>
    <Row>
      {/* Left part with text */}
      <Col md={12} lg={6} className="d-flex align-items-center justify-content-center">
        <div className='p-2 m-2'>
          <h2 style={{ fontSize: 34, marginBottom: '30px', color: '#4CAF83'}}>Hur kan du hjälpa till att påverka?</h2>
<p>
Använd KlimatKoll för att öka din kunskap om klimatförändringarna. Diskutera grafen med klasskamrater och lärare, och fundera över hur du kan bidra till att hjälpa vår planet. Alla kan göra något, som att handla second hand, undvika sopor i naturen och välja att cykla!</p> 
          
         <p>I avsnittet "Utmaningar" hittar du fler sätt att stödja vårt klimat.</p>
       {/* knapp som gå till utmaningar sidan */}
         <Link to="/utmaningar">
             <Button
  type="submit"
  className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
  style={{ backgroundColor: '#4CAF83', color: 'white', borderRadius: '20px', fontSize: 14, border: 'none' }}
>
Utmaningar
</Button>
</Link>
        </div>
      
      </Col>

      {/* Right part with an image */}
      <Col md={12} lg={6}>
        <img
          src="/bilder/klimat-2.png" 
          alt="global tempurter Bild"
            
           className="img-fluid m-2"
        />
      </Col>
    </Row>
  </div>
  <Outlet />
 </>
  );
};

export default HowToHelp;
