import React, { Component } from 'react';
import '../login/loginComponent.scss'
import { RouteComponentProps } from 'react-router';
// function SignUp (props: any) {
//         return (
//             <div className="login__signin">
//                 <h3 className="login__title">Sign Up</h3>
//                 <form>
//                     <div className="input-group">
//                         <input type="text" placeholder="Enter name" />
//                     </div>
//                     <div className="input-group">
//                         <input type="password" placeholder="Enter school name" />
//                     </div>
//                     <div className="input-group">
//                         <input type="email"  placeholder="Enter email" />
//                     </div>
//                     <div className="input-group">
//                         <input type="password" placeholder="Enter password" />
//                     </div>
//                     <div className="input-group">
//                         <textarea cols={60} placeholder="Enter school address"></textarea>
//                     </div>
//                     <div className="login__actions">
//                         <button type="button">Sign Up</button>
//                     </div>
//                 </form>
//                 <div className="sign_up_switch">
//                     <div className="login__account-msg">
//                         <span> Already have an account </span>&nbsp;&nbsp;
//                         <p onClick={props.showSignIn}>Sign In</p>
//                     </div>
//                 </div>
//             </div>
//         )
// }
export class SignUp extends Component <{}> {
    constructor(props: any) {
        super(props)
    }
    showSignIn() {
        this.setState({
            isSignIn: true
        });
    }
    render() {
        console.log(this.props)
        return (
            <div className="login__signin">
                <h3 className="login__title">Sign Up</h3>
                <form>
                    <div className="input-group">
                        <input type="text" placeholder="Enter name" />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Enter school name" />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Enter email" />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Enter password" />
                    </div>
                    <div className="input-group">
                        <textarea cols={60} placeholder="Enter school address"></textarea>
                    </div>
                    <div className="login__actions">
                        <button type="button">Sign Up</button>
                    </div>
                </form>
                <div className="sign_up_switch">
                    <div className="login__account-msg">
                        <span> Already have an account </span>&nbsp;&nbsp;
                         <p onClick={this.showSignIn}>Sign In</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUp;