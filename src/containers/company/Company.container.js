import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { findCompanyList } from "../../actions/company.action";
import CompanyListItem from "./company.components/CompanyListItem.component";
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
    const { company_list } = this.props;

    return (
      <main>
        {this.state.showAddCompanyModal && <CompanyAddingModal onClose={this.handleAddCompanyModal} />}
        <section>
          <div className="mb-3 d-flex justify-content-between">
            <h4>Company List</h4>
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
    company_list: state.companyReducer.company_list
  };
};

export default connect(
  mapStateToProps,
  { findCompanyList }
)(withRouter(Company));
