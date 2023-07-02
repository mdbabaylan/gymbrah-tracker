import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function WeightInput() {
  return (
    <Form as={"Container"}>
        <Form.Label>Enter your weight</Form.Label>
        <Form.Control type="number" className="mb-3" placeholder="Enter weight (lbs)" />
        <Form.Text className="text-muted">
          "Can't measure it, can't manage it." ~Edwards Deming
        </Form.Text>

        {/* mb-3 == bootstrap spacing, marginBottom 3 */}
        <div className="text-center mt-3">
            <Button variant="primary" type="submit">Enter</Button>
        </div>


    </Form>


  );
}