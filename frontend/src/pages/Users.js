import React, {Component} from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SideNav from '../components/sideNav';
import '../App.css';
import CurrentTime from '../components/currentTime';

import handleAction from '../components/deleteUser';

import { Table, Layout ,Tooltip,Modal,Form, Input,Button,DatePicker,Upload,} from 'antd';
import SearchWord from "../components/SearchWord";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    InboxOutlined
} from '@ant-design/icons';


//saga imports
import {requestApiData} from '../actions';
import {NavLink} from "react-router-dom";

import {userRole,userDepartments} from '../components/userD';
import {loggedUser} from "../components/loginController";
const { Header, Sider, Content } = Layout;

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },

}


class Users extends SearchWord{
    componentDidMount() {
        this.props.requestApiData();
    }

    state = {
        data:null,
        collapsed: false,
        visible: false,
    };



    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    render() {
        let { sortedInfo2, filteredInfo2 } = this.state;
        sortedInfo2 = sortedInfo2 || {};
        filteredInfo2 = filteredInfo2 || {};

        const columns = [
            {
                title: 'Name',
                dataIndex: 'Name',
                key: 'Name',
                //...this.getColumnSearchProps('Name'),
            },
            {
                title: 'Email',
                dataIndex: 'Email',
                key: 'Email',
                //...this.getColumnSearchProps('Email'),
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
                title: 'Role',
                dataIndex: 'Role',
                Key: 'Role',
                filters: [
                    { text: 'Agent', value: '3' },
                    { text: 'Team-Leader', value: '2' },
                    { text: 'Manager', value: '1' },
                    { text: 'Trainee', value: '4' },
                    { text: 'SE', value: '5' },
                ],
                filteredValue2: filteredInfo2.Role || null,
                onFilter: (value, record) => record.Role.includes(value),
                render:   (record) =>

                    (
                        <span>{userRole(record)}</span>
                    )
            },
            {
                title: 'Department',
                dataIndex: 'Department',
                Key: 'Department',
                filters: [
                    { text: 'Management', value: '1' },
                    { text: 'HR', value: '2' },
                    { text: 'IT', value: '3' },
                ],
                filteredValue2: filteredInfo2.Department || null,
                onFilter: (value, record) => record.Department.includes(value),
                render:   (record) =>

                    (
                        <span>{userDepartments(record)}</span>
                    )
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
        const { results = [] } = this.props.data;

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

                            <h3 className="tab-header"><b>All-Users</b></h3>

                            <Tooltip title="New User" >
                                <NavLink to="/newUser/User">
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
    bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);


