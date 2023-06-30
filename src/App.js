import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WeightInput from './WeightInput';

function App() {
  return (
    <Container>
      <Row xs={12}>
          <Col><p>Gymbrah Weight Log initial amazon s3 deployment</p></Col>
      </Row>

      <WeightInput/>

    </Container>
  );
}

export default App;
