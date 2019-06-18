import React, { Component } from "react";
import { IconButton, ListView } from "../../components/shared";

class Rate extends Component {
  render() {
    return (
      <main>
        <section>
          <div className="mb-3 d-flex justify-content-between">
            <h4>Fee Rate Settings</h4>
            <IconButton
              icon={`${process.env.PUBLIC_URL}/img/home.svg`}
              title="申请归集"
              className="hm-bg-green text-white"
              onClick={this.handleAddCompanyModal}
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
export default Rate;
