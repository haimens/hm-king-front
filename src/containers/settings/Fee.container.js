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
  handleDeleteFee = tribute_rate_token => {
    console.log(tribute_rate_token);
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
        <section className="container-fluid">
          <div className="mb-4">
            <div className="d-flex align-items-center mb-4 text-white">
              <img
                src={`${process.env.PUBLIC_URL}/img/icon_company.svg`}
                height={18}
                width={17}
                alt="company"
                className="hm-header-size mr-3"
              />
              <h4 className="hm-header-size mr-3">Settings</h4>
              <div className=" d-flex align-items-center ">
                <i className="fas fa-circle text-light-grey text-right mr-3" style={{ fontSize: "6px" }} />
                <h4 className="hm-header-size text-light-grey ">Fee Rate</h4>
              </div>
            </div>
          </div>

          <div className="rounded-top shadow-sm bg-white">
            <div className="d-flex justify-content-between p-3 shadow-sm" style={{ height: "65px" }}>
              <h6 className="d-block d-flex align-items-center hm-title-sub-size text-main-color font-weight-bold ml-3">
                Fee Rate
              </h6>
              <button
                className="text-white button-main-background btn shadow p-0 hm-text-12 mr-3"
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
            </div>
          </div>

          <ListView
            totalCount={30}
            title="Fee Rate"
            fieldNames={["Created On", "Fee Rate", "Delete"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {fee_list.record_list.map((fee, index) => (
              <FeeListItem parentProps={fee} key={index} handleDeleteAFee={this.handleDeleteFee} />
            ))}
          </ListView>
        </section>
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
