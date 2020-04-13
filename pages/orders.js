import Header from '../components/styles/Header'
import { Card, Col, Row, } from 'antd'
import { Component } from 'react'
import OrderOne from '../components/orderpage_Component/OrderOne'

class orderPage extends Component {
    render() {
        return (
        <div>
          <Header> </Header>
            <Row gutter={16} id="components-button-demo">
                <Col lg={6} md={12}>
                    <Card bodyStyle={{ padding: 0 }} style={{ marginBottom:'20px'}}>
                        <OrderOne/>
                    </Card>   
                    <Card bodyStyle={{ padding: 0 }} style={{ marginBottom:'20px'}}>
                        <OrderOne/>
                    </Card> 
                </Col>
                <Col lg={6} md={12}>
                    <Card bodyStyle={{ padding: 0 }} style={{ marginBottom:'20px'}}>
                        <OrderOne/>
                    </Card> 
                    <Card bodyStyle={{ padding: 0 }} style={{ marginBottom:'20px'}}>
                        <OrderOne/>
                    </Card> 
                </Col>
                <Col lg={6} md={12}>
                    <Card bodyStyle={{ padding: 0 }} style={{ marginBottom:'20px'}}>
                        <OrderOne/>
                    </Card> 
                    <Card bodyStyle={{ padding: 0 }} style={{ marginBottom:'20px'}}>
                        <OrderOne/>
                    </Card> 
                </Col>
                <Col lg={6} md={12}>
                    <Card bodyStyle={{ padding: 0 }} style={{ marginBottom:'20px'}}>
                        <OrderOne/>
                    </Card> 
                    <Card bodyStyle={{ padding: 0 }} style={{ marginBottom:'20px'}}>
                        <OrderOne/>
                    </Card> 
                </Col>
                
            </Row>
        </div>
          
        );
      }
    }
    
export default orderPage