import {
    AutoComplete,
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
  } from 'antd';
  
  const FormItem = Form.Item;
  const Option = Select.Option;
  const AutoCompleteOption = AutoComplete.Option;
  
  const residences = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake'
            }
          ]
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men'
            }
          ]
        }
      ]
    }
  ];
  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: []
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(
          domain => `${value}${domain}`
        );
      }
      this.setState({ autoCompleteResult });
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
  
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));
  
      return (
        <Row>
        <Col sm={16}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="UUID" {...formItemLayout} >
            {getFieldDecorator('UUID', {
              rules: [
                {
                  required: true,
                  message: "UUID degeri boş bırakılamaz"
                }    
              ]
            })(<Input placeholder="UUID değerini giriniz." />)}
          </FormItem>
          <FormItem label="MAJOR:" {...formItemLayout} >
            {getFieldDecorator('MAJOR', {
              rules: [
                {
                  required: true,
                  message: "MAJOR degeri boş bırakılamaz"
                }    
              ]
            })(<Input placeholder="MAJOR değerini giriniz." />)}
          </FormItem>
          <FormItem label="MINOR" {...formItemLayout} >
            {getFieldDecorator('MINOR', {
              rules: [
                {
                  required: true,
                  message: "MINOR degeri boş bırakılamaz"
                }    
              ]
            })(<Input placeholder="MINOR değerini giriniz." />)}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" >
              Cihaz Ekle
            </Button>
          </FormItem>
        </Form>
        </Col>
        </Row>
      );
    }
  }
  
  export default Form.create()(RegistrationForm);
  