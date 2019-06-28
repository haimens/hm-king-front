import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DisplayCard from "./home.component/Display.card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <section className="mb-4">
          <div className="mb-3 d-flex justify-content-between">
            <h4>Home</h4>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-4 h-100">
              <DisplayCard
                data={{
                  amount: 20,
                  title: "Total Company",
                  icon: `${process.env.PUBLIC_URL}/img/icon_company.svg`
                }}
              />
            </div>
            <div className="col-12 col-md-6 mb-4 h-100">
              <DisplayCard
                data={{
                  amount: 20,
                  title: "Total Invoice",
                  icon: `${process.env.PUBLIC_URL}/img/icon_invoice.svg`
                }}
              />
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
)(withRouter(Home));
