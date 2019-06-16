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
      <main className="mr-bg-darkblue" style={styles.container} id="navbarSupportedContent">
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
            onToggle={() => this.props.parentProps.history.push("/dashboard")}
            image={`${process.env.PUBLIC_URL}/img/navicon_home.svg`}
            name="账户首页"
            path="dashboard"
            history={this.props.parentProps.history}
            showArrow={false}
          />
        </section>
        <section className="accordion">
          <NavItem
            onToggle={() => this.props.parentProps.history.push("/devices")}
            image={`${process.env.PUBLIC_URL}/img/navicon_phone.svg`}
            name="设备管理"
            path="devices"
            history={this.props.parentProps.history}
            showArrow={false}
          />
        </section>
        <section className="accordion">
          <NavItem
            onToggle={() => this.props.parentProps.history.push("/cities")}
            image={`${process.env.PUBLIC_URL}/img/navicon_pankou.svg`}
            name="盘口管理"
            path="cities"
            history={this.props.parentProps.history}
            showArrow={false}
          />
        </section>
        <section className="accordion">
          <NavItem
            onToggle={() => this.props.parentProps.history.push("/invoice")}
            image={`${process.env.PUBLIC_URL}/img/navicon_invoice.svg`}
            name="手续费管理"
            path="invoice"
            history={this.props.parentProps.history}
            showArrow={false}
          />
        </section>
        <section className="accordion">
          <NavItem
            onToggle={() => this.props.parentProps.history.push("/report")}
            image={`${process.env.PUBLIC_URL}/img/navicon_report.svg`}
            name="交易报表"
            path="report"
            history={this.props.parentProps.history}
            showArrow={false}
          />
        </section>
        <section className="accordion">
          <NavItem
            onToggle={() => this.props.parentProps.history.push("/setting/rates")}
            image={`${process.env.PUBLIC_URL}/img/navicon_setting.svg`}
            name="设置"
            path="setting"
            history={this.props.parentProps.history}
            showArrow={false}
          >
            <SubNavItem
              onClick={() => this.handleClick("/setting/rates")}
              name="费率设置"
              is_target={parsedLocation[2] === "rates"}
            />
            <SubNavItem
              onClick={() => this.handleClick("/setting/prices")}
              name="价格设置"
              is_target={parsedLocation[2] === "prices"}
            />
            <SubNavItem
              onClick={() => this.handleClick("/setting/general")}
              name="通用设置"
              is_target={parsedLocation[2] === "prices"}
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
