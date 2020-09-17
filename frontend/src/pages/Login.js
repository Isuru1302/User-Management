import React from "react";
import '../components/styles/loginStyle.css';
import BackgroundImage from '../images/loginBack.png';

import { Form, Input, Button, Checkbox } from 'antd';


const login=() =>{
    return(
        <div className="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport
             style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="uk-width-1-1">
                <div className="uk-container">
                    <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                        <div className="uk-width-1-1@m">
                            <div
                                className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                                <h3 className="uk-card-title uk-text-center font-weight-bold">Insure-ME</h3>
                                <p className="uk-card-title uk-text-center">Welcome back!</p>


                                    <Form>
                                        <Form.Item

                                            name="username"
                                            rules={[{ required: true, message: 'Please input your username!' }]}
                                        >
                                            <Input placeholder="User Name"
                                                   style={{padding:"0.5em"}}/>
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                            rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                            <Input.Password  placeholder="Email"
                                                             style={{padding:"0.5em"}}/>
                                        </Form.Item>

                                        <Form.Item >
                                            <Button type="primary" htmlType="submit" style={{width:"100%",height:"3em"}}>
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>

                                    <div className="uk-text-small uk-text-center f-p" >
                                        Forgot password? <a href="#" >click here</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default login;
