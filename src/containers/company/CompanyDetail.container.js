import React, { Component } from "react";
import CompanyListItem from "./company.components/CompanyListItem.component";
import ListView from "../../components/shared/ListView";
import IconButton from "../../components/shared/IconButton";
import CompanyDetailInfo from "./companyDetail.component/CompanyDetailInfo.component";
import CompanyCard from "./companyDetail.component/CompanyCard.component";
import CompanyAdminModal from "./companyDetail.component/CompanyAdmin.modal";
import CompanyInvoiceModal from "./companyDetail.component/CompanyInvoice.modal";
class CompanyDetail extends Component {
  state = {
    showCompanyAdminModal: false,
    showInvoiceModal: false
  };
  handleAddCompanyAdminModal = () => {
    this.setState(states => ({ showCompanyAdminModal: !states.showCompanyAdminModal }));
  };
  handleAddInvoiceModal = () => {
    this.setState(states => ({ showInvoiceModal: !states.showInvoiceModal }));
  };
  render() {
    const { showCompanyAdminModal, showInvoiceModal } = this.state;
    return (
      <main>
        {showCompanyAdminModal && <CompanyAdminModal />}
        {showInvoiceModal && <CompanyInvoiceModal />}
        <CompanyDetailInfo />
        <section>
          <div className="my-3 d-flex ">
            <h4>Company Admin List</h4>
            <button className="ml-3" onClick={this.handleAddCompanyAdminModal}>
              Hi
            </button>
          </div>
          <ListView
            totalCount={30}
            title="收款记录列表"
            fieldNames={["Created On", "Admin Name", "Call", "Email", "Username", "Profile", "Status"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {/* {punch_list_in_puri.record_list.map((punch, index) => (
              <CompanyListItem parentProps={punch} key={index} onClick={this.handlePunchItemClick} />
            ))} */}
          </ListView>
        </section>

        <section>
          <div className="my-3 d-flex ">
            <h4>Invoice List</h4>
            <button className="ml-3" onClick={this.handleAddInvoiceModal}>
              Hi
            </button>
          </div>
          <ListView
            totalCount={30}
            title="收款记录列表"
            fieldNames={["Created On", "Last Updated", "Invoice Token", "Company Name", "Amount", "Receipt", "Status"]}
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
