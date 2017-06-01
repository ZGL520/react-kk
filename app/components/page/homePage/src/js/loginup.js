import React from 'react';
require('../css/loginup.css');


class LoginUp extends React.Component{
    render(){
        return(
            <div className="loginup">
                <div className="signin">
                    <form action="">
                        <p>Sign in</p>
                        <p>Pleace sign-in using your existing account</p>
                        <input type="username" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <input type="submit" value='Sign in'/>
                        <div className="checkbox">
                            <input type="checkbox"/>
                            <span>Remember me</span>
                        </div>
                        <a href="">Lost your password?</a>
                    </form>
                </div>
                <div className="register">
                    <form action="">
                        <p>New to Kanabelle?</p>
                        <p>Register now to proceed to checkout</p>
                        <input type="email" placeholder="entry your email address"/>
                        <input type="password" placeholder="entry your password"/>
                        <input type="submit" value='Register'/>
                    </form>

                </div>
            </div>
        )
    }
}

module.exports = LoginUp;
