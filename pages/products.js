import Header from "../components/styles/Header";
import { Card, Col, Row } from "antd";
import { Component } from "react";
import ProductList from "../components/products_page_Component/ProductList";

class products extends Component {
  render() {
    return (
      <div>
        <ProductList />
      </div>
    );
  }
}

export default products;
