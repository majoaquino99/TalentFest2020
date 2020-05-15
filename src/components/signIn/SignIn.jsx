import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = () => {
    const { history } = this.props;
    if(history) history.push('/home');
  }

  render() {
    return (
      <div className="wrapper container-fluid text-center">
          <div className="card">
              <img src="https://i.ibb.co/6NF4rW4/logo4040.png" className="card-img-top logo w-50 align-self-center pt-5" alt="logo"></img>
              <div className="card-body align-item-center ">
                <form onSubmit={this.handleSubmit} className="white">
                    <label className="label mt-1"  htmlFor="email ">Email</label>
                    <div className="input-field">
                      <input type="email" id="email" required onChange={this.handleChange} />
                    </div>
                    <label className="control-label label mt-1" htmlFor="password ">Password</label>
                    <div className="input-field">
                      <input type="password" id="password" required onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button type="submit" className="btn btn-primary mt-3 border-box">Login</button>
                    </div>
                </form>
              </div>
          </div>
      </div>
    );
  }
}



export default SignIn;
