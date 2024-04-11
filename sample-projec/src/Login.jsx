import React,{ Component } from "react";

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state = {email:"",password:""};
    }
    render(){
        return <div className="col-lg-9">
           <h4 className="m-1 p-2 border-bottom">Login</h4> 

        {/* Email */}
           <div className="form-group form-row">
                <label className="col-lg-4">Email : </label>
                <input type="text" className="form-control" value={this.state.email} 
                       onChange={(event) => {
                         this.setState({email: event.target.value})
                         console.log("event : " , event);
                        
                        }}
                />
           </div>

        {/* password */}
           <div className="form-group form-row">
                <label className="col-lg-4">password : </label>
                <input type="password" className="form-control" value={this.state.password}
                         onChange={(event) => {
                            this.setState({password: event.target.value})
                            console.log("event : " , event);
                           }}
                />
           </div>

        {/* Login Button */}
        <div className="text-right">
            <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
                Login
            </button>
        </div>

    </div>

    }

    onLoginClick = () => {
        console.log("curr state after click : ",this.state);
    }
}