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

    userLogout(){
        alert("User logout");
    }

    render() {
        return(
            <Menu theme="dark" mode="inline" defaultSelectedKey={['1']}>
                <Menu.Item key="1">
                    <NavLink to="/Dashboard">
                        <DashboardOutlined style={menuIconStyle}/>
                        <span style={menuTextStyle}>Dashboard</span>
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="2">
                    <NavLink to="/Users">
                        <UsergroupAddOutlined style={menuIconStyle}/>
                        <span style={menuTextStyle}>Users</span>
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="3">
                    <NavLink to="/Agents">
                        <UsergroupAddOutlined style={menuIconStyle}/>
                        <span style={menuTextStyle}>Agents</span>
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="4">
                    <NavLink to="/TeamLeaders">
                        <UsergroupAddOutlined style={menuIconStyle}/>
                        <span style={menuTextStyle}>Team Lead</span>
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="5">
                    <NavLink to="/Manager">
                        <UsergroupAddOutlined style={menuIconStyle}/>
                        <span style={menuTextStyle}>Manager</span>
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="6" onClick={ this.userLogout } icon={<LogoutOutlined  style={menuIconStyle}/>}>
                    <span style={menuTextStyle}>Log-Out</span>
                </Menu.Item>
            </Menu>

        )
    }
}

export default sideNav;
