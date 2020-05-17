import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import { Card, Row, Col } from "antd";

const Paragraf = () => {
  return (
    <p>
        Projeye başlamadan önce kendimize bir amaç edindik. Amacımız insanların sevdiklerinin, evcil hayvanlarının veya en önemli 
        eşyalarının kaybolmasını önlemekti. Kaybolsalar bile en yakın zamanda bulabilmeleri gerekmekteydi.
    

        Projenin temel amacı kişiler için önemli olan varlıkların kaybolmasını önlemek, kaybolan varlıkların bulunmasına yardımcı 
        olmak ve günümüz koşulları nedeniyle depremde enkaz altında kalan insanların bulunmasına yardım etmektedir. Projenin asıl 
        amaçlarının haricinde bir artısı kullanıcı dostu olmaktır. Çünkü proje içerisindeki ara yüzler, teknolojilerin etkileşime 
        geçmesi ve alış veriş sistemi mümkün olduğunca en basit düzeye indirgenmiştir.
    </p>
  );
};
const Vizyonumuz = () => {
  return (
    <p>
     Projemiz insanlara kesinlikle kaybetmek istemeyecekleri canlı\cansız varlıklarına takabilecekleri bir teknolojinin web ve mobil 
     uygulamasını sunmaktadır. Bu teknolojinin ışığında onların uzaklık kontrolü yapabilmelerini sağlamaktadır.
    </p>
  );
};
const Misyonumuz = () => {
  return (
    <p>
      Projemiz ile insanların sevdiklerini, evcil hayvanlarını ve eşyalarını kaybetmesini önlemeyi kendimize hedef kıldık. Sloganımızda
      da dediğimiz gibi: 
      "Kaybolmaya Son!"
    </p>
  );
};
class CartDetail extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
  }
  render() {
    return (
      <div>
        <Card style={{margin:"50px", padding:"30px"}}>
          <Row>
            <Col sm={16}>
              <h1 style={{marginBottom:"50px"}}>Biz Kimiz ?</h1>
              <Paragraf />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <img src="https://provega.com.tr/wp-content/uploads/2019/10/img-kurumsal.png" alt="kurumsal_image" style={{ maxWidth:"80%", maxHeight:"80%" ,marginLeft:"30px" }} />
            </Col>
          </Row>
        </Card>

        <Card style={{margin:"50px", padding:"30px"}}>
          <Row>

            <Col sm={18}>
              <h1 style={{marginBottom:"50px"}}>Vizyonumuz</h1>
              <Vizyonumuz />
            </Col>

          </Row>
        </Card>

        <Card style={{margin:"50px", padding:"30px"}}>
          <Row>

            <Col sm={18}>
              <h1 style={{marginBottom:"50px"}}>Misyonumuz</h1>
              <Misyonumuz />
            </Col>

          </Row>
        </Card>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
