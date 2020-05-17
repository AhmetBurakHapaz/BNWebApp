import {
    AutoComplete,
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Card,
    message
} from 'antd';
import PropTypes from "prop-types";
import { getConnectionLink } from "../../lib/connector";
import { connect } from "react-redux";
import * as authActions from "../../redux/actions/authActions";
import { bindActionCreators } from "redux";
import * as addDeviceActions from "../../redux/actions/addDeviceActions";
import * as profileViewActions  from '../../redux/actions/profileViewActions'
import Router from "next/router"
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const ProductForm = Form.create()(
  class  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            device:"",
            loaded: false,
        };
    }
    componentDidMount() {
        
          if(this.props.currentToken != "") {
        if (this.props.device_data == "") {
            var paramsNames = [];
            var paramsValues = [];
            var obj = getConnectionLink(
                "addbeacon",
                paramsNames,
                paramsValues,
                "POST"
            );
            this.props.actions.addDevicePage(obj);
            this.props.device_data;
        }
        else {
            this.setState({ devices: this.props.device_data, loaded: true }, function () {
            });

        }
    }
    else
    {
        if (this.props.device_data == "") {
            var paramsNames = [];
            var paramsValues = [];
            var obj = getConnectionLink(
                "addbeacon",
                paramsNames,
                paramsValues,
                "POST"
            );
            this.props.actions.addDevicePage(obj);
            this.props.device_data;
        }
        setTimeout(() => {
            if(this.props.currentToken == "")
            {
            Router.push("/404")
            }
            else
            {
              if(this.props.profiledata != "")
              {
                if(this.props.profiledata.role_lvl != 5)
                {
                    Router.push("/404")
                }
              }
            }
            }, 600);       
        }
    }
    componentDidUpdate() {
        if (this.props.device_data != "" && !this.state.loaded) {
            this.setState({ devices: this.props.device_data, loaded: true }, function () {
  
            });
        }
    }    
 
  
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              var paramsNames = ["type","uuid", "major", "minor", "token"];
              var paramsValues = [values.type,uuid.value, major.value, minor.value,this.props.currentToken];
              var obj = getConnectionLink("addbeacon", paramsNames, paramsValues, "POST");
              this.props.addDevicePage(obj);
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
                        <Card title="CİHAZ EKLE" >
                            <Row>
                                <Col sm={16}>
                                <Form onSubmit={this.handleSubmit}>
                                <FormItem label="Ürün Tipi:" {...formItemLayout} hasFeedback>
                                            {getFieldDecorator('type', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: "Ürün Tipi boş bırakılamaz"
                                                    }
                                                ]
                                            })( <Select name="type" placeholder="Ürün Tipini Seçiniz." >
                                            <Option value="0">Tasma</Option>
                                            <Option value="1">Bileklik</Option>
                                            <Option value="2">Anahtarlık</Option>
                                            <Option value="3">Kalemlik</Option>
                                          </Select>)}
                                        </FormItem>
                            <FormItem label="UUID" {...formItemLayout} >
                                {getFieldDecorator('uuid', {
                                    rules: [
                                        {
                                            required: true,
                                            message: "UUID degeri boş bırakılamaz"
                                        }
                                    ]
                                })(<Input placeholder="UUID değerini giriniz." />)}
                            </FormItem>
                            <FormItem label="MAJOR:" {...formItemLayout} >
                                {getFieldDecorator('major', {
                                    rules: [
                                        {
                                            required: true,
                                            message: "MAJOR degeri boş bırakılamaz"
                                        }
                                    ]
                                })(<Input placeholder="MAJOR değerini giriniz." />)}
                            </FormItem>
                            <FormItem label="MINOR" {...formItemLayout} >
                                {getFieldDecorator('minor', {
                                    rules: [
                                        {
                                            required: true,
                                            message: "MINOR degeri boş bırakılamaz"
                                        }
                                    ]
                                })(<Input placeholder="MINOR değerini giriniz." />)}
                            </FormItem>
                            <FormItem {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" > Cihaz Ekle </Button>
                            </FormItem>
                        </Form>
                                </Col>
                            </Row>
                        </Card>
                    </div>
  
  
        );
    }
  }
)

class ProductsAdd extends React.Component{
  render(){
    return(
    <ProductForm
        addDevicePage = {this.props.actions.addDevicePage}
      currentToken = {this.props.currentToken}
      profiledata = {this.props.profile_data}
    >      
    </ProductForm>);
    }
}

function mapStateToProps(state) {
  return {
      device_data: state.addDeviceReducer,
      currentToken: state.authReducer,
      profile_data : state.profileViewReducer,
    };
}
function mapDispatchToProps(dispatch) {
  return {
      actions: {
        addDevicePage: bindActionCreators(addDeviceActions.addDevicePage, dispatch),
        profilePage: bindActionCreators(profileViewActions.ProfileInformation, dispatch), 
      }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsAdd);