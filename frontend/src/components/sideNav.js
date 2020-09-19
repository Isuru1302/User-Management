import React,{Component} from "react";
import {Menu } from 'antd';
import {
    DashboardOutlined ,
    UserOutlined ,
    UsergroupAddOutlined,
    ApiOutlined ,
    BankOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import {NavLink} from "react-router-dom";

import {loggedUser,logout} from './loginController';


const menuTextStyle = {
    fontSize:"16px",
    marginTop:"2px",
    position: "absolute",
    width:"100vh",
}

const menuIconStyle = {
    position: "relative",
    fontSize: '16px',
}


class sideNav extends Component{

    state={
        defaultSelectedKey:'',
    }

    componentDidMount() {
        if(localStorage.getItem('userRole')===null){
            alert("you should login first");
            window.location = '/';
        }
        this.checkPath();
    }

    checkPath(){
        var path = window.location.href;
        switch (path) {
            case path.includes('Users'):
                this.setState({defaultSelectedKey:'2'});
                break
            case path.includes('Agents'):
                this.setState({defaultSelectedKey:'3'});
                break
            case path.includes('Manager'):
                this.setState({defaultSelectedKey:'4'});
                break
            case path.includes('Team_Lead'):
                this.setState({defaultSelectedKey:'5'});
                break
            default:
                this.setState({defaultSelectedKey:'1'});
        }
    }

    render() {
        const details = loggedUser();

        let menuItem;
        let menuItem1,menuItem2;

        let userItem;


        if(details.userRole==="2" ){
            userItem =  <Menu.Item key="2" >
                <NavLink to="/Users">
                    <UsergroupAddOutlined style={menuIconStyle}/>
                    <span style={menuTextStyle}>Users</span>
                </NavLink>
            </Menu.Item>;
        }else if(details.userRole==="1" ){

            userItem =  <Menu.Item key="2" >
                <NavLink to="/Users">
                    <UsergroupAddOutlined style={menuIconStyle}/>
                    <span style={menuTextStyle}>Users</span>
                </NavLink>
            </Menu.Item>;

            menuItem =
                <Menu.Item key="4">
                    <NavLink to="/TeamLeaders">
                        <UsergroupAddOutlined style={menuIconStyle}/>
                        <span style={menuTextStyle}>Team Lead</span>
                    </NavLink>
                </Menu.Item>

        }else if(details.userRole==="0"){

            userItem =  <Menu.Item key="2" >
                <NavLink to="/Users">
                    <UsergroupAddOutlined style={menuIconStyle}/>
                    <span style={menuTextStyle}>Users</span>
                </NavLink>
            </Menu.Item>;

            menuItem =

                <Menu.Item key="5">
                    <NavLink to="/Manager">
                        <UsergroupAddOutlined style={menuIconStyle}/>
                        <span style={menuTextStyle}>Manager</span>
                    </NavLink>
                </Menu.Item>;

            menuItem1 =
                <Menu.Item key="4">
                    <NavLink to="/TeamLeaders">
                        <UsergroupAddOutlined style={menuIconStyle}/>
                        <span style={menuTextStyle}>Team Lead</span>
                    </NavLink>
                </Menu.Item>;

            menuItem2 =
                <Menu.Item key="3">
                    <NavLink to="/Agents">
                        <UsergroupAddOutlined style={menuIconStyle}/>
                        <span style={menuTextStyle}>Agents</span>
                    </NavLink>
                </Menu.Item>
        }


        return(
            <Menu theme="dark" mode="inline" defaultSelectedKey={['1']}>
                <Menu.Item key="1">
                    <NavLink to="/Dashboard">
                        <DashboardOutlined style={menuIconStyle}/>
                        <span style={menuTextStyle}>Dashboard</span>
                    </NavLink>
                </Menu.Item>

                {userItem}
                {menuItem}
                {menuItem1}
                {menuItem2}
                <Menu.Item key="6" onClick={ logout } icon={<LogoutOutlined  style={menuIconStyle}/>}>
                    <span style={menuTextStyle}>Log-Out</span>
                </Menu.Item>
            </Menu>

        )
    }
}

export default sideNav;
