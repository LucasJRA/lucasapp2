import ListGroup from 'react-bootstrap/ListGroup';

function ListScreen() {
    const alertClicked = () => {
        alert('boooo!');
      };
    

  return (
    <ListGroup horizontal>
      <ListGroup.Item>Lista</ListGroup.Item>
      <ListGroup.Item>Muito</ListGroup.Item>
      <ListGroup.Item>Relevante</ListGroup.Item>
      <ListGroup.Item variant='success'> :) </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}> Susto</ListGroup.Item>
    </ListGroup>
  );
}

export default ListScreen;