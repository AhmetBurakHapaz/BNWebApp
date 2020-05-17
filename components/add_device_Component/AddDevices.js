import {
    AutoComplete,
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Card
} from 'antd';
import PropTypes from "prop-types";
import { getConnectionLink } from "../../lib/connector";
import { connect } from "react-redux";
import * as authActions from "../../redux/actions/authActions";
import { bindActionCreators } from "redux";
import * as addDeviceActions from "../../redux/actions/addDeviceActions";

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
        if (this.props.device_data == "") {
            var paramsNames = [];
            var paramsValues = [];
            var obj = getConnectionLink(
                "adddevice",
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
              var paramsNames = ["uuid", "major", "minor", "token"];
              var paramsValues = [uuid.value, major.value, minor.value,this.props.currentToken];
              var obj = getConnectionLink("adddevice", paramsNames, paramsValues, "POST");
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
    >
      
    </ProductForm>);
    }
}

function mapStateToProps(state) {
  return {
      device_data: state.addDeviceReducer,
      currentToken: state.authReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
      actions: {
        addDevicePage: bindActionCreators(addDeviceActions.addDevicePage, dispatch),
      }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsAdd);