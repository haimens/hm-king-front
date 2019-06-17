import React, { Component } from "react";
import CompanyListItem from "./company.components/CompanyListItem.component";
import ListView from "../../components/shared/ListView";
import IconButton from "../../components/shared/IconButton";
import CompanyDetailInfo from "./companyDetail.component/CompanyDetailInfo.component";
import CompanyCard from "./companyDetail.component/CompanyCard.component";
class CompanyDetail extends Component {
  handleAddCompanyModal = () => {
    this.setState(states => ({ showAddCompanyModal: !states.showAddCompanyModal }));
  };
  render() {
    return (
      <main>
        <CompanyDetailInfo />

        <section>
          <div className="my-3 d-flex justify-content-between">
            <h4>Company Admin List</h4>
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

        <section>
          <div className="my-3 d-flex justify-content-between">
            <h4>Invoice List</h4>
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

        <CompanyCard
          parentProps={{
            title: "Payment Resource",
            sub_title: "Application Id:",
            sub_title_2: "Access Token",
            sub_title_3: "Location Id"
          }}
        />

        <CompanyCard
          parentProps={{
            title: "Message Resource",
            sub_title: "Account Id:",
            sub_title_2: "From Number",
            sub_title_3: "Auth Token"
          }}
        />

        <CompanyCard
          parentProps={{
            title: "Payment Resource",
            sub_title: "API Key:",
            sub_title_2: "From Email"
          }}
        />
      </main>
    );
  }
}
export default CompanyDetail;
