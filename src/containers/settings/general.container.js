import React, { Component } from "react";
import { IconButton, ListView } from "../../components/shared";
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
                <h4 className="hm-header-size text-light-grey ">General Setting</h4>
              </div>
            </div>
          </div>

          <div className="rounded-top shadow-sm bg-white">
            <div className="d-flex justify-content-between p-3 shadow-sm" style={{ height: "65px" }}>
              <h6 className="d-block d-flex align-items-center hm-title-sub-size text-main-color font-weight-bold ml-3">
                General Setting
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
                  <div>Key Value</div>
                </div>
              </button>
            </div>
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
