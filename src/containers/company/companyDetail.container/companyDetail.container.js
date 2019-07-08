import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  CompanyDetailInfo,
  CompanyFeeListItem,
  CompanyAdminModal,
  CompanyInvoiceModal,
  CompanyBasicInfoModal,
  CompanyAdminListItem,
  CompanyInvoiceListItem,
  CompanyFeeModal,
  CompanyEditALordModal
} from "./companyDetail.component";

import { Header, ListView, ListHeader } from "../../../components/shared";

import { findCompanyDetail, updateABasicInfo, setPrimaryForResources } from "../../../actions/company.action";

import { findFeeListInCompany, createAFeeInCompany } from "../../../actions/fee.action";

import { findLordListInCompany, createALordInCompany, updateALordInCompany } from "../../../actions/lord.action";

import { findFeeList } from "../../../actions/fee.action";

import {
  findInvoiceSumInCompany,
  findInvoiceListInCompany,
  createAInvoiceInCompany
} from "../../../actions/invoice.action";
import { createNewAddressInstance } from "../../../actions/address.action";

class CompanyDetail extends Component {
  state = {
    showCompanyAdminModal: false,
    showBasicInfoModal: false,
    showAddFeeInCompany: false,
    showAddInvoiceInCompany: false,
    showEditLordInfoModal: false,
    currLordInfo: ""
  };
  handleAddCompanyAdminModal = () => {
    this.setState(states => ({ showCompanyAdminModal: !states.showCompanyAdminModal }));
  };
  handleShowBasicInfo = () => {
    this.setState(states => ({ showBasicInfoModal: !states.showBasicInfoModal }));
  };
  handleAddFeeInCompanyModal = () => {
    this.setState(states => ({ showAddFeeInCompany: !states.showAddFeeInCompany }));
  };
  handleAddInvoiceModal = () => {
    this.setState(states => ({ showAddInvoiceInCompany: !states.showAddInvoiceInCompany }));
  };
  handleShowEditLordInfoModal = props => {
    this.setState(states => ({ showEditLordInfoModal: !states.showEditLordInfoModal, currLordInfo: props }));
  };
  handleDetailButtonClicked = type => {
    const { history, match } = this.props;
    const { realm_token } = match.params;
    if (type === "basic") {
      this.handleShowBasicInfo();
    }
    if (type === "payment") {
      history.push(`/company/detail/payment/${realm_token}`);
    }
    if (type === "message") {
      history.push(`/company/detail/message/${realm_token}`);
    }
    if (type === "email") {
      history.push(`/company/detail/email/${realm_token}`);
    }
  };
  async componentDidMount() {
    const {
      findCompanyDetail,
      findLordListInCompany,
      findFeeList,
      findFeeListInCompany,
      findInvoiceSumInCompany,
      findInvoiceListInCompany,
      match
    } = this.props;
    const { realm_token } = match.params;
    Promise.all([
      findCompanyDetail(realm_token),
      findLordListInCompany(realm_token),
      findFeeList(),
      findFeeListInCompany(realm_token),
      findInvoiceSumInCompany(realm_token),
      findInvoiceListInCompany(realm_token)
    ]);
  }
  handlePageChange = type => start => {
    const { findLordListInCompany, findFeeListInCompany, findInvoiceListInCompany } = this.props;
    const { realm_token } = this.props.match.params;
    if (type === "invoice") {
      findInvoiceListInCompany(realm_token, { start });
    }
    if (type === "fee") {
      findFeeListInCompany(realm_token, { start });
    }
    if (type === "lord") {
      findLordListInCompany(realm_token, { start });
    }
  };
  render() {
    const {
      match,
      history,

      company_detail,
      createNewAddressInstance,
      updateABasicInfo,

      lord_list,
      createALordInCompany,
      updateALordInCompany,

      fee_list,
      createAFeeInCompany,
      fee_list_in_company,

      setPrimaryForResources,

      createAInvoiceInCompany,
      invoice_list_in_company,
      invoice_sum_in_company
    } = this.props;
    const { realm_token } = match.params;

    const {
      showCompanyAdminModal,
      showBasicInfoModal,
      showAddFeeInCompany,
      showAddInvoiceInCompany,
      showEditLordInfoModal,
      currLordInfo
    } = this.state;
    return (
      <main>
        {showCompanyAdminModal && (
          <CompanyAdminModal
            realm_token={realm_token}
            createALordInCompany={createALordInCompany}
            onClose={this.handleAddCompanyAdminModal}
          />
        )}
        {showBasicInfoModal && (
          <CompanyBasicInfoModal
            company_detail={company_detail}
            realm_token={realm_token}
            updateABasicInfo={updateABasicInfo}
            fee_list={fee_list}
            onClose={this.handleShowBasicInfo}
            createNewAddressInstance={createNewAddressInstance}
            setPrimaryForResources={setPrimaryForResources}
          />
        )}
        {showAddInvoiceInCompany && (
          <CompanyInvoiceModal
            createAInvoiceInCompany={createAInvoiceInCompany}
            realm_token={realm_token}
            sum={invoice_sum_in_company.sum}
            name={company_detail.basic_info.company_name}
            onClose={this.handleAddInvoiceModal}
          />
        )}
        {showAddFeeInCompany && (
          <CompanyFeeModal
            realm_token={realm_token}
            createAFeeInCompany={createAFeeInCompany}
            onClose={this.handleAddFeeInCompanyModal}
          />
        )}
        {showEditLordInfoModal && (
          <CompanyEditALordModal
            realm_token={realm_token}
            updateALordInCompany={updateALordInCompany}
            handleEditLordInfo={this.handleShowEditLordInfoModal}
            editInfo={currLordInfo}
            onClose={this.handleShowEditLordInfoModal}
          />
        )}
        <section className="container-fluid">
          <div className="mb-4">
            <Header
              title="Company"
              subTitle={"Company Detail"}
              tabicon={"tabicon_company.svg"}
              history={history}
              toLocation={"/company"}
            />
          </div>
          <div className="mb-4 ">
            <CompanyDetailInfo
              handleDetailButtonClicked={this.handleDetailButtonClicked}
              sum={invoice_sum_in_company.sum}
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
              buttonWidth={"136px"}
            />
            <ListView
              totalCount={60}
              title="Company Admin List"
              fieldNames={["Company Logo", "Admin Name", "Call", "Email", "Username", "Status", "Edit"]}
              hideHeader={true}
              onPageChange={this.handlePageChange("lord")}
            >
              {lord_list.record_list.map((lord, index) => (
                <CompanyAdminListItem
                  parentProps={lord}
                  key={index}
                  handleEditLordInfo={this.handleShowEditLordInfoModal}
                />
              ))}
            </ListView>
          </div>
          <div className="mb-4">
            <ListHeader
              parentProps={{
                title: "Fee List",
                clickFunction: this.handleAddFeeInCompanyModal,
                clickTitle: "Fee"
              }}
              buttonWidth={"72px"}
            />
            <ListView
              totalCount={fee_list_in_company.count}
              title="Fee List"
              fieldNames={["Created On", "Fee Amount", "Note"]}
              hideHeader={true}
              onPageChange={this.handlePageChange("fee")}
            >
              {fee_list_in_company.record_list.map((fee, index) => (
                <CompanyFeeListItem parentProps={fee} key={index} onClick={this.handlePunchItemClick} />
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
              buttonWidth={"88px"}
            />
            <ListView
              totalCount={invoice_list_in_company.count}
              title="Invoice List"
              fieldNames={["Created On", "Invoice Amount", "Receipt Number", "Status"]}
              hideHeader={true}
              onPageChange={this.handlePageChange("invoice")}
            >
              {invoice_list_in_company.record_list.map((invoice, index) => (
                <CompanyInvoiceListItem parentProps={invoice} key={index} />
              ))}
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
    fee_list_in_company: state.feeReducer.fee_list_in_company,
    lord_list: state.lordReducer.lord_list,
    invoice_list_in_company: state.invoiceReducer.invoice_list_in_company,
    invoice_sum_in_company: state.invoiceReducer.invoice_sum_in_company
  };
};
const mapDispatchToProps = {
  findCompanyDetail,
  updateABasicInfo,
  createNewAddressInstance,

  findLordListInCompany,
  createALordInCompany,
  updateALordInCompany,

  findFeeList,
  findFeeListInCompany,
  createAFeeInCompany,

  findInvoiceSumInCompany,
  findInvoiceListInCompany,
  createAInvoiceInCompany,

  setPrimaryForResources
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyDetail));
