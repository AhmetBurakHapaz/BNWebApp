import {
  AutoComplete,
  Button,
  Card,
  Form,
  Input,
  Tabs,
  Select,
  Row,
  Col
} from "antd";
import TextArea from "antd/lib/input/TextArea";

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

class Notification extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
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
        sm: { span: 2 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 }
      }
    };
    const formItemBLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    };

    const formItemtextLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
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
          offset: 2
        }
      }
    };

    return (
      <div className="card-container">
        <Card title="Bildirim Paneli">
          <Tabs type="card" style={{ borderStyle: "groove", borderRadius: 5 }}>
            <TabPane tab="Herkese Bildirim" key="1">
              <Form style={{ padding: 20 }}>
                <FormItem label="Başlık: " {...formItemLayout}>
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        required: false,
                        message: "Başlık Boş Bırakılamaz."
                      }
                    ]
                  })(<Input placeholder="Başlık Giriniz." />)}
                </FormItem>
                <Row>
                  <Col span={12}>
                    <FormItem label="Konu: " {...formItemBLayout}>
                      {getFieldDecorator("subject")(
                        <Input placeholder="Konu giriniz." />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem
                      {...formItemSelectLayout}
                      label="Bildirim Tipi: "
                      hasFeedback
                    >
                      {getFieldDecorator("select", {
                        rules: [
                          {
                            required: true,
                            message: "Lütfen Bildirim Tipini Seçiniz."
                          }
                        ]
                      })(
                        <Select placeholder="Bildirim Tipini Seçin.">
                          <Option value="warning">Uyarı</Option>
                          <Option value="update">Güncelleme</Option>
                          <Option value="campaign">Kampanya</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <FormItem label="Metin: " {...formItemtextLayout}>
                  {getFieldDecorator("text")(
                    <TextArea placeholder="Metin Giriniz." />
                  )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Bildirim Gönder
                  </Button>
                </FormItem>
              </Form>
            </TabPane>

            <TabPane tab="Toplu Bildirim" key="2">
              <Form style={{ padding: 20 }}>
                <Row>
                  <Col span={12}>
                    <FormItem label="Başlık: " {...formItemBLayout}>
                      {getFieldDecorator("title")(
                        <Input placeholder="Başlık Giriniz." />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem
                      {...formItemSelectLayout}
                      label="Bildirim Tipi: "
                      hasFeedback
                    >
                      {getFieldDecorator("select_type", {
                        rules: [
                          {
                            required: true,
                            message: "Lütfen Bildirim Tipini Seçiniz."
                          }
                        ]
                      })(
                        <Select placeholder="Bildirim Tipini Seçin.">
                          <Option value="warning">Uyarı</Option>
                          <Option value="update">Güncelleme</Option>
                          <Option value="campaign">Kampanya</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <FormItem label="Konu: " {...formItemBLayout}>
                      {getFieldDecorator("subject")(
                        <Input placeholder="Konu giriniz." />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem
                      {...formItemSelectLayout}
                      label="Grup Tipi: "
                      hasFeedback
                    >
                      {getFieldDecorator("group_type", {
                        rules: [
                          {
                            required: true,
                            message: "Lütfen Grup Tipini Seçiniz."
                          }
                        ]
                      })(
                        <Select placeholder="Grup Tipini Seçin.">
                          <Option value="warning">Aile</Option>
                          <Option value="update">Eşyacılar</Option>
                          <Option value="campaign">Köpekseverler</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <FormItem label="Metin: " {...formItemtextLayout}>
                  {getFieldDecorator("text")(
                    <TextArea placeholder="Metin Giriniz." />
                  )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Bildirim Gönder
                  </Button>
                </FormItem>
              </Form>
            </TabPane>
            <TabPane tab="Kişiye Özel Bildirim" key="3">
              <Form style={{ padding: 20 }}>
                <FormItem {...formItemLayout} label="Kişi Giriniz">
                  {getFieldDecorator("select-multiple", {
                    rules: [
                      {
                        required: true,
                        message: "Lütfen kişi giriniz/seçiniz!",
                        type: "array"
                      }
                    ]
                  })(
                    <Select mode="multiple" placeholder="Kişi Giriniz/Seçiniz.">
                      <Option value="red">Red</Option>
                      <Option value="green">Green</Option>
                      <Option value="blue">Blue</Option>
                    </Select>
                  )}
                </FormItem>

                <FormItem label="Başlık: " {...formItemLayout}>
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        required: false,
                        message: "Başlık Boş Bırakılamaz."
                      }
                    ]
                  })(<Input placeholder="Başlık Giriniz." />)}
                </FormItem>

                <FormItem label="Konu: " {...formItemLayout}>
                  {getFieldDecorator("subject")(
                    <Input placeholder="Konu giriniz." />
                  )}
                </FormItem>

                <FormItem label="Metin: " {...formItemtextLayout}>
                  {getFieldDecorator("text")(
                    <TextArea placeholder="Metin Giriniz." />
                  )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Bildirim Gönder
                  </Button>
                </FormItem>
              </Form>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Notification);
