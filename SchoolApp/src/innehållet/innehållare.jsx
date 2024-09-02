import React from "react";
import { Container, Card, Row, Col } from 'react-bootstrap';

const Innehållare = () => {
return(
    <>
     <div 
    className="p-4 m-4"></div>
    <Container className='mt-4 text-center '  > 
    <div className=' pb-4 m-2'>
        <h2 style={{ color: '#4CAF83', fontSize: '30px'}}>Vad kan du lära dig och förbättra med KlimatKoll?</h2>
      </div>
      <Row className="m-2 p-2 " > 
      
      <Col xs={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
  <Card
    style={{
      textAlign: 'center',
      color: 'black',
      borderRadius: '10px',
      transition: 'background-color 0.3s',
    }}
    className=' p-3'
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f2f2f2')}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
  >
    <Card.Img
      variant="top"
      src="/bilder/icontoclimate1.png"
      style={{ width: '120px', height: '120px', margin: 'auto' }}
    />
    <Card.Body>
      <h3 style={{ fontSize: '24px', fontWeight: 'normal' }}>Återvinning</h3>
    </Card.Body>
  </Card>
</Col>
<Col xs={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
  <Card
    style={{
      textAlign: 'center',
      color: 'black',
      borderRadius: '10px',
      transition: 'background-color 0.3s',
    }}
    className=' p-3'
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f2f2f2')}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
  >
    <Card.Img
      variant="top"
      src="/bilder/iconclimate2.png"
      alt="Waves Background"
      style={{ width: '120px', height: '120px', margin: 'auto' }}
    />
    <Card.Body>
      <h3 style={{ fontSize: '24px', fontWeight: 'normal' }}>Sopsortera</h3>
    </Card.Body>
  </Card>
</Col>
<Col xs={12} md={6} lg={4} style={{ marginBottom: '20px' }}>
  <Card
    style={{
      textAlign: 'center',
      color: 'black',
      borderRadius: '10px',
      transition: 'background-color 0.3s',
    }}
    className=' p-3'
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f2f2f2')}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
  >
    <Card.Img
      variant="top"
      src="/bilder/iconclimate3.png"
      style={{ width: '120px', height: '120px', margin: 'auto' }}
    />
    <Card.Body>
      <h3 style={{ fontSize: '24px', fontWeight: 'normal' }}>Miljöbevaring</h3>
    </Card.Body>
  </Card>
</Col>

      </Row>
    </Container>
    <div 
    className="p-4 m-4"></div>
    </>
);

};
export default Innehållare;