import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CompanyListItem from "../company.container/company.components/companyListItem.component";
import CompanyDetailInfo from "./companyDetail.component/companyDetailInfo.component";
import CompanyCard from "./companyDetail.component/companyCard.component";
import CompanyAdminModal from "./companyDetail.component/companyAdmin.modal";
import CompanyInvoiceModal from "./companyDetail.component/companyInvoice.modal";
import CompanyBasicInfoModal from "./companyDetail.component/companyBasicInfo.modal";
import CompanyAdminListItem from "./companyDetail.component/companyAdminList.item";
import CompanyInvoiceListItem from "./companyDetail.component/companyInvoiceList.item";

import { findCompanyDetail, updateABasicInfo, setPrimaryForResources } from "../../../actions/company.action";
import { findLordList, createALord } from "../../../actions/lord.action";
import { findFeeList } from "../../../actions/fee.action";
import { Header, ListView, ListHeader } from "../../../components/shared";
import { createNewAddressInstance } from "../../../actions/address.action";
class CompanyDetail extends Component {
  state = {
    showCompanyAdminModal: false,
    showBasicInfoModal: false
  };
  handleAddCompanyAdminModal = () => {
    this.setState(states => ({ showCompanyAdminModal: !states.showCompanyAdminModal }));
  };
  handleShowBasicInfo = () => {
    this.setState(states => ({ showBasicInfoModal: !states.showBasicInfoModal }));
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
    const { findCompanyDetail, findLordList, findFeeList, match } = this.props;
    const { realm_token } = match.params;
    Promise.all([findCompanyDetail(realm_token), findLordList(realm_token), findFeeList()]);
  }
  handlePageChange = start => {
    this.props.findLordList({ start });
  };
  render() {
    const {
      company_detail,
      lord_list,
      createALord,
      match,
      updateABasicInfo,
      fee_list,
      createNewAddressInstance,
      setPrimaryForResources
    } = this.props;
    const { realm_token } = match.params;

    const { showCompanyAdminModal, showBasicInfoModal } = this.state;
    return (
      <main>
        {showCompanyAdminModal && (
          <CompanyAdminModal
            realm_token={realm_token}
            createALord={createALord}
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
const mapDispatchToProps = {
  findCompanyDetail,
  findLordList,
  findFeeList,
  createALord,
  updateABasicInfo,
  createNewAddressInstance,
  setPrimaryForResources
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyDetail));
