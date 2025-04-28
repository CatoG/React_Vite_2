// src/components/MyCard.jsx
import Card from 'react-bootstrap/Card';

function MyCard(props) {
  return (
    <Card className={`mt-1 ${props.bgColor} ${props.foreColor}`}>
      <Card.Body>
        <Card.Title>My Awesome Card</Card.Title>
        <Card.Text>
          This is a simple card created using React Bootstrap.        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
