import React from "react";
import "./LoaderAlt.css";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

export default class LoaderAltNoModal extends React.Component {
  render() {
    return (
      <main>
        <section className="shadow-sm loader-container-abs d-flex align-items-center">
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1" />
            <div className="sk-cube sk-cube2" />
            <div className="sk-cube sk-cube3" />
            <div className="sk-cube sk-cube4" />
            <div className="sk-cube sk-cube5" />
            <div className="sk-cube sk-cube6" />
            <div className="sk-cube sk-cube7" />
            <div className="sk-cube sk-cube8" />
            <div className="sk-cube sk-cube9" />
          </div>
        </section>
      </main>
    );
  }
  componentDidMount() {
    this.targetElement = document.getElementsByName("body");
    disableBodyScroll(this.targetElement);
  }
  componentWillUnmount() {
    this.targetElement = document.getElementsByName("body");
    enableBodyScroll(this.targetElement);
  }
}
