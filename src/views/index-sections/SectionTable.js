import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Table,

  CardTitle,
 
  Row,
  Col
} from "reactstrap";

function SectionTable() {
  return (
    <>
      <div className="content">
      <Row >
          <Col className="ml-auto mr-auto" md="10">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4" style={{fontWeight: "normal"}}>Agent-Required Files</CardTitle>
              </CardHeader>
              <CardBody className="text-center">
                <Table className="tablesorter" responsive>
                <thead className="text-primary">
                    <tr>
                      <th style={{color:"black", fontWeight: "500"}}>File Name</th>
                      <th style={{color:"black", fontWeight: "500"}}>Description</th>
                      <th style={{color:"black", fontWeight: "500"}}>Team File</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{color:"black"}}>is_dsa</td>
                      <td style={{color:"black"}}>SSH private key</td>
                      <td style={{color:"black"}}>dc_ssh-private-key_deploys</td>
                    </tr>
                    <tr>
                      <td style={{color:"black"}}>-</td>
                      <td style={{color:"black"}}>-</td>
                      <td style={{color:"black"}}>-</td>
                    </tr>
                    <tr>
                      <td style={{color:"black"}}>-</td>
                      <td style={{color:"black"}}>-</td>
                      <td style={{color:"black"}}>-</td>
                    </tr>
                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col className="ml-auto mr-auto" md="10">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4" style={{fontWeight: "normal"}}>Agent-Required Variables</CardTitle>
              </CardHeader>
              <CardBody className="text-center">
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th style={{color:"black", fontWeight: "500"}}>Name on Agent</th>
                      <th style={{color:"black", fontWeight: "500"}}>Secret</th>
                      <th style={{color:"black", fontWeight: "500"}}>Description</th>
                      <th style={{color:"black", fontWeight: "500"}} className="text-center">Team Variable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{color:"black"}}>PROXY-USER</td>
                      <td style={{color:"black"}}><input type="checkbox" /></td>
                      <td style={{color:"black"}}>Proxy username</td>
                      <td style={{color:"black"}} className="text-center">dc_proxy-username</td>
                    </tr>
                    <tr>
                      <td style={{color:"black"}}>PROXY-PASSWORD</td>
                      <td style={{color:"black"}}><input type="checkbox" /></td>
                      <td style={{color:"black"}}>Proxy users password</td>
                      <td style={{color:"black"}} className="text-center">dc_proxy-password</td>
                    </tr>
                    
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
                          <Row style={{textAlign: "-webkit-center"}}>
                          <Col className="ml-auto mr-auto" md="12">
                      <Button style={{marginRight: "15px"}} className="btn-fill" color="info" size="md">
                        Save
                      </Button>
                      <Button className="btn-fill" color="success" size="md">
                        Deploy
                      </Button>
                      <Button style={{marginLeft: "15px"}} className="btn-fill" color="danger" size="md">
                        Delete
                      </Button></Col>
                  </Row>
      </div>
    </>
  );
}

export default SectionTable;