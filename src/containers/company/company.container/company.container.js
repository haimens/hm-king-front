import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CompanyAddingModal from "./company.components/companyAdding.modal";
import CompanyListItem from "./company.components/companyListItem.component";
import { ListView, Header, ListHeader } from "../../../components/shared";
import { findCompanyList, createACompany } from "../../../actions/company.action";
import { findFeeList } from "../../../actions/fee.action";

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

  handleCompanyItemClick = realm_token => {
    this.props.history.push(`/company/detail/${realm_token}`);
  };

  handlePageChange = start => {
    this.props.findCompanyList(start);
  };
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
        <section className="container-fluid">
          <Header title="Company" />
          <ListHeader
            parentProps={{ title: "Company List", clickFunction: this.handleAddCompanyModal, clickTitle: "Company" }}
          />
          <ListView
            totalCount={company_list.count}
            title="Company List"
            fieldNames={["Company Logo", "Created On", "Company Name", "Status", "Detail"]}
            hideHeader={true}
            onPageChange={this.handlePageChange}
          >
            {company_list.record_list.map((company, index) => (
              <CompanyListItem parentProps={company} key={index} onClick={this.handleCompanyItemClick} />
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

const mapDispatchToProps = { findCompanyList, findFeeList, createACompany };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Company));

{
  /* <button className="btn btn-sm hm-bg-green text-white" onClick={this.handleAddCompanyModal}>
<span>
  <i className="fas fa-plus mr-2" />
</span>
Add Company
</button> */
}
