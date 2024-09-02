import React from "react";
import { Link } from "react-router-dom";
import { Button, Container} from "react-bootstrap";

/*This component shows detail of quizstart page.*/
const Quizstart = () => {
  return (
    <Container className="d-flex justify-content-center align-content-center ">
      <img
        src="bilder/bild för hero.png"
        alt="Snow"
        style={{ maxWidth: "100%" }}
      />

      <div
        className=" rounded py-5 px-5 my-5 mx-5 text-center"
        style={{ backgroundColor: "#F6F6F2", position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)'}}
      >
        <div style={{ color: "black" }}>
          {/* Här är det centrade och designade rubriken */}
          <h1 className="pb-3">Quiz</h1>
          <p className="mb-4">
            Svara på en quiz med 10 frågor baserade på glaciärer, havsnivå och
            global temperatur.
          </p>
          {/* Länken används för att rutt till quiz-sidan med en knapp */}
          <Link to="/quiz">
            <Button
              type="submit"
              className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
              style={{
                backgroundColor: "#4CAF83",
                color: "black",
                borderRadius: "20px",
                fontSize: 16,
                border: "none",
              }}
            >
              Starta
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Quizstart;
