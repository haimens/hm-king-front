import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { toggleSideBar } from '../../actions/nav.action'
import Nav from './Nav.component'
import Sidebar from './Sidebar.component'
import windowSize from 'react-window-size';
import './Main.component.css'

import {
  resetPassword
} from '../../actions/auth.action';

export class Main extends Component {
  render() {
    const parentProps = {
      toggleSideBar: this.props.toggleSideBar,
      history: this.props.history,
      resetPassword: this.props.resetPassword,
    }

    const hasPaddingLeft = (this.props.is_open || this.props.windowWidth > 992)
      ? 'main-container-open'
      : 'main-container-close'
    return (
      <main>
        <section className="sticky-top">
          <Nav parentProps={parentProps} />
        </section>
        <section>
          {(this.props.is_open || this.props.windowWidth > 992) && <Sidebar parentProps={parentProps} />}
        </section>
        {/* Render children */}
        <section className={`container-fluid py-5 ${hasPaddingLeft}`}>
          {this.props.children}
        </section>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    is_open: state.navReducer.is_open
  }
}

export default connect(mapStateToProps, { toggleSideBar, resetPassword })(windowSize(withRouter(Main)))
