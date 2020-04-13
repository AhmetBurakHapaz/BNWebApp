import Header from '../../components/styles/Header'
import { Card, Col, Row, Input, Select,Button } from 'antd'
import { Component } from 'react'

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Shopping_Card extends Component {
    render() {
        return (
        <div>
            <Header></Header>
            <h1 style={{textAlign:'center', marginBottom:'40px'}}>SEPETİ ONAYLA</h1>
            <Card bodyStyle={{ padding: '20px' }} style={{ marginBottom:'20px'}}>
            <Row gutter={16} id="components-button-demo">
                <Col lg={8} md={16}>
                   
                        <h3 style={{ marginBottom:'20px'}}>Fatura Bilgileri</h3>
                        <label>İsim:</label>
                        <Input style={{ marginBottom:'20px'}} placeholder="İsim " />
                        <label>Adres:</label>
                        <Input style={{ marginBottom:'20px'}} placeholder="Adres " />
                        <label>Ülke:</label>
                            <Select defaultValue="türkiye" style={{ width: 450, marginBottom:'20px' }} onChange={handleChange}>
                            <Option value="türkiye">Türkiye</Option>
                            <Option value="amaringa">Amaringa</Option>
                            <Option value="ruskisuka">Ruski Suka</Option>
                            </Select>
                        
                        <Row>
                            <Col lg={12} md={8}>
                            <label>Şehir:</label>
                            <Select defaultValue="istanbul" style={{ width: 200, marginBottom:'20px' }} onChange={handleChange}>
                            <Option value="istanbul">İstanbul</Option>
                            <Option value="ankara">Ankara</Option>
                            <Option value="izmir">İzmir</Option>
                            </Select>
                            </Col>
                            <Col lg={12} md={8}>
                            <label>Posta Kodu:</label>
                            <Input style={{ marginBottom:'20px'}} placeholder="Posta Kodu " />
                            </Col>
                        </Row>
                    
                </Col>
                <Col lg={8} md={16}>

                    <h3 style={{ marginBottom:'20px'}}>Kredi Kartı Bilgileri</h3>
                    <label>Kart Numarası:</label>
                    <Input style={{ marginBottom:'20px'}} placeholder="Kart Numarası " />
                    <label>Kartın Üzerindeki İsim:</label>
                    <Input style={{ marginBottom:'20px'}} placeholder="İsim " />
                    <label>Son Tarihi:</label>
                    <Row>
                            <Col lg={12} md={8}>
                            
                            <Select defaultValue="05" style={{ width: 220, marginBottom:'20px' }} onChange={handleChange}>
                            <Option value="05">05</Option>
                            <Option value="06">06</Option>
                            <Option value="07">07</Option>
                            </Select>
                            </Col>
                            <Col lg={12} md={8}>
                            <Select defaultValue="21" style={{ width: 220, marginBottom:'20px' }} onChange={handleChange}>
                            <Option value="21">21</Option>
                            <Option value="22">22</Option>
                            <Option value="23">23</Option>
                            </Select>
                            
                            </Col>
                        </Row>
                    <label>CCV:</label>
                    <Input style={{ marginBottom:'20px'}} placeholder="CCV " />
                    
                    
                </Col>
                <Col lg={8} md={16}>
                    <h3 style={{marginBottom:'20px'}}>Sepet</h3>
                    <Card bodyStyle={{ padding: '20px' }} style={{ marginBottom:'20px'}}>
                    Tasma - 99.99
                    </Card>
                    <Card bodyStyle={{ padding: '20px' }} style={{ marginBottom:'20px'}}>
                    Tasma - 99.99
                    </Card>
                    <Card bodyStyle={{ padding: '20px' }} style={{ marginBottom:'20px'}}>
                    Bileklik - 99.99
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginTop:'200px'}}>
                <Col lg={3} md={16}>
                <h3>Ödeme Tutarı: </h3>
                </Col>
                <Col lg={2} md={16}>
                <h1>1299</h1>
                </Col>
                <Col lg={3} md={16}>
                <h5>TL </h5>
                </Col>
                <Col lg={3} md={16}>
                
                </Col>
                


            </Row>
            <div style={{textAlign:'right'}}>
                <Button type="primary">SEPETi ONAYLA</Button>
                </div>

        </Card>
        </div>
        
          
        );
      }
    }
    
export default Shopping_Card