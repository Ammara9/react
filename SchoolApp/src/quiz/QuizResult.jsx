import { Modal, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";


function QuizResult(props) {
 return (
<Modal
  {...props}
  size="xl"
  centered
  style={{ border: 'none' }}
>
{/* its a quiz results modal which shows right answers and confetti */}
  <Modal.Header closeButton style={{ backgroundColor: "#4CAF83", color: 'white' }}>
    
  </Modal.Header>

  <Modal.Body style={{ backgroundColor: "#4CAF83", color: 'white' }}>
    <div className="d-flex justify-content-center align-content-center">
      <h4>
      Du svarade rätt på {props.numberOfCorrectAnswers}  utav {" "}
        {props.numberOfQuestion} frågor!
      </h4>
      <br />
     
    </div>
    {props.numberOfCorrectAnswers > 6 && (
      <Confetti
        className="confetti"
        gravity={0.4}
        run={props.showConfetti}
        numberOfPieces={props.numberOfCorrectAnswers * 10}
      />
    )}
  </Modal.Body>

  <Modal.Footer style={{ backgroundColor: "#4CAF83", justifyContent: 'center', alignItems: 'center' }}>
  <div>
    <Link as={Link} to="/quizstart">
      <Button className="btn mx-auto rounded-pill text-dark" style={{ backgroundColor: "#F6F6F2" }}>
        Avsluta Quiz
      </Button>
    </Link>
  </div>
</Modal.Footer>

</Modal>


 );
}

export default QuizResult;

