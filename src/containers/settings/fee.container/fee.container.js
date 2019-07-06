import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import alertify from "alertifyjs";
import FeeModal from "./fee.component/fee.modal";
import FeeListItem from "./fee.component/feeList.item";
import { ListView, Header, ListHeader } from "../../../components/shared";
import { findFeeList, createAFeeRate, deleteAFeeRate } from "../../../actions/fee.action";

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
  handleDeleteFee = (tribute_rate_token, rate) => {
    alertify
      .confirm(
        "Are you sure to delete this fee rate",
        `Fee Rate: ${rate}`,
        () => {
          this.props.deleteAFeeRate(tribute_rate_token);
          alertify.success("Cancel");
        },
        function() {
          alertify.error("Deleted");
        }
      )
      .set({ labels: { ok: "Delete", cancel: "Cancel" } });
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
            <Header title={"Settings"} subTitle="Fee Rate" tabicon={"tabicon_settings.svg"} />
          </div>
          <div className="mb-4">
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
          </div>
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
