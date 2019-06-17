import React, { Component } from "react";
import ListView from "../../components/shared/ListView";
import CompanyListItem from "./company.components/CompanyListItem.component";

class Company extends Component {
  render() {
    return (
      <div>
        {/* Punch Record List */}
        <section>
          <div className="col-12 bg-white p-3 rounded-top shadow-sm">
            <div className="d-flex flex-row justify-content-between align-items-center ">
              <div>收款记录</div>
            </div>
          </div>
          <ListView
            totalCount={30}
            title="收款记录列表"
            fieldNames={["Created On", "Last Updated On", "Company ID", "Company Name", "Status", "Detail"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {/* {punch_list_in_puri.record_list.map((punch, index) => (
              <CompanyListItem parentProps={punch} key={index} onClick={this.handlePunchItemClick} />
            ))} */}
          </ListView>
        </section>
      </div>
    );
  }
}
export default Company;
