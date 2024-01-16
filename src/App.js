import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BodyOnlyExample() {
  return (
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
}


function AlertDismissible() {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert show={show} variant="success">
                <Alert.Heading>My Alert</Alert.Heading>
                <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                    lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                    fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close me
                    </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
}







function MyNavbar() {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}



function App() {

    return (
        <>

            <div className='App'>
                <MyNavbar />
                <AlertDismissible />
                <BodyOnlyExample/>
                <BodyOnlyExample/>
                <BodyOnlyExample/>
            </div>
        </>
    )

}

export default App