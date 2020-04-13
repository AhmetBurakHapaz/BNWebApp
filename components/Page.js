import { Container, Inner } from './styles/Page';
import { Layout, Spin } from 'antd';
import { useEffect, useState } from 'react';

import Header from './Header';
import HeaderHome from './HeaderHome';
import SidebarMenu from './SidebarMenu';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/GlobalStyles';
import { useAppState } from './shared/AppProvider';
import { withRouter } from 'next/router';

const { Content } = Layout;

const NonDashboardRoutes = [
  '/homepage',
  '/urunler',
  '/contact',
  '/profile',
  '/about',
  '/products',
];
const RenderHeader = () => {
  return (
    <Header />
  );
};
const RenderHeaderHome = () => {
  return (
    <HeaderHome />
  );
};
const Page = ({ router, children }) => {
  const [loading, setLoading] = useState(true);
  const [state] = useAppState();
  const isNotDashboard = NonDashboardRoutes.includes(router.pathname);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <Spin tip="Loading..." size="large" spinning={loading}>
      <ThemeProvider theme={theme}>
        <Container
          className={`${state.weakColor ? 'weakColor' : ''} ${
            state.boxed ? 'boxed shadow-sm' : ''
            }`}
        >
          {isNotDashboard && RenderHeaderHome()}
          {!isNotDashboard && RenderHeader()}

          <Layout className="workspace">
            {!isNotDashboard && (
              <SidebarMenu
                sidebarTheme={state.darkSidebar ? 'dark' : 'light'}
                sidebarMode={state.sidebarPopup ? 'vertical' : 'inline'}
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
    
    export default withRouter(Page);
