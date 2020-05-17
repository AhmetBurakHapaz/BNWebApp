import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Modal,
  Radio,
  Tabs,
  Avatar,
  Upload,
  Icon,
  
} from "antd";
import { Image } from "react-feather"
import { Eye, Mail, Triangle, User ,Key} from "react-feather";
//import Link from "next/link";
import Router from "next/router";
import { List, message ,Select} from "antd";
import { getConnectionLink } from "../../lib/connector";



const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

const success = () => {
  message.success("Başarıyla kaydedildi.");
};

const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },

  mapPropsToFields(props) {
    return {
      uuid: Form.createFormField({
        ...props.uuid,
        value: props.uuid.value,
      }),
      major: Form.createFormField({
        ...props.major,
        value: props.major.value,
      }),
      minor: Form.createFormField({
        ...props.minor,
        value: props.minor.value,
      }),
      type: Form.createFormField({
        ...props.type,
        value: props.type.value,
      }),
    };
  },
  onValuesChange(_, values) {
  },

})((props) => {
  const { getFieldDecorator, validateFields } = props.form;

  function submit(err, values) 
  {
    if (!err)
    {
      var id = props.stockData.id;
      var paramsNames = ["uuid", "minor","major","id","type","token"];
      var paramsValues = [values.uuid,values.minor,values.major,id,values.type,props.currentToken];
       var obj = getConnectionLink(
         "updatebeacon",
         paramsNames,
         paramsValues,
         "POST"
      );
      props.stockEdit(obj)
    } 
  }
  return (
    <Form
      layout="vertical"
      onSubmit={(e) => {
        e.preventDefault();
        validateFields((err, values) => submit(err, values));
      }}
    >
      <FormItem label={"UUID"}>
        {getFieldDecorator("uuid", {
          rules: [
            {
              required: true,
              message: "UUID alanı boş bırakılamaz.",
            },
          ],
        })(
          <Input
            prefix={
              <Key
                size={16}
                strokeWidth={1}
                style={{ color: "rgba(0,0,0,.25)" }}
              />
            }
            type="text"
            placeholder="UUID"
          />
        )}
      </FormItem>
      <FormItem label="MAJOR">
        {getFieldDecorator("major", {
          rules: [
            {
              required: true,
              message: "Major alanı boş bırakılamaz.",
            },
          ],
        })(
          <Input
            prefix={
              <Key
                size={16}
                strokeWidth={1}
                style={{ color: "rgba(0,0,0,.25)" }}
              />
            }
            type="text"
            placeholder="MAJOR"
          />
        )}
      </FormItem>
      
      <FormItem label="MINOR">
        {getFieldDecorator("minor", {
          rules: [
            {
              required: true,
              message: "Minor alanı boş bırakılamaz.",
            },
          ],
        })(
          <Input
            prefix={
              <Key
                size={16}
                strokeWidth={1}
                style={{ color: "rgba(0,0,0,.25)" }}
              />
            }
            type="text"
            placeholder="MINOR"
          />
        )}
      </FormItem>
      <FormItem label="Ürün Tipi:"  >
        {getFieldDecorator("type", {
          rules: [
            {
              required: true,
              message: "Ürün Tipi boş bırakılamaz",
            },
          ],
        })(
          <Select placeholder="Ürün Tipini Seçiniz.">
            <Option value="1">Tasma</Option>
            <Option value="2">Bileklik</Option>
            <Option value="3">Anahtarlık</Option>
            <Option value="4">Kalemlik</Option>
          </Select>
        )}
      </FormItem>
      <FormItem
        wrapperCol={{
          xs: { span: 12, offset: 12 },
          sm: { span: 7, offset: 17 },
        }}
      >
        <Button type="primary" htmlType="submit">
          Bilgileri Güncelleştir
        </Button>
      </FormItem>
    </Form>
  );
});

class StockEditModal extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        uuid: {
          value: null,
        },
        major: {
          value: null,
        },
        minor: {
          value: null,
        },
      },
    };
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if((prevState.fields.uuid.value==null) && nextProps.visible){
    return {
      fields: {
        uuid: {
          value: nextProps.stockData.uuid,
        },
        major: {
          value: nextProps.stockData.major,
        },
        minor: {
          value: nextProps.stockData.minor,
        },
        type: {
          value: nextProps.stockData.type,
        },
      },
    }
    }
    else return null;
 }

 
  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };

  componentDidUpdate()
  {
     
  }

  render() {
    const { visible, onCancel, onCreate } = this.props;
    const fields = this.state.fields;
    return (
      <Modal
        title={this.props.stockData.uuid}
        visible={visible}
        onCancel={()=>{
        onCancel()
        this.setState({
          fields: {
            uuid: {
              value: null,
            },
            major: {
              value: null,
            },
            minor: {
              value: null,
            },
            type: {
              value: null,
            },
          },
        })
        }}
        onOk={onCreate}
        width="600px"
        footer={null}
      >
        <CustomizedForm
          {...fields}
          stockData = {this.props.stockData}
          onChange={this.handleFormChange}
          stockEdit={this.props.stockEdit}
          currentToken={this.props.currentToken}
        />
      </Modal>
    );
  }
}
export default StockEditModal;
