import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CompanyListItem from "../company.container/company.components/companyListItem.component";
import ListView from "../../../components/shared/ListView";
import IconButton from "../../../components/shared/IconButton";
import CompanyDetailInfo from "./companyDetail.component/companyDetailInfo.component";
import CompanyCard from "./companyDetail.component/companyCard.component";
import CompanyAdminModal from "./companyDetail.component/companyAdmin.modal";
import CompanyInvoiceModal from "./companyDetail.component/companyInvoice.modal";

import CompanyAdminListItem from "./companyDetail.component/companyAdminList.item";
import CompanyInvoiceListItem from "./companyDetail.component/companyInvoiceList.item";

import { findCompanyDetail } from "../../../actions/company.action";
import { findLordList, createALord } from "../../../actions/lord.action";
import { findFeeList } from "../../../actions/fee.action";
import { Header } from "../../../components/shared";
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
  async componentDidMount() {
    const { findCompanyDetail, findLordList, findFeeList, match } = this.props;
    const { realm_token } = match.params;
    Promise.all([findCompanyDetail(realm_token), findLordList(realm_token), findFeeList()]);
  }
  handlePageChange = start => {
    this.props.findLordList(start);
  };
  render() {
    const { fee_list, company_detail, lord_list, createALord, match } = this.props;
    const { realm_token } = match.params;

    const { showCompanyAdminModal, showInvoiceModal } = this.state;
    return (
      <main>
        <section className="container-fluid">
          <Header title="Company" subTitle={"Company Detail"} />
          <CompanyDetailInfo parentProps={{ company_detail, fee_list }} />
          <ListView
            totalCount={lord_list.count}
            title="Company Admin List"
            fieldNames={["Created On", "Admin Name", "Call", "Email", "Username"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {lord_list.record_list.map((lord, index) => (
              <CompanyAdminListItem parentProps={lord} key={index} />
            ))}
          </ListView>

          <section>
            <div className="my-3 d-flex ">
              <h4>Invoice List</h4>
              <button className="ml-3" onClick={this.handleAddInvoiceModal}>
                Hi
              </button>
            </div>
            <ListView
              totalCount={30}
              title="Invoice List"
              fieldNames={[
                "Created On",
                "Last Updated",
                "Invoice Token",
                "Company Name",
                "Amount",
                "Receipt",
                "Status"
              ]}
              hideHeader={true}
              onPageChange={this.handlePageChange}
            >
              {/* {punch_list_in_puri.record_list.map((punch, index) => (
              <CompanyInvoiceListItem parentProps={punch} key={index} onClick={this.handlePunchItemClick} />
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
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    company_detail: state.companyReducer.company_detail,
    fee_list: state.feeReducer.fee_list,
    lord_list: state.lordReducer.lord_list
  };
};
const mapDispatchToProps = { findCompanyDetail, findLordList, findFeeList, createALord };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyDetail));
