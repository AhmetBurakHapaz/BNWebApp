import {
    AutoComplete,
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Card,
    Divider,
    message,
  } from "antd";
  import PropTypes from "prop-types";
  import { getConnectionLink } from "../../lib/connector";
  import { connect } from "react-redux";
  import * as authActions from "../../redux/actions/authActions";
  import { bindActionCreators } from "redux";
  import * as passwordChangeActions from "../../redux/actions/passwordChangeActions";
  import md5 from 'md5';
  import Router from "next/router"
  
  const FormItem = Form.Item;
  const Option = Select.Option;
  const AutoCompleteOption = AutoComplete.Option;
  const ProductForm = Form.create()(
    
    class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          password: "",
          loaded: false,
        };
      }

      componentDidUpdate() {

      }
      
      
    handleSubmit = (err,values)  => {
      if (!err) {   
        var paramsNames = ["email", "newPass", "newPassAgain"];      
        var newPassHash = md5(newPass.value);
        var newPassAgainHash = md5(newPassAgain.value);
        var paramsValues = [this.props.email, newPassHash, newPassAgainHash];
         var obj = getConnectionLink(
           "lostpasswordchange",
           paramsNames,
           paramsValues,
           "POST"
         );
        this.props.passwordChangePage(obj);
        setTimeout(() => { 
            Router.push("/homepage")  
        }, 500); 
      }
    }    
      
      render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const { onCancel, onCreate, form } = this.props;
  
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };
        const formItemSelectLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 10 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 10 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        };
        const prefixSelector = getFieldDecorator("prefix", {
          initialValue: "86",
        })(
          <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        );
        return (
          <div>
            <Card title="ŞİFREMİ UNUTTUM SAYFASI">
              <Row>
                <Col lg={4} md={1}></Col>
                
                <Col lg={16} md={22}>
                  <Form onSubmit={(e) => {
                e.preventDefault();
                form.validateFields((err, values) => this.handleSubmit(err, values));
                  }}>
                    <FormItem label="Yeni Şifreniz:" {...formItemLayout}>
                      {getFieldDecorator("newPass", {
                        rules: [
                          {
                            required: true,
                            message: "Yeni Şifreniz boş bırakılamaz",
                          },
                          {                                    
                            pattern: "^(?=.*[A-Z])(?=.*[0-9]).{8,15}$",
                            message: "Yeni şifreniz en az 8 karakterden oluşmalı. Ayrıca 1 Büyük Harf Ve Sayı İçermeli!"
                          }
                        ],
                      })(<Input.Password placeholder="Yeni Şifrenizi giriniz." 
                      onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                      }}/>)}
                    </FormItem>
                    <FormItem label="Yeni Şifreniz (Tekrar):" {...formItemLayout}>
                      {getFieldDecorator("newPassAgain", {
                        rules: [
                          {
                            required: true,
                            message: "Yeni Şifrenizin Tekrarı boş bırakılamaz",
                          },
                          {
                            validator: (rule, value, callback) => {
                                if (value && value !== form.getFieldValue('newPass')) {
                                    callback("Şifreleriniz Uyuşmamaktadır!");
                                } else {
                                    callback();
                                }
                            }
                        }
                        ],
                      })(<Input.Password placeholder="Yeni Şifrenizi Tekrar giriniz." 
                      onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                      }}/>)}
                    </FormItem>
  
                    <FormItem {...tailFormItemLayout}>
                      <Button type="primary" htmlType="submit">
                        {" "}
                        Şifreyi Değiştir{" "}
                      </Button>
                    </FormItem>
                  </Form>
                </Col>
              </Row>
            </Card>
          </div>
        );
      }
    }
  );
  
  class PasswordChangeCard extends React.Component {
    render() {
      return (
        <ProductForm
          passwordChangePage={this.props.actions.passwordChangePage}
          currentToken={this.props.currentToken}
          email={this.props.email}

        ></ProductForm>
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
      password_data: state.passwordChangeReducer,
      email : state.emailReducer,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        passwordChangePage: bindActionCreators(passwordChangeActions.passwordChangePage, dispatch),
      },
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangeCard);
  