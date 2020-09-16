import React from "react";
import SideNav from '../components/sideNav';
import '../App.css';
import CurrentTime from '../components/currentTime';

import { Layout, Card, Calendar } from 'antd';

import {
    DashboardOutlined ,
    UsergroupAddOutlined,
    ApiOutlined ,
    BankOutlined,
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
            <Layout className="Layout">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <br/>
                    <CurrentTime/>
                    <hr/>
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
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-4 mb-sm-2 mb-2">
                                    <Card className="db-card" style={{background:"#2F90EA"}}>
                                        <UsergroupAddOutlined style={{ fontSize: '1.8em'}}/>
                                        <p>Users</p>
                                        <span className="db-count" style={{color:"#ccfaff"}}>10</span>
                                    </Card>
                                </div>

                                <div className="col-12 col-sm-12 col-md-4 mb-sm-2 mb-2">
                                    <Card className="db-card" style={{background:"#F8A510"}}>
                                        <ApiOutlined style={{ fontSize: '1.8em'}}/>
                                        <p>Agents</p>
                                        <span className="db-count" style={{color:"#fff7cc"}}>10</span>
                                    </Card>
                                </div>

                                <div className="col-12 col-sm-12 col-md-4 mb-sm-2 mb-2">
                                    <Card className="db-card" style={{background:"#DD4141"}}>
                                        <UserOutlined style={{ fontSize: '1.8em'}}/>
                                        <p>Leaders</p>
                                        <span className="db-count" style={{color:"#ffccd7"}}>10</span>
                                    </Card>
                                </div>
                            </div>

                            <hr className="uk-divider-icon"/>

                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-8">

                                </div>

                                <div className="col-12 col-sm-12 col-md-4">
                                    <Calendar fullscreen={false} className="db-calender"/>
                                </div>
                            </div>
                        </div>

                    </Content>

                </Layout>
            </Layout>
        );
    }
}


