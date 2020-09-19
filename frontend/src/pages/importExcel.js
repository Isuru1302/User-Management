import React, {Component} from "react";
import SideNav from '../components/sideNav';
import '../App.css';
import CurrentTime from '../components/currentTime';
import SearchWord from "../components/SearchWord";
import axios from 'axios';

import { Layout} from 'antd';


import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,

} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const excelSheet={
    file:null,
}

class newUser extends SearchWord{

    state = {
        collapsed: false,
        selectedFile:null,
    };



    uploadExcel= () => {

        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(this.state.selectedFile);

        axios.post("http://127.0.0.1:8000/api/uploadExcel",formData)
            .then(response=>{
                console.log(response)
            });

    }

    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });


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

                            <h3 className="tab-header"><b>Import Excel</b></h3>

                            <form method="post" encType="multipart/form-data">
                                <input onChange={this.onFileChange} type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" required/>
                                <br/> <br/>
                                <input type="button" onClick={this.uploadExcel} value="Upload" style={{color:"#ffffff",background:"blue",border:"1px solid blue"}}/>
                            </form>



                        </div>

                    </Content>

                </Layout>
            </Layout>
        );
    }
}

export default newUser;



