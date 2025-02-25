import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Domain.css'; 

function Domain() {
  return (
    <Container fluid>
      <div>
        <h1 style={{color:'blue',fontSize:'50px', textAlign:'center'}}>Choose Course</h1>
      </div>
      <Row className="mb-4">
        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="pythonn.jpg" className="card-img" />
            <Card.Body className="card-text">
              <Card.Title>Introduction to Python Programming</Card.Title>
              <Card.Text>
                Learn the basics of Python programming language,Popular and Easy to learn
              </Card.Text>
              <Button variant="primary" href="/pythoncourse">View course</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="c.jpg" className="card-img" />
            <Card.Body>
              <Card.Title>C Programming Basics</Card.Title>
              <Card.Text>
                Introduction to the C programming language for system programming and application development.'
              </Card.Text>
              <Button variant="primary" href="croadmap">View course</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="cp.jpg" className="card-img" />
            <Card.Body>
              <Card.Title>C++ Programming Fundamentals</Card.Title>
              <Card.Text>
                Get started with C++ programming language, covering basic syntax and object-oriented concepts 
              </Card.Text>
              <Button href="CPlusPlusCourse" variant="primary">View Course</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="java.jpg" className="card-img" />
            <Card.Body>
              <Card.Title>Java Programming Fundamentals</Card.Title>
              <Card.Text>
                Learn the basics of Java programming language and object-oriented programming concepts.
              </Card.Text>
              <Button href="/Javacourse" variant="primary">View Course</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
      <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="ml.jpg" className="card-img" />
            <Card.Body>
              <Card.Title>Machine Learning Essentials</Card.Title>
              <Card.Text>
              Explore the fundamentals of machine learning and data science
               </Card.Text>
              <Button href="/MachineLearningcourse" variant="primary">View Course</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="ai.jpg" className="card-img" />
            <Card.Body>
              <Card.Title>Artificial Intelligence Fundamentals</Card.Title>
              <Card.Text>
              Introduction to Artificial Intelligence concepts, algorithms, and applications
               </Card.Text>
              <Button href="/AICourse" variant="primary">View Course</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="data.jpg" className="card-img" />
            <Card.Body>
              <Card.Title>Data Structures and Algorithms</Card.Title>
              <Card.Text>
              Dive deeper into fundamental data structures and algorithms for problem-solving.
               </Card.Text>
              <Button href="/DSACourse" variant="primary">View Course</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="nlp.jpg" className="card-img" />
            <Card.Body>
              <Card.Title>Natural Language Processing (NLP) with Python'</Card.Title>
              <Card.Text>
              Explore NLP techniques and libraries in Python for text analysis and natural language understanding.
               </Card.Text>
              <Button href="/NLPCourse" variant="primary">View Course</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
      <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="reactjs.jpg" className="card-img" />
            <Card.Body>
              <Card.Title>Reactjs</Card.Title>
              <Card.Text>
              Get started with ReactJS to build dynamic, interactive user interfaces.
               </Card.Text>
              <Button href="/ReactJSCourse" variant="primary">View Course</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="devops.jpg" className="card-img" />
            <Card.Body>
              <Card.Title>DevOps Essentials</Card.Title>
              <Card.Text>
              Learn about DevOps principles, tools, and practices for software development and deployment.
               </Card.Text>
              <Button href="/DevOpsCourse" variant="primary">View Course</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="web.jpg" className="card-img" />
            <Card.Body>
              <Card.Title>Web Development </Card.Title>
              <Card.Text>
              Get started with HTML, CSS, and JavaScript for web development
               </Card.Text>
              <Button href="/WebDevelopmentCourse" variant="primary">View Course</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100">
            <Card.Img variant="top" src="spring.png" className="card-img" />
            <Card.Body>
              <Card.Title>Spring Boot</Card.Title>
              <Card.Text>
              Become proficient in Backend web development using Spring Boot.
               </Card.Text>
              <Button href="/SpringCourse" variant="primary">View Course</Button>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
      
      
    </Container>
  );
}

export default Domain;
