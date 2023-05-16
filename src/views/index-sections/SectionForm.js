import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Table,

  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

function SectionForm() {
  return (
    <>
      <div className="main">
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label style={{color: "black", fontSize: "14px",fontWeight: "500"}}>Sub name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>

                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder=" " type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label style={{color: "black", fontSize: "14px",fontWeight: "500"}}>Full name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder=" " type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col md="6">
                    <label style={{color: "black", fontSize: "14px",fontWeight: "500"}}>Number of Agents</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="" type="text" />
                    </InputGroup>
                  </Col>
                  <Col md="6">
                    <label style={{color: "black", fontSize: "14px",fontWeight: "500"}}>CPUs</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="" type="text" />
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                <Col md="6">
                  <label style={{color: "black", fontSize: "14px",fontWeight: "500"}}>RAM(Gi)</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="" type="text" />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label style={{color: "black", fontSize: "14px",fontWeight: "500"}}>Disk(Gi)</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="" type="text" />
                  </InputGroup>
                </Col>
                </Row>
                <Row>
                <Col md="6">
                  <label style={{color: "black", fontSize: "14px",fontWeight: "500"}}>Agent Definition</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="" type="text" />
                  </InputGroup>
                </Col>
                <Col md="6">
                  <label style={{color: "black", fontSize: "14px",fontWeight: "500"}}>Version</label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="" type="text" />
                  </InputGroup>
                </Col>
              </Row>
                  {/* <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row> */}
                </Form>
              </Col>
            </Row>
            
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionForm;
