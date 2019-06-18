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
        {showKeyValue && <KeyModal onClose={this.handleAddKeyValue} />}
        <section>
          <div className="mb-3 d-flex justify-content-between">
            <h4>Key Value Settings</h4>
            <IconButton
              icon={`${process.env.PUBLIC_URL}/img/home.svg`}
              title="Add Key Value"
              className="hm-bg-green text-white"
              onClick={this.handleAddKeyValue}
            />
          </div>
          <ListView
            totalCount={30}
            fieldNames={["Created On", "Last Updated", "ID Token", "Key", "Value", "Delete"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {/* {punch_list_in_puri.record_list.map((punch, index) => (
              <KeyListItem parentProps={punch} key={index} onClick={this.handlePunchItemClick} />
            ))} */}
          </ListView>
        </section>
      </main>
    );
  }
}
export default Key;
