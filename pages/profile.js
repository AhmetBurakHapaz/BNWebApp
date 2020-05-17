import ProfileCard from "../components/profile_page_Component/ProfileCard";
import { Component } from "react";
import { Row, Col } from "antd";
import Media from "react-media";
class profilePage extends Component {
  render() {
    return (
        <Media query={{ minWidth: 1200 }}>
        {matches =>
          matches ? (
              <Row>
            <Col md={5}> </Col>
              <Col md={14}>
            <ProfileCard/>
            </Col>
            </Row>
          ) : (
            <ProfileCard/>
          )
        }
      </Media>

    );
  }
}
export default profilePage;
