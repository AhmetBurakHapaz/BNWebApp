import { Card , Button} from 'antd';
import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as authActions  from '../../redux/actions/authActions'
import * as logoutActions  from '../../redux/actions/logoutActions'

import { bindActionCreators } from "redux";
import Router from 'next/router'


class Deneme extends Component {
  
  constructor(props) 
  {
    super(props);
  }
  
  componentDidMount() 
    {
    //this.props.actions.logoutUser();
    }
    logOut()
    {
      //debugger;
      this.props.actions.logoutUser();
      //Router.push("/homepage")
    }
    componentWillUnMount() 
    {
    }
  render() {
      return(
              <Card>
              <div>
                <Button onClick={() => this.logOut()}>{this.props.currentToken}</Button>
                </div>
              </Card>
      )
  }
}

function mapStateToProps(state) {
  return {
      currentToken : state.authReducer,
  };
}
//actions aldik
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logoutUser: bindActionCreators(logoutActions.logoutUser, dispatch)
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Deneme);