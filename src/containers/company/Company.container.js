import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { findCompanyList, createACompany } from "../../actions/company.action";
import CompanyListItem from "./company.components/CompanyListItem.component";
import { findFeeList } from "../../actions/fee.action";
import ListView from "../../components/shared/ListView";
import IconButton from "../../components/shared/IconButton";
import CompanyAddingModal from "./company.components/CompanyAdding.modal";

class Company extends Component {
  state = {
    showAddCompanyModal: false
  };
  handleAddCompanyModal = () => {
    this.setState(states => ({ showAddCompanyModal: !states.showAddCompanyModal }));
  };
  componentDidMount() {
    this.props.findCompanyList();
  }
  render() {
    const { company_list, fee_list, findFeeList, createACompany } = this.props;

    return (
      <main>
        {this.state.showAddCompanyModal && (
          <CompanyAddingModal
            parentProps={{ fee_list, findFeeList, createACompany }}
            onClose={this.handleAddCompanyModal}
          />
        )}
        <section>
          <div className="mb-4 d-flex justify-content-between">
            <h3 className="font-weight-bold">Company List</h3>
            <button className="btn btn-sm hm-bg-green text-white" onClick={this.handleAddCompanyModal}>
              <span>
                <i className="fas fa-plus mr-2" />
              </span>
              Add Company
            </button>
          </div>
          <ListView
            totalCount={30}
            title="收款记录列表"
            fieldNames={["Created On", "Last Updated", "Company ID", "Company Name", "Status", "Detail"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {company_list.record_list.map((company, index) => (
              <CompanyListItem parentProps={company} key={index} onClick={this.handlePunchItemClick} />
            ))}
          </ListView>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    company_list: state.companyReducer.company_list,
    fee_list: state.feeReducer.fee_list
  };
};

export default connect(
  mapStateToProps,
  { findCompanyList, findFeeList, createACompany }
)(withRouter(Company));
