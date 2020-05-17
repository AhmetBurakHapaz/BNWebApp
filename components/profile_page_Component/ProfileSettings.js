import { Button, Form, Input, Modal, Radio, Tabs } from 'antd';
import { Eye, Mail, Triangle, User, Settings} from 'react-feather';
import Link from 'next/link';
import ProfileSettingsModal from './ProfileSettingsModal'

//deneme try

import { connect } from 'react-redux'

import * as authActions  from '../../redux/actions/authActions'
import * as profileViewActions  from '../../redux/actions/profileViewActions'
import * as profileEditActions  from '../../redux/actions/profileEditActions'

import { bindActionCreators } from "redux";

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
class ProfileSettings extends React.Component 
{
    state = {
        visible: false
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render() {
        return (
            <div>
                
                <Link href='' >
                    <p onClick={this.showModal} style={{ height: "20px", marginTop: "-10px" }} ><Settings size={16} /> Ayarlarım </p>
                </Link>
                <ProfileSettingsModal
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    profilData={this.props.profilData}
                    currentToken={this.props.currentToken}
                    profileEditPage={this.props.actions.profileEditPage}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentToken : state.authReducer,
        profilData : state.profileViewReducer,
        profileEdit : state.profileEditReducer,
    };
  }
function mapDispatchToProps(dispatch) {
    return {
      actions: {
        loginUser: bindActionCreators(authActions.loginUser, dispatch),
        profilPage: bindActionCreators(profileViewActions.ProfileInformation, dispatch),
        profileEditPage: bindActionCreators(profileEditActions.profileEditPage, dispatch),
      }
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
  