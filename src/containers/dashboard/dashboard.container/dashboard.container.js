import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DisplayCard from "./dashboard.component/display.card";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <section className="mb-4">
          <div className="d-flex align-items-center mb-4 px-2  text-white">
            <i className="fas fa-desktop hm-header-size mr-3" />
            <h4 className="hm-header-size">Dashboard</h4>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6 h-100 mb-4">
                <DisplayCard
                  data={{
                    amount: 20,
                    title: "Total Company",
                    icon: `${process.env.PUBLIC_URL}/img/icon_company.svg`
                  }}
                  red={true}
                />
              </div>
              <div className="col-12 col-md-6 h-100">
                <DisplayCard
                  data={{
                    amount: 20,
                    title: "Total Invoice",
                    icon: `${process.env.PUBLIC_URL}/img/icon_invoice.svg`
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  null
)(withRouter(Dashboard));
