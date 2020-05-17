import {
  AutoComplete,
  Button,
  Card,
  Form,
  Input,
  Tabs,
  Select,
  Row,
  Col,
  notification,
} from "antd";
import TextArea from "antd/lib/input/TextArea";

import { getConnectionLink } from "../../lib/connector";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Pagination } from "antd";
import * as notificationToCommunityActions from "../../redux/actions/notificationToCommunityActions";
import * as notificationToEveryoneActions from "../../redux/actions/notificationToEveryoneActions";
import * as notificationToPersonActions from "../../redux/actions/notificationToPersonActions";
import * as notificationIdListActions from "../../redux/actions/notificationIdListActions";
import Router from "next/router"


const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const CustomizedForm1 = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      title1: Form.createFormField({
        ...props.title1,
        value: props.title1.value,
      }),
      text1: Form.createFormField({
        ...props.text1,
        value: props.text1.value,
      }),
      subject1: Form.createFormField({
        ...props.subject1,
        value: props.subject1.value,
      }),
      notifType1: Form.createFormField({
        ...props.notifType1,
        value: props.notifType1.value,
      }),
    };
  },
  onValuesChange(_, values) {
  },
})((props) => {
  const { getFieldDecorator, validateFields } = props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
  };
  const formItemBLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };

  const formItemtextLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
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
        offset: 2,
      },
    },
  };

  function submit(err, values) {
    if (!err) {
      var id = "All";
      var userId = "";
      var type = 6;
      var paramsNames = ["msg" , "id", "userId", "title","importanceType","type" ];
      var paramsValues = [ values.text1, id, userId , values.title1, values.notifType1, type];
      var obj = getConnectionLink("notifications", paramsNames, paramsValues, "POST");
      props.notificationToEveryone(obj);

    }
  }
  return (
    <Form
      style={{ padding: 20 }}
      onSubmit={(e) => {
        e.preventDefault();
        validateFields((err, values) => submit(err, values));
      }}
    >
      <FormItem label="Başlık: " {...formItemLayout}>
        {getFieldDecorator("title1", {
          rules: [
            {
              required: true,
              message: "Başlık Boş Bırakılamaz.",
            },
          ],
        })(<Input placeholder="Başlık Giriniz." />)}
      </FormItem>
      <Row>
        <Col span={12}>
          <FormItem label="Konu: " {...formItemBLayout}>
            {getFieldDecorator("subject1")(
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
            {getFieldDecorator("notifType1", {
              rules: [
                {
                  required: true,
                  message: "Lütfen Bildirim Tipini Seçiniz.",
                },
              ],
            })(
              <Select placeholder="Bildirim Tipini Seçin.">
                <Option value="0">Uyarı</Option>
                <Option value="1">Güncelleme</Option>
                <Option value="2">Kampanya</Option>
              </Select>
            )}
          </FormItem>
        </Col>
      </Row>
      <FormItem label="Metin: " {...formItemtextLayout}>
        {getFieldDecorator("text1",{
          rules: [
            {
              required: true,
              message: "Metin boş bırakılamaz.",
            },
          ],
        })(<TextArea placeholder="Metin Giriniz." />)}
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Bildirim Gönder
        </Button>
      </FormItem>
    </Form>
  );
});

const CustomizedForm2 = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      title2: Form.createFormField({
        ...props.title2,
        value: props.title2.value,
      }),
      text2: Form.createFormField({
        ...props.text2,
        value: props.text2.value,
      }),
      subject2: Form.createFormField({
        ...props.subject2,
        value: props.subject2.value,
      }),
      notifType2: Form.createFormField({
        ...props.notifType2,
        value: props.notifType2.value,
      }),
      select_type2: Form.createFormField({
        ...props.select_type2,
        value: props.select_type2.value,
      }),
      group_type2: Form.createFormField({
        ...props.group_type2,
        value: props.group_type2.value,
      }),
    };
  },
  onValuesChange(_, values) {
  },
})((props) => {
  const { getFieldDecorator, validateFields } = props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
  };
  const formItemBLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };

  const formItemtextLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
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
        offset: 2,
      },
    },
  };

  function submit2(err, values) {
    if (!err) {
      var id = "null";
      var userId = "";
      var paramsNames = ["msg" , "id", "userId", "title","importanceType","type" ];
      var paramsValues = [ values.text2, id, userId , values.title2, values.select_type2, values.group_type2];

       var obj = getConnectionLink("notifications", paramsNames, paramsValues, "POST");
       props.notificationToCommunity(obj);
    }
  }
  return (
    <Form
      style={{ padding: 20 }}
      onSubmit={(e) => {
        e.preventDefault();
        validateFields((err, values) => submit2(err, values));
      }}
    >
      <Row>
        <Col span={12}>
          <FormItem label="Başlık: " {...formItemBLayout}>
            {getFieldDecorator("title2",{
              rules: [
                {
                  required: true,
                  message: "Lütfen Başlık Giriniz",
                },
              ],
            })(
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
            {getFieldDecorator("select_type2", {
              rules: [
                {
                  required: true,
                  message: "Lütfen Bildirim Tipini Seçiniz.",
                },
              ],
            })(
              <Select placeholder="Bildirim Tipini Seçin.">
                <Option value="0">Uyarı</Option>
                <Option value="1">Güncelleme</Option>
                <Option value="2">Kampanya</Option>
              </Select>
            )}
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <FormItem label="Konu: " {...formItemBLayout}>
            {getFieldDecorator("subject2")(
              <Input placeholder="Konu giriniz." />
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem {...formItemSelectLayout} label="Grup Tipi: " hasFeedback>
            {getFieldDecorator("group_type2", {
              rules: [
                {
                  required: true,
                  message: "Lütfen Grup Tipini Seçiniz.",
                },
              ],
            })(
              <Select placeholder="Grup Tipini Seçin.">
                <Option value="0">Tasma</Option>
                <Option value="1">Bileklik</Option>
                <Option value="2">Anahtarlık</Option>
                <Option value="3">Kalemlik</Option>
              </Select>
            )}
          </FormItem>
        </Col>
      </Row>
      <FormItem label="Metin: " {...formItemtextLayout}>
        {getFieldDecorator("text2",{
              rules: [
                {
                  required: true,
                  message: "Lütfen Metin Giriniz.",
                },
              ],
            })(<TextArea placeholder="Metin Giriniz." />)}
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Bildirim Gönder
        </Button>
      </FormItem>
    </Form>
  );
});

const CustomizedForm3 = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      title3: Form.createFormField({
        ...props.title3,
        value: props.title3.value,
      }),
      text3: Form.createFormField({
        ...props.text3,
        value: props.text3.value,
      }),
      subject3: Form.createFormField({
        ...props.subject3,
        value: props.subject3.value,
      }),
      notifType3: Form.createFormField({
        ...props.notifType3,
        value: props.notifType3.value,
      }),
      people: Form.createFormField({
        ...props.people,
        value: props.people.value,
      }),
      select_type3: Form.createFormField({
        ...props.select_type3,
        value: props.select_type3.value,
      }),
    };
  },
  onValuesChange(_, values) {

  },
})((props) => {
  const { getFieldDecorator, validateFields } = props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
  };
  const formItemBLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };

  const formItemtextLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
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
        offset: 2,
      },
    },
  };

  function submit3(err, values) {
    if (!err) {
      var users = props.notificationIdList.users.find(c=>c.user_id ===values.people)
      var type = 6;

      var paramsNames = ["msg" , "id", "userId", "title","importanceType","type" ];
      var paramsValues = [ values.text3, users.push_id, users.user_id , values.title3, values.select_type3, type];
       
       var obj = getConnectionLink("notifications", paramsNames, paramsValues, "POST");
       props.notificationToPerson(obj);
    }
  }
  return (
    <Form
      style={{ padding: 20 }}
      onSubmit={(e) => {
        e.preventDefault();
        validateFields((err, values) => submit3(err, values));
      }}
    >
      <Row>
        <Col span={12}>
          <FormItem label="Kişi Seç: " {...formItemBLayout} hasFeedback>
            {getFieldDecorator("people", {
              rules: [
                {
                  required: true,
                  message: "Kişi alanını atlamayınız.",
                },
              ],
            })(
              <Select placeholder="Kişi Seçiniz">
                {props.notificationIdList.users.map((user, i) => (
                <Option key={i} value={user.user_id}>{user.name} {" "} {user.surname}</Option>
                ))}
              </Select>
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            {...formItemSelectLayout}
            label="Bildirim Tipi: "
            hasFeedback
          >
            {getFieldDecorator("select_type3", {
              rules: [
                {
                  required: true,
                  message: "Lütfen Bildirim Tipini Seçiniz.",
                },
              ],
            })(
              <Select placeholder="Bildirim Tipini Seçin.">
                <Option value="0">Uyarı</Option>
                <Option value="1">Güncelleme</Option>
                <Option value="2">Kampanya</Option>
              </Select>
            )}
          </FormItem>
        </Col>
      </Row>
      <FormItem label="Başlık: " {...formItemLayout}>
        {getFieldDecorator("title3", {
          rules: [
            {
              required: true,
              message: "Başlık Boş Bırakılamaz.",
            },
          ],
        })(<Input placeholder="Başlık Giriniz." />)}
      </FormItem>

      <FormItem label="Metin: " {...formItemtextLayout}>
        {getFieldDecorator("text3", {
          rules: [
            {
              required: true,
              message: "Metin Boş Bırakılamaz.",
            },
          ],
        })(<TextArea placeholder="Metin Giriniz." />)}
      </FormItem>
      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Bildirim Gönder
        </Button>
      </FormItem>
    </Form>
  );
});

class Notification extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    fields: {
      title1: {
        value: "",
      },
      title2: {
        value: "",
      },
      title3: {
        value: "",
      },
      text1: {
        value: "",
      },
      text2: {
        value: "",
      },
      text3: {
        value: "",
      },
      subject1: {
        value: "",
      },
      subject2: {
        value: "",
      },
      subject3: {
        value: "",
      },
      notifType1: {
        value: "",
      },
      notifType2: {
        value: "",
      },
      notifType3: {
        value: "",
      },
      group_type1: {
        value: "",
      },
      group_type2: {
        value: "",
      },
      group_type3: {
        value: "",
      },
      select_type1: {
        value: "",
      },
      select_type2: {
        value: "",
      },
      select_type3: {
        value: "",
      },
      people: {
        value: "",
      },
    },
  };

  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };

  componentDidMount()
  {
    setTimeout(() => {
      var paramsNames = ["token"];
      var paramsValues = [this.props.currentToken];
      var obj = getConnectionLink(
        "notificationidlist",
        paramsNames,
        paramsValues,
        "POST"
      );
      this.props.actions.notificationIdList(obj);
    }, 1000);
  }

  render() {
    const fields = this.state.fields;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
    };
    const formItemBLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemtextLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
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
          offset: 2,
        },
      },
    };

    return (
      <div className="card-container">
        <Card title="Bildirim Paneli">
          <Tabs type="card" style={{ borderStyle: "groove", borderRadius: 5 }}>
            <TabPane tab="Herkese Bildirim" key="1">
              <CustomizedForm1 {...fields} onChange={this.handleFormChange} 
              notificationToEveryone = {this.props.actions.notificationToEveryone}/>
            </TabPane>
            <TabPane tab="Toplu Bildirim" key="2">
              <CustomizedForm2 {...fields} onChange={this.handleFormChange} 
              notificationToCommunity = {this.props.actions.notificationToCommunity}/>
            </TabPane>
            <TabPane tab="Kişiye Özel Bildirim" key="3">
              <CustomizedForm3 {...fields} onChange={this.handleFormChange} 
              notificationToPerson = {this.props.actions.notificationToPerson}
              notificationIdList= {this.props.notificationIdList}/>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentToken: state.authReducer,
    profiledata: state.profileViewReducer,
    notificationIdList: state.notificationIdListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      notificationToPerson: bindActionCreators(notificationToPersonActions.notificationToPersonPage, dispatch),
      notificationToEveryone: bindActionCreators(notificationToEveryoneActions.notificationToEveryonePage, dispatch),
      notificationToCommunity: bindActionCreators(notificationToCommunityActions.notificationToCommunityPage, dispatch),
      notificationIdList: bindActionCreators(notificationIdListActions.notificationIdListPage, dispatch),
    },
  };
}
//actions aldik

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
