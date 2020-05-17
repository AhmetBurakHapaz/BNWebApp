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
  Select,
  Message,
} from "antd";
import { Image } from "react-feather";
import { Eye, Mail, Triangle, User, Key } from "react-feather";
//import Link from "next/link";
import Router from "next/router";
import { List, message } from "antd";
import { getConnectionLink } from "../../lib/connector";

const error = () => {
  Message.error("Ürün Düzenleme Sırasında Bir Hata Oluştu!");
};
const success = () => {
  Message.success("Ürün Düzenleme Başarılı Şekilde Gerçekleştirildi!");
};

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;
const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },

  mapPropsToFields(props) {
    return {
      product_id: Form.createFormField({
        ...props.product_id,
        value: props.product_id.value,
      }),
      product_name: Form.createFormField({
        ...props.product_name,
        value: props.product_name.value,
      }),
      product_description: Form.createFormField({
        ...props.product_description,
        value: props.product_description.value,
      }),
      product_price: Form.createFormField({
        ...props.product_price,
        value: props.product_price.value,
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

  function submit(err, values) {
    if (!err) 
    {
      var id = props.productData.product_id;
      var paramsNames = ["proName", "proPrice","proType","id","proDes","token"];
      var paramsValues = [values.product_name,values.product_price,values.type,id,values.product_description,props.currentToken];
      var obj = getConnectionLink(
         "updateproduct",
         paramsNames,
         paramsValues,
         "POST"
      );

      props.productEdit(obj)
      success();
    }
    else{
      error();
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
      <FormItem label={"Ürün İsmi: "}>
        {getFieldDecorator("product_name", {
          rules: [
            {
              required: true,
              message: "Ürün ismi boş bırakılamaz.",
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
            placeholder="Ürün ismi"
          />
        )}
      </FormItem>
      <FormItem label="Ürün Açıklaması: ">
        {getFieldDecorator("product_description", {
          rules: [
            {
              required: true,
              message: "Ürün açıklaması boş bırakılamaz.",
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
            placeholder="Ürün Açıklaması"
          />
        )}
      </FormItem>

      <FormItem label="Ürün Fiyatı: ">
        {getFieldDecorator("product_price", {
          rules: [
            {
              required: true,
              message: "Ürün fiyatı boş bırakılamaz.",
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
            placeholder="Ürün Fiyatı"
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
          <Select  placeholder="Ürün Tipini Seçiniz.">
            <Option value="0">Tasma</Option>
            <Option value="1">Bileklik</Option>
            <Option value="2">Anahtarlık</Option>
            <Option value="3">Kalemlik</Option>
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

class ProductEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        product_description: {
          value: null,
        },
        product_id: {
          value: null,
        },
        product_name: {
          value: null,
        },
        product_price: {
          value: null,
        },
        type: {
          value: null,
        },
      },
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.fields.product_id.value == null && nextProps.visible) {
      return {
        fields: {
          product_description: {
            value: nextProps.productData.product_description,
          },
          product_id: {
            value: nextProps.productData.product_id,
          },
          product_name: {
            value: nextProps.productData.product_name,
          },
          product_price: {
            value: nextProps.productData.product_price,
          },
          type: {
            value: nextProps.productData.type,
          },
        },
      };
    } else return null;
  }

  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };

  componentDidUpdate() {}

  render() {
    const { visible, onCancel, onCreate } = this.props;
    const fields = this.state.fields;
    return (
      <Modal
        title={this.props.productData.product_name}
        visible={visible}
        onCancel={() => {
          onCancel();
          this.setState({
            fields: {
              product_description: {
                value: null,
              },
              product_id: {
                value: null,
              },
              product_name: {
                value: null,
              },
              product_price: {
                value: null,
              },
              type: {
                value: null,
              },
            },
          });
        }}
        onOk={onCreate}
        width="600px"
        footer={null}
      >
        <CustomizedForm
          {...fields}
          onChange={this.handleFormChange}
          productData={this.props.productData}
          productEdit={this.props.productEdit}
          currentToken={this.props.currentToken}
        />
      </Modal>
    );
  }
}
export default ProductEditModal;
