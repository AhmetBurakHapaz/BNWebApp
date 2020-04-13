import ProfileCard from '../components/profile_page_Component/ProfileCard';
import Header from '../components/styles/Header'
import { Component } from 'react'
import { Row, Col } from 'antd'


class profilePage extends Component {
    render() {
        return (
            <div>
                <Header> </Header>
                <Row>
                <Col lg={4} md={1}> 
                    </Col>
                    <Col lg={16} md={22}>
                        <ProfileCard />
                    </Col>
                </Row>
            </div>
        )
    }
}
export default profilePage;