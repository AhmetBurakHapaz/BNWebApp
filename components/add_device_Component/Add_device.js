import {
    AutoComplete,
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Card
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class AddDevice extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 8
                }
            }
        };

        return (
            <Card title="CİHAZ EKLE" >
                <Row>
                    <Col sm={16}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem label="UUID" {...formItemLayout} >
                                {getFieldDecorator('UUID', {
                                    rules: [
                                        {
                                            required: true,
                                            message: "UUID degeri boş bırakılamaz"
                                        }
                                    ]
                                })(<Input placeholder="UUID değerini giriniz." />)}
                            </FormItem>
                            <FormItem label="MAJOR:" {...formItemLayout} >
                                {getFieldDecorator('MAJOR', {
                                    rules: [
                                        {
                                            required: true,
                                            message: "MAJOR degeri boş bırakılamaz"
                                        }
                                    ]
                                })(<Input placeholder="MAJOR değerini giriniz." />)}
                            </FormItem>
                            <FormItem label="MINOR" {...formItemLayout} >
                                {getFieldDecorator('MINOR', {
                                    rules: [
                                        {
                                            required: true,
                                            message: "MINOR degeri boş bırakılamaz"
                                        }
                                    ]
                                })(<Input placeholder="MINOR değerini giriniz." />)}
                            </FormItem>
                            <FormItem {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" > Cihaz Ekle </Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </Card>
        );
    }
}
export default Form.create()(AddDevice);
