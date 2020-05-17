import { Modal, Button } from "antd";

import { Form, Input } from "antd";
import { Eye, Mail, Triangle, User } from "react-feather";

const FormItem = Form.Item;


class App extends React.Component {
  state = {
    fields: {
      username: {
        value: "benjycui",
      },
      realname: {
        value: "benjycui",
      },
    },
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false,
  };

  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };

  render() {
    const fields = this.state.fields;
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button onClick={this.showModal}>Open Modal with async logic</Button>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
          <CustomizedForm {...fields} onChange={this.handleFormChange} />
        </Modal>
      </div>
    );
  }
}
export default App;
