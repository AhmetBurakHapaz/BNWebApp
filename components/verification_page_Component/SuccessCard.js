import { Row, Card, Button } from "antd";
import PropTypes from "prop-types";
import { getConnectionLink } from "../../lib/connector";
import { connect } from "react-redux";
import Link from "next/link";
import * as authActions from "../../redux/actions/authActions";
import { bindActionCreators } from "redux";
import * as registerControlActions from "../../redux/actions/registerControlActions";
import React, { Component } from "react";
import { CheckCircle, AlertCircle } from 'react-feather';
import Router from "next/router"


class SuccessCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: props.token,
      loaded: false
    };
  }

  componentDidMount() {
    if (this.props.token != "" ) {
        var paramsNames = ["token"];
        var paramsValues = [this.props.token];
        var obj = getConnectionLink(
            "registercontrol",
            paramsNames,
            paramsValues,
            "GET"
        );
        this.props.actions.registerControlPage(obj);  
    }
    setTimeout(() => {
      Router.push("/homepage") 
    }, 3000);
}

componentDidUpdate() {
      
}



  render() {

    var verification = [];
    if (this.props.token != "" && this.props.token != null) {
      verification=
            <Card >
              <Row style={{ textAlign: "center" }}>
                    <CheckCircle size={100} strokeWidth={1} color={'green'} />
                    <br/><br/><br/><br/>
                <strong><h3>Kayıt Başarılı Şekilde Gerçekleştirildi!</h3></strong>
                <br/><br/>
                <h5> 3 Saniye Sonra Ana Sayfaya Yönlendirileceksiniz!</h5>
                
                <br/><br/><br/><br/>
                <Button type="primary" href="/homepage" > Anasayfaya Git! </Button>
                <br/><br/>
              </Row>
            </Card>;
             
   
      }
     else {
      verification =  
      <Card >
      
        <Row style={{ textAlign: "center" }}>
          <AlertCircle size={100} strokeWidth={1} color={'red'} />
          <br/><br/><br/><br/>
          <strong><h3>Kaydınız Gerçekleştirilirken Bir Hata Oluştu!</h3></strong>
          <br/><br/>
          <h5>Lütfen Tekrar Deneyin!</h5>
          <br/><br/><br/><br/>
          <Button type="primary" href="/homepage" > Anasayfaya Git! </Button>
          <br/><br/>
        </Row>
    </Card>;
    }
    return (
      <div>
        {verification}
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      
  };
}
function mapDispatchToProps(dispatch) {
  return {
      actions: {
        registerControlPage: bindActionCreators(registerControlActions.registerControlPage, dispatch),
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessCard);
