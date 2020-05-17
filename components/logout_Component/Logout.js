import { Card, message, Row, Col,Spin } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";

import * as authActions from "../../redux/actions/authActions";
import * as logoutActions from "../../redux/actions/logoutActions";

import { bindActionCreators } from "redux";
import Router from "next/router";

const success = () => {
  message.success("Başarıyla Çıkış Yapıldı");
};

class Deneme extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.currentToken == "") {
        success();
        Router.push("/homepage");
      } else this.props.currentToken != "";
      {
        setTimeout(() => {
          if (this.props.currentToken != "") {
            this.props.actions.logoutUser();
            window.location.reload(false);
          }
        }, 300);
      }
    }, 400);
  }
  logOut() {
    //debugger;
    this.props.actions.logoutUser();
    //Router.push("/homepage")
  }
  componentWillUnMount() {}
  render() {
    return (
      <Row>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentToken: state.authReducer,
  };
}
//actions aldik
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logoutUser: bindActionCreators(logoutActions.logoutUser, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Deneme);
