import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const QuizInnehåll = () => {
  return (
    <>
      <div
        className="m-2 p-2"
        style={{
          backgroundColor: "#F6F6F2",
          color: "black",
          borderRadius: "10px",
          fontSize: "clamp(14px, 3vw, 18px)",
          border: "none",
        }}
      >
        <Row className="p-4 align-items-center">
          {/* Left part with text */}
          <Col md={12} lg={6}>
            <div className="p-2 m-2 text-lg-left">
              <h1
                style={{
                  fontSize: "clamp(1.5rem, 5vw, 2rem)",
                  marginBottom: "20px",
                  color: "#4CAF83",
                }}
              >
                Lär dig genom quiz
              </h1>
              <p>
                Testa och utmana dina kunskaper om globala
                temperaturförändringar, havsnivåvariationer och glaciärmönster
                genom att delta i vårt spännande quiz!{" "}
              </p>
              <Link to="/quizstart">
                <Button
                  type="submit"
                  className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
                  style={{
                    backgroundColor: "#4CAF83",
                    color: "white",
                    borderRadius: "20px",
                    fontSize: 16,
                    border: "none",
                  }}
                >
                  Testa vårt quiz
                </Button>
              </Link>
            </div>
          </Col>

          {/* Right part with an image */}
          <Col
            md={12}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="/bilder/bild för hero.png"
              alt="bild för två hero"
              className="img-fluid "
              style={{ maxWidth: "80%" }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default QuizInnehåll;
