import Header from "../components/styles/Header";
import { Card, Col, Row, Form } from "antd";
import React, { Component } from "react";
import SuccessCard from "../components/verification_page_Component/SuccessCard";

class registercontrol extends React.Component {
  static getInitialProps ({ query: { token } }) {
    return { token: token }
  }
  render() {
    return (
      <div>
        <SuccessCard
        token = {this.props.token}  />
        
      </div>
    );
  }
}

export default registercontrol;