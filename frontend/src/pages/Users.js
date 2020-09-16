import React, {Component} from "react";
import SideNav from '../components/sideNav';
import '../App.css';
import CurrentTime from '../components/currentTime';

import { Table, Layout ,Tooltip,Modal,Form, Input, InputNumber,Button,DatePicker,Upload,} from 'antd';
import SearchWord from "../components/SearchWord";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    InboxOutlined
} from '@ant-design/icons';



const { Header, Sider, Content } = Layout;

const data = [
    {
        key: '1',
        name: 'John Brown',
        email: 'john@gmail.com',
        dob: '27-01-1997',
        role:'Agent',
        department:'D1'
    },
    {
        key: '2',
        name: 'Jim Green',
        email: 'jim@gmail.com',
        dob: '28-01-1997',
        role:'Team-Leader',
        department:'D2',
    },
];

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


    const onFinish = values => {
        console.log(values);
    };


function deleteAgent() {
    alert("Agent Deleted");
}

class Dashboard extends SearchWord {

    state = {
        collapsed: false,
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {

        let { sortedInfo2, filteredInfo2 } = this.state;
        sortedInfo2 = sortedInfo2 || {};
        filteredInfo2 = filteredInfo2 || {};

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                //...this.getColumnSearchProps('name'),
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
                //...this.getColumnSearchProps('email'),
            },
            {
                title: 'DOB',
                dataIndex: 'dob',
                key: 'dob',
                sorter: (a, b) => a.dob - b.dob,
                sortOrder: sortedInfo2.columnKey === 'dob' && sortedInfo2.order,
                ellipsis: true,
            },
            {
                title: 'Role',
                dataIndex: 'role',
                Key: 'role',
                filters: [
                    { text: 'Agent', value: 'Agent' },
                    { text: 'Team-Leader', value: 'Team-Leader' },
                ],
                filteredValue2: filteredInfo2.role || null,
                onFilter: (value, record) => record.role.includes(value),
            },
            {
                title: 'Department',
                dataIndex: 'department',
                Key: 'department',
                filters: [
                    { text: 'D1', value: 'D1' },
                    { text: 'D2', value: 'D2' },
                ],
                filteredValue2: filteredInfo2.department || null,
                onFilter: (value, record) => record.department.includes(value),
            },

            {
                title: "Action",
                dataIndex: '',
                key: 'x',
                render(){
                    return(
                        <button className="deleteBtn" onDoubleClick={deleteAgent}>x</button>
                    )
                }
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

                            <h3 className="tab-header"><b>All-Users</b></h3>

                            <Tooltip title="New User" >
                                <button className="add-new" onClick={this.showModal}>+</button>
                            </Tooltip>

                            <>
                                <Modal
                                    title="Add New User"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                >

                                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                        <Form.Item name={['user', 'excel']} label="Excel Sheet" rules={[{ required: true }]}>
                                            <Upload.Dragger name="files" action="/upload.do">
                                                <p className="ant-upload-drag-icon">
                                                    <InboxOutlined />
                                                </p>
                                                <p className="ant-upload-text">Click or drag excel sheet to this area to upload</p>
                                                </Upload.Dragger>
                                        </Form.Item>

                                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>

                                    <h5 style={{textAlign:"center"}}><b>Or</b></h5>

                                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email',required: true }]}>
                                            <Input />
                                        </Form.Item>
                                        <Form.Item name={['user', 'dob']} label="Dob" rules={[{ required: true}]}>
                                            <DatePicker style={{ width: '100%' }} />
                                        </Form.Item>
                                        <Form.Item name={['user', 'role']} label="Role" rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                        <Form.Item name={['user', 'department']} label="Department" rules={[{ required: true }]}>
                                            <Input />
                                        </Form.Item>
                                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Modal>
                            </>


                            <Table columns={columns} dataSource={data} onChange={this.handleChange}/>

                        </div>



                    </Content>

                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;


