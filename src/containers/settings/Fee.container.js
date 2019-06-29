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
  handlePageChange = page => {
    console.log(page);
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
        <section>
          <div className="mb-3 d-flex justify-content-between">
            <h4>Fee Rate Settings</h4>
            <button className="btn btn-sm hm-bg-green text-white" onClick={this.handleAddFeeValueModal}>
              <span>
                <i className="fas fa-plus mr-2" />
              </span>
              Add Company
            </button>
          </div>
          <ListView
            totalCount={30}
            title="收款记录列表"
            fieldNames={["Created On", "Last Updated", "Fee Rate", "Delete"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {fee_list.record_list.map((fee, index) => (
              <FeeListItem parentProps={fee} key={index} />
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
