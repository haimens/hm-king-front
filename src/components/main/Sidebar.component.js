import React, { Component } from "react";
import NavItem from "./nav.component/NavItem.item";
import SubNavItem from "./nav.component/SubNavItem.item";
import { ImageButton } from "../shared";

export default class Sidebar extends Component {
  handleClick = new_path => {
    const { history } = this.props.parentProps;
    this.props.handleSideBarBeenOpened();
    history.push(new_path);
  };
  handleClickLogo = e => {
    e.preventDefault();
    const { history } = this.props.parentProps;
    history.push("/home");
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
      <main className="bg-white" style={styles.container} id="navbarSupportedContent">
        {/* LOGO Section */}
        <section className="mb-5 p-4 d-flex flex-row justify-content-between">
          <a href="/home" onClick={e => this.handleClickLogo(e)}>
            <img src={`${process.env.PUBLIC_URL}/img/op_logo.svg`} alt="logo" width={"100px"} />
          </a>
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
            onToggle={() => this.handleClick("/dashboard")}
            image={`${process.env.PUBLIC_URL}/img/tabicon_home.svg`}
            name="Dashboard"
            path="dashboard"
            history={this.props.parentProps.history}
            showArrow={false}
          />
        </section>
        <section className="accordion">
          <NavItem
            onToggle={() => this.handleClick("/company")}
            image={`${process.env.PUBLIC_URL}/img/tabicon_company.svg`}
            name="Company"
            path="company"
            history={this.props.parentProps.history}
            showArrow={false}
          />
        </section>
        <section className="accordion">
          <NavItem
            onToggle={() => this.handleClick("/invoice")}
            image={`${process.env.PUBLIC_URL}/img/tabicon_invoice.svg`}
            name="Invoice"
            path="invoice"
            history={this.props.parentProps.history}
            showArrow={false}
          />
        </section>

        <section className="accordion">
          <NavItem
            onToggle={() => this.handleClick("/settings/fee")}
            image={`${process.env.PUBLIC_URL}/img/tabicon_settings.svg`}
            name="Settings"
            path="settings"
            history={this.props.parentProps.history}
            showArrow={false}
          >
            <SubNavItem
              onClick={() => this.handleClick("/settings/fee")}
              name="Fee Rate"
              is_target={parsedLocation[2] === "fee"}
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
    height: "100%",
    width: "100%",
    zIndex: "1031"
  }
};
