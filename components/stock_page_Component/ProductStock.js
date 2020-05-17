import { Card, Col, Row, message, Popconfirm, Icon, notification } from "antd";
import { Button } from "antd";
import React, { Component } from "react";
import Media from "react-media";

import { getConnectionLink } from "../../lib/connector";
import { connect } from "react-redux";
import * as authActions from "../../redux/actions/authActions";
import { bindActionCreators } from "redux";
import * as stockViewActions from "../../redux/actions/stockViewActions";
import * as profileViewActions from "../../redux/actions/profileViewActions";
import * as stockRemoveActions from "../../redux/actions/stockRemoveActions";
import * as stockEditActions from "../../redux/actions/stockEditActions";

import StockEditModal from "./StockEditModal";
import Router from "next/router";
import { STOCK_REMOVE } from "../../redux/actions/actionTypes";
import { isThisSecond } from "date-fns";

// const error = () => {
//   message.error("Bu sayfaya girme iznine sahip değilsiniz");
// };

class ProductStock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      loaded: false,
      visible: false,
      stockmodal: [],
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  };

  componentDidMount() {
    // setTimeout(() => {
    //   if(this.props.profileData.role_lvl !=5)
    //   {
    //     Router.push("/homepage") 
    //   }
    // }, 700);
    
    if (this.props.currentToken != "") {
      if (this.props.stock_data == "") {
        var paramsNames = ["token"];
        var paramsValues = [this.props.currentToken];
        var obj = getConnectionLink(
          "stocks",
          paramsNames,
          paramsValues,
          "POST"
        );
        this.props.actions.StockViewPage(obj);
      } else {
        this.setState(
          { stocks: this.props.stock_data, loaded: true },
          function() {
          }
        );
      }
    } else {
      setTimeout(() => {
        var paramsNames = ["token"];
        var paramsValues = [this.props.currentToken];
        var obj = getConnectionLink(
          "stocks",
          paramsNames,
          paramsValues,
          "POST"
        );
        this.props.actions.StockViewPage(obj);
      }, 500);
    }
  }
  componentDidUpdate() {
    if (this.props.stock_data != "" && !this.state.loaded) {
      this.setState(
        { stocks: this.props.stock_data, loaded: true },
        function() {
        }
      );
    }
  }

  deleteStock = (stock) => {
    if (stock != "") {
      var stockId = stock.id;
      var paramsNames = ["id", "type"];
      var paramsValues = [stockId, "beacon"];
      var obj = getConnectionLink(
        "deleteitem",
        paramsNames,
        paramsValues,
        "POST"
      );
      this.props.actions.removeStock(obj);

      notification["success"]({
        message: stock.uuid + " Başarıyla Silindi",
        description: "Major: " + stock.major + " " + "MINOR: " + stock.minor,
        placement: "bottomRight",
      });
      setTimeout(() => {
        window.location.reload(false);
      }, 700);
    }
  };

  editStock = (stock) => {
    {notification["success"]({
      message: stock.uuid + " Seçildi",
      description: "Major: " + stock.major + " " + "MINOR: " + stock.minor,
      placement: "bottomRight",
    });}
    this.setState({ stockmodal: stock });
    this.setState({visible : true})
  };

  buttons = (stock) => {
    return (
      <div>
        <Button type="primary" style={{marginRight:"5px"}} onClick={() => {this.editStock(stock); this.showModal()}}><Icon type="edit-o"></Icon></Button>
        <Popconfirm
          placement="top"
          title="Silmek istediğinize emin misiniz?"
          onConfirm={() => this.deleteStock(stock)}
          okText="Sil"
          okType="danger"
          cancelText="Vazgeç"
          icon={<Icon type="close-circle-o" style={{ color: "red" }} />}
          placement="bottom"
        >
          <Button type="primary" style={{backgroundColor:"#f5222d"}}>
            <Icon type="close-o" />
          </Button>
        </Popconfirm>
      </div>
    );
  };

  render() {
    var stockListPage =[];
    if(this.state.stocks.length != 0)
    {
      stockListPage.push(
      <div key="1"><Row>
        {this.state.stocks.map((stock, i) => (
          <div key={i}>
            <Col md={12} lg={8} style={{ padding: 5 }}>
              <Card style={{ marginTop: "10px" }} extra={this.buttons(stock)}
              actions={[
                 <p>(Beacon Tipi : {stock.type})</p> 
              ]}>
                <h2 style={{ marginBottom: "10px" }}>CİHAZ X</h2>
                <Row className="a">
                  <Col lg={24} md={24}>
                    <p>
                      <strong>UUID:</strong> {stock.uuid}
                    </p>
                  </Col>
                  <Col lg={24} md={24}>
                    <p>
                      <strong>MAJOR:</strong> {stock.major}
                    </p>
                  </Col>
                  <Col lg={24} md={24}>
                    <p>
                      <strong>MINOR:</strong> {stock.minor}
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </div>
        ))}
        {" "}
      </Row></div>)
    }
    else
    {
      stockListPage.push(<div key="2"><Card><h1 style={{textAlign:"center"}}>Şuan hiçbir ürün yok.</h1></Card></div>)
    }
    return (
      <div className="stockListPage" style={{ padding: 5 }}>
        {stockListPage}
        <StockEditModal
        wrappedComponentRef={this.saveFormRef}
        visible={this.state.visible}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
        stockData={this.state.stockmodal}
        stockEdit={this.props.actions.stockEdit}
        currentToken={this.props.currentToken}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stock_data: state.stockViewReducer,
    currentToken: state.authReducer,
    profileData: state.profileViewReducer,
    stockRemove: state.stockRemoveReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      StockViewPage: bindActionCreators(
        stockViewActions.StockViewPage,
        dispatch
      ),
      loginUser: bindActionCreators(authActions.loginUser, dispatch),
      profilePage: bindActionCreators(
        profileViewActions.ProfileInformation,
        dispatch
      ),
      removeStock: bindActionCreators(
        stockRemoveActions.stockRemovePage,
        dispatch
      ),
      stockEdit: bindActionCreators(
        stockEditActions.stockEditPage,
        dispatch
      ),
      
    },
  };
}
//actions aldik*/

export default connect(mapStateToProps, mapDispatchToProps)(ProductStock);
