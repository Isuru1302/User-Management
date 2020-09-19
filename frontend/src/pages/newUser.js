import React, {Component} from "react";
import SideNav from '../components/sideNav';
import '../App.css';
import CurrentTime from '../components/currentTime';
import SearchWord from "../components/SearchWord";
import axios from 'axios';

import {Table, Layout, Tooltip, Select, Form, Input, Button, DatePicker, } from 'antd';
import {loggedUser} from '../components/loginController';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,

} from '@ant-design/icons';
import {NavLink} from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Option } = Select;
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

const handleFormSubmit = (values) =>{
    const uName = values.name;
    const uEmail = values.email;
    const Dob = values.dob;
    const Role = values.role;
    const Department = values.department;
    const uPW = "12345";

    addNewUser(uName, uEmail,Dob,Role,Department,uPW);
}

function addNewUser(uName, uEmail, DOB,Role,Department,uPW) {

    const uDetails={
        Name:uName,
        Email:uEmail,
        DOB:DOB,
        Department:Department,
        Role:Role,
        Password:uPW,
    }

    axios.post("http://127.0.0.1:8000/api/newUser",uDetails).then(
        response=> {
            alert("User Added");
            window.location = '/Dashboard';
        }
    );
}


class newUser extends SearchWord{

    state = {
        collapsed: false,
        userDetails: {
            Name:"",
        },
    };



    componentDidMount() {
        this.getUserType();

    }

    getUserType(){
        const type = this.props.match.params.type;
        const user={
            val:"",
            text:""
        }

        switch (type) {
            case "TeamLead":
                user.val="2";
                user.text="Team Leader"
                break
            case "Manager":
                user.val="1";
                user.text="Manager"
                break
            case "Agent":
                user.val="3";
                user.text="Agent"
                break
            default:
                user.val="5";
                user.text="User"
                break
        }
        return user;
    }


    render() {
        let formD;
        let formR;
        let excelImport;
        if(loggedUser().userRole!=="0"){
            formD=
                <Form.Item
                    name="role"
                    label="role"
                    rules={[{ required: true, message: 'Please the role'}]}
                >
                    <Select >
                        <Option value={this.getUserType().val}>{this.getUserType().text}</Option>
                    </Select>
                </Form.Item>
            formR=
                <Form.Item
                    name="department"
                    label="department"
                    rules={[{ required: true, message: 'Please the role'}]}
                >
                    <Select >
                        <Option value={loggedUser().userDepartment}>{loggedUser().DepartmentName}</Option>
                    </Select>
                </Form.Item>


        }else{
            formD=
                <Form.Item
                    name="role"
                    label="role"
                    rules={[{ required: true, message: 'Please the role'}]}
                >
                    <Select  >
                        <Option value="1">Manager</Option>
                        <Option value="2">Team Leader</Option>
                        <Option value="3">Agent</Option>
                        <Option value="5">Trainee</Option>
                    </Select>
                </Form.Item>
            formR=
                <Form.Item
                    name="department"
                    label="department"
                    rules={[{ required: true, message: 'Please the role'}]}
                >
                    <Select  >
                        <Option value="1">Marketing</Option>
                        <Option value="2">HR</Option>
                        <Option value="3">IT</Option>
                    </Select>
                </Form.Item>
        }

        if(loggedUser().userRole==="0"){
            excelImport =
                <NavLink to="/ImportExcel">
                    <span style={{color:"blue",fontWeight:"bold",cursor:"pointer"}}>
                        here
                    </span>
                </NavLink>
        }

        if(loggedUser().userRole==="1"){
            excelImport =
                <NavLink to="/ImportExcel">
                    <span style={{color:"lightblue"}}>
                        here
                    </span>
                </NavLink>
        }

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

                            <h3 className="tab-header"><b>New {this.getUserType().text}</b></h3>

                            <Form onFinish={(values)=>handleFormSubmit(values)} validateMessages={validateMessages}
                                  // initialValues={{
                                  //     ['name']: "a",
                                  // }}
                            >
                                <Form.Item name='name' label="Name" rules={[{ required: true}]}>
                                    <Input  />
                                </Form.Item>
                                <Form.Item name='email' label="Email" rules={[{ type: 'email',required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name='dob' label="Dob" rules={[{ required: true}]}>
                                    <Input type="date"/>
                                </Form.Item>

                                {formD}

                                {formR}

                                <Form.Item wrapperCol={{ offset: 8 }}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>

                            <hr className="uk-divider-icon"/>

                            <p>Or click {excelImport} to import users by Excel sheet</p>
                        </div>

                    </Content>

                </Layout>
            </Layout>
        );
    }
}

export default newUser;



