import ProfilePage from "../components/profile_page_Component/ProfileCard";
import ProfileSettings from "../components/profile_page_Component/ProfileSettings";
import { Row, Col, Card } from "antd";
import Media from "react-media";
const profileSettings = () => (
  <div>
    <Media query={{ minWidth: 1200 }}>
      {(matches) =>
        matches ? (
          
            <Row>
              <Col md={5}> </Col>
              <Col md={14}>
              <Card>
                <ProfilePage />
                <ProfileSettings />
                </Card>
              </Col>
            </Row>
        ) : (
          <div>
            <Card>
              <ProfilePage />
              <ProfileSettings />
            </Card>
          </div>
        )
      }
    </Media>
  </div>
);

export default profileSettings;
