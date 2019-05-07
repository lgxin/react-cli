import React from 'react';
import { Layout, Menu, Icon, Row, Col ,Avatar,Dropdown} from 'antd';
import './App.css';
const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">退出登陆</a>
        </Menu.Item>
        <Menu.Divider />
      </Menu>
    );
    return (
      <div id="components-layout-demo-custom-trigger">
          <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Row>
              <Col span={2}>
                <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              </Col>
              <Col span={2} offset={20}>
                <Dropdown overlay={menu}>
                  {/* <a className="ant-dropdown-link" href="#">
                    Hover me <Icon type="down" />
                  </a> */}
                  <Avatar size="large" icon="user" className="ant-dropdown-link"/>
                </Dropdown>
              </Col>
            </Row>
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
      </div>
    );
  }
}
export default App;
