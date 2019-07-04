import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CompanyListItem from "../company.container/company.components/companyListItem.component";
import CompanyDetailInfo from "./companyDetail.component/companyDetailInfo.component";
import CompanyCard from "./companyDetail.component/companyCard.component";
import CompanyAdminModal from "./companyDetail.component/companyAdmin.modal";
import CompanyInvoiceModal from "./companyDetail.component/companyInvoice.modal";

import CompanyAdminListItem from "./companyDetail.component/companyAdminList.item";
import CompanyInvoiceListItem from "./companyDetail.component/companyInvoiceList.item";

import { findCompanyDetail } from "../../../actions/company.action";
import { findLordList, createALord } from "../../../actions/lord.action";
import { findFeeList } from "../../../actions/fee.action";
import { Header, ListView, ListHeader } from "../../../components/shared";
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
  handleDetailButtonClicked = type => {
    const { history, match } = this.props;
    const { realm_token } = match.params;
    if (type === "payment") {
      history.push(`/company/detail/payment/${realm_token}`);
    }
    if (type === "message") {
      history.push(`/company/detail/message/${realm_token}`);
    }
  };
  async componentDidMount() {
    const { findCompanyDetail, findLordList, findFeeList, match } = this.props;
    const { realm_token } = match.params;
    Promise.all([findCompanyDetail(realm_token), findLordList(realm_token), findFeeList()]);
  }
  handlePageChange = start => {
    this.props.findLordList({ start });
  };
  render() {
    const { fee_list, company_detail, lord_list, createALord, match } = this.props;
    const { realm_token } = match.params;

    const { showCompanyAdminModal, showInvoiceModal } = this.state;
    return (
      <main>
        {showCompanyAdminModal && (
          <CompanyAdminModal
            realm_token={realm_token}
            createALord={createALord}
            onClose={this.handleAddCompanyAdminModal}
          />
        )}
        <section className="container-fluid">
          <div className="mb-4">
            <Header title="Company" subTitle={"Company Detail"} />
          </div>
          <div className="mb-4 ">
            <CompanyDetailInfo
              handleDetailButtonClicked={this.handleDetailButtonClicked}
              company_detail={company_detail}
            />
          </div>
          <div className="mb-4">
            <ListHeader
              parentProps={{
                title: "Company Admin List",
                clickFunction: this.handleAddCompanyAdminModal,
                clickTitle: "Company Admin"
              }}
            />
            <ListView
              totalCount={lord_list.count}
              title="Company Admin List"
              fieldNames={["Admin Name", "Call", "Email", "Username"]}
              hideHeader={true}
              onPageChange={this.handlePageChange}
            >
              {lord_list.record_list.map((lord, index) => (
                <CompanyAdminListItem parentProps={lord} key={index} />
              ))}
            </ListView>
          </div>
          <div className="mb-4">
            <ListHeader
              parentProps={{
                title: "Invoice List",
                clickFunction: this.handleAddInvoiceModal,
                clickTitle: "Invoice"
              }}
            />
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
          </div>
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
