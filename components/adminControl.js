import React, { Component } from "react";
import PropTypes from "prop-types";

import { Button, Col, Input, Card, Row } from "antd";

//importlar
import { getConnectionLink } from "../../lib/connector";
import { connect } from "react-redux";
import * as authActions from "../../redux/actions/authActions";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import { Pagination } from "antd";

const { Meta } = Card;

const numEachPage = 20;
const defaultPageSize = 10;
// function ProductList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

class productList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loaded: false,
      minValue: 0,
      maxValue: 20,
    };
  }
  componentDidMount() {
    if (this.props.product_data == "") {
      var paramsNames = [];
      var paramsValues = [];
      var obj = getConnectionLink(
        "products",
        paramsNames,
        paramsValues,
        "POST"
      );
      this.props.actions.ProductPage(obj);
      this.props.product_data;
    } else {
      this.setState(
        { products: this.props.product_data, loaded: true },
        function() {
        }
      );
    }
  }
  componentDidUpdate() {
    if (this.props.product_data != "" && !this.state.loaded) {
      this.setState(
        { products: this.props.product_data, loaded: true },
        function() {
        }
      );
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = (value) => {
    this.setState({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
    });
  };

  render() {
    var productlist = [];
    let products = this.state.products;
    return (
      <div className="productPage" style={{ padding: 5 }}>
        <div className="productlist">
          {products &&
            products.length > 0 &&
            products
              .slice(this.state.minValue, this.state.maxValue)
              .map((val) => (
                <div key={val.product_id}>
                  <Col lg={6} md={12}>
                    <Card
                      bodyStyle={{ padding: 5 }}
                      style={{ marginBottom: "20px", margin: 10 }}
                    >
                      <div float="center">
                        <Card
                          cover={
                            <img
                              alt="example"
                              src="https://www.patidogclub.com/wp-content/uploads/2017/12/yavru-kopekler-icin-tasma-egitimi.jpg"
                            />
                          }
                          actions={[
                            <Button type="primary" >
                              <a >Sepete Ekle</a>   
                            </Button>,
                          ]}
                        >
                          <Meta
                            style={{ textAlign: "center" }}
                            title={val.product_description}
                            description={val.product_name}
                          />
                          <br></br>
                          <div className="price-container">
                            <h2>${val.product_price}</h2>
                          </div>
                          <Button type="primary" >
                              Sepete Ekle
                            </Button>
                        </Card>
                      </div>
                    </Card>
                  </Col>
                </div>
              ))}
        </div>


        <div className="pagination" style={{textAlign:'center'}}>
          <Row>
            <Col md={24} lg={24}>
          <Pagination
            total={products.length}
            // showTotal={(total, range) =>
            //   `${range[0]}-${range[1]} of ${total} items`
            // }
            defaultPageSize={numEachPage}
            defaultCurrent={1}
            onChange={this.handleChange}
          />
          </Col>
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    product_data: state.productlistReducer,
    currentToken: state.authReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ProductPage: bindActionCreators(productActions.ProductPage, dispatch),
      loginUser: bindActionCreators(authActions.loginUser, dispatch),
    },
  };
}
//actions aldik

export default connect(mapStateToProps, mapDispatchToProps)(productList);
