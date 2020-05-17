import {
    AutoComplete,
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Card,
    Message
  } from 'antd';
  import PropTypes from "prop-types";
  import { getConnectionLink } from "../../lib/connector";
  import { connect } from "react-redux";
  import * as authActions from "../../redux/actions/authActions";
  import { bindActionCreators } from "redux";
  import * as passwordResetActions from '../../redux/actions/passwordResetActions'
  import * as profileViewActions  from '../../redux/actions/profileViewActions'
  import Router from "next/router";
  import Link from 'next/link';
import styled from 'styled-components';
import { Mail } from 'react-feather';

  const Content = styled.div`
  max-width: 400px;
  z-index: 2;
  min-width: 300px;
`; 
  const FormItem = Form.Item;
  const Option = Select.Option;
  const AutoCompleteOption = AutoComplete.Option;
  const ProductForm = Form.create()(
    class  extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              email:"",
              
          };
      }

      handleSubmit = e => {
          e.preventDefault();
          this.props.form.validateFieldsAndScroll((err, values) => {
              if (!err) {
                var paramsNames = ["email"];
                var paramsValues = [email.value];
                var obj = getConnectionLink("lostpassword", paramsNames, paramsValues, "POST");
                this.props.passwordResetPage(obj);
              }
              else{
                error();
              }
          });
      };
  
      render() {
          const { getFieldDecorator } = this.props.form;
          const { autoCompleteResult } = this.state;
  
          const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 }
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 }
            }
          };
          const formItemSelectLayout = {
              labelCol: {
                xs: { span: 24 },
                sm: { span: 10 }
              },
              wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 }
              }
            };
          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0
              },
              sm: {
                span: 16,
                offset: 8
              }
            }
          };
          const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86'
          })(
            <Select style={{ width: 70 }}>
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>
          );
          return (
            <div>
                  <Row
                    type="flex"
                    align="middle"
                    justify="center"
                    className="px-3 bg-white"
                    style={{ minHeight: '100vh' }}
                    >
                    <Content>
                    <div className="text-center mb-5">
                        <Link href="/forgot">
                        <a className="brand mr-0">
                            <img src="../static/images/bnLogo.png" style={{maxWidth:"150px",maxHeigth:"150px" }} alt="logo"/>
                        </a>
                        </Link>
                        <h5 className="mb-0 mt-3">Şifre Sıfırlama Sayfası</h5>

                        <p className="text-muted">Şifre Sıfırlamak İçin Email Adresinizi Giriniz.</p>
                    </div>

                    <Form
                        layout="vertical"
                        onSubmit={this.handleSubmit}
                    >
                        <FormItem label="Email">
                        {getFieldDecorator('email', {
                            rules: [
                            {
                                type: 'email',
                                message: 'Lütfen E-mail Adresi Formatında Giriniz!'
                            },
                            {
                                required: true,
                                message: 'E-mail Adresi Boş Bırakılamaz!'
                            }
                            ]
                        })(
                            <Input
                            prefix={
                                <Mail
                                size={16}
                                strokeWidth={1}
                                style={{ color: 'rgba(0,0,0,.25)' }}
                                />
                            }
                            type="email"
                            placeholder="Email"
                            />
                        )}
                        </FormItem>

                        <FormItem>
                        <Button type="primary" htmlType="submit" block>
                            ŞİFREYİ SIFIRLA
                        </Button>
                        </FormItem>

                        <div className="text-center">
                        <small className="text-muted text-center">
                            <span>Hesabınız Yok Mu?</span>
                            <Link href='/signup'><a>Hemen Kayıt Olun!</a></Link>
                        </small>
                        </div>
                    </Form>
                    </Content>
                </Row>
                          
            </div>
  
  
          );
      }
    }
  )
  
  class ForgotPassword extends React.Component{
    render(){
      return(
      <ProductForm
        passwordResetPage = {this.props.actions.passwordResetPage}
      >
      </ProductForm>);
      }
  }
  
  function mapStateToProps(state) {
    return {
        email_data: state.passwordResetReducer,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
        actions: {
          passwordResetPage: bindActionCreators(passwordResetActions.passwordResetPage, dispatch),}
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);