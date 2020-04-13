import { Button, Form, Input, Modal, Radio, Tabs, Select } from "antd";
import {
  Eye,
  HelpCircle,
  Mail,
  Triangle,
  User,
  PhoneCall
} from "react-feather";
import ModalLogin from "./login-form";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import LogModal from "./login-form";
import md5 from "md5";
import { getConnectionLink } from "../../lib/connector";

const FormItem = Form.Item;
const registerModal = Form.create()(
  class extends React.Component {
    submit(err) {
      if (!err) {
        var paramsNames = ["email", "password", "password_again"];
        //console.log(this.state.email)
        var passhash = md5(registerpassword.value);
        var pass_againhash = md5(registerpassword_again.value);
        var paramsValues = [registeremail.value, passhash, pass_againhash];
        console.log(registeremail.value);
        var obj = getConnectionLink(
          "register",
          paramsNames,
          paramsValues,
          "POST"
        );
        this.props.Register(obj); //deneme
        //location.reload()
        //Router.push("/iletisim")
      }
    }

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

      const prefixSelector = getFieldDecorator("prefix", {
        initialValue: "90"
      })(
        <Select style={{ width: 70 }}>
          <Option value="90">+90</Option>
        </Select>
      );
      return (
        <Form
          layout="vertical"
          onSubmit={e => {
            e.preventDefault();
            form.validateFields((err, values) => this.submit(err));
          }}
        >
          <FormItem label="İsim Giriniz">
            {" "}
            {form.getFieldDecorator(
              "registername",
              {}
            )(
              <Input
                prefix={
                  <User
                    size={16}
                    strokeWidth={1}
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                type="text"
                placeholder="İsim Giriniz"
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            )}{" "}
          </FormItem>
          <FormItem label="Soyisim Giriniz">
            {" "}
            {form.getFieldDecorator(
              "registersurname",
              {}
            )(
              <Input
                prefix={
                  <User
                    size={16}
                    strokeWidth={1}
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                type="text"
                placeholder="Soyisim Giriniz"
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            )}{" "}
          </FormItem>
          <FormItem label="Email Giriniz">
            {" "}
            {form.getFieldDecorator("registeremail", {
              rules: [
                {
                  type: "email",
                  message: "Lütfen doğru email giriniz."
                },
                {
                  required: true,
                  message: "Lütfen email giriniz."
                }
              ]
            })(
              <Input
                prefix={
                  <Mail
                    size={16}
                    strokeWidth={1}
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                type="email"
                placeholder="Email Giriniz"
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            )}{" "}
          </FormItem>{" "}
          <FormItem label="Telefon Giriniz">
            {" "}
            {form.getFieldDecorator("registerphone", {
              rules: [
                {
                  type: "tel",
                  message: "Lütfen doğru telefon numarası giriniz."
                },
                {
                  required: true,
                  message: "Lütfen telefon numarası giriniz."
                },
                {
                  validator: (rule, value, callback) => {
                    if (value.length && value !== 11) {
                      callback("Doğru sayıda giriniz");
                    } else {
                      callback();
                    }
                  }
                }
              ]
            })(
              <Input
                addonBefore={prefixSelector}
                style={{ width: "100%" }}
                type="tel"
                placeholder="Telefon numarası giriniz"
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            )}{" "}
          </FormItem>{" "}
          <FormItem label="Şifre Giriniz">
            {" "}
            {form.getFieldDecorator("registerpassword", {
              rules: [{ required: true, message: "Lütfen şifre giriniz." }]
            })(
              <Input
                prefix={
                  <Eye
                    size={16}
                    strokeWidth={1}
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                type="password"
                placeholder="Şifre Giriniz"
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            )}{" "}
          </FormItem>{" "}
          <FormItem label="Şifreyi Tekrar Giriniz">
            {" "}
            {form.getFieldDecorator("registerpassword_again", {
              rules: [
                {
                  required: true,
                  message: "Lütfen şifreyi tekrar giriniz."
                },
                {
                  validator: (rule, value, callback) => {
                    if (
                      value &&
                      value !== form.getFieldValue("registerpassword")
                    ) {
                      callback("Şifreler Eşleşmiyor!");
                    } else {
                      callback();
                    }
                  }
                }
              ]
            })(
              <Input
                prefix={
                  <Eye
                    size={16}
                    strokeWidth={1}
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                type="password"
                placeholder="Şifreyi Tekrar Giriniz"
                onChange={e => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            )}{" "}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" block>
              Sign up{" "}
            </Button>{" "}
          </FormItem>{" "}
        </Form>
      );
    }
  }
);
export default registerModal;
