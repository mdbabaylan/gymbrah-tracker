import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WeightInput from './WeightInput';
import GymBrahNavBar from './Gymbrahnavbar';

function App() {
  return (
    <>
    <GymBrahNavBar/>
    <Container>
      <Row xs={12}>
        <br></br><br></br>
      </Row>
      <WeightInput/>
    </Container>
    </>

  );
}

export default App;
