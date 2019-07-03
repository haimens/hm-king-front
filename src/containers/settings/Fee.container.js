import React, { Component } from "react";
import { IconButton, ListView } from "../../components/shared";
import FeeModal from "./Fee.component/Fee.modal";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { findFeeList, createFeeRate } from "../../actions/fee.action";
import FeeListItem from "./Fee.component/FeeList.item";
class Fee extends Component {
  state = {
    showFeeValue: ""
  };
  handleAddFeeValueModal = () => {
    this.setState(states => ({ showFeeValue: !states.showFeeValue }));
  };
  handlePageChange = start => {
    this.props.findFeeList({ start });
  };
  handleCreatingFee = rate => {
    this.props.createFeeRate(rate);
    this.handleAddFeeValueModal();
  };
  componentDidMount() {
    this.props.findFeeList();
  }
  render() {
    const { showFeeValue } = this.state;
    const { fee_list } = this.props;
    return (
      <main>
        {showFeeValue && <FeeModal handleCreatingFee={this.handleCreatingFee} onClose={this.handleAddFeeValueModal} />}
        <div className="container-fluid">
          <section className="mb-4">
            <div className="d-flex align-items-center mb-4 text-white">
              <img
                src={`${process.env.PUBLIC_URL}/img/icon_company.svg`}
                height={18}
                width={17}
                alt="company"
                className="hm-header-size mr-3"
              />
              <h4 className="hm-header-size">Fee Rate</h4>
            </div>
          </section>

          <div className="rounded-top shadow-sm bg-white">
            <section className="d-flex justify-content-between  p-3 shadow-sm" style={{ height: "65px" }}>
              <h6 className="d-block d-flex align-items-center hm-title-sub-size text-main-color font-weight-bold ml-3">
                Fee Rate
              </h6>
              <button
                className="text-white button-main-background btn shadow p-0 hm-text-12"
                onClick={this.handleAddFeeValueModal}
                style={{
                  height: "28px",
                  width: "98px"
                }}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fas fa-plus mr-2" />
                  <div>Fee Rate</div>
                </div>
              </button>
            </section>
          </div>

          <ListView
            totalCount={30}
            title="Fee Rate"
            fieldNames={["Created On", "Fee Rate", "Delete"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {fee_list.record_list.map((fee, index) => (
              <FeeListItem parentProps={fee} key={index} />
            ))}
          </ListView>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    fee_list: state.feeReducer.fee_list
  };
};

export default connect(
  mapStateToProps,
  { findFeeList, createFeeRate }
)(withRouter(Fee));
