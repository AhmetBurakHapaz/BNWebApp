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
const error = () => {
  message.error("Hatalı Giriş Yapıldı!");
};
const firstVerification = () => {
  message.error("Önce Hesabınızı Aktif Ediniz!");
};

const UserModal = Form.create()(
  class extends React.Component {
    constructor(props){
      super(props);
      this.state={
        visible:false,
        logged:false,
      }
    }

    componentDidMount() {
      var visible = this.props.visible;
      this.setState({visible},function(){
        visible = this.state.visible;
      });
    }
    submit(err) {
      if (!err) {
        var paramsNames = ["email", "password","loginType"];
        var hash = md5(password.value);
        var paramsValues = [email.value, hash, "web" ];
        var obj = getConnectionLink("login", paramsNames, paramsValues, "POST");
        this.props.loginUser(obj);
      } else {
        error();
      }
    }

    componentDidUpdate(prevProps) {
      if(prevProps.visible!=this.props.visible && (this.props.currentToken == "" || !this.state.logged)){
        const visible= this.props.visible;
        this.setState({visible})
      } else if(this.props.currentToken != "" && !this.state.logged){
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
                <FormItem label="Email:">
                  {form.getFieldDecorator("email", {
                    rules: [
                      {
                        type: "email",
                        message: 'Email Bölümü Boş Bırakılamaz!'
                      },
                      {
                        required: true,
                        message: "Lütfen Email Formatında Giriniz!"
                      },
                      
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
                      placeholder="Email giriniz"
                      onChange={e => {
                        this.setState({ [e.target.name]: e.target.value });
                      }}
                    />
                  )}
                </FormItem>

                <FormItem label="Şifre:">
                  {form.getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Lütfen Şifrenizi Giriniz!"
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
                      placeholder="Şifre giriniz"
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
                    GİRİŞ YAP
                  </Button>
                </FormItem>
                <div style={{textAlign:"center"}}>
                  <a href="/forgotpassword">Şifremi Unuttum!</a>
                </div>
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
