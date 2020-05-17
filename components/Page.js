import { Container, Inner } from "./styles/Page";
import { Layout, Spin } from "antd";
import { useEffect, useState } from "react";

import Header from "./Header";
import HeaderHome from "./HeaderHome";
import SidebarMenu from "./SidebarMenu";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/GlobalStyles";
import { useAppState } from "./shared/AppProvider";
import { withRouter } from "next/router";

//hooks import

import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/authActions";
import { getConnectionLink } from "../lib/connector";
import { ProfileInformation } from "../redux/actions/profileViewActions";

const { Content } = Layout;

const RenderHeader = () => {
  return <Header />;
};
const RenderHeaderHome = () => {
  return <HeaderHome />;
};
const Page = ({ router, children }) => {
  const [loading, setLoading] = useState(true);
  const [state] = useAppState();
  const profile = useSelector((state) => state.profileViewReducer);
  const array = [];

  if (
    profile.role_lvl == null ||
    profile.role_lvl == undefined ||
    profile.role_lvl == 0 ||
    profile.role_lvl == 1 ||
    profile.role_lvl == 2 ||
    profile.role_lvl == 3 ||
    profile.role_lvl == 4
  ) {
    array.push(
      "/homepage",
      "/",
      "/products",
      "/contact",
      "/about",
      "/passwordchange",
      "/shoppingcard",
      "/error",
      "/_error",
      "_error",
      "/logout",
      "/profile",
      "/registercontrol",
      "/salesStatus",
      "/logout",
      "/stocks",
      "/addstock",
      "/notifications",
      "/myorders",
      "/passwordchange",
      "/forgotpassword",
      "/lostpasswordchange",
      "/404",
      "/lostpasswordcontrol",
      "/productadd"
    );
  } else if (profile.role_lvl == 5) {
    array.push(null);
  }

  const NonDashboardRoutes = array;

  const isNotDashboard = NonDashboardRoutes.includes(router.pathname);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <Spin tip="Yükleniyor..." size="large" spinning={loading}>
      <ThemeProvider theme={theme}>
        <Container
          className={`${state.weakColor ? "weakColor" : ""} ${
            state.boxed ? "boxed shadow-sm" : ""
          }`}
        >
          {isNotDashboard && RenderHeaderHome()}
          {!isNotDashboard && RenderHeader()}

          <Layout className="workspace">
            {!isNotDashboard && (
              <SidebarMenu
                sidebarTheme={state.darkSidebar ? "dark" : "light"}
                sidebarMode={state.sidebarPopup ? "vertical" : "inline"}
                sidebarIcons={state.sidebarIcons}
                collapsed={state.collapsed}
              />
            )}
            <Layout>
              <Content>
                {!isNotDashboard ? <Inner>{children}</Inner> : children}
              </Content>
            </Layout>
          </Layout>
        </Container>
      </ThemeProvider>
    </Spin>
  );
};

const mapStateToProps = (state) => ({
  currentToken: state.authReducer,
  profile: state.profileViewReducer,
});

const mapDispatchToProps = { loginUser, ProfileInformation };

export default withRouter(connect(mapStateToProps)(Page));
