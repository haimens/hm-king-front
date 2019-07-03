import React, { Component } from "react";
import { Header, ListHeader, ListView } from "../../components/shared";
import KeyModal from "./general.component/general.modal";
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
        <section className="container-fluid">
          <Header title={"Settings"} subTitle="General Setting" />
          <ListHeader
            parentProps={{
              title: "General Setting",
              clickFunction: this.handleAddFeeValueModal,
              clickTitle: "Key Value"
            }}
          />

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
