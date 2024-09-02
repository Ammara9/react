import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {  Col ,Button, Row } from 'react-bootstrap';
import QuizInnehåll from './quizInnehåll';
import { Link, Outlet,  } from 'react-router-dom';


import Innehållare from './innehållare';
function Innehåll() {
  return (
    <>
     
 
{/* the 1 section on startsida */}
   <div className="m-2   p-2 mt-4" style={{ backgroundColor: '#F6F6F2',borderRadius: '10px', border: 'none'}}>
    <Row className="d-flex flex-wrap mt-4 pt-4 " >
      {/* Left part with bild */}
      <Col xs={12} lg={7}>
          <img
            src="/bilder/climattestart.png"
            alt="Climate change Bild"
            className="img-fluid"
            style={{ width:'100%', maxWidth: '800px', height: 'auto',borderRadius: '10px' }}
          />
        </Col>

      {/* Right part with text */}
      <Col xs={12} sm={10} md={8} lg={4}>
          <div className='p-2 m-2' >
            <h1 style={{ fontSize: '4vw', marginBottom: '20px', color: '#4CAF83' }}>Välkommen till KlimatKoll!</h1>
            <p style={{ color: 'black', fontSize: '2vw' }}>
              Upptäck och fördjupa dig i klimatfrågor med interaktiva grafer och roliga aktiviteter.
            </p>
          </div>
        </Col>
    </Row>
  </div>

{/* the 2 section on startsida */}
    <CardGroup className='mt-4 mb-4' >
      <Card className='m-2 p-2' style={{ backgroundColor: '#4CAF83', textAlign: 'center', color: 'white', borderRadius: '10px', fontSize: 14, border: 'none'}}>
        <Card.Img variant="top" src="/bilder/Globalbild.png" height="200" width="50" />
        <Card.Body>
          <h3 style={{ fontSize:'24px'}}>Global temperatur</h3>
          <Card.Text>
          Orsaker och effekter av klimatförändringar
          </Card.Text>
        </Card.Body>

        <Link to="/globalTemperatur">
        <Button
  type="submit"
  className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
  style={{ backgroundColor: '#F6F6F2', color: 'black', borderRadius: '20px', fontSize: 16, border: 'none' }}
>
  Utforska
</Button>
</Link>
      </Card>
      <Card className='m-2 p-2' style={{ backgroundColor: '#4CAF83', textAlign: 'center', color: 'white', borderRadius: '10px', fontSize: 14, border: 'none'}}>
        <Card.Img variant="top" src="/bilder/havnivabild.png" className="rounded-circle"
              alt="Waves Background" height="200"  />
        <Card.Body>
          <h3 style={{ fontSize:'24px'}}>Havsnivå</h3>
          <Card.Text>
          Påverkan av jordens havsnivå till följd av klimatet{' '}
          </Card.Text>
        </Card.Body>
        <Link to="/havsnivå">
        <Button
  type="submit" 
  className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
  style={{ backgroundColor: '#F6F6F2', color: 'black', borderRadius: '20px', fontSize: 16, border: 'none' }}
>
  Utforska
</Button>
</Link>
      </Card>
      <Card className='m-2 p-2' style={{ backgroundColor: '#4CAF83', textAlign: 'center', color: 'white', borderRadius: '10px', fontSize: 14, border: 'none' }}>
        <Card.Img variant="top" src="/bilder/sea-leaval.png" height="200" width="50" />
        <Card.Body>
          <h3 style={{ fontSize:'24px'}}>Glaciärer</h3>
          <Card.Text>
          Effekten av klimatförändringar på glaciärerna
          </Card.Text>
        </Card.Body>
        <Link to="/Glaciärer">
        <Button
  type="submit"
  className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
  style={{ backgroundColor: '#F6F6F2', color: 'black', borderRadius: '20px', fontSize: 16, border: 'none' }}
>
  Utforska
</Button>
</Link>
      </Card>
    </CardGroup>
    <QuizInnehåll />{/* the 3 section on startsida */}

     {/* the 4 section on startsida */}
     
    <Innehållare />
     
      
    

  {/* the 5 section on startsida */}
  <div className="m-2 mt-4 p-2 " style={{ backgroundColor: '#4CAF83', borderRadius: '10px', border: 'none' }}>
      <Row className="d-flex  align-items-center justify-content-center">
        {/* Left part with bild */}
        <Col xs={12} lg={7}  className="text-center mb-4">
          <img
            src="/bilder/bildförbarn.png"
            alt="Climate change Bild"
            className="img-fluid  "
            style={{ width: '80%' }}
          />
        </Col>

        {/* Right part with text */}
        <Col xs={12} sm={10} md={8} lg={5}>
          <div className='p-2 m-2  text-lg-left'>
            <h2 style={{ fontSize: '30px', marginBottom: '20px', color: 'white' }}>Klimatkoll utmaningar</h2>
            <p style={{ color: 'white', fontSize: '20px' }}>
              Ta utmaningen med Klimatkoll! Utforska hållbara val och gör små förändringar med stor inverkan.
            </p>
            <Link to="/utmaningar">
              <Button
                type="submit"
                className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
                style={{ backgroundColor: '#F6F6F2', color: 'black', borderRadius: '20px', fontSize: 14, border: 'none' }}
              >
                Utmaningar
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>

    <Outlet />
    </>
  );
}

export default Innehåll;