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
                        <OrderOne/>
                </Col>  
            </Row>
        </div>
          
        );
      }
    }
    
export default orderPage