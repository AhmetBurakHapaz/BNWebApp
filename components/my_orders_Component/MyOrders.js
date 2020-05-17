import { Collapse, Card, Col, Row, Steps, Button } from "antd";
import { Clock } from 'react-feather';
import React, { Component } from "react";
import { getConnectionLink } from "../../lib/connector";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as myOrdersActions from "../../redux/actions/myOrdersActions";
import Router from "next/router";
import moment from "moment";
import 'moment/locale/tr';

const Panel = Collapse.Panel;
const Step = Steps.Step;
var deger = 3;
const status1 = "Siparişiniz Hazırlanıyor"
const status2 = "Sipariş Kargoya Verildi"

class myOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myOrders: [],
      loaded: false,
    };
  }
  dateTime = (date) =>{
    date=moment(date).format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = moment();
    let minute =currentDate.diff(date, 'minutes')
    let hour =currentDate.diff(date, 'hours')
    let day =currentDate.diff(date, 'days')
    let week =currentDate.diff(date, 'weeks')
    if(minute<60)
    {
      return minute+" dakika önce"
    }
    else if(hour<24)
    {
      let time = minute%60;
      return hour +" saat " + time + " dakika önce"
    }
    else if(day<7)
    {
      return day+" gün önce"
    }
    else
    {
      return week+" hafta önce"
    }
  }
  componentDidMount() {
    setTimeout(() => {
      if (this.props.profile != "" && this.props.profile != undefined) {
        if (this.props.myOrders == "") {
          var userId = this.props.profile.user_id;
          var paramsNames = ["userId"];
          var paramsValues = [userId];

          var obj = getConnectionLink(
            "myorders",
            paramsNames,
            paramsValues,
            "POST"
          );
          setTimeout(() => {
            this.props.actions.myOrdersPage(obj);
          }, 500);
        } else {
          this.setState(
            {
              myOrders: this.props.myOrders,
              loaded: true,
            },
            function() {}
          );
        }
      }
    }, 700);
  }
  componentDidUpdate() {
    if (this.props.myOrders != "" && !this.state.loaded) {
      this.setState(
        {
          myOrders: this.props.myOrders,
          loaded: true,
        },
        function() {
        }
      );
    }
  }
  description = (order,i) => {
    return (
      <Row>
        <Col md={3}>
          <Card
            bodyStyle={{ padding: 0 }}
            actions={null}
            body={null}
            cover={
              <img
                alt="example"
                src="https://www.patidogclub.com/wp-content/uploads/2017/12/yavru-kopekler-icin-tasma-egitimi.jpg"
              />
            }
          >
            {null}
          </Card>
        </Col>
        <Col md={1}>
          <div></div>
        </Col>
        <Col md={16}>
          <p
            style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}
          >
            Sipariş {i+1} {order.orders.map((myOrderOne) => (
              myOrderOne.ProductName + " " + myOrderOne.Quantity + " (Adet) "
              ))}
          </p>
          <p style={{ marginTop: "10px", fontSize: "13px" }}>
            Sipariş detayı: {order.order_status == 0 ? (status2) : (order.order_status == 1 ? (status2):(status2))}
          </p>
        </Col>
        <Col md={3}>
          <div>
            <p>{this.dateTime(order.time)}</p>
            <h1 style={{ fontSize: "18px", margin: "auto" }}>
              Toplam Fiyat= {order.total_price} TL
            </h1>
          </div>
        </Col>
      </Row>
    );
  };

  metin = (order,i) => {
    if (order.order_status+2 == 2) {
      return (
        <div>
          <p style={{ fontSize: "20px", marginTop: "5px" }}>
            Siparişiniz kargoya verildi. XXXXXXXXX takip numarasıyla durumunu
            kontrol edebilirsiniz.
          </p>
          <Button type="primary">Siparişinizi Sorgulamak İçin</Button>
        </div>
      );
    }
  };

  text = (order,i) => {
    return (
      <Row>
        <Col md={24}> </Col>
        <Col lg={2} xl={4}>
          {" "}
        </Col>
        <Col sm={24} lg={20} xl={16}>
          <div style={{ margin: "auto", position: "relative" }}>
            <Steps current={order.order_status+2}>
              <Step title="Siparişiniz Alındı" description="Onay bekleniyor" />
              <Step
                title="Siparişiniz Onaylandı"
                description="Siparişiniz Kargoya Verildi"
              />
            </Steps>
          </div>
        </Col>
        <Col md={24}>
          <Col md={3} lg={5}></Col>
          <Col md={18} lg={14}>
            {this.metin(order)}
          </Col>
          <Col md={3} lg={5}></Col>
        </Col>
      </Row>
    );
  };

  render() 
  {
    return (
      <Row>
        <Col md={2} lg={3} sm={24} xs={24}></Col>
        <Col md={20} lg={18} sm={24} xs={24}>
          <Collapse bordered={false} /*defaultActiveKey={["1"]}*/>
            {this.state.myOrders.map((order,i) => (
              <Panel showArrow={false} header={this.description(order,i)} key={i+1}>
                {this.text(order,i)} 
              </Panel>
            ))}
          </Collapse>
        </Col>
      </Row>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentToken: state.authReducer,
    profile: state.profileViewReducer,
    myOrders: state.myOrdersReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      myOrdersPage: bindActionCreators(myOrdersActions.myOrdersPage, dispatch), //
    },
  };
}
//actions aldik

export default connect(mapStateToProps, mapDispatchToProps)(myOrders);
