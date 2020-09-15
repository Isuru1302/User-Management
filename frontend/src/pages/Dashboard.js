import React from "react";
import SideNav from '../components/sideNav';
import '../App.css';

import { Layout } from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
export default class Dashboard extends React.Component{

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{height:"100vh"}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <SideNav/>
                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                            style:{marginLeft:15,float:"left",lineHeight:"5"}
                        })}
                        <span className="header-text">Insure - ME</span>

                    </Header>

                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>

                </Layout>
            </Layout>
        );
    }
}


