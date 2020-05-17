import { Input, Icon } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'BOKK'
    };
  }
  
  onChangeUserName = e => {
    this.setState({ userName: e.target.value });
  };

  render() {
    const { userName } = this.state;
    
    return (
      <Input
        placeholder="Enter your username"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        value={userName}
        onChange={this.onChangeUserName}
        ref={node => (this.userNameInput = node)}
      />
    );
  }
}

export default App;
