import React, { Component } from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "./Sidebar.component.css";
export default class Sidebar extends Component {
  handleSideBarBeenOpened = boolean => {
    this.props.handleSideBarBeenOpened(boolean);
  };

  render() {
    const { history, location } = this.props.parentProps;
    return (
      <main className="mr-bg-darkblue">
        <SideNav
          onToggle={boolean => {
            this.handleSideBarBeenOpened(boolean);
          }}
          onSelect={selected => {
            const to = "/" + selected;
            if (location.pathname !== to) {
              history.push(to);
            }
          }}
          className="hm-bg-darkblue"
        >
          <Toggle />
          <Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <img src={`${process.env.PUBLIC_URL}/img/home.svg`} alt="Home" />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="company">
              <NavIcon>
                <img src={`${process.env.PUBLIC_URL}/img/invoice.svg`} alt="Company" />
              </NavIcon>
              <NavText>Company</NavText>
            </NavItem>
            <NavItem eventKey="invoice">
              <NavIcon>
                <img src={`${process.env.PUBLIC_URL}/img/invoice.svg`} alt="Invoice" />
              </NavIcon>
              <NavText>Invoice</NavText>
            </NavItem>
            <NavItem eventKey="settings">
              <NavIcon>
                <img src={`${process.env.PUBLIC_URL}/img/invoice.svg`} alt="Settings" />
              </NavIcon>
              <NavText>Settings</NavText>
            </NavItem>
          </Nav>
        </SideNav>
      </main>
    );
  }
}
