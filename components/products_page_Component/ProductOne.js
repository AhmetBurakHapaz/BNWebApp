import { Card } from 'antd';
import { Button } from 'antd';

const { Meta } = Card;

const ProductOne = () => (
  <Card

    
    cover={
      <img
        alt="example"
        src="https://www.patidogclub.com/wp-content/uploads/2017/12/yavru-kopekler-icin-tasma-egitimi.jpg"
      />
    }
    actions={[
        <Button type="primary" block>
        SEPETE EKLE
      </Button>
      
    ]}
  >
    <Meta
      style={{textAlign:'center'}}
      title="CİHAZ X"
      description="Ürünümüz xxx ürünüdür."
    />
  </Card>

);

export default ProductOne;