import { Component } from 'react'
import StatCard from '../components/shared/StatCard';
import {
    Smartphone,
    PhoneCall,
    Mail,
    MapPin
  } from 'react-feather';
  import {
    AutoComplete,
    Select,
    Col,
    Row,
    Card,
    Input,
    Divider,
    Button,
    Form
  } from 'antd';
  import { theme } from '../components/styles/GlobalStyles';
import { getConnectionLink } from "../lib/connector";
import { connect } from "react-redux";
import * as authActions from "../redux/actions/authActions";
import { bindActionCreators } from "redux";
import * as contactFormActions from "../redux/actions/contactFormActions";
import * as profileViewActions from '../redux/actions/profileViewActions'
import Router from "next/router"


    const FormItem = Form.Item;
    const Option = Select.Option;
    const AutoCompleteOption = AutoComplete.Option;
      
      const { TextArea } = Input;
      
      const MY_API = 'AIzaSyBgD23YwqAJet9vHzbUinYYaodOiff8y30'
      let _url = `https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=41.117255,29.003810`
       
    const ContactForm = Form.create()(
    
        class extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                contact: "",
                loaded: false,
              };
            }
          handleSubmit = (err,values)  => {
            if (!err) {
              var paramsNames = ["email","msg","name","surname","title"];
              var paramsValues = [email.value,msg.value,user_name.value,user_surname.value,title.value];
               var obj = getConnectionLink(
                 "contactmail",
                 paramsNames,
                 paramsValues,
                 "POST"
               );
              this.props.contactFormPage(obj);
        
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
                    <Card title="İletişim Formu" style={{ margin:'30px'}}>

                         <Form style={{maxWidth:'80%'}} onSubmit={(e) => {
                      e.preventDefault();
                      form.validateFields((err, values) => this.handleSubmit(err, values));
                        }}>
                                
                                <FormItem label="İsim:" {...formItemLayout}>
                            {getFieldDecorator("user_name", {
                              rules: [
                                {
                                  required: true,
                                  message: "İsminiz boş bırakılamaz",
                                },
                              ],
                            })(<Input placeholder="İsminizi giriniz." 
                            onChange={e => {
                              this.setState({ [e.target.name]: e.target.value });
                            }}/>)}
                          </FormItem>
                          <FormItem label="Soyisim:" {...formItemLayout}>
                            {getFieldDecorator("user_surname", {
                              rules: [
                                {
                                  required: true,
                                  message: "Soyisminiz boş bırakılamaz",
                                },
                              ],
                            })(<Input placeholder="Soyisminizi giriniz." 
                            onChange={e => {
                              this.setState({ [e.target.name]: e.target.value });
                            }}/>)}
                          </FormItem>
                          <FormItem label="Email:" {...formItemLayout}>
                            {getFieldDecorator("email", {
                              rules: [
                                {
                                  required: true,
                                  message: "Email boş bırakılamaz",
                                },
                              ],
                            })(<Input placeholder="Emailinizi giriniz." 
                            onChange={e => {
                              this.setState({ [e.target.name]: e.target.value });
                            }}/>)}
                          </FormItem>
                          <FormItem label="Konu:" {...formItemLayout}>
                            {getFieldDecorator("title", {
                              rules: [
                                {
                                  required: true,
                                  message: "Konu boş bırakılamaz",
                                },
                              ],
                            })(<Input placeholder="Konunuzu giriniz." 
                            onChange={e => {
                              this.setState({ [e.target.name]: e.target.value });
                            }}/>)}
                          </FormItem>
                          <FormItem label="Mesajınız:" {...formItemLayout}>
                            {getFieldDecorator("msg", {
                              rules: [
                                {
                                  required: true,
                                  message: "Mesajınız boş bırakılamaz",
                                },
                              ],
                            })(<TextArea rows={4} placeholder="Metininizi Giriniz" 
                            onChange={e => {
                              this.setState({ [e.target.name]: e.target.value });
                            }}/>)}
                          </FormItem>
                          <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                              {" "}
                              GÖNDER{" "}
                            </Button>
                          </FormItem>
                        </Form>
                    </Card>   
                </div>
              );
            }
          }
        );
class Contact extends Component {
    render() {
        return (
        <div>
        <Row gutter={16} id="components-button-demo">
            <Card bodyStyle={{ padding: 0 }} style={{ marginBottom:'20px'}}>

                     <iframe frameBorder="20" style={{ width: "100%", height: "500px"}} 
                            src={_url}>
                        </iframe>   
                    
                </Card> 
            <Row gutter={16} style={{margin:"20px"}}>
            <Col xs={24} sm={12} md={6} >
            <StatCard
                type="fill"
                title="Telefon"
                value={'0(212) 212 12 12'}
                icon={<PhoneCall size={20} strokeWidth={1} />}
                color={theme.primaryColor}
            />
            </Col>
            <Col xs={24} sm={12} md={6}>
            <StatCard
                type="fill"
                title="Mail"
                value={"info@beninkinerede.com.tr"}
                icon={<Mail size={20} strokeWidth={1} />}
                color={theme.darkColor}
            />
            </Col>
            <Col xs={24} sm={12} md={6}>
            <StatCard
                type="fill"
                title="Adres"
                value={"Hacıbekir Sok No:12 İstanbul"}
                icon={<MapPin size={20} strokeWidth={1} />}
                color={theme.warningColor}
            />
            </Col>
            <Col xs={24} sm={12} md={6}>
            <StatCard
                type="fill"
                title="GSM"
                value={"0533 333 33 33"}
                icon={<Smartphone size={20} strokeWidth={1} />}
                color={theme.errorColor}
            />
            </Col>
        </Row>
        <Row>
           

        </Row>

        <ContactForm
                contactFormPage={this.props.actions.contactFormPage}
                currentToken={this.props.currentToken}>
        </ContactForm>
            
        </Row>

        </div>
          
        );
      }
    }   
    function mapStateToProps(state) {
        return {
          contact_data: state.contactFormReducer,
          currentToken: state.authReducer,
        };
      }
      function mapDispatchToProps(dispatch) {
        return {
          actions: {
            contactFormPage: bindActionCreators(contactFormActions.contactFormPage, dispatch),
          },
        };
      }  
export default connect(mapStateToProps, mapDispatchToProps)(Contact);