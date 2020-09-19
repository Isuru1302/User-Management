import React, {Component} from "react";
import SideNav from '../components/sideNav';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import '../App.css';
import CurrentTime from '../components/currentTime';
import SearchWord from "../components/SearchWord";
import axios from 'axios';

import {Table, Layout, Tooltip} from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,

} from '@ant-design/icons';

//saga imports
import { requestManagers} from '../actions';
import {NavLink} from "react-router-dom";
import handleAction from "../components/deleteUser";

const { Header, Sider, Content } = Layout;


async function deleteAgent(id) {
    await axios.delete('http://127.0.0.1:8000/api/delUser/'+id)
        .then(response=>

            console.log(response),alert(id),
            window.location.reload()
        );

}

class Manager extends SearchWord{

    state = {
        collapsed: false,

    };

    componentDidMount(){
        this.props.requestManagers();
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
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Email',
                dataIndex: 'Email',
                key: 'Email',
                ...this.getColumnSearchProps('email'),
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
                dataIndex: '_id',
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

                            <h3 className="tab-header"><b>All-Managers</b></h3>

                            <Tooltip title="New User" >
                                <NavLink to="/newUser/Manager">
                                    <button className="add-new">+</button>
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
    bindActionCreators({ requestManagers }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Manager);



