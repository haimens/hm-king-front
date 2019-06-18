import React, { Component } from "react";
import NavItem from "./nav.component/NavItem.item";
import SubNavItem from "./nav.component/SubNavItem.item";
import { ImageButton } from "../shared";

export default class Sidebar extends Component {
  handleClick = new_path => {
    const { history } = this.props.parentProps;
    history.push(new_path);
  };
  handleClickLogo = e => {
    e.preventDefault();
    const { history } = this.props.parentProps;
    history.push("/dashboard");
  };
  handleClose = type => {
    if (type === "sidebar") {
      this.props.parentProps.toggleSideBar();
    }
  };

  render() {
    const { pathname } = this.props.parentProps.history.location;
    const parsedLocation = pathname.split("/");

    return (
      <main className="hm-bg-darkblue" style={styles.container} id="navbarSupportedContent">
        {/* LOGO Section */}
        <section className="mb-5 p-4 d-flex flex-row justify-content-between">
          <a href="#" onClick={e => this.handleClickLogo(e)}>
            <img src={`${process.env.PUBLIC_URL}/img/op_logo.svg`} alt="logo" width={"100px"} />
          </a>
          {/* Handle Close */}
          {/* Handle Close */}
          <ImageButton
            icon={<i className="fas fa-times text-white" />}
            type="submit"
            size={24}
            outerClassName={"d-flex-block d-sm-flex-block d-md-flex-block d-lg-none d-flex align-items-center"}
            onClick={() => this.handleClose("sidebar")}
          />
        </section>
        {/* NAV ITEMS */}
        <section className="accordion">
          <NavItem
            onToggle={() => this.props.parentProps.history.push("/home")}
            image={`${process.env.PUBLIC_URL}/img/home.svg`}
            name="Home"
            path="home"
            history={this.props.parentProps.history}
            showArrow={false}
          />
        </section>
        <section className="accordion">
          <NavItem
            onToggle={() => this.props.parentProps.history.push("/company")}
            image={`${process.env.PUBLIC_URL}/img/home.svg`}
            name="Company"
            path="company"
            history={this.props.parentProps.history}
            showArrow={false}
          />
        </section>
        <section className="accordion">
          <NavItem
            onToggle={() => this.props.parentProps.history.push("/invoice")}
            image={`${process.env.PUBLIC_URL}/img/home.svg`}
            name="Invoice"
            path="invoice"
            history={this.props.parentProps.history}
            showArrow={false}
          />
        </section>

        <section className="accordion">
          <NavItem
            onToggle={() => this.props.parentProps.history.push("/settings/rate")}
            image={`${process.env.PUBLIC_URL}/img/home.svg`}
            name="Settings"
            path="settings"
            history={this.props.parentProps.history}
            showArrow={false}
          >
            <SubNavItem
              onClick={() => this.handleClick("/settings/rate")}
              name="Fee Rate"
              is_target={parsedLocation[2] === "rate"}
            />
            <SubNavItem
              onClick={() => this.handleClick("/settings/key")}
              name="Key Value"
              is_target={parsedLocation[2] === "key"}
            />
          </NavItem>
        </section>
      </main>
    );
  }
}

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "230px",
    zIndex: "1031"
  }
};
