import React from 'react';
import { Row, Col, Button, Card, CardText, CardBody, CardTitle, CardSubtitle, Container } from 'reactstrap';

const FunctionalComponentDemo = () => {
    return (
        <div>
            <Container className="main">
                <div className="mainDiv">
                    <div>
                        <h1>
                            Functional Component
                            </h1>
                        <p>
                            Functional components allow you to render information to the web page without having to use or change state.
                            </p>
                    </div>
                    <div>
                        <dl>
                            <dt>Presentational</dt>
                            <dd>Often used for simply rendering a small chunk of code to the dom.</dd>
                            <dt>No 'this' keyword</dt>
                            <dd>Unlike class components, functional ones don't use 'this'.</dd>
                            <dt>No state</dt>
                            <dd>These are 'dumb' components for UI.</dd>
                            <dt>return()</dt>
                            <dd>Must return a single element.</dd>
                        </dl>
                    </div>
                    <hr />
                    <h1>Challenge</h1>
                <Row>
                    <ArrowFunction />
                    <RegularFunction />
                </Row>
                </div>
            </Container>
        </div>

    );
}

export default FunctionalComponentDemo;

const RegularFunction = function () {
    return (       
        <Col xs="6">
            <Card>
                <img height="280px" width="100%" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="Card cap" />
                <CardBody>
                    <CardTitle>Regular Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText>const RegularFunction = function()</CardText>
                    <Button>Button Text</Button>
                </CardBody>
            </Card>
        </Col>
    );
}

const ArrowFunction = () => {
    return (
        <Col xs="6">
            <Card>
                <img height="280px" width="100%" src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg" alt="Card cap" />
                <CardBody>
                    <CardTitle>Fat Arrow</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText>const ArrowFunction = () =></CardText>
                    <Button>Button Text</Button>
                </CardBody>
            </Card>
        </Col>
    );
}       