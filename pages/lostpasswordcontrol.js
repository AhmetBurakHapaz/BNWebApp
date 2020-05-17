import Header from "../components/styles/Header";
import { Card, Col, Row, Form } from "antd";
import React, { Component } from "react";
import LostPasswordSuccessCard from "../components/verification_page_Component/LostPasswordSuccessCard";

class lostpasswordcontrol extends React.Component {
  static getInitialProps ({ query: { token , email} }) {
    return { token: token, email: email }
  }
  render() {
    return (
      <div>
        <LostPasswordSuccessCard
        token = {this.props.token}
        email = {this.props.email}  />
        
      </div>
    );
  }
}

export default lostpasswordcontrol;