import React, { useState } from 'react';
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineHome,
  AiTwotoneTag
} from 'react-icons/ai';
import { Layout, Menu, Button, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import Nav from "../layouts/Nav";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
    
    <Nav></Nav>
    <Layout className='h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <AiOutlineHome />,
              label: <Link to='/admin/dashboard'>DashBoard</Link>,
            },
            {
              key: '2',
              icon: <AiTwotoneTag />,
              label: <Link to='/admin/products'>Product</Link>,
            },
       
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
         <Outlet/>
        </Content>
      </Layout>
    </Layout>
    
    
    </>
  );
};

export default MainLayout;