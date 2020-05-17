import Header from "../components/styles/Header";
import { Card, Col, Row, Form } from "antd";
import { Component } from "react";
import ProductsAdd from "../components/products_page_Component/ProductsAdd";

class productAdd extends Component {
  render() {
    return (
      <div>
        <ProductsAdd />
      </div>
    );
  }
}

export default productAdd;