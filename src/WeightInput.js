import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function WeightInput() {
  return (
    <Form as={"Container"}>
        <Form.Label>Enter your weight</Form.Label>
        <Form.Control type="number" className="mb-3" placeholder="Enter weight" />
        <Form.Text className="text-muted">
          "If you can't measure it, you can't manage it" ~Edwards Deming
        </Form.Text>

        {/* mb-3 == marginBottom 3 */}
        <Form.Select className="mb-3" aria-label="Mass (weight) units">
          <option value="KG">kg</option>
          <option value="LBS">lbs</option>
        </Form.Select>
        <div className="text-center">
            <Button variant="primary" type="submit">Submit</Button>
        </div>


    </Form>


  );
}