import { Modal, Button, Avatar } from 'antd';
import { List} from "antd";
import  { Notification } from "../../../components/styles/Header";


class App extends React.Component {
  state = {
    loading: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button onClick={this.showModal}>
          Open Modal with customized footer
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="800px"
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>
          ]}
        >
          <List
                  itemLayout="horizontal"
                  >
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar size={100} src="/static/images/face3.jpg" />}
                          title={<h1 href="javascript:;"> Ahmet Burak Hapaz</h1>}
                          description={<medium> den55@gmail.com</medium>}
                        />
                      </List.Item>
                      <List.Item>
                        ARAB ATI
                      </List.Item>
                 
                </List>
        </Modal>
      </div>
    );
  }
}

export default App;
