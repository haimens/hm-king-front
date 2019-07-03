import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CompanyAddingModal from "./company.components/companyAdding.modal";
import CompanyListItem from "./company.components/companyListItem.component";
import { ListView } from "../../../components/shared";
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

        <div className="container-fluid">
          <section className="mb-4">
            <div className="d-flex align-items-center mb-4 text-white">
              <img
                src={`${process.env.PUBLIC_URL}/img/icon_company.svg`}
                height={18}
                width={17}
                alt="company"
                className="hm-header-size mr-3"
              />
              <h4 className="hm-header-size">Company</h4>
            </div>
          </section>

          <div className="rounded-top shadow-sm bg-white">
            <section className="d-flex justify-content-between  p-3 shadow-sm" style={{ height: "65px" }}>
              <h6 className="d-block d-flex align-items-center hm-title-sub-size text-main-color font-weight-bold ml-3">
                Company List
              </h6>
              <button
                className="text-white p-0 button-main-background btn shadow hm-text-12 d-flex align-items-center justify-content-center "
                onClick={this.handleAddCompanyModal}
                style={{
                  height: "28px",
                  width: "98px"
                }}
              >
                <i className="fas fa-plus mr-2" />
                <div>Company</div>
              </button>
            </section>
          </div>
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
        </div>
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
