import { Card, Col,Row } from 'antd';
import { Button, Input } from 'antd';


const OrderOne = () => (
  <Card style={{marginTop:'10px'}}>
      <h2 style={{marginBottom:'10px'}}>Sipariş X</h2>
        <p>Kullanıcı : John Doe</p>
        <p>Adres : Sallabaşı Cad. 23/4 Kadıköy/İst</p>
        <p>Posta Numarası : HASJ49FM</p>
        <p>Telefon : 0533 333 33 33</p>
        <Row>
        <Input style={{ marginTop:'20px',width:'180px'}} placeholder="UUID Giriniz " />
        <Button type="primary">
        UUID ONAYLA
      </Button>
        </Row>


  </Card>

);

export default OrderOne;