import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/Hero.css';

function Hero() {
    return (

        // Main Container
        <header className="d-flex justify-content-center align-items-center
            text-white text-center" style={{ height: '80vh' }}>

            {/* Background image */}
            <div className="w-100 h-100" 
                style={{ 
                    background: 'url(images/pic2.jpg) no-repeat center/cover', 
                    filter: 'brightness(40%)'
                }}>
            </div>
            
            {/* Overlay Content */}
            <Container className="position-absolute p-5">
                <Row>
                    <Col>
                        <h1 className="display-3 fw-bold">THE FUTURE OF AI</h1>
                        <p className="lead">
                            Artificial Intelligence is revolutionizing industries across the globe. 
                            From healthcare to automation, AI's potential is limitless.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary"  size="lg" className="my-gradient-btn me-2 mb-3" 
                        href='https://www.digitalocean.com/resources/articles/ai-blogs' target='self'>
                        Explore the Future</Button>

                        <Button variant="outline-light" size="lg" 
                        href='https://www.digitalocean.com/resources/articles/ai-blogs' target='self'>
                        Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Hero;