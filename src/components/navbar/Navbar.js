import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import { Menu, Icon, Image, Layout } from 'antd';
//import { Header } from 'antd/lib/layout/layout';
//import { HighlightOutlined } from '@ant-design/icons/lib/icons';

const { Header, Content, Footer } = Layout;

/*
const leftStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'start',
    with: '10%',
    float: 'left',
  }

  const centerStyle = {
      display: 'flex',
      justifyContent: 'center',
    }

  const rightStyle = {position: 'absolute', top: 0, right: 0}
*/

const Navbar = () => {
    return (
        <Layout hasSider="true">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo">
                    <Image
                        width={'100%'}
                        src={`./img/ecommerce.png`}
                        preview={false}
                        title='E-Commerce By CHERBAL'
                    />
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                    <Menu.Item key="5">nav 5</Menu.Item>
                    <Menu.Item key="4">nav 4</Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 30px', marginTop: 64 }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                Content
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      
    )
}

export default Navbar
