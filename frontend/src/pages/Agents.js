import React from "react";
import SideNav from '../components/sideNav';
import '../App.css';
import CurrentTime from '../components/currentTime';
import SearchWord from "../components/SearchWord";

import { Table, Layout } from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,

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

function deleteAgent() {
    alert("Agent Deleted");
}

class Dashboard extends SearchWord{

    state = {
        collapsed: false,

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
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
                ...this.getColumnSearchProps('email'),
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

                            <h3 className="tab-header"><b>All-Agents</b></h3>

                            <Table columns={columns} dataSource={data} onChange={this.handleChange}/>

                        </div>

                    </Content>

                </Layout>
            </Layout>
        );
    }
}

export default Dashboard;


