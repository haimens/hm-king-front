import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Chart from "chart.js";
import { Bar } from "react-chartjs-2";
import { chartOptions, parseOptions } from "./dashboard.component/chart";
import DisplayCard from "./dashboard.component/display.card";
import { Header } from "../../../components/shared";
import { findCompanyList } from "../../../actions/company.action";
import { findInvoiceSum, findInvoiceSumAndReturn } from "../../../actions/invoice.action";
import { parseAmount, convertLocalToUTC } from "../../../actions/utilities.action";
import "./dashboard.container.css";
import moment from "moment";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayDate: "",
      arraySum: ""
    };
  }
  async componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
    Promise.all([this.props.findCompanyList(), this.props.findInvoiceSum()]);
    let arrayDate = [];
    let arraySum = [];
    for (let i = 6; i >= 0; i--) {
      let sum = await this.props.findInvoiceSumAndReturn({
        date_from: convertLocalToUTC(
          moment()
            .subtract(i, "month")
            .startOf("month")
        ),
        date_to: convertLocalToUTC(
          moment()
            .subtract(i, "month")
            .endOf("month")
        )
      });
      arrayDate.push(
        moment()
          .subtract(i, "month")
          .startOf("month")
          .format("MMM")
      );
      arraySum.push(sum / 100);
    }
    this.setState({ arrayDate, arraySum });
  }
  render() {
    const { company_list, invoice_sum } = this.props;
    return (
      <main>
        <section className="mb-3">
          <div className="container-fluid">
            <div className="mb-4">
              <Header title="Dashboard" tabicon={"tabicon_dashboard.svg"} />
            </div>
            <div className="row">
              <div className="col-12 col-md-6 h-100 mb-4">
                <DisplayCard
                  data={{
                    amount: company_list.count,
                    title: "Total Company",
                    icon: `${process.env.PUBLIC_URL}/img/icon_company.svg`
                  }}
                  red={true}
                />
              </div>
              <div className="col-12 col-md-6 h-100">
                <DisplayCard
                  data={{
                    amount: parseAmount(invoice_sum.sum),
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
            <div className="bg-white shadow-sm rounded-custom border p-3">
              <div className="mb-4">
                <div className="text-secondary-color font-weight-bold mb-1">PERFORMANCE</div>
                <div className="hm-title-sub-size text-main-color font-weight-bold">Total Invoice</div>
              </div>
              <hr />
              <div className="mt-4">
                <Bar
                  data={{
                    labels: [...this.state.arrayDate],
                    datasets: [
                      {
                        label: "Sales",
                        data: [...this.state.arraySum]
                      }
                    ]
                  }}
                  options={{
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            callback: function(value) {
                              if (!(value % 10)) {
                                //return '$' + value + 'k'
                                return value;
                              }
                            }
                          }
                        }
                      ]
                    },
                    tooltips: {
                      callbacks: {
                        label: function(item, data) {
                          var label = data.datasets[item.datasetIndex].label || "";
                          var yLabel = item.yLabel;
                          var content = "";
                          if (data.datasets.length > 1) {
                            content += label;
                          }
                          content += yLabel;
                          return content;
                        }
                      }
                    }
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
  return {
    company_list: state.companyReducer.company_list,
    fee_list: state.feeReducer.fee_list,
    invoice_sum: state.invoiceReducer.invoice_sum
  };
};

const mapDispatchToProps = { findCompanyList, findInvoiceSum, findInvoiceSumAndReturn };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
