import React, { Component } from "react";
import { ListView, Header, ListHeader } from "../../components/shared";
import FeeModal from "./fee.component/fee.modal";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { findFeeList, createAFeeRate, deleteAFeeRate } from "../../actions/fee.action";
import FeeListItem from "./fee.component/feeList.item";

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
    this.props.createAFeeRate(rate);
    this.handleAddFeeValueModal();
  };
  handleDeleteFee = tribute_rate_token => {
    this.props.deleteAFeeRate(tribute_rate_token);
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
          <Header title={"Settings"} subTitle="Fee Rate" />
          <ListHeader
            parentProps={{ title: "Fee Rate", clickFunction: this.handleAddFeeValueModal, clickTitle: "Fee Rate" }}
          />
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
  { findFeeList, createAFeeRate, deleteAFeeRate }
)(withRouter(Fee));
