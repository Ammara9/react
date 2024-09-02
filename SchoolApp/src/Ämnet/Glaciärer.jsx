import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatasetGlacierSize from "../DatasetGlacierSize";
import HowToHelp from './howToHelp';

const Glaciärer = () => {
  return (
    <>

      <div className="mt-4 p-2 m-2" style={{ backgroundColor: '#F6F6F2', color: 'black', borderRadius: '10px', fontSize: 14, border: 'none' }}>
        <Row>
          {/* Left part with text */}
          <Col md={12} lg={6} className="p-2">
            <div className='p-2 m-2'>
              <h1 style={{ fontSize: 34, marginBottom: '20px', color: '#4CAF83' }}>Glaciärer</h1>
              <p>
              En glaciär bildas när is och snö packas hårt till stora högar som kan förflytta sig själva, detta sker genom naturen. På grund av den ökande globala temperaturen smälter glaciärerna, vilket i sin tur leder till att havsnivån stiger.              </p>
              <p>Är du nyfiken på havsnivån och hur du kan hjälpa havsnivån att stabilisera sig kan du läsa mer om det i vårt avsnitt om Havsnivåer. Många utav jordens djurarter är beroende av glaciärisen, bland annat isbjörnen och ett flertal olika arter av sälar. Försvinner glaciärerna blir det väldigt svårt för dessa djurarter att överleva. </p>
              <h3 style={{ fontSize: 30, marginBottom: '20px', color: '#4CAF83' }}>Snabba fakta</h3>
              <ul>
        <li>Stiger havsnivån kommer en del av marken vi lever på hamna under vattenytan</li>
        <li>Samhällena närmast vattnet kommer tvingas flytta inåt landet</li>
        <li>Öarna Maldiverna är särskilt utsatta</li>
        <li>Att havsnivån stiger leder till att glaciärer smälter</li>
        <li>När glaciärer smälter ökar havsnivån och markytan minskar</li>
        <li>Människors tillgång till färskvatten försvinner</li>
        <li>Djurarter är beroende av glaciärisen</li>
        <li>Den globala temperaturen påverkar smältningen av glaciärerna</li>
      </ul>
            </div>
          </Col>

          {/* Right part with an image */}
          <Col md={12} lg={6} >
            <img
              src="/bilder/glace.png"
              alt="qlaciärer Bild"
              className="img-fluid "
            />
          </Col>
        </Row>
      </div>

      <Container className="m-2 p-2" style={{ color: '#000' }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h2 style={{ fontSize: '30px', marginBottom: '20px', textAlign: 'left' }}>Glaciärer genom historien</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="p-2">
            <p style={{ fontSize: '14px', marginBottom: '40px', textAlign: 'left' }}>
            I Sverige fanns  250 galciärer på 80-talet, dessa har nu minskat drasiskt och bara en handfull finns kvar idag. I diagrammet här nedanför kan du se hur glaciärerna i världen har påverkats under längre tid, mellan 1945-2014. Infomrationen är hämtad från Global Climate at a Glance (GCAG) och GISS Surface Temperature Analysis (GISTEMP). 
            </p>
          </Col>
        </Row>
      </Container>
      {/* GRAPH PLACE */}

<div className="d-flex justify-content-center align-item-center">
        <DatasetGlacierSize />
     
        </div>
    
      {/* för att visa filmen från youtube */}
      <div className='m-2 p-2'>
        <h2  style={{ fontSize: 30, marginBottom: '20px', color: '#4CAF83' }}>Klimatförändringar på en minut</h2>
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

export default Glaciärer;