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
  handlePageChange = page => {
    console.log(page);
  };
  render() {
    const { showKeyValue } = this.state;
    return (
      <main>
        {showKeyValue && <KeyModal onClose={this.handleAddKeyValue} />}
        <section>
          <div className="mb-3 d-flex justify-content-between">
            <h4>Key Setting</h4>
            <button className="btn btn-sm hm-bg-green text-white" onClick={this.handleAddKeyValue}>
              <span>
                <i className="fas fa-plus mr-2" />
              </span>
              Add Key Value
            </button>
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
