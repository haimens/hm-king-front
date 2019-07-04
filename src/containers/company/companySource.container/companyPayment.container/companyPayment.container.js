import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CompanyPaymentDetail from "./companyPayment.component/companyPaymentDetail.component";
import { findCompanyDetail } from "../../../../actions/company.action";
import { Header, ListView, IconButton, ListHeader } from "../../../../components/shared";

class CompanyPayment extends Component {
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
    const { findCompanyDetail, match } = this.props;
    const { realm_token } = match.params;
    Promise.all([findCompanyDetail(realm_token)]);
  }
  handlePageChange = start => {
    this.props.findLordList({ start });
  };
  render() {
    const { company_detail, match } = this.props;
    const { realm_token } = match.params;
    return (
      <main>
        <section className="container-fluid">
          <div className="mb-4">
            <Header title="Company" subTitle={"Company Detail"} />
          </div>
          <div className="mb-4 ">
            <CompanyPaymentDetail company_detail={company_detail} />
          </div>
          <div className="mb-4">
            <ListHeader
              parentProps={{
                title: "Payment Resource List",
                clickFunction: this.handleAddCompanyAdminModal,
                clickTitle: "Payment Resource"
              }}
            />
            {/* <ListView
              totalCount={lord_list.count}
              title="Company Admin List"
              fieldNames={["Admin Name", "Call", "Email", "Username"]}
              hideHeader={true}
              onPageChange={this.handlePageChange}
            >
              {lord_list.record_list.map((lord, index) => (
                <CompanyAdminListItem parentProps={lord} key={index} />
              ))}
            </ListView> */}
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    company_detail: state.companyReducer.company_detail
  };
};
const mapDispatchToProps = { findCompanyDetail };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyPayment));
