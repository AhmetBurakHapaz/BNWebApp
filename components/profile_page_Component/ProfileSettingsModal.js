//importlar
import React, { Component } from "react";
import { Button, Form, Input, Modal, Tabs, Avatar, Upload, Icon } from "antd";
import { Image } from "react-feather";
import { Eye, Mail, Triangle, User } from "react-feather";
import { List, message } from "antd";
import { getConnectionLink } from "../../lib/connector";

const success = () => {
  message.success("Profil Düzenleme Başarılı Bir Şekilde Gerçekleştirildi!");
};
const error = () => {
  message.error("Profil Düzenleme Sırasında bir Hata Oluştu!");
};

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const CustomizedForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },

  mapPropsToFields(props) {
    return {
      realname: Form.createFormField({
        ...props.realname,
        value: props.realname.value,
      }),
      surname: Form.createFormField({
        ...props.surname,
        value: props.surname.value,
      }),
      phone: Form.createFormField({
        ...props.phone,
        value: props.phone.value,
      }),
      dragger: Form.createFormField({
        ...props.dragger,
        value: props.dragger.value,
      }),
    };
  },
  onValuesChange(_, values) {},
})((props) => {
  const { getFieldDecorator, validateFields } = props.form;

  const normFile = (e) => {
    if (e.fileList.length <= 1) {
      if (Array.isArray(e)) {
        return e;
      }

      return e && e.fileList;
    } else {
      return null;
    }
  };
  function submit(err, values) {
    if (!err) {
      var allFiles = [];
      if (values.dragger[0] != null || values.dragger[0] != undefined) {
        let file = values.dragger[0].originFileObj;
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          let fileInfo = {
            name: file.name,
            type: file.type,
            size: Math.round(file.size / 1000) + " kB",
            base64: reader.result.replace(/^data:image.+;base64,/, ""),
            file: file,
            desc: file.name.split(/\.(?=[^\.]+$)/),
          };
          allFiles.push(fileInfo);

          var imgBase64 = allFiles[0].base64;
          var imgDesc = allFiles[0].desc[1];
          var id = props.user_id.value;
          var paramsNames = [
            "name",
            "surname",
            "phone",
            "img",
            "imgDesc",
            "id",
          ];
          var paramsValues = [
            values.realname,
            values.surname,
            values.phone,
            imgBase64,
            imgDesc,
            id,
          ];
          var obj = getConnectionLink(
            "updateprofile",
            paramsNames,
            paramsValues,
            "POST"
          );
          props.profileEditPage(obj);
          success();
          setTimeout(() => {
            window.location.reload(false);
          }, 1000);
        };
      } else {
        var imgBase64 = null;
        var imgDesc = null;
        var id = props.user_id.value;
        var paramsNames = ["name", "surname", "phone", "img", "imgDesc", "id"];
        var paramsValues = [
          values.realname,
          values.surname,
          values.phone,
          imgBase64,
          imgDesc,
          id,
        ];
        var obj = getConnectionLink(
          "updateprofile",
          paramsNames,
          paramsValues,
          "POST"
        );
        props.profileEditPage(obj);
        success();
        setTimeout(() => {
          window.location.reload(false);
        }, 1000);
      }
    } else {
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
      <FormItem label="İsim:">
        {getFieldDecorator("realname", {
          rules: [
            {
              required: true,
              message: "İsim alanı boş bırakılamaz.",
            },
            {
              pattern: "[A-Za-z]{2}",
              message: "En az 2 haneli isim giriniz.",
            },
          ],
        })(
          <Input
            prefix={
              <Mail
                size={16}
                strokeWidth={1}
                style={{ color: "rgba(0,0,0,.25)" }}
              />
            }
            type="text"
            placeholder="realname"
          />
        )}
      </FormItem>
      <FormItem label="Soyisim:">
        {getFieldDecorator("surname", {
          rules: [
            {
              required: true,
              message: "Soyisim alanı boş bırakılamaz.",
            },
            {
              pattern: "[A-Za-z]{2}",
              message: "En az 2 haneli soyisim giriniz.",
            },
          ],
        })(
          <Input
            prefix={
              <Mail
                size={16}
                strokeWidth={1}
                style={{ color: "rgba(0,0,0,.25)" }}
              />
            }
            type="text"
            placeholder="surname"
          />
        )}
      </FormItem>

      <FormItem label="Telefon Numarası:">
        {getFieldDecorator("phone", {
          rules: [
            {
              required: true,
              message: "Telefon alanı boş bırakılamaz.",
            },
            {
              pattern: "[+]?(?:[0-9]{2})?[0-9]{10}$",
              message:
                "Girilen telefon numarası geçersiz (Örnek: +905XXXXXXXXX)",
            },
          ],
        })(
          <Input
            prefix={
              <Eye
                size={16}
                strokeWidth={1}
                style={{ color: "rgba(0,0,0,.25)" }}
              />
            }
            type="text"
            placeholder="phone"
          />
        )}
      </FormItem>
      <FormItem label="Resim Yükle">
        <div className="dropbox">
          {getFieldDecorator("dragger", {
            valuePropName: "fileList",
            getValueFromEvent: normFile,
          })(
            <Upload.Dragger name="files">
              <p className="ant-upload-drag-icon">
                <Image size="30px" color="#007bff" />
              </p>
              <p className="ant-upload-text">
                Tıklayarak veya sürükleyerek resim yükle
              </p>
              <p className="ant-upload-hint">(Opsiyonel)</p>
            </Upload.Dragger>
          )}
        </div>
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

class ProfileSettingsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        realname: {
          value: this.props.profilData.user_real_name,
        },
        surname: {
          value: this.props.profilData.user_surname,
        },
        phone: {
          value: this.props.profilData.user_phone,
        },
        dragger: {
          value: [],
        },
        user_id: {
          value: this.props.profilData.user_id,
        },
      },
    };
  }

  sub(err) {
    if (!err) {
    } else {
    }
  }

  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };

  render() {
    const { visible, onCancel, onCreate } = this.props;
    const fields = this.state.fields;
    return (
      <Modal
        title="Profil Ayarları"
        visible={visible}
        onCancel={onCancel}
        onOk={onCreate}
        width="600px"
        footer={null}
      >
        <List itemLayout="horizontal">
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar size={100} src={this.props.profilData.user_img} />
              }
              title={
                <div>
                  <br></br>
                  <a
                    disabled="disabled"
                    style={{ fontSize: "25px", color: "#403f3f" }}
                  >
                    {" "}
                    {this.props.profilData.user_real_name}{" "}
                    {this.props.profilData.user_surname}
                  </a>
                </div>
              }
              description={
                <small style={{ fontSize: "10px" }}>
                  {" "}
                  {this.props.profilData.user_mail}
                </small>
              }
            />
          </List.Item>
        </List>
        <CustomizedForm
          {...fields}
          token={this.props.currentToken}
          profileEditPage={this.props.profileEditPage}
          onChange={this.handleFormChange}
          profileData={this.props.profilData}
        />
      </Modal>
    );
  }
}
export default ProfileSettingsModal;
