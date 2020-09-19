import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SideNav from '../components/sideNav';
import '../App.css';
import CurrentTime from '../components/currentTime';
import SearchWord from "../components/SearchWord";

//saga imports
import {requestAgents} from '../actions';

import {Table, Layout, Tooltip} from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,

} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import handleAction from "../components/deleteUser";


const { Header, Sider, Content } = Layout;

function deleteAgent() {
    alert("Agent Deleted");
}

class Agents extends SearchWord{

    state = {
        collapsed: false,

    };

    componentDidMount(){
        this.props.requestAgents();
        this.getUserData();
    }

    getUserData(){

    }


    render() {
        const { results = [] } = this.props.data;

        let { sortedInfo2, filteredInfo2 } = this.state;
        sortedInfo2 = sortedInfo2 || {};
        filteredInfo2 = filteredInfo2 || {};

        const columns = [
            {
                title: 'Name',
                dataIndex: 'Name',
                key: 'Name',
                ...this.getColumnSearchProps('Name'),
            },
            {
                title: 'Email',
                dataIndex: 'Email',
                key: 'Email',
                ...this.getColumnSearchProps('Email'),
            },
            {
                title: 'DOB',
                dataIndex: 'DOB',
                key: 'DOB',
                sorter: (a, b) => a.dob - b.dob,
                sortOrder: sortedInfo2.columnKey === 'DOB' && sortedInfo2.order,
                ellipsis: true,
            },

            {
                title: "Action",
                dataIndex: '',
                key: 'x',
                render: (record) =>
                    (
                        <button className="deleteBtn" onClick={() => handleAction(record._id)}>x</button>
                    )
            },
        ];

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

                            <h3 className="tab-header"><b>All-Agents</b></h3>

                            <Tooltip title="New User" >
                                <NavLink to="/newUser/Agent">
                                    <button className="add-new" onClick={this.showModal}>+</button>
                                </NavLink>
                            </Tooltip>

                            <Table columns={columns} dataSource={results} onChange={this.handleChange}/>

                        </div>

                    </Content>

                </Layout>
            </Layout>
        );
    }
}

function mapStateToProps(state) {

    return {
        data: state.data
    };
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestAgents }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Agents);


