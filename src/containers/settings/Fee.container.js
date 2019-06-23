import React, { Component } from "react";
import { IconButton, ListView } from "../../components/shared";
import FeeModal from "./Fee.component/Fee.modal";
import FeeListItem from "./Fee.component/FeeList.item";
class Fee extends Component {
  state = {
    showFeeValue: ""
  };
  handleAddFeeValue = () => {
    this.setState(states => ({ showFeeValue: !states.showFeeValue }));
  };
  handlePageChange = page => {
    console.log(page);
  };
  render() {
    const { showFeeValue } = this.state;
    return (
      <main>
        {showFeeValue && <FeeModal onClose={this.handleAddFeeValue} />}
        <section>
          <div className="mb-3 d-flex justify-content-between">
            <h4>Fee Rate Settings</h4>
            <IconButton
              icon={`${process.env.PUBLIC_URL}/img/home.svg`}
              title="Add Fee Rate"
              className="hm-bg-green text-white"
              onClick={this.handleAddFeeValue}
            />
          </div>
          <ListView
            totalCount={30}
            title="收款记录列表"
            fieldNames={["Created On", "Last Updated", "Fee Rate", "Delete"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {/* {punch_list_in_puri.record_list.map((punch, index) => (
              <FeeListItem  />
            ))} */}
          </ListView>
        </section>
      </main>
    );
  }
}
export default Fee;
