import Card from 'react-bootstrap/Card';

function InfoCards() {
  return (
      <div className="container">
        <h4 className='subtitle'>Tandem is all in one.</h4>
        <div className="cards">
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title>Book flights</Card.Title>
              <Card.Text>Use our interface to book a flight with your group on the same plane.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title>Book hotels</Card.Title>
              <Card.Text>Book the hotel that you or your group decide to stay for the trip. Don’t settle for less, you can also see the reviews of hotels near airports.</Card.Text>
            </Card.Body>
          </Card>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title>TravelChat</Card.Title>
              <Card.Text>Invite your friends to join the group chat on our platform to plan your adventure and stay connected!</Card.Text>
            </Card.Body>
          </Card>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title>Huddle</Card.Title>
              <Card.Text>Use the Huddle tool to plan your trip itinerary on a calendar.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
  );
}

export default InfoCards;