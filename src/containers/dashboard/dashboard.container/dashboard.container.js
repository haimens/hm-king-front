import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DisplayCard from "./dashboard.component/display.card";
import Chart from "chart.js";
import { Bar } from "react-chartjs-2";
import { chartOptions, parseOptions, chartExample2 } from "./dashboard.component/chart";
import "./dashboard.container.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
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
        <section>
          <div className="container-fluid ">
            <div className="bg-white shadow-sm rounded p-3">
              <div className="mb-4">
                <div className="text-secondary-color font-weight-bold mb-1">PERFORMANCE</div>
                <div className="hm-title-sub-size text-main-color font-weight-bold">Total orders</div>
              </div>
              <hr />
              <div className="mt-4">
                <Bar data={chartExample2.data} options={chartExample2.options} />
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
