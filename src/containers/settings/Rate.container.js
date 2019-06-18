import React, { Component } from "react";
import { IconButton, ListView } from "../../components/shared";
import RateModal from "./Rate.component/Rate.modal";
import RateItem from "./Rate.component/Rate.item";
class Rate extends Component {
  state = {
    showRateValue: ""
  };
  handleAddRateValue = () => {
    this.setState(states => ({ showRateValue: !states.showRateValue }));
  };
  handlePageChange = page => {
    console.log(page);
  };
  render() {
    const { showRateValue } = this.state;
    return (
      <main>
        {showRateValue && <RateModal onClose={this.handleAddRateValue} />}
        <section>
          <div className="mb-3 d-flex justify-content-between">
            <h4>Fee Rate Settings</h4>
            <IconButton
              icon={`${process.env.PUBLIC_URL}/img/home.svg`}
              title="Add Fee Rate"
              className="hm-bg-green text-white"
              onClick={this.handleAddRateValue}
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
              <RateItem  />
            ))} */}
          </ListView>
        </section>
      </main>
    );
  }
}
export default Rate;
