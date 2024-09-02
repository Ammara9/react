import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatasetGlobalTemp from "../DatasetGlobalTemp";
import HowToHelp from './howToHelp';

const GlobalTemperatur = () => {
  return (
    <>
      
      <div className="mt-4 m-2 p-2" style={{ backgroundColor: '#F6F6F2', color: 'black', borderRadius: '10px', fontSize: 14, border: 'none' }}>
        <Row>
          {/* Left part with text */}
          <Col md={12} lg={6} className="p-2">
            <div className='p-2 m-2'>
              <h1 style={{ fontSize: 34, marginBottom: '20px', color: '#4CAF83' }}>Global temperatur</h1>
              <p>
              Global temperatur är medelvärdet av temperaturen över hela vår planet. När den stiger leder det till ökade klimatförändringar. Den stora boven här är koldioxid, som släpps ut när vi använder saker som bensin och diesel. Koldioxid stannar i luften och får den globala temperaturen att öka.
              </p>
              <p>Det påverkar oss på många sätt, både hur vi lever och genom naturliga händelser som vulkanutbrott. För att mäta temperaturen används oftast termometrar. Termometrar mäter temperaturen, visar om det är varmt eller kallt.</p>
              <p>Det finns flera saker att göra för att minska den globala uppvärmningen. Det är saker som att flyga mindre, köra mindre bil, äta mer vegetarisk mat, handla begagnat och sopsortera. Genom att sopsortera kan produkternas material återanvändas vilket kräver mindre energi än att tillverka nytt.  </p>
              <h3 style={{ fontSize: 30, marginBottom: '20px', color: '#4CAF83' }}>Snabba fakta</h3>
              <ul>
        <li>Den globala temperaturen påverkar alla levande varelser och ekosystem på jorden.</li>
        <li>Ekosystemen står inför utmaningar när temperaturen förändras.</li>
        <li>Klimatförändringar, kopplade till den globala temperaturen, kan orsaka extrema stormar, särskilt i tropiska områden.</li>
        <li>Temperaturförändringar och variationer som hetta eller kyla är följder av dessa klimatförändringar.</li>
        <li>Höjda havsnivåer är en annan möjlig konsekvens av den globala temperaturökningen.</li>
      </ul>
            </div>
          </Col>

          {/* Right part with an image */}
          <Col md={12} lg={6} >
            <img
              src="/bilder/klmat-change-bil-d-1.png"
              alt="global tempurter Bild"
              className="img-fluid " 
             
            />
          </Col>
        </Row>
      </div>

      <Container className="m-2 p-2" style={{ color: '#000' }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h2 style={{ fontSize: '30px', marginBottom: '20px', textAlign: 'left' }}>Den globala temperaturen genom historien</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="p-2">
            <p style={{ fontSize: '14px', marginBottom: '40px', textAlign: 'left' }}>
              I diagrammet nedan kan du läsa om temperaturförändringarna genom historien (1880-2016).
              Här kan du se hur klimatet har ändrats och vad som händer över tid. Informationen är hämtad från Global
              Climate at a Glance (GCAG) och GISS Surface Temperature Analysis (GISTEMP).
            </p>
          </Col>
        </Row>
      </Container>
{/* GRAPH PLACE */}

<div className="d-flex justify-content-center align-item-center">
        <DatasetGlobalTemp />
     
        </div>
      {/* för att visa filmen från youtube */}
      <div className='m-2 p-2'>
        <h2 style={{ fontSize: 30, marginBottom: '20px', color: '#4CAF83' }}>Klimatförändringar på en minut</h2>
       <p>I filmen berättar Naturvårdsverket om klimatförändringarna. Vad är problemet och varför ska vi bry oss?</p>
        <Row className="justify-content-center">
        
        <Col xs={12} md={8} className="p-2">
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src="https://www.youtube.com/embed/H71LG6xgZII"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
      </div>
     
      <HowToHelp />
    </>
  );
};

export default GlobalTemperatur;
