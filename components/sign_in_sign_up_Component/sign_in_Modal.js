import React, { Component } from "react";
import { Button, Form, Input, Modal, Radio, Tabs } from "antd";
import { Eye, Mail, Triangle, User } from "react-feather";
import Link from "next/link";
import Sing from "./signup";
import Router from "next/router";
import md5 from "md5";
import { getConnectionLink } from "../../lib/connector";
import { message } from "antd";

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

const warning = () => {
  message.warning("Lütfen tüm zorunlu alanları doldurun.");
};
const success = () => {
  message.success("Başarıyla Giriş Yapıldı.");
};

const error = () => {
  message.error("This is a message of error");
};

const UserModal = Form.create()(
  class extends React.Component {
    constructor(props){
      super(props);
      this.state={
        visible:false,
        logged:false,
      }
      const visible = this.props.visible;
      this.setState({visible},function(){
        visible = this.state;
      });
    }
    submit(err) {
      if (!err) {
        var paramsNames = ["email", "password"];
        //console.log(this.state.email)
        var hash = md5(password.value);
        console.log(hash);
        var paramsValues = [email.value, hash];
        //console.log(email.value);
        var obj = getConnectionLink("login", paramsNames, paramsValues, "POST");
        this.props.loginUser(obj);
        //location.reload()
        //Router.push("/iletisim")
      } else {
        warning();
      }
    }

    componentDidUpdate(prevProps) {
      if(prevProps.visible!=this.props.visible && (this.props.currentToken == "" || !this.state.logged)){
        const visible= this.props.visible;
        this.setState({visible})
      } else if(this.props.currentToken != "" && !this.state.logged){
        console.log("giris ypatin andaval");
        console.log(this.props.currentToken)
        this.setState({visible:false,logged:true});
      }
    }
    render() {
      const { onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={this.state.visible}
          footer={null}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Kullanıcı Girişi" key="1">
              <Form
                layout="vertical"
                onSubmit={e => {
                  e.preventDefault();
                  form.validateFields((err, values) => this.submit(err));
                }}
              >
                <FormItem label="Email">
                  {form.getFieldDecorator("email", {
                    rules: [
                      {
                        type: "email",
                        message: "The input is not valid E-mail!"
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!"
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
                      placeholder="Email"
                      onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                      }}
                    />
                  )}
                </FormItem>

                <FormItem label="Password">
                  {form.getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your Password!"
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
                      placeholder="Password"
                      onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                      }}
                    />
                  )}
                </FormItem>

                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    className="mt-3"
                  >
                    Log in
                  </Button>
                </FormItem>
              </Form>
            </TabPane>
            <TabPane tab="Kayıt Ol" key="2">
              <Sing />
            </TabPane>
          </Tabs>
        </Modal>
      );
    }
  }
);
export default UserModal;
