import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { processLogin, processLogout } from "../../actions/auth.action";
import { clearUserInfo, loadAuthToken } from "../../actions/localStorage.action";
import "./Login.container.css";

export class Login extends React.Component {
  state = {
    username: "",
    passcode: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.props.processLogin(
      {
        username: this.state.username,
        passcode: this.state.passcode
      },
      this.props.history
    );
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleForgetPass = e => {
    e.preventDefault();
    window.location.href = `${process.env.REACT_APP_HAVANA_FRONT}/forget/${process.env.REACT_APP_APP_TOKEN}`;
  };

  componentWillMount = () => {
    clearUserInfo();
  };

  componentDidMount() {
    let newImage = new Image();
    newImage.onload = function(img) {
      document.getElementById("login-image").classList.remove("login-image-init");
      document.getElementById("login-image").classList.add("login-image-loaded");
    };
    newImage.src = `${process.env.PUBLIC_URL}/img/genos_bg.png`;
  }

  render() {
    return (
      <main className="login-container">
        <section className="login-image login-image-init" id="login-image" />
        <section className="rounded bg-white p-5 login-content">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label className="d-block">登录用户名</label>
              <input
                required
                type="text"
                className="bg-light border-0 rounded p-2 w-100"
                placeholder="输入用户名"
                name="login"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="d-block ">登录密码</label>
              <input
                required
                type="password"
                className="bg-light border-0 rounded p-2 w-100"
                placeholder="输入密码"
                name="login"
                id="passcode"
                value={this.state.passcode}
                onChange={this.handleChange}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn hm-bg-green text-white  pl-4 pr-4">
                登录
              </button>
            </div>
            <div>
              <button onClick={this.handleForgetPass} className="btn btn-link p-0 btn-sm text-green ">
                忘记密码?
              </button>
            </div>
          </form>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.loadReducer.loading,
    isSuccess: state.loadReducer.is_success
  };
};

export default connect(
  mapStateToProps,
  {
    processLogin,
    processLogout
  }
)(withRouter(Login));
