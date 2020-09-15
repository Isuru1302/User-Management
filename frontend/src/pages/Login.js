import React from "react";
import '../components/styles/loginStyle.css';
import BackgroundImage from '../images/loginBack.png';

import { Button } from 'antd';


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

                                <form>

                                    <div className="uk-margin">
                                        <div className="uk-inline uk-width-1-1">
                                            <span className="uk-form-icon" uk-icon="icon: mail"/>
                                            <input className="uk-input uk-form-large" id="uName" type="text"
                                                   placeholder="Username"
                                                   required/>
                                        </div>
                                    </div>

                                    <div className="uk-margin">
                                        <div className="uk-inline uk-width-1-1">
                                            <span className="uk-form-icon" uk-icon="icon: lock"/>
                                            <input className="uk-input uk-form-large" type="password"
                                                   placeholder="Password"
                                                   id="password" required/>
                                        </div>
                                    </div>

                                    <div class="uk-margin">
                                        {/*<button class="uk-button uk-button-primary uk-button-large uk-width-1-1"*/}
                                        {/*>Login</button>*/}
                                        <Button type="primary" block className={"loginBtn"}>Login</Button>
                                    </div>

                                    <div className="uk-text-small uk-text-center f-p" >
                                        Forgot password? <a href="#" >click here</a>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default login;
