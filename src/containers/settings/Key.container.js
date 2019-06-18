import React, { Component } from "react";
import { IconButton, ListView } from "../../components/shared";
import KeyModal from "./Key.component/Key.modal";
class Key extends Component {
  state = {
    showKeyValue: ""
  };
  handleAddKeyValue = () => {
    this.setState(states => ({ showKeyValue: !states.showKeyValue }));
  };
  render() {
    const { showKeyValue } = this.state;
    return (
      <main>
        {showKeyValue && <KeyModal />}
        <section>
          <div className="mb-3 d-flex justify-content-between">
            <h4>Key Value Settings</h4>
            <IconButton
              icon={`${process.env.PUBLIC_URL}/img/home.svg`}
              title="申请归集"
              className="hm-bg-green text-white"
              onClick={this.handleAddKeyValue}
            />
          </div>
          <ListView
            totalCount={30}
            title="收款记录列表"
            fieldNames={["Created On", "Last Updated", "Company ID", "Company Name", "Status", "Detail"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {/* {punch_list_in_puri.record_list.map((punch, index) => (
              <CompanyListItem parentProps={punch} key={index} onClick={this.handlePunchItemClick} />
            ))} */}
          </ListView>
        </section>
      </main>
    );
  }
}
export default Key;
