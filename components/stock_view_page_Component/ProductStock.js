import { Card, Col,Row } from 'antd';
import { Button } from 'antd';


const ProductStock = () => (
  <Card style={{marginTop:'10px'}}>
      <h2 style={{marginBottom:'10px'}}>CİHAZ X</h2>
      <Row>
          <Col lg={3} md={16}>
            <p>MAJOR:24564437347</p>
          </Col>
          <Col lg={3} md={16}>
            <p>MINOR:24564437347</p>
          </Col>
          <Col lg={3} md={16}>
            <p>UUID:24564437347</p>
          </Col>
      </Row>

  </Card>

);

export default ProductStock;